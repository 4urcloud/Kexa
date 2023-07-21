<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

# <h3 align="center">Kexa</h3>

  <p align="center">
    Generic alert tools to ensure the quality of your infrastructure. Avoid wasting money on useless infrastructure, avoidable security breaches and service malfunctions.
    <br />
    <a href="https://github.com/4urcloud/Kexa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/4urcloud/Kexa">View Demo</a>
    ·
    <a href="https://github.com/4urcloud/Kexa/issues">Report Bug</a>
    ·
    <a href="https://github.com/4urcloud/Kexa/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The Kexa tool is a powerful way to monitor and evaluate the behaviour of your cloud environment, Kubernetes clusters and GitHub repositories. Using a series of YAML files, you can configure specific rules to check specific elements and properties. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [![NodeJs][NodeJs.com]][NodeJs-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

#### Clone the repo
   ```sh
   git clone https://github.com/4urcloud/Kexa.git
   ```
#### Install NPM packages
   ```sh
   npm install
   ```
#### Configure your environnement :
  - Minumum Environnement variables you need : 
    ```
      RULESDIRECTORY=./Kexa/rules
    ```
  - Add the following variables for each provider you want to test:
    - Azure:
      ```
        SUBSCRIPTIONID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
      ```
    - GitHub:
      ```
        GITHUBTOKEN=github_pat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      ```
    - Kubernetes:
      ```
        KUBECONFIG="./Path/to/my/config.yml"
      ```
  - add the following variables for each type of notification you have use in your rules:
    - email:
      ```
        EMAILPORT=587
        EMAILHOST=smtp.sendgrid.net
        EMAILUSER=didier
        EMAILPWD=XXXXXXXXXXXXXXX
        EMAILFROM='"Kexa" <noreply@4urcloud.eu>'
      ```
    - sms with twilio:
      ```
        SMSFROM='+00000000000'
        SMSACCOUNTSID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        SMSAUTHTOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      ```
    - You can optionally use a key manager:
      - Azure:
        To refer to your Key Vault add this following environnement variable :
        ```
          AZUREKEYVAULTNAME=MyKeyVault
        ```
        To authenticate you can use one of this combination :
          - ```
            AZURE_CLIENT_ID	ID of an Azure AD application
            AZURE_TENANT_ID	ID of the application's Azure AD tenant
            AZURE_CLIENT_SECRET	one of the application's client secrets
            ```

        - ```
            AZURE_CLIENT_ID	ID of an Azure AD application
            AZURE_TENANT_ID	ID of the application's Azure AD tenant
            AZURE_CLIENT_CERTIFICATE_PATH	path to a PEM-encoded certificate file including private key
            AZURE_CLIENT_CERTIFICATE_PASSWORD	password of the certificate file, if any
          ```

        - ```
          AZURE_CLIENT_ID	ID of an Azure AD application
          AZURE_TENANT_ID	ID of the application's Azure AD tenant
          AZURE_USERNAME	a username (usually an email address)
          AZURE_PASSWORD	that user's password
          ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Kexa offers significant benefits in a number of areas, contributing to the efficiency and reliability of your environment. Here are the main areas where the tool adds value :

### Utility

1. **Cost savings**

By automating the monitoring of your infrastructure's status and behaviour, our tool enables you to make significant savings. By detecting rule violations quickly, you can avoid the additional costs associated with prolonged problems and prevent costly malfunctions. For example, the tool will alert you to unallocated disks or ips.

example of rules for alerting in the event of an orphan disk:

```
- name: "azure-disk-orphan"
  description : "this rules is to check if disk is orphan"
  applied: true
  level: 1 #warn
  cloudProvider: azure
  objectName : disk
  conditions:
    - property : diskState
      condition : DIFFERENT
      value : Unattached
```


2. **Safety guarantee**

The security of your infrastructure is paramount, and our tool enables you to ensure constant and rigorous monitoring. By defining specific security rules, you can constantly check that good practice is being followed and that your infrastructure is protected against potential threats. The tool alerts you immediately in the event of non-compliance, enabling you to take corrective action quickly and maintain a high level of security.

exemple of rule to verify:

```
- name: azure-disk not public or encrypted
  description : "this rules is to check if disk is either not public or encrypted by default"
  applied: true
  level: 2
  cloudProvider: azure
  objectName : disk
  conditions:
    - operator : OR
      rules:
        - property : networkAccessPolicy
          condition : DIFFERENT
          value : AllowAll
        - property : encryption.type
          condition : EQUAL
          value : EncryptionAtRestWithPlatformKey
```

3. **Standardisation**

Using our tool, you can standardise the behaviour and status of your infrastructure. Pre-defined or customised rules help you to implement consistent operating standards. This makes it easier to manage your entire environment and helps you maintain a stable, predictable infrastructure. By standardising configurations and behaviour, you reduce the risk of human error and unforeseen malfunctions.

exemple of rule to normalise names among tags:
```
  - name: check-tags-on-aks-cluster
    description : "this rules is to check if aks cluster are conform to the tag norms"
    applied: true
    level: 2
    cloudProvider: azure
    objectName : aks
    conditions:
      - property : tags.environment
        condition : REGEX
        value : ^(DEV|NPR|PROD)$
      - property : tags.author
        condition : DIFFERENT
        value : NULL
      - property : tags.billing
        condition : REGEX
        value : ^(VADOR|YODA|LUKE)$
```


4. **Community**

Our infrastructure health check tool promotes a community-based approach that encourages collaboration and knowledge exchange between users. One of the key features of our tool is its flexibility, allowing users to customise and adjust the rules to suit their specific needs. The rules are easily shared using simple YAML files, making it easy to spread best practice and innovative ideas.

Our tool provides a learning and sharing space where users can collaborate to create monitoring rules for specific use cases. Whether you want to check specific elements of your infrastructure or take a more general approach, the possibilities are endless. Everyone is free to design and share their own use cases, providing a wealth of resources for the community as a whole.

<p align="right">(<a href="#top">back to top</a>)</p>

### How to create Yaml file

```yml
- version: /^[0-9]+\.[0-9]+\.[0-9]+$/
  #to indicate the version of this yaml
  date: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/
  #to indicate the date of this yaml
  alert:
  #area to create your custom notification
    info:
    #alert for info (level 0)
      enabled: ^(true|false)$
      #to enable it
      type:
      #add every type of notification you want
        - ^(email|sms|webhook|log)$
      to:
      #add all the endpoint you need according to the type of notification you have
        - string
    warn:
    #alert for warn (level 1)
      enabled: ^(true|false)$
      type:
        - ^(email|sms|webhook|log)$
      to:
        - string
    error:
    #alert for error (level 2)
      enabled: ^(true|false)$
      type:
        - ^(email|sms|webhook|log)$
      to:
        - string
    fatal:
    #alert for fatal (level 3)
      enabled: ^(true|false)$
      type:
        - ^(email|sms|webhook|log)$
      to:
        - string
    global:
    #alert for the sum up
      name: string
      enabled: ^(true|false)$
      type:
        - ^(email|sms|webhook|log)$
      to:
        - string
      conditions:
      #condition is for each level, how many is required before have the sum up
        - level: 0
          min: int
        - level: 1
          min: int
        - level: 2
          min: int
        - level: 3
          min: int
  rules:
    - name: string
      description: string
      applied: ^(true|false)$
      level: ^(0|1|2|3)$
      cloudProvider: ^(azure|git)$
      objectName: ^(vm|rg|disk|nsg|virtualNetwork|networkInterfaces|namespaces|pods|helm|aks|repositories|branches|issues)$
      conditions: 
        - object -> RulesConditions | ParentRules
```

RulesConditions :
```yml
property: string
condition: ^(
  EQUAL|
  DIFFERENT|
  INCLUDE|
  NOT_INCLUDE|
  INCLUDE_NOT_SENSITIVE|
  NOT_INCLUDE_NOT_SENSITIVE|
  SUP|
  INF|
  SUP_OR_EQUAL|
  INF_OR_EQUAL|
  STARTS_WITH|
  NOT_STARTS_WITH|
  ENDS_WITH|
  NOT_ENDS_WITH|
  REGEX
  ALL|
  NOT_ANY|
  SOME|
  ONE|
  COUNT|
  COUNT_SUP|
  COUNT_INF|
  COUNT_SUP_OR_EQUAL|
  COUNT_INF_OR_EQUAL|
)$
value: int|string|RulesConditions|ParentRules
```

ParentRules :
```yml
name: string
description: string
operator: ^(AND|OR|XOR|NAND|NOR|XNOR|NOT)$
rules: 
  - object -> RulesConditions | ParentRules
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [X] Setting notification levels
* [X] Azure check in:
  * [X] virtual machine (vm)
  * [X] resource groupe (rg)
  * [X] disk
  * [X] network security groupe (nsg)
  * [X] virtual network (virtualNetwork)
  * [X] network interfaces (networkInterfaces)
  * [X] namespaces (namespaces)
  * [X] pods
  * [X] aks
* [X] Github check in:
  * [X] repositories
  * [X] branches
  * [X] issues
* [X] Kubernetes check in:
  * [X] namespaces
  * [X] pods
  * [X] helm
* [ ] AWS
* [ ] GCP

See the [open issues](https://github.com/4urcloud/Kexa/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

contact@thecloudprices.com

Project Link: [https://github.com/4urcloud/Kexa](https://github.com/4urcloud/Kexa)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/4urcloud/Kexa.svg?style=for-the-badge
[contributors-url]: https://github.com/4urcloud/Kexa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/4urcloud/Kexa.svg?style=for-the-badge
[forks-url]: https://github.com/4urcloud/Kexa/network/members
[stars-shield]: https://img.shields.io/github/stars/4urcloud/Kexa.svg?style=for-the-badge
[stars-url]: https://github.com/4urcloud/Kexa/stargazers
[issues-shield]: https://img.shields.io/github/issues/4urcloud/Kexa.svg?style=for-the-badge
[issues-url]: https://github.com/4urcloud/Kexa/issues
[license-shield]: https://img.shields.io/github/license/4urcloud/Kexa.svg?style=for-the-badge
[license-url]: https://github.com/4urcloud/Kexa/blob/master/LICENSE.txt
[NodeJs-url]:https://nodejs.org/en
[NodeJs.com]:https://img.shields.io/badge/Nodejs-3c873a?style=for-the-badge&logo=node.js&logoColor=white