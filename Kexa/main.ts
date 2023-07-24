import env from "dotenv";
import { collectAzureData } from "./services/azureGathering.service";
import { Logger } from "tslog";
import { ProviderResource } from "./models/providerResource.models";
import { checkRules, gatheringRules } from "./services/analyse.service";
import { alertGlobal } from "./services/alerte.service";
import { collectGithubData } from "./services/githubGathering.service";
import { AsciiArtText, talkAboutOtherProject} from "./services/display.service";
import { getEnvVar } from "./services/manageVarEnvironnement.service";
import { collectKubernetes } from "./services/KubernetesGathering.service";
import { log } from "console";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
env.config();                                                                    // reading environnement vars


export async function main() {
    let logger = new Logger({ minLevel: Number(process.env.DEBUG_MODE)??4, type: "pretty", name: "globalLogger" });
    AsciiArtText("Kexa");
    logger.info("___________________________________________________________________________________________________"); 
    logger.info("___________________________________-= running Kexa scan =-_________________________________________");
    logger.info("___________________________________________________________________________________________________"); 
    
    let settings = await gatheringRules(await getEnvVar("RULESDIRECTORY")??"./Kexa/rules");
    if(settings.length != 0){
        const [azureData, githubData, kubernetesData] = await Promise.all([
            collectAzureData(),
            collectGithubData(),
            collectKubernetes()
        ]);
        
        let resources = {
            "azure": azureData??null,
            "gcp": null,
            "aws": null,
            "kubernetes": kubernetesData,
            "git": githubData
        } as ProviderResource;
        // Analyse rules
        settings.forEach(setting => {
            let result = checkRules(setting.rules, resources, setting.alert);
            if(setting.alert.global.enabled){
                alertGlobal(result, setting.alert.global);
            }
        });
    }else{
        logger.error("No correct rules found, please check the rules directory or the rules files.");
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    logger.info("___________________________________________________________________________________________________"); 
    logger.info("_______________________________________-= End Kexa scan =-_________________________________________");
    logger.info("___________________________________________________________________________________________________");
    talkAboutOtherProject();
    //logger.debug(await getEnvVar("test"));
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
main();