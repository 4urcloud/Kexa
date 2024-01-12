/*
    * Provider : aws
    * Thumbnail : https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png
    * Documentation : https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
    * Creation date : 2023-08-14
    * Note : 
    * Resources :
	*	- OpsWorksCMClient.AccountAttributes
	*	- EC2Client.AddressTransfers
	*	- EC2Client.AddressesAttribute
	*	- EC2Client.Addresses
	*	- EC2Client.AggregateIdFormat
	*	- EC2Client.AvailabilityZones
	*	- EC2Client.AwsNetworkPerformanceMetricSubscriptions
	*	- EC2Client.BundleTasks
	*	- EC2Client.ByoipCidrs
	*	- EC2Client.CapacityBlockOfferings
	*	- EC2Client.CapacityReservationFleets
	*	- EC2Client.CapacityReservations
	*	- EC2Client.CarrierGateways
	*	- EC2Client.ClassicLinkInstances
	*	- EC2Client.ClientVpnAuthorizationRules
	*	- EC2Client.ClientVpnConnections
	*	- EC2Client.ClientVpnEndpoints
	*	- EC2Client.ClientVpnRoutes
	*	- EC2Client.ClientVpnTargetNetworks
	*	- EC2Client.CoipPools
	*	- EC2Client.ConversionTasks
	*	- EC2Client.CustomerGateways
	*	- EC2Client.DhcpOptions
	*	- EC2Client.EgressOnlyInternetGateways
	*	- EC2Client.ElasticGpus
	*	- EC2Client.ExportImageTasks
	*	- RDSClient.ExportTasks
	*	- EC2Client.FastLaunchImages
	*	- EC2Client.FastSnapshotRestores
	*	- EC2Client.FleetHistory
	*	- EC2Client.FleetInstances
	*	- AppStreamClient.Fleets
	*	- EC2Client.FlowLogs
	*	- EC2Client.FpgaImageAttribute
	*	- EC2Client.FpgaImages
	*	- EC2Client.HostReservationOfferings
	*	- EC2Client.HostReservations
	*	- EC2Client.Hosts
	*	- EC2Client.IamInstanceProfileAssociations
	*	- EC2Client.IdFormat
	*	- EC2Client.IdentityIdFormat
	*	- EC2Client.ImageAttribute
	*	- AppStreamClient.Images
	*	- EC2Client.ImportImageTasks
	*	- EC2Client.ImportSnapshotTasks
	*	- ConnectClient.InstanceAttribute
	*	- EC2Client.InstanceConnectEndpoints
	*	- EC2Client.InstanceCreditSpecifications
	*	- EC2Client.InstanceEventNotificationAttributes
	*	- EC2Client.InstanceEventWindows
	*	- EC2Client.InstanceStatus
	*	- EC2Client.InstanceTopology
	*	- EC2Client.InstanceTypeOfferings
	*	- EC2Client.InstanceTypes
	*	- OpsWorksClient.Instances
	*	- EC2Client.InternetGateways
	*	- EC2Client.IpamByoasn
	*	- EC2Client.IpamPools
	*	- EC2Client.IpamResourceDiscoveries
	*	- EC2Client.IpamResourceDiscoveryAssociations
	*	- EC2Client.IpamScopes
	*	- EC2Client.Ipams
	*	- EC2Client.Ipv6Pools
	*	- EC2Client.KeyPairs
	*	- EC2Client.LaunchTemplateVersions
	*	- EC2Client.LaunchTemplates
	*	- EC2Client.LocalGatewayRouteTableVirtualInterfaceGroupAssociations
	*	- EC2Client.LocalGatewayRouteTableVpcAssociations
	*	- EC2Client.LocalGatewayRouteTables
	*	- EC2Client.LocalGatewayVirtualInterfaceGroups
	*	- EC2Client.LocalGatewayVirtualInterfaces
	*	- EC2Client.LocalGateways
	*	- EC2Client.LockedSnapshots
	*	- EC2Client.ManagedPrefixLists
	*	- EC2Client.MovingAddresses
	*	- EC2Client.NatGateways
	*	- EC2Client.NetworkAcls
	*	- EC2Client.NetworkInsightsAccessScopeAnalyses
	*	- EC2Client.NetworkInsightsAccessScopes
	*	- EC2Client.NetworkInsightsAnalyses
	*	- EC2Client.NetworkInsightsPaths
	*	- EC2Client.NetworkInterfaceAttribute
	*	- EC2Client.NetworkInterfacePermissions
	*	- EC2Client.NetworkInterfaces
	*	- EC2Client.PlacementGroups
	*	- EC2Client.PrefixLists
	*	- EC2Client.PrincipalIdFormat
	*	- EC2Client.PublicIpv4Pools
	*	- EC2Client.Regions
	*	- EC2Client.ReplaceRootVolumeTasks
	*	- OpenSearchClient.ReservedInstances
	*	- EC2Client.ReservedInstancesListings
	*	- EC2Client.ReservedInstancesModifications
	*	- EC2Client.ReservedInstancesOfferings
	*	- EC2Client.RouteTables
	*	- EC2Client.ScheduledInstanceAvailability
	*	- EC2Client.ScheduledInstances
	*	- EC2Client.SecurityGroupReferences
	*	- EC2Client.SecurityGroupRules
	*	- EC2Client.SecurityGroups
	*	- EC2Client.SnapshotAttribute
	*	- EC2Client.SnapshotTierStatus
	*	- MemoryDBClient.Snapshots
	*	- EC2Client.SpotDatafeedSubscription
	*	- EC2Client.SpotFleetInstances
	*	- EC2Client.SpotFleetRequestHistory
	*	- EC2Client.SpotFleetRequests
	*	- EC2Client.SpotInstanceRequests
	*	- EC2Client.SpotPriceHistory
	*	- EC2Client.StaleSecurityGroups
	*	- EC2Client.StoreImageTasks
	*	- EC2Client.Subnets
	*	- ElasticLoadBalancingClient.Tags
	*	- EC2Client.TrafficMirrorFilters
	*	- EC2Client.TrafficMirrorSessions
	*	- EC2Client.TrafficMirrorTargets
	*	- EC2Client.TransitGatewayAttachments
	*	- EC2Client.TransitGatewayConnectPeers
	*	- EC2Client.TransitGatewayConnects
	*	- EC2Client.TransitGatewayMulticastDomains
	*	- EC2Client.TransitGatewayPeeringAttachments
	*	- EC2Client.TransitGatewayPolicyTables
	*	- EC2Client.TransitGatewayRouteTableAnnouncements
	*	- EC2Client.TransitGatewayRouteTables
	*	- EC2Client.TransitGatewayVpcAttachments
	*	- EC2Client.TransitGateways
	*	- EC2Client.TrunkInterfaceAssociations
	*	- EC2Client.VerifiedAccessEndpoints
	*	- EC2Client.VerifiedAccessGroups
	*	- EC2Client.VerifiedAccessInstanceLoggingConfigurations
	*	- EC2Client.VerifiedAccessInstances
	*	- EC2Client.VerifiedAccessTrustProviders
	*	- EC2Client.VolumeAttribute
	*	- EC2Client.VolumeStatus
	*	- OpsWorksClient.Volumes
	*	- EC2Client.VolumesModifications
	*	- EC2Client.VpcAttribute
	*	- EC2Client.VpcClassicLink
	*	- EC2Client.VpcClassicLinkDnsSupport
	*	- EC2Client.VpcEndpointConnectionNotifications
	*	- EC2Client.VpcEndpointConnections
	*	- EC2Client.VpcEndpointServiceConfigurations
	*	- EC2Client.VpcEndpointServicePermissions
	*	- EC2Client.VpcEndpointServices
	*	- OpenSearchClient.VpcEndpoints
	*	- GameLiftClient.VpcPeeringConnections
	*	- EC2Client.Vpcs
	*	- EC2Client.VpnConnections
	*	- EC2Client.VpnGateways
	*	- EC2Client.ImagesInRecycleBin
	*	- EC2Client.SnapshotsInRecycleBin
	*	- S3Client.BucketAnalyticsConfigurations
	*	- S3Client.BucketIntelligentTieringConfigurations
	*	- S3Client.BucketInventoryConfigurations
	*	- S3Client.BucketMetricsConfigurations
	*	- S3Client.Buckets
	*	- S3Client.DirectoryBuckets
	*	- GlacierClient.MultipartUploads
	*	- S3Client.ObjectVersions
	*	- S3Client.Objects
	*	- S3Client.ObjectsV2
	*	- GlacierClient.Parts
	*	- SSOClient.AccountRoles
	*	- ChimeClient.Accounts
	*	- DynamoDBClient.Backup
	*	- DynamoDBClient.ContinuousBackups
	*	- DynamoDBClient.ContributorInsights
	*	- MediaConvertClient.Endpoints
	*	- DynamoDBClient.Export
	*	- DynamoDBClient.GlobalTable
	*	- DynamoDBClient.GlobalTableSettings
	*	- DynamoDBClient.Import
	*	- DynamoDBClient.KinesisStreamingDestination
	*	- KinesisClient.Limits
	*	- TimestreamWriteClient.Table
	*	- DynamoDBClient.TableReplicaAutoScaling
	*	- DynamoDBClient.TimeToLive
	*	- DynamoDBClient.Backups
	*	- DynamoDBClient.ContributorInsights
	*	- MgnClient.Exports
	*	- DynamoDBClient.GlobalTables
	*	- MgnClient.Imports
	*	- HoneycodeClient.Tables
	*	- DynamoDBClient.TagsOfResource
	*	- CognitoIdentityClient.Identity
	*	- CognitoIdentityClient.IdentityPool
	*	- SESClient.Identities
	*	- CognitoIdentityClient.IdentityPools
	*	- IoTAnalyticsClient.TagsForResource
	*	- SQSClient.DeadLetterSourceQueues
	*	- SQSClient.MessageMoveTasks
	*	- SQSClient.QueueTags
	*	- ConnectClient.Queues
	*	- KinesisVideoClient.Stream
	*	- KinesisClient.StreamConsumer
	*	- KinesisClient.StreamSummary
	*	- KinesisClient.Shards
	*	- KinesisClient.StreamConsumers
	*	- IvsClient.Streams
	*	- KinesisVideoClient.TagsForStream
	*	- FirehoseClient.DeliveryStream
	*	- FirehoseClient.DeliveryStreams
	*	- FirehoseClient.TagsForDeliveryStream
	*	- CloudWatchLogsClient.AccountPolicies
	*	- CloudWatchLogsClient.Deliveries
	*	- CloudWatchLogsClient.DeliveryDestinations
	*	- CloudWatchLogsClient.DeliverySources
	*	- CloudWatchLogsClient.Destinations
	*	- CloudWatchLogsClient.LogGroups
	*	- CloudWatchLogsClient.LogStreams
	*	- CloudWatchLogsClient.MetricFilters
	*	- CloudWatchLogsClient.Queries
	*	- CloudWatchLogsClient.QueryDefinitions
	*	- CloudWatchLogsClient.ResourcePolicies
	*	- CloudWatchLogsClient.SubscriptionFilters
	*	- CloudWatchLogsClient.Anomalies
	*	- CloudWatchLogsClient.LogAnomalyDetectors
	*	- CloudWatchLogsClient.TagsLogGroup
	*	- TranslateClient.TextTranslationJob
	*	- TranslateClient.Languages
	*	- TranslateClient.ParallelData
	*	- TranslateClient.Terminologies
	*	- TranslateClient.TextTranslationJobs
	*	- TextractClient.AdapterVersions
	*	- TextractClient.Adapters
	*	- PinpointClient.Journeys
	*	- QuickSightClient.TemplateVersions
	*	- QuickSightClient.Templates
	*	- RekognitionClient.Collection
	*	- IoTAnalyticsClient.Dataset
	*	- RekognitionClient.ProjectVersions
	*	- RekognitionClient.Projects
	*	- RekognitionClient.StreamProcessor
	*	- RekognitionClient.Collections
	*	- LookoutVisionClient.DatasetEntries
	*	- RekognitionClient.DatasetLabels
	*	- RekognitionClient.Faces
	*	- RekognitionClient.MediaAnalysisJobs
	*	- RekognitionClient.ProjectPolicies
	*	- RekognitionClient.StreamProcessors
	*	- IdentitystoreClient.Users
	*	- PollyClient.Voices
	*	- PollyClient.Lexicons
	*	- PollyClient.SpeechSynthesisTasks
	*	- ComprehendClient.DocumentClassificationJob
	*	- ComprehendClient.DocumentClassifier
	*	- ComprehendClient.DominantLanguageDetectionJob
	*	- SageMakerClient.Endpoint
	*	- ComprehendClient.EntitiesDetectionJob
	*	- ComprehendClient.EntityRecognizer
	*	- ComprehendClient.EventsDetectionJob
	*	- ComprehendClient.Flywheel
	*	- ComprehendClient.FlywheelIteration
	*	- ComprehendClient.KeyPhrasesDetectionJob
	*	- ComprehendClient.PiiEntitiesDetectionJob
	*	- LookoutEquipmentClient.ResourcePolicy
	*	- ComprehendClient.SentimentDetectionJob
	*	- ComprehendClient.TargetedSentimentDetectionJob
	*	- ComprehendClient.TopicsDetectionJob
	*	- IoTAnalyticsClient.Datasets
	*	- ComprehendClient.DocumentClassificationJobs
	*	- ComprehendClient.DocumentClassifierSummaries
	*	- ComprehendClient.DocumentClassifiers
	*	- ComprehendClient.DominantLanguageDetectionJobs
	*	- SageMakerClient.Endpoints
	*	- ComprehendClient.EntitiesDetectionJobs
	*	- ComprehendClient.EntityRecognizerSummaries
	*	- ComprehendClient.EntityRecognizers
	*	- ComprehendClient.EventsDetectionJobs
	*	- ComprehendClient.FlywheelIterationHistory
	*	- ComprehendClient.Flywheels
	*	- ComprehendClient.KeyPhrasesDetectionJobs
	*	- ComprehendClient.PiiEntitiesDetectionJobs
	*	- ComprehendClient.SentimentDetectionJobs
	*	- ComprehendClient.TargetedSentimentDetectionJobs
	*	- ComprehendClient.TopicsDetectionJobs
	*	- LocationClient.GeofenceCollection
	*	- KMSClient.Key
	*	- LocationClient.Map
	*	- LocationClient.PlaceIndex
	*	- LocationClient.RouteCalculator
	*	- LocationClient.Tracker
	*	- LocationClient.DevicePositions
	*	- LocationClient.GeofenceCollections
	*	- LocationClient.Geofences
	*	- KMSClient.Keys
	*	- LocationClient.Maps
	*	- LocationClient.PlaceIndexes
	*	- LocationClient.RouteCalculators
	*	- LocationClient.TrackerConsumers
	*	- LocationClient.Trackers
	*	- SecretsManagerClient.Secret
	*	- SecretsManagerClient.SecretVersionIds
	*	- SecretsManagerClient.Secrets
	*	- SNSClient.EndpointsByPlatformApplication
	*	- SNSClient.OriginationNumbers
	*	- SNSClient.PhoneNumbersOptedOut
	*	- SNSClient.PlatformApplications
	*	- SNSClient.SMSSandboxPhoneNumbers
	*	- SNSClient.SubscriptionsByTopic
	*	- SNSClient.Subscriptions
	*	- QuickSightClient.Topics
	*	- SSMClient.Activations
	*	- SSMClient.Association
	*	- SSMClient.AssociationExecutionTargets
	*	- SSMClient.AssociationExecutions
	*	- SSMClient.AutomationExecutions
	*	- SSMClient.AutomationStepExecutions
	*	- SSMClient.AvailablePatches
	*	- SSMClient.Document
	*	- SSMClient.DocumentPermission
	*	- SSMClient.EffectiveInstanceAssociations
	*	- SSMClient.EffectivePatchesForPatchBaseline
	*	- SSMClient.InstanceAssociationsStatus
	*	- SSMClient.InstanceInformation
	*	- SSMClient.InstancePatchStates
	*	- SSMClient.InstancePatchStatesForPatchGroup
	*	- SSMClient.InstancePatches
	*	- SSMClient.InventoryDeletions
	*	- SSMClient.MaintenanceWindowExecutionTaskInvocations
	*	- SSMClient.MaintenanceWindowExecutionTasks
	*	- SSMClient.MaintenanceWindowExecutions
	*	- SSMClient.MaintenanceWindowSchedule
	*	- SSMClient.MaintenanceWindowTargets
	*	- SSMClient.MaintenanceWindowTasks
	*	- SSMClient.MaintenanceWindows
	*	- SSMClient.MaintenanceWindowsForTarget
	*	- SSMClient.OpsItems
	*	- DAXClient.Parameters
	*	- SSMClient.PatchBaselines
	*	- SSMClient.PatchGroupState
	*	- SSMClient.PatchGroups
	*	- SSMClient.PatchProperties
	*	- AppStreamClient.Sessions
	*	- SSMClient.AssociationVersions
	*	- SageMakerClient.Associations
	*	- SSMClient.
	*	- SSMClient.
	*	- SSMClient.ComplianceItems
	*	- SSMClient.ComplianceSummaries
	*	- SSMClient.DocumentMetadataHistory
	*	- SSMClient.DocumentVersions
	*	- SSMClient.Documents
	*	- SSMClient.InventoryEntries
	*	- SSMClient.OpsItemEvents
	*	- SSMClient.OpsItemRelatedItems
	*	- SSMClient.OpsMetadata
	*	- SSMClient.ResourceComplianceSummaries
	*	- SSMClient.ResourceDataSync
	*	- GameLiftClient.Aliases
	*	- LambdaClient.CodeSigningConfigs
	*	- LambdaClient.EventSourceMappings
	*	- LambdaClient.FunctionEventInvokeConfigs
	*	- LambdaClient.FunctionUrlConfigs
	*	- LambdaClient.FunctionsByCodeSigningConfig
	*	- AppSyncClient.Functions
	*	- LambdaClient.LayerVersions
	*	- LambdaClient.Layers
	*	- LambdaClient.ProvisionedConcurrencyConfigs
	*	- DAXClient.Tags
	*	- LambdaClient.VersionsByFunction
	*	- SESClient.ActiveReceiptRuleSet
	*	- SESClient.ConfigurationSet
	*	- SESClient.ReceiptRule
	*	- SESClient.ReceiptRuleSet
	*	- PinpointEmailClient.ConfigurationSets
	*	- SESClient.CustomVerificationEmailTemplates
	*	- SESClient.IdentityPolicies
	*	- SESClient.ReceiptFilters
	*	- SESClient.ReceiptRuleSets
	*	- SESClient.VerifiedEmailAddresses
	*	- CloudWatchEventsClient.ApiDestination
	*	- CloudWatchEventsClient.Archive
	*	- CloudWatchEventsClient.Connection
	*	- CloudWatchEventsClient.EventBus
	*	- CloudWatchEventsClient.EventSource
	*	- CloudWatchEventsClient.PartnerEventSource
	*	- CloudWatchEventsClient.Replay
	*	- CloudWatchEventsClient.Rule
	*	- CloudWatchEventsClient.ApiDestinations
	*	- CloudWatchEventsClient.Archives
	*	- CloudWatchEventsClient.Connections
	*	- CloudWatchEventsClient.EventBuses
	*	- CloudWatchEventsClient.EventSources
	*	- CloudWatchEventsClient.PartnerEventSourceAccounts
	*	- CloudWatchEventsClient.PartnerEventSources
	*	- CloudWatchEventsClient.Replays
	*	- CloudWatchEventsClient.RuleNamesByTarget
	*	- RbinClient.Rules
	*	- CloudWatchEventsClient.TargetsByRule
	*	- ECRClient.ImageReplicationStatus
	*	- ECRClient.ImageScanFindings
	*	- ECRClient.PullThroughCacheRules
	*	- SchemasClient.Registry
	*	- ECRPUBLICClient.Repositories
	*	- ImagebuilderClient.Images
	*	- KMSClient.CustomKeyStores
	*	- KMSClient.Grants
	*	- KMSClient.KeyPolicies
	*	- KMSClient.ResourceTags
	*	- KMSClient.RetirableGrants
	*	- CognitoIdentityProviderClient.IdentityProvider
	*	- CognitoIdentityProviderClient.ResourceServer
	*	- CognitoIdentityProviderClient.RiskConfiguration
	*	- CognitoIdentityProviderClient.UserImportJob
	*	- CognitoIdentityProviderClient.UserPoolClient
	*	- CognitoIdentityProviderClient.UserPool
	*	- CognitoIdentityProviderClient.UserPoolDomain
	*	- WorkLinkClient.Devices
	*	- GreengrassClient.Groups
	*	- CognitoIdentityProviderClient.IdentityProviders
	*	- CognitoIdentityProviderClient.ResourceServers
	*	- CognitoIdentityProviderClient.UserImportJobs
	*	- CognitoIdentityProviderClient.UserPoolClients
	*	- CognitoIdentityProviderClient.UserPools
	*	- CognitoIdentityProviderClient.UsersInGroup
	*	- IAMClient.AccessKeys
	*	- IAMClient.AccountAliases
	*	- IAMClient.AttachedGroupPolicies
	*	- IAMClient.AttachedRolePolicies
	*	- IAMClient.AttachedUserPolicies
	*	- IAMClient.EntitiesForPolicy
	*	- IAMClient.GroupPolicies
	*	- IAMClient.GroupsForUser
	*	- IAMClient.InstanceProfileTags
	*	- DeviceFarmClient.InstanceProfiles
	*	- IAMClient.InstanceProfilesForRole
	*	- IAMClient.MFADeviceTags
	*	- IAMClient.MFADevices
	*	- IAMClient.OpenIDConnectProviderTags
	*	- IAMClient.OpenIDConnectProviders
	*	- FMSClient.Policies
	*	- IAMClient.PoliciesGrantingServiceAccess
	*	- IAMClient.PolicyTags
	*	- IoTClient.PolicyVersions
	*	- IAMClient.RolePolicies
	*	- IAMClient.RoleTags
	*	- IAMClient.Roles
	*	- IAMClient.SAMLProviderTags
	*	- IAMClient.SAMLProviders
	*	- IAMClient.SSHPublicKeys
	*	- IAMClient.ServerCertificateTags
	*	- IAMClient.ServerCertificates
	*	- IAMClient.ServiceSpecificCredentials
	*	- IAMClient.SigningCertificates
	*	- IAMClient.UserPolicies
	*	- IAMClient.UserTags
	*	- IAMClient.VirtualMFADevices
	*	- CloudWatchClient.AlarmHistory
	*	- CloudWatchClient.Alarms
	*	- CloudWatchClient.AlarmsForMetric
	*	- CloudWatchClient.AnomalyDetectors
	*	- CloudWatchClient.InsightRules
	*	- IoTSiteWiseClient.Dashboards
	*	- CloudWatchClient.ManagedInsightRules
	*	- CloudWatchClient.MetricStreams
	*	- CloudWatchClient.Metrics
	*	- SFNClient.Activity
	*	- TransferClient.Execution
	*	- SFNClient.MapRun
	*	- SFNClient.StateMachineAlias
	*	- SFNClient.StateMachine
	*	- SFNClient.StateMachineForExecution
	*	- SFNClient.Activities
	*	- TransferClient.Executions
	*	- SFNClient.MapRuns
	*	- SFNClient.StateMachineAliases
	*	- SFNClient.StateMachineVersions
	*	- SFNClient.StateMachines
	*	- ElasticLoadBalancingClient.AccountLimits
	*	- CloudFormationClient.ChangeSet
	*	- CloudFormationClient.ChangeSetHooks
	*	- CloudFormationClient.OrganizationsAccess
	*	- CloudFormationClient.Publisher
	*	- CloudFormationClient.StackDriftDetectionStatus
	*	- CloudFormationClient.StackEvents
	*	- CloudFormationClient.StackInstance
	*	- CloudFormationClient.StackResource
	*	- CloudFormationClient.StackResourceDrifts
	*	- CloudFormationClient.StackResources
	*	- CloudFormationClient.StackSet
	*	- CloudFormationClient.StackSetOperation
	*	- OpsWorksClient.Stacks
	*	- CloudFormationClient.Type
	*	- CloudFormationClient.TypeRegistration
	*	- CloudFormationClient.ChangeSets
	*	- CloudFormationClient.StackInstanceResourceDrifts
	*	- CloudFormationClient.StackInstances
	*	- CloudFormationClient.StackResources
	*	- CloudFormationClient.StackSetOperationResults
	*	- CloudFormationClient.StackSetOperations
	*	- CloudFormationClient.StackSets
	*	- CloudFormationClient.Stacks
	*	- CloudFormationClient.TypeRegistrations
	*	- CloudFormationClient.TypeVersions
	*	- AppSyncClient.Types
	*	- ECSClient.CapacityProviders
	*	- DAXClient.Clusters
	*	- ECSClient.ContainerInstances
	*	- PricingClient.Services
	*	- ECSClient.TaskDefinition
	*	- ECSClient.TaskSets
	*	- ECSClient.Tasks
	*	- ECSClient.AccountSettings
	*	- ECSClient.Attributes
	*	- SageMakerClient.Clusters
	*	- ECSClient.ContainerInstances
	*	- ECSClient.ServicesByNamespace
	*	- ProtonClient.Services
	*	- ECSClient.TaskDefinitionFamilies
	*	- ECSClient.TaskDefinitions
	*	- DataSyncClient.Tasks
	*	- CloudFrontClient.Function
	*	- CloudFrontClient.KeyValueStore
	*	- CloudFrontClient.CachePolicies
	*	- CloudFrontClient.CloudFrontOriginAccessIdentities
	*	- CloudFrontClient.ConflictingAliases
	*	- CloudFrontClient.ContinuousDeploymentPolicies
	*	- CloudFrontClient.DistributionsByCachePolicyId
	*	- CloudFrontClient.DistributionsByKeyGroup
	*	- CloudFrontClient.DistributionsByOriginRequestPolicyId
	*	- CloudFrontClient.DistributionsByRealtimeLogConfig
	*	- CloudFrontClient.DistributionsByResponseHeadersPolicyId
	*	- CloudFrontClient.DistributionsByWebACLId
	*	- CloudFrontClient.Distributions
	*	- CloudFrontClient.FieldLevelEncryptionConfigs
	*	- CloudFrontClient.FieldLevelEncryptionProfiles
	*	- CloudFrontClient.Invalidations
	*	- CloudFrontClient.KeyGroups
	*	- CloudFrontClient.KeyValueStores
	*	- CloudFrontClient.OriginAccessControls
	*	- CloudFrontClient.OriginRequestPolicies
	*	- CloudTrailClient.PublicKeys
	*	- CloudFrontClient.RealtimeLogConfigs
	*	- CloudFrontClient.ResponseHeadersPolicies
	*	- CloudFrontClient.StreamingDistributions
	*	- RDSClient.BlueGreenDeployments
	*	- DocDBClient.Certificates
	*	- RDSClient.DBClusterAutomatedBackups
	*	- RDSClient.DBClusterBacktracks
	*	- NeptuneClient.DBClusterEndpoints
	*	- NeptuneClient.DBClusterParameterGroups
	*	- NeptuneClient.DBClusterParameters
	*	- NeptuneClient.DBClusterSnapshotAttributes
	*	- NeptuneClient.DBClusterSnapshots
	*	- NeptuneClient.DBClusters
	*	- NeptuneClient.DBEngineVersions
	*	- RDSClient.DBInstanceAutomatedBackups
	*	- NeptuneClient.DBInstances
	*	- RDSClient.DBLogFiles
	*	- NeptuneClient.DBParameterGroups
	*	- NeptuneClient.DBParameters
	*	- RDSClient.DBProxies
	*	- RDSClient.DBProxyEndpoints
	*	- RDSClient.DBProxyTargetGroups
	*	- RDSClient.DBProxyTargets
	*	- RDSClient.DBRecommendations
	*	- RDSClient.DBSecurityGroups
	*	- RDSClient.DBSnapshotAttributes
	*	- RDSClient.DBSnapshotTenantDatabases
	*	- RDSClient.DBSnapshots
	*	- NeptuneClient.DBSubnetGroups
	*	- NeptuneClient.EngineDefaultClusterParameters
	*	- NeptuneClient.EngineDefaultParameters
	*	- NeptuneClient.EventCategories
	*	- NeptuneClient.EventSubscriptions
	*	- OpsWorksCMClient.Events
	*	- NeptuneClient.GlobalClusters
	*	- RDSClient.Integrations
	*	- RDSClient.OptionGroupOptions
	*	- RDSClient.OptionGroups
	*	- NeptuneClient.OrderableDBInstanceOptions
	*	- NeptuneClient.PendingMaintenanceActions
	*	- RDSClient.ReservedDBInstances
	*	- RDSClient.ReservedDBInstancesOfferings
	*	- RDSClient.SourceRegions
	*	- RDSClient.TenantDatabases
	*	- NeptuneClient.ValidDBInstanceModifications
	*	- CodeBuildClient.CodeCoverages
	*	- CodeBuildClient.TestCases
	*	- CodeBuildClient.BuildBatches
	*	- CodeBuildClient.BuildBatchesForProject
	*	- GameLiftClient.Builds
	*	- CodeBuildClient.BuildsForProject
	*	- CodeBuildClient.CuratedEnvironmentImages
	*	- DataBrewClient.Projects
	*	- CodeBuildClient.ReportGroups
	*	- CodeBuildClient.Reports
	*	- CodeBuildClient.ReportsForReportGroup
	*	- CodeBuildClient.SharedProjects
	*	- CodeBuildClient.SharedReportGroups
	*	- CodeBuildClient.SourceCredentials
	*	- TransferClient.Certificate
	*	- TransferClient.Certificates
	*	- ACMClient.TagsForCertificate
	*	- CodePipelineClient.ActionExecutions
	*	- CodePipelineClient.ActionTypes
	*	- SageMakerClient.PipelineExecutions
	*	- IoTAnalyticsClient.Pipelines
	*	- AmplifyClient.Webhooks
	*	- AthenaClient.ApplicationDPUSizes
	*	- AthenaClient.CalculationExecutions
	*	- AthenaClient.CapacityReservations
	*	- AthenaClient.DataCatalogs
	*	- TimestreamWriteClient.Databases
	*	- AthenaClient.EngineVersions
	*	- AthenaClient.Executors
	*	- AthenaClient.NamedQueries
	*	- AthenaClient.NotebookMetadata
	*	- AthenaClient.NotebookSessions
	*	- AthenaClient.PreparedStatements
	*	- AthenaClient.QueryExecutions
	*	- GlueClient.Sessions
	*	- AthenaClient.TableMetadata
	*	- AthenaClient.WorkGroups
	*	- ElastiCacheClient.CacheClusters
	*	- ElastiCacheClient.CacheEngineVersions
	*	- ElastiCacheClient.CacheParameterGroups
	*	- ElastiCacheClient.CacheParameters
	*	- ElastiCacheClient.CacheSecurityGroups
	*	- ElastiCacheClient.CacheSubnetGroups
	*	- ElastiCacheClient.GlobalReplicationGroups
	*	- ElastiCacheClient.ReplicationGroups
	*	- ElastiCacheClient.ReservedCacheNodes
	*	- ElastiCacheClient.ReservedCacheNodesOfferings
	*	- ElastiCacheClient.ServerlessCacheSnapshots
	*	- ElastiCacheClient.ServerlessCaches
	*	- MemoryDBClient.ServiceUpdates
	*	- ElastiCacheClient.UpdateActions
	*	- ElastiCacheClient.UserGroups
	*	- MemoryDBClient.Users
	*	- ElastiCacheClient.AllowedNodeTypeModifications
	*	- TimestreamWriteClient.BatchLoadTask
	*	- TimestreamWriteClient.Database
	*	- TimestreamWriteClient.BatchLoadTasks
	*	- CodeDeployClient.ApplicationRevisions
	*	- IoTFleetHubClient.Applications
	*	- CodeDeployClient.DeploymentConfigs
	*	- CodeDeployClient.DeploymentGroups
	*	- CodeDeployClient.DeploymentInstances
	*	- CodeDeployClient.DeploymentTargets
	*	- GreengrassClient.Deployments
	*	- CodeDeployClient.GitHubAccountTokenNames
	*	- CodeDeployClient.OnPremisesInstances
	*	- TimestreamQueryClient.ScheduledQuery
	*	- TimestreamQueryClient.ScheduledQueries
	*	- XRayClient.ResourcePolicies
	*	- IoTClient.AccountAuditConfiguration
	*	- IoTClient.AuditFinding
	*	- IoTClient.AuditMitigationActionsTask
	*	- IoTClient.AuditSuppression
	*	- IoTClient.AuditTask
	*	- IoTClient.Authorizer
	*	- IoTClient.BillingGroup
	*	- IoTClient.CACertificate
	*	- IoTClient.CertificateProvider
	*	- IoTClient.CustomMetric
	*	- IoTClient.DefaultAuthorizer
	*	- IoTClient.DetectMitigationActionsTask
	*	- IoTClient.Dimension
	*	- IoTClient.DomainConfiguration
	*	- IoTClient.EventConfigurations
	*	- IoTClient.FleetMetric
	*	- KendraClient.Index
	*	- DataBrewClient.Job
	*	- IoTClient.JobExecution
	*	- EMRContainersClient.JobTemplate
	*	- IoTClient.ManagedJobTemplate
	*	- IoTClient.MitigationAction
	*	- IoTClient.ProvisioningTemplate
	*	- IoTClient.ProvisioningTemplateVersion
	*	- IoTClient.RoleAlias
	*	- IoTClient.ScheduledAudit
	*	- ConnectClient.SecurityProfile
	*	- IoTClient.Thing
	*	- IoTClient.ThingGroup
	*	- IoTClient.ThingRegistrationTask
	*	- IoTClient.ThingType
	*	- IoTClient.ActiveViolations
	*	- IoTClient.AttachedPolicies
	*	- IoTClient.AuditFindings
	*	- IoTClient.AuditMitigationActionsExecutions
	*	- IoTClient.AuditMitigationActionsTasks
	*	- IoTClient.AuditSuppressions
	*	- IoTClient.AuditTasks
	*	- IoTClient.Authorizers
	*	- BillingconductorClient.BillingGroups
	*	- IoTClient.CACertificates
	*	- IoTClient.CertificateProviders
	*	- IoTClient.CertificatesByCA
	*	- IoTClient.CustomMetrics
	*	- IoTClient.DetectMitigationActionsExecutions
	*	- IoTClient.DetectMitigationActionsTasks
	*	- IoTClient.Dimensions
	*	- IoTClient.DomainConfigurations
	*	- IoTClient.FleetMetrics
	*	- KendraClient.Indices
	*	- IoTClient.JobExecutionsForJob
	*	- IoTClient.JobExecutionsForThing
	*	- EMRContainersClient.JobTemplates
	*	- DataBrewClient.Jobs
	*	- IoTClient.ManagedJobTemplates
	*	- IoTClient.MetricValues
	*	- IoTClient.MitigationActions
	*	- IoTClient.OTAUpdates
	*	- IoTClient.OutgoingCertificates
	*	- CodeartifactClient.PackageVersions
	*	- PanoramaClient.Packages
	*	- IoTClient.PolicyPrincipals
	*	- IoTClient.PrincipalPolicies
	*	- IoTClient.PrincipalThings
	*	- IoTClient.ProvisioningTemplateVersions
	*	- IoTClient.ProvisioningTemplates
	*	- IoTClient.RelatedResourcesForAuditFinding
	*	- IoTClient.RoleAliases
	*	- IoTClient.ScheduledAudits
	*	- ConnectClient.SecurityProfiles
	*	- IoTClient.SecurityProfilesForTarget
	*	- OrganizationsClient.TargetsForPolicy
	*	- IoTClient.TargetsForSecurityProfile
	*	- IoTClient.ThingGroups
	*	- IoTClient.ThingGroupsForThing
	*	- IoTClient.ThingPrincipals
	*	- IoTClient.ThingRegistrationTaskReports
	*	- IoTClient.ThingRegistrationTasks
	*	- IoTClient.ThingTypes
	*	- IoTClient.Things
	*	- IoTClient.ThingsInBillingGroup
	*	- IoTClient.ThingsInThingGroup
	*	- IoTClient.TopicRuleDestinations
	*	- IoTClient.TopicRules
	*	- IoTClient.V2LoggingLevels
	*	- IoTClient.ViolationEvents
	*	- EKSClient.AccessEntry
	*	- EKSClient.Addon
	*	- EKSClient.AddonConfiguration
	*	- EKSClient.AddonVersions
	*	- SageMakerClient.Cluster
	*	- EKSClient.EksAnywhereSubscription
	*	- EKSClient.FargateProfile
	*	- EKSClient.IdentityProviderConfig
	*	- EKSClient.Insight
	*	- EKSClient.Nodegroup
	*	- EKSClient.PodIdentityAssociation
	*	- EKSClient.Update
	*	- EKSClient.AccessEntries
	*	- IoTSiteWiseClient.AccessPolicies
	*	- EKSClient.Addons
	*	- EKSClient.AssociatedAccessPolicies
	*	- EKSClient.EksAnywhereSubscriptions
	*	- EKSClient.FargateProfiles
	*	- EKSClient.IdentityProviderConfigs
	*	- EKSClient.Insights
	*	- EKSClient.Nodegroups
	*	- EKSClient.PodIdentityAssociations
	*	- EKSClient.Updates
	*	- OpenSearchClient.DomainAutoTunes
	*	- OpenSearchClient.DomainChangeProgress
	*	- WorkLinkClient.Domain
	*	- OpenSearchClient.DomainConfig
	*	- OpenSearchClient.DomainHealth
	*	- OpenSearchClient.DomainNodes
	*	- CloudSearchClient.Domains
	*	- OpenSearchClient.DryRunProgress
	*	- OpenSearchClient.InboundConnections
	*	- OpenSearchClient.InstanceTypeLimits
	*	- OpenSearchClient.OutboundConnections
	*	- OpenSearchClient.Packages
	*	- OpenSearchClient.ReservedInstanceOfferings
	*	- KendraClient.DataSources
	*	- OpenSearchClient.DomainMaintenances
	*	- CloudSearchClient.DomainNames
	*	- OpenSearchClient.DomainsForPackage
	*	- OpenSearchClient.InstanceTypeDetails
	*	- OpenSearchClient.PackagesForDomain
	*	- OpenSearchClient.ScheduledActions
	*	- GrafanaClient.Versions
	*	- OpenSearchClient.VpcEndpointAccess
	*	- OpenSearchClient.VpcEndpoints
	*	- OpenSearchClient.VpcEndpointsForDomain
	*	- PanoramaClient.Package
	*	- PanoramaClient.PackageVersion
	*	- CodeartifactClient.Repository
	*	- WorkLinkClient.Domains
	*	- CodeartifactClient.PackageVersionAssets
	*	- CodeartifactClient.PackageVersionDependencies
	*	- ProtonClient.Repositories
	*	- CodeartifactClient.RepositoriesInDomain
	*	- GlueClient.Blueprints
	*	- GlueClient.ColumnStatisticsTaskRuns
	*	- GlueClient.Crawlers
	*	- GlueClient.Crawls
	*	- GlueClient.CustomEntityTypes
	*	- GlueClient.DataQualityResults
	*	- GlueClient.DataQualityRuleRecommendationRuns
	*	- GlueClient.DataQualityRulesetEvaluationRuns
	*	- GlueClient.DataQualityRulesets
	*	- GlueClient.DevEndpoints
	*	- GlueClient.MLTransforms
	*	- SchemasClient.Registries
	*	- SchemasClient.SchemaVersions
	*	- PersonalizeClient.Schemas
	*	- GlueClient.Statements
	*	- GlueClient.TableOptimizerRuns
	*	- GlueClient.Triggers
	*	- ImagebuilderClient.Workflows
	*	- SyntheticsClient.GroupResources
	*	- CodeCommitClient.MergeConflicts
	*	- CodeCommitClient.PullRequestEvents
	*	- CodeCommitClient.ApprovalRuleTemplates
	*	- CodeCommitClient.AssociatedApprovalRuleTemplatesForRepository
	*	- AmplifyClient.Branches
	*	- CodeCommitClient.FileCommitHistory
	*	- CodeCommitClient.PullRequests
	*	- CodeCommitClient.RepositoriesForApprovalRuleTemplate
	*	- BatchClient.ComputeEnvironments
	*	- BatchClient.JobDefinitions
	*	- BatchClient.JobQueues
	*	- MgnClient.Jobs
	*	- BatchClient.SchedulingPolicies
	*	- BatchClient.SchedulingPolicies
	*	- RedshiftClient.AuthenticationProfiles
	*	- RedshiftClient.ClusterDbRevisions
	*	- RedshiftClient.ClusterParameterGroups
	*	- RedshiftClient.ClusterParameters
	*	- RedshiftClient.ClusterSecurityGroups
	*	- RedshiftClient.ClusterSnapshots
	*	- RedshiftClient.ClusterSubnetGroups
	*	- RedshiftClient.ClusterTracks
	*	- RedshiftClient.ClusterVersions
	*	- RedshiftClient.CustomDomainAssociations
	*	- RedshiftClient.DataShares
	*	- RedshiftClient.DataSharesForConsumer
	*	- RedshiftClient.DataSharesForProducer
	*	- RedshiftClient.DefaultClusterParameters
	*	- RedshiftClient.EndpointAccess
	*	- RedshiftClient.EndpointAuthorization
	*	- RedshiftClient.HsmClientCertificates
	*	- RedshiftClient.HsmConfigurations
	*	- RedshiftClient.InboundIntegrations
	*	- RedshiftClient.LoggingStatus
	*	- RedshiftClient.NodeConfigurationOptions
	*	- RedshiftClient.OrderableClusterOptions
	*	- RedshiftClient.Partners
	*	- RedshiftClient.RedshiftIdcApplications
	*	- RedshiftClient.ReservedNodeExchangeStatus
	*	- RedshiftClient.ReservedNodeOfferings
	*	- MemoryDBClient.ReservedNodes
	*	- RedshiftClient.Resize
	*	- AutoScalingClient.ScheduledActions
	*	- RedshiftClient.SnapshotCopyGrants
	*	- RedshiftClient.SnapshotSchedules
	*	- RedshiftClient.Storage
	*	- RedshiftClient.TableRestoreStatus
	*	- RedshiftClient.UsageLimits
	*	- ElasticTranscoderClient.Presets
	*	- AppConfigClient.ConfigurationProfiles
	*	- AppConfigClient.DeploymentStrategies
	*	- FinspaceClient.Environments
	*	- AppConfigClient.ExtensionAssociations
	*	- GameSparksClient.Extensions
	*	- AppConfigClient.HostedConfigurationVersions
	*	- CloudTrailClient.Query
	*	- CloudTrailClient.Trails
	*	- IoTAnalyticsClient.Channels
	*	- CloudTrailClient.EventDataStores
	*	- CloudTrailClient.ImportFailures
	*	- CloudTrailClient.Queries
	*	- CloudTrailClient.Trails
	*	- QuickSightClient.AccountCustomization
	*	- QuickSightClient.AccountSettings
	*	- QuickSightClient.AccountSubscription
	*	- QuickSightClient.Analysis
	*	- QuickSightClient.AnalysisDefinition
	*	- QuickSightClient.AnalysisPermissions
	*	- QuickSightClient.AssetBundleExportJob
	*	- QuickSightClient.AssetBundleImportJob
	*	- IoTSiteWiseClient.Dashboard
	*	- QuickSightClient.DashboardDefinition
	*	- QuickSightClient.DashboardPermissions
	*	- QuickSightClient.DashboardSnapshotJob
	*	- QuickSightClient.DashboardSnapshotJobResult
	*	- QuickSightClient.DataSet
	*	- QuickSightClient.DataSetPermissions
	*	- QuickSightClient.DataSetRefreshProperties
	*	- KendraClient.DataSource
	*	- QuickSightClient.DataSourcePermissions
	*	- QuickSightClient.Folder
	*	- QuickSightClient.FolderPermissions
	*	- QuickSightClient.FolderResolvedPermissions
	*	- IdentitystoreClient.Group
	*	- IdentitystoreClient.GroupMembership
	*	- QuickSightClient.IAMPolicyAssignment
	*	- QuickSightClient.Ingestion
	*	- QuickSightClient.IpRestriction
	*	- QuickSightClient.Namespace
	*	- QuickSightClient.RefreshSchedule
	*	- QuickSightClient.RoleCustomPermission
	*	- QuickSightClient.TemplateAlias
	*	- QuickSightClient.Template
	*	- QuickSightClient.TemplateDefinition
	*	- QuickSightClient.TemplatePermissions
	*	- QuickSightClient.ThemeAlias
	*	- QuickSightClient.Theme
	*	- QuickSightClient.ThemePermissions
	*	- QuickSightClient.Topic
	*	- QuickSightClient.TopicPermissions
	*	- QuickSightClient.TopicRefresh
	*	- QuickSightClient.TopicRefreshSchedule
	*	- IdentitystoreClient.User
	*	- QuickSightClient.VPCConnection
	*	- QuickSightClient.Analyses
	*	- QuickSightClient.AssetBundleExportJobs
	*	- QuickSightClient.AssetBundleImportJobs
	*	- QuickSightClient.DashboardVersions
	*	- DataExchangeClient.DataSets
	*	- QuickSightClient.FolderMembers
	*	- QuickSightClient.Folders
	*	- IdentitystoreClient.GroupMemberships
	*	- QuickSightClient.IAMPolicyAssignments
	*	- QuickSightClient.IAMPolicyAssignmentsForUser
	*	- QuickSightClient.IdentityPropagationConfigs
	*	- QuickSightClient.Ingestions
	*	- ServiceDiscoveryClient.Namespaces
	*	- QuickSightClient.RefreshSchedules
	*	- QuickSightClient.RoleMemberships
	*	- QuickSightClient.TemplateAliases
	*	- QuickSightClient.ThemeAliases
	*	- QuickSightClient.ThemeVersions
	*	- AmplifyUIBuilderClient.Themes
	*	- QuickSightClient.TopicRefreshSchedules
	*	- QuickSightClient.UserGroups
	*	- QuickSightClient.VPCConnections
	*	- ElasticBeanstalkClient.ApplicationVersions
	*	- WorkSpacesClient.Applications
	*	- ElasticBeanstalkClient.ConfigurationOptions
	*	- ElasticBeanstalkClient.ConfigurationSettings
	*	- ElasticBeanstalkClient.EnvironmentHealth
	*	- ElasticBeanstalkClient.EnvironmentManagedActionHistory
	*	- ElasticBeanstalkClient.EnvironmentManagedActions
	*	- ElasticBeanstalkClient.EnvironmentResources
	*	- ElasticBeanstalkClient.Environments
	*	- ElasticBeanstalkClient.InstancesHealth
	*	- ElasticBeanstalkClient.PlatformVersion
	*	- ElasticBeanstalkClient.AvailableSolutionStacks
	*	- ElasticBeanstalkClient.PlatformBranches
	*	- ElasticBeanstalkClient.PlatformVersions
	*	- KinesisVideoClient.EdgeConfiguration
	*	- KinesisVideoClient.ImageGenerationConfiguration
	*	- KinesisVideoClient.MappedResourceConfiguration
	*	- KinesisVideoClient.MediaStorageConfiguration
	*	- KinesisVideoClient.NotificationConfiguration
	*	- KinesisVideoClient.SignalingChannel
	*	- KinesisVideoClient.EdgeAgentConfigurations
	*	- KinesisVideoClient.SignalingChannels
	*	- IvsClient.PlaybackKeyPairs
	*	- IvsClient.RecordingConfigurations
	*	- IvsClient.StreamKeys
	*	- IvsClient.StreamSessions
	*	- AppSyncClient.ApiKeys
	*	- AppSyncClient.GraphqlApis
	*	- AppSyncClient.ResolversByFunction
	*	- AppSyncClient.Resolvers
	*	- AppSyncClient.SourceApiAssociations
	*	- AppSyncClient.TypesByAssociation
	*	- EMRClient.JobFlows
	*	- EMRClient.NotebookExecution
	*	- EMRClient.ReleaseLabel
	*	- EMRClient.SecurityConfiguration
	*	- EMRClient.Step
	*	- EMRClient.Studio
	*	- EMRClient.BootstrapActions
	*	- EMRClient.InstanceFleets
	*	- EMRClient.InstanceGroups
	*	- ConnectClient.Instances
	*	- EMRClient.NotebookExecutions
	*	- EMRClient.ReleaseLabels
	*	- EMRClient.SecurityConfigurations
	*	- EMRClient.Steps
	*	- EMRClient.StudioSessionMappings
	*	- NimbleClient.Studios
	*	- EMRClient.SupportedInstanceTypes
	*	- AppRunnerClient.Operations
	*	- TranscribeClient.LanguageModel
	*	- TranscribeClient.CallAnalyticsCategories
	*	- TranscribeClient.CallAnalyticsJobs
	*	- TranscribeClient.LanguageModels
	*	- TranscribeClient.MedicalScribeJobs
	*	- TranscribeClient.MedicalTranscriptionJobs
	*	- TranscribeClient.MedicalVocabularies
	*	- TranscribeClient.TranscriptionJobs
	*	- TranscribeClient.Vocabularies
	*	- TranscribeClient.VocabularyFilters
	*	- WorkSpacesClient.Account
	*	- OrganizationsClient.CreateAccountStatus
	*	- OrganizationsClient.EffectivePolicy
	*	- OrganizationsClient.Handshake
	*	- WorkMailClient.Organization
	*	- OrganizationsClient.OrganizationalUnit
	*	- OrganizationsClient.Policy
	*	- OrganizationsClient.AWSServiceAccessForOrganization
	*	- OrganizationsClient.AccountsForParent
	*	- OrganizationsClient.Children
	*	- OrganizationsClient.CreateAccountStatus
	*	- OrganizationsClient.DelegatedAdministrators
	*	- OrganizationsClient.DelegatedServicesForAccount
	*	- OrganizationsClient.HandshakesForAccount
	*	- OrganizationsClient.HandshakesForOrganization
	*	- OrganizationsClient.OrganizationalUnitsForParent
	*	- OrganizationsClient.Parents
	*	- OrganizationsClient.PoliciesForTarget
	*	- OrganizationsClient.Roots
	*	- IoTSiteWiseClient.Actions
	*	- FisClient.ExperimentResolvedTargets
	*	- FisClient.ExperimentTargetAccountConfigurations
	*	- FisClient.ExperimentTemplates
	*	- SageMakerClient.Experiments
	*	- FisClient.TargetAccountConfigurations
	*	- FisClient.TargetResourceTypes
	*	- MediaLiveClient.AccountConfiguration
	*	- IoTAnalyticsClient.Channel
	*	- MediaLiveClient.Input
	*	- MediaLiveClient.InputDevice
	*	- MediaLiveClient.InputDeviceThumbnail
	*	- MediaLiveClient.InputSecurityGroup
	*	- MediaLiveClient.Multiplex
	*	- MediaLiveClient.MultiplexProgram
	*	- MediaConnectClient.Offering
	*	- MediaConnectClient.Reservation
	*	- DataBrewClient.Schedule
	*	- MediaLiveClient.Thumbnails
	*	- MediaLiveClient.InputDeviceTransfers
	*	- MediaLiveClient.InputDevices
	*	- MediaLiveClient.InputSecurityGroups
	*	- MediaLiveClient.Inputs
	*	- MediaLiveClient.MultiplexPrograms
	*	- MediaLiveClient.Multiplexes
	*	- DeviceFarmClient.Offerings
	*	- MediaConnectClient.Reservations
	*	- KafkaClient.ClusterOperation
	*	- KafkaClient.ClusterOperationV2
	*	- KafkaClient.ClusterV2
	*	- MqClient.Configuration
	*	- MqClient.ConfigurationRevision
	*	- KafkaClient.Replicator
	*	- KafkaClient.VpcConnection
	*	- KafkaClient.ClientVpcConnections
	*	- KafkaClient.ClusterOperations
	*	- KafkaClient.ClusterOperationsV2
	*	- KafkaClient.ClustersV2
	*	- MqClient.ConfigurationRevisions
	*	- MqClient.Configurations
	*	- KafkaClient.KafkaVersions
	*	- PanoramaClient.Nodes
	*	- KafkaClient.Replicators
	*	- KafkaClient.ScramSecrets
	*	- KafkaClient.VpcConnections
	*	- ConnectClient.AgentStatus
	*	- ConnectClient.Contact
	*	- ConnectClient.ContactEvaluation
	*	- ConnectClient.ContactFlow
	*	- ConnectClient.ContactFlowModule
	*	- ConnectClient.EvaluationForm
	*	- ConnectClient.HoursOfOperation
	*	- ConnectClient.Instance
	*	- ConnectClient.InstanceStorageConfig
	*	- ConnectClient.PhoneNumber
	*	- ConnectClient.PredefinedAttribute
	*	- ConnectClient.Prompt
	*	- ConnectClient.Queue
	*	- ConnectClient.QuickConnect
	*	- ConnectClient.RoutingProfile
	*	- ConnectClient.TrafficDistributionGroup
	*	- ConnectClient.UserHierarchyGroup
	*	- ConnectClient.UserHierarchyStructure
	*	- ConnectParticipantClient.View
	*	- ConnectClient.Vocabulary
	*	- ConnectClient.AgentStatuses
	*	- ConnectClient.AnalyticsDataAssociations
	*	- ConnectClient.ApprovedOrigins
	*	- ChimeClient.Bots
	*	- ConnectClient.ContactEvaluations
	*	- ConnectClient.ContactFlowModules
	*	- ConnectClient.ContactFlows
	*	- ConnectClient.ContactReferences
	*	- ConnectClient.DefaultVocabularies
	*	- ConnectClient.EvaluationFormVersions
	*	- ConnectClient.EvaluationForms
	*	- ConnectClient.FlowAssociations
	*	- ConnectClient.HoursOfOperations
	*	- ConnectClient.InstanceAttributes
	*	- ConnectClient.InstanceStorageConfigs
	*	- ConnectClient.IntegrationAssociations
	*	- ConnectClient.LambdaFunctions
	*	- ConnectClient.LexBots
	*	- ChimeClient.PhoneNumbers
	*	- ConnectClient.PhoneNumbersV2
	*	- ConnectClient.PredefinedAttributes
	*	- ConnectClient.Prompts
	*	- ConnectClient.QueueQuickConnects
	*	- ConnectClient.QuickConnects
	*	- ConnectClient.RealtimeContactAnalysisSegmentsV2
	*	- ConnectClient.RoutingProfileQueues
	*	- ConnectClient.RoutingProfiles
	*	- ConnectClient.SecurityKeys
	*	- ConnectClient.SecurityProfileApplications
	*	- ConnectClient.SecurityProfilePermissions
	*	- ConnectClient.TaskTemplates
	*	- ConnectClient.TrafficDistributionGroupUsers
	*	- ConnectClient.TrafficDistributionGroups
	*	- ConnectClient.UseCases
	*	- ConnectClient.UserHierarchyGroups
	*	- ConnectClient.UserProficiencies
	*	- ConnectClient.ViewVersions
	*	- ConnectClient.Views
	*	- SMSClient.Apps
	*	- DeviceFarmClient.Artifacts
	*	- AmplifyClient.BackendEnvironments
	*	- AmplifyClient.DomainAssociations
	*	- RUMClient.AppMonitors
	*	- RUMClient.RumMetricsDestinations
	*	- TransferClient.Access
	*	- TransferClient.Agreement
	*	- KafkaConnectClient.Connector
	*	- TransferClient.HostKey
	*	- TransferClient.Profile
	*	- TransferClient.SecurityPolicy
	*	- TransferClient.Server
	*	- TransferClient.Workflow
	*	- TransferClient.Accesses
	*	- TransferClient.Agreements
	*	- MgnClient.Connectors
	*	- TransferClient.HostKeys
	*	- WellArchitectedClient.Profiles
	*	- TransferClient.SecurityPolicies
	*	- MigrationHubStrategyClient.Servers
	*	- EBSClient.ChangedBlocks
	*	- EBSClient.SnapshotBlocks
	*	- InspectorClient.AssessmentRuns
	*	- InspectorClient.AssessmentTargets
	*	- InspectorClient.AssessmentTemplates
	*	- InspectorClient.CrossAccountAccessRole
	*	- InspectorClient.Exclusions
	*	- InspectorClient.Findings
	*	- InspectorClient.ResourceGroups
	*	- InspectorClient.RulesPackages
	*	- InspectorClient.AssessmentRunAgents
	*	- InspectorClient.AssessmentRuns
	*	- InspectorClient.AssessmentTargets
	*	- InspectorClient.AssessmentTemplates
	*	- InspectorClient.EventSubscriptions
	*	- InspectorClient.Exclusions
	*	- AccessAnalyzerClient.Findings
	*	- InspectorClient.RulesPackages
	*	- MediaPackageClient.HarvestJob
	*	- MediaPackageClient.OriginEndpoint
	*	- MediaPackageClient.HarvestJobs
	*	- MediaPackageClient.OriginEndpoints
	*	- EvidentlyClient.Features
	*	- EvidentlyClient.Launches
	*	- EvidentlyClient.SegmentReferences
	*	- EvidentlyClient.Segments
	*	- ECRPUBLICClient.ImageTags
	*	- ECRPUBLICClient.Registries
	*	- IoTDataPlaneClient.NamedShadowsForThing
	*	- IoTDataPlaneClient.RetainedMessages
	*	- ChimeSDKIdentityClient.AppInstanceAdmin
	*	- ChimeSDKIdentityClient.AppInstance
	*	- ChimeSDKIdentityClient.AppInstanceUser
	*	- ChimeSDKMessagingClient.ChannelBan
	*	- ChimeSDKMessagingClient.ChannelMembership
	*	- ChimeSDKMessagingClient.ChannelMembershipForAppInstanceUser
	*	- ChimeSDKMessagingClient.ChannelModeratedByAppInstanceUser
	*	- ChimeSDKMessagingClient.ChannelModerator
	*	- ChimeSDKIdentityClient.AppInstanceAdmins
	*	- ChimeSDKIdentityClient.AppInstanceUsers
	*	- ChimeSDKIdentityClient.AppInstances
	*	- ChimeClient.AttendeeTags
	*	- ChimeSDKMeetingsClient.Attendees
	*	- ChimeSDKMessagingClient.ChannelBans
	*	- ChimeSDKMessagingClient.ChannelMemberships
	*	- ChimeSDKMessagingClient.ChannelMembershipsForAppInstanceUser
	*	- ChimeSDKMessagingClient.ChannelMessages
	*	- ChimeSDKMessagingClient.ChannelModerators
	*	- ChimeSDKMessagingClient.ChannelsModeratedByAppInstanceUser
	*	- ChimeClient.MediaCapturePipelines
	*	- ChimeClient.MeetingTags
	*	- ChimeClient.Meetings
	*	- ChimeClient.PhoneNumberOrders
	*	- ChimeClient.ProxySessions
	*	- ChimeClient.RoomMemberships
	*	- IvschatClient.Rooms
	*	- ChimeClient.SipMediaApplications
	*	- ChimeClient.SipRules
	*	- ChimeClient.SupportedPhoneNumberCountries
	*	- ChimeClient.VoiceConnectorGroups
	*	- ChimeClient.VoiceConnectorTerminationCredentials
	*	- ChimeClient.VoiceConnectors
	*	- ChimeSDKMessagingClient.ChannelFlow
	*	- ChimeSDKMessagingClient.ChannelFlows
	*	- ChimeSDKMessagingClient.ChannelsAssociatedWithChannelFlow
	*	- ChimeSDKMessagingClient.SubChannels
	*	- IoTSiteWiseClient.Action
	*	- PersonalizeClient.Algorithm
	*	- ResiliencehubClient.App
	*	- SageMakerClient.AppImageConfig
	*	- SageMakerClient.Artifact
	*	- SageMakerClient.AutoMLJob
	*	- SageMakerClient.AutoMLJobV2
	*	- SageMakerClient.ClusterNode
	*	- SageMakerClient.CodeRepository
	*	- SageMakerClient.CompilationJob
	*	- SageMakerClient.Context
	*	- SageMakerClient.DataQualityJobDefinition
	*	- WorkLinkClient.Device
	*	- SageMakerClient.DeviceFleet
	*	- SageMakerClient.EdgeDeploymentPlan
	*	- SageMakerClient.EdgePackagingJob
	*	- SageMakerClient.EndpointConfig
	*	- SageMakerClient.Experiment
	*	- SageMakerClient.FeatureGroup
	*	- SageMakerClient.FeatureMetadata
	*	- SageMakerClient.FlowDefinition
	*	- SecurityHubClient.Hub
	*	- SageMakerClient.HubContent
	*	- SageMakerClient.HumanTaskUi
	*	- SageMakerClient.HyperParameterTuningJob
	*	- SageMakerClient.Image
	*	- SageMakerClient.ImageVersion
	*	- SageMakerClient.InferenceComponent
	*	- SageMakerClient.InferenceExperiment
	*	- SageMakerClient.InferenceRecommendationsJob
	*	- SageMakerClient.LabelingJob
	*	- SageMakerClient.LineageGroup
	*	- SageMakerClient.ModelBiasJobDefinition
	*	- SageMakerClient.ModelCard
	*	- SageMakerClient.ModelCardExportJob
	*	- LookoutEquipmentClient.Model
	*	- SageMakerClient.ModelExplainabilityJobDefinition
	*	- SageMakerClient.ModelPackage
	*	- SageMakerClient.ModelPackageGroup
	*	- SageMakerClient.ModelQualityJobDefinition
	*	- SageMakerClient.MonitoringSchedule
	*	- SageMakerClient.NotebookInstance
	*	- SageMakerClient.NotebookInstanceLifecycleConfig
	*	- IoTAnalyticsClient.Pipeline
	*	- SageMakerClient.PipelineDefinitionForExecution
	*	- SageMakerClient.PipelineExecution
	*	- SageMakerClient.ProcessingJob
	*	- DataBrewClient.Project
	*	- SageMakerClient.Space
	*	- SageMakerClient.StudioLifecycleConfig
	*	- SageMakerClient.SubscribedWorkteam
	*	- SageMakerClient.TrainingJob
	*	- SageMakerClient.TransformJob
	*	- SageMakerClient.Trial
	*	- SageMakerClient.TrialComponent
	*	- SageMakerClient.UserProfile
	*	- SageMakerClient.Workforce
	*	- SageMakerClient.Workteam
	*	- SageMakerClient.Algorithms
	*	- SageMakerClient.AppImageConfigs
	*	- SageMakerClient.AutoMLJobs
	*	- SageMakerClient.CandidatesForAutoMLJob
	*	- SageMakerClient.ClusterNodes
	*	- SageMakerClient.CodeRepositories
	*	- SageMakerClient.CompilationJobs
	*	- SageMakerClient.Contexts
	*	- SageMakerClient.DataQualityJobDefinitions
	*	- SageMakerClient.DeviceFleets
	*	- SageMakerClient.EdgeDeploymentPlans
	*	- SageMakerClient.EdgePackagingJobs
	*	- SageMakerClient.EndpointConfigs
	*	- SageMakerClient.FeatureGroups
	*	- SageMakerClient.FlowDefinitions
	*	- SageMakerClient.HubContentVersions
	*	- SageMakerClient.HubContents
	*	- SageMakerClient.Hubs
	*	- SageMakerClient.HumanTaskUis
	*	- SageMakerClient.HyperParameterTuningJobs
	*	- SageMakerClient.ImageVersions
	*	- SageMakerClient.InferenceComponents
	*	- SageMakerClient.InferenceExperiments
	*	- SageMakerClient.InferenceRecommendationsJobSteps
	*	- SageMakerClient.InferenceRecommendationsJobs
	*	- SageMakerClient.LabelingJobs
	*	- SageMakerClient.LabelingJobsForWorkteam
	*	- SageMakerClient.LineageGroups
	*	- SageMakerClient.ModelBiasJobDefinitions
	*	- SageMakerClient.ModelCardExportJobs
	*	- SageMakerClient.ModelCardVersions
	*	- SageMakerClient.ModelCards
	*	- SageMakerClient.ModelExplainabilityJobDefinitions
	*	- SageMakerClient.ModelMetadata
	*	- SageMakerClient.ModelPackageGroups
	*	- SageMakerClient.ModelPackages
	*	- SageMakerClient.ModelQualityJobDefinitions
	*	- LookoutEquipmentClient.Models
	*	- SageMakerClient.MonitoringAlertHistory
	*	- SageMakerClient.MonitoringAlerts
	*	- SageMakerClient.MonitoringExecutions
	*	- SageMakerClient.MonitoringSchedules
	*	- SageMakerClient.NotebookInstanceLifecycleConfigs
	*	- SageMakerClient.NotebookInstances
	*	- SageMakerClient.PipelineExecutionSteps
	*	- SageMakerClient.PipelineParametersForExecution
	*	- SageMakerClient.ProcessingJobs
	*	- SageMakerClient.ResourceCatalogs
	*	- SageMakerClient.Spaces
	*	- SageMakerClient.StageDevices
	*	- SageMakerClient.StudioLifecycleConfigs
	*	- SageMakerClient.SubscribedWorkteams
	*	- SageMakerClient.TrainingJobs
	*	- SageMakerClient.TrainingJobsForHyperParameterTuningJob
	*	- SageMakerClient.TransformJobs
	*	- SageMakerClient.TrialComponents
	*	- SageMakerClient.Trials
	*	- SageMakerClient.UserProfiles
	*	- SageMakerClient.Workforces
	*	- SageMakerClient.Workteams
	*	- CloudControlClient.ResourceRequests
	*	- LakeFormationClient.Resources
	*	- BackupClient.BackupJob
	*	- BackupClient.BackupVault
	*	- BackupClient.CopyJob
	*	- BackupClient.Framework
	*	- BackupClient.GlobalSettings
	*	- BackupClient.ProtectedResource
	*	- BackupClient.RecoveryPoint
	*	- BackupClient.RegionSettings
	*	- BackupClient.ReportJob
	*	- BackupClient.ReportPlan
	*	- BackupClient.RestoreJob
	*	- BackupClient.BackupJobSummaries
	*	- BackupClient.BackupJobs
	*	- BackupClient.BackupPlanTemplates
	*	- BackupClient.BackupPlanVersions
	*	- BackupClient.BackupPlans
	*	- BackupClient.BackupSelections
	*	- BackupClient.BackupVaults
	*	- BackupClient.CopyJobSummaries
	*	- BackupClient.CopyJobs
	*	- BackupClient.Frameworks
	*	- BackupClient.LegalHolds
	*	- BackupClient.ProtectedResourcesByBackupVault
	*	- BackupClient.ProtectedResources
	*	- BackupClient.RecoveryPointsByBackupVault
	*	- BackupClient.RecoveryPointsByLegalHold
	*	- BackupClient.RecoveryPointsByResource
	*	- BackupClient.ReportJobs
	*	- BackupClient.ReportPlans
	*	- BackupClient.RestoreJobSummaries
	*	- BackupClient.RestoreJobsByProtectedResource
	*	- BackupClient.RestoreJobs
	*	- BackupClient.RestoreTestingPlans
	*	- BackupClient.RestoreTestingSelections
	*	- AutoScalingClient.AdjustmentTypes
	*	- AutoScalingClient.AutoScalingGroups
	*	- AutoScalingClient.AutoScalingInstances
	*	- AutoScalingClient.AutoScalingNotificationTypes
	*	- AutoScalingClient.InstanceRefreshes
	*	- AutoScalingClient.LaunchConfigurations
	*	- AutoScalingClient.LifecycleHookTypes
	*	- AutoScalingClient.LifecycleHooks
	*	- AutoScalingClient.LoadBalancerTargetGroups
	*	- ElasticLoadBalancingClient.LoadBalancers
	*	- AutoScalingClient.MetricCollectionTypes
	*	- AutoScalingClient.NotificationConfigurations
	*	- AutoScalingClient.Policies
	*	- AutoScalingClient.ScalingActivities
	*	- AutoScalingClient.ScalingProcessTypes
	*	- AutoScalingClient.TerminationPolicyTypes
	*	- AutoScalingClient.TrafficSources
	*	- AutoScalingClient.WarmPool
	*	- MqClient.Broker
	*	- MqClient.BrokerEngineTypes
	*	- MqClient.BrokerInstanceOptions
	*	- MqClient.Brokers
	*	- CostExplorerClient.CostCategoryDefinition
	*	- CostExplorerClient.CostAllocationTags
	*	- CostExplorerClient.CostCategoryDefinitions
	*	- CostExplorerClient.SavingsPlansPurchaseRecommendationGeneration
	*	- RAMClient.PendingInvitationResources
	*	- RAMClient.PermissionAssociations
	*	- RAMClient.PermissionVersions
	*	- GrafanaClient.Permissions
	*	- RAMClient.Principals
	*	- RAMClient.ReplacePermissionAssociationsWork
	*	- RAMClient.ResourceSharePermissions
	*	- RAMClient.ResourceTypes
	*	- SecurityHubClient.ActionTargets
	*	- DetectiveClient.OrganizationConfiguration
	*	- SecurityHubClient.Products
	*	- SecurityHubClient.Standards
	*	- SecurityHubClient.StandardsControls
	*	- SecurityHubClient.AutomationRules
	*	- SecurityHubClient.ConfigurationPolicies
	*	- SecurityHubClient.ConfigurationPolicyAssociations
	*	- SecurityHubClient.EnabledProductsForImport
	*	- SecurityHubClient.FindingAggregators
	*	- DetectiveClient.Invitations
	*	- DetectiveClient.Members
	*	- DetectiveClient.OrganizationAdminAccounts
	*	- SecurityHubClient.SecurityControlDefinitions
	*	- SecurityHubClient.StandardsControlAssociations
	*	- SchemasClient.CodeBinding
	*	- SchemasClient.Discoverer
	*	- PersonalizeClient.Schema
	*	- SchemasClient.Discoverers
	*	- AppflowClient.ConnectorEntity
	*	- AppflowClient.ConnectorProfiles
	*	- AppflowClient.Connectors
	*	- MediaConnectClient.Flow
	*	- AppflowClient.FlowExecutionRecords
	*	- AppflowClient.ConnectorEntities
	*	- MediaConnectClient.Flows
	*	- QLDBClient.JournalKinesisStream
	*	- QLDBClient.JournalS3Export
	*	- QLDBClient.Ledger
	*	- QLDBClient.JournalKinesisStreamsForLedger
	*	- QLDBClient.JournalS3Exports
	*	- QLDBClient.JournalS3ExportsForLedger
	*	- QLDBClient.Ledgers
	*	- AppRunnerClient.AutoScalingConfiguration
	*	- AppRunnerClient.CustomDomains
	*	- AppRunnerClient.ObservabilityConfiguration
	*	- AppRunnerClient.Service
	*	- AppRunnerClient.VpcConnector
	*	- AppRunnerClient.VpcIngressConnection
	*	- AppRunnerClient.AutoScalingConfigurations
	*	- AppRunnerClient.ObservabilityConfigurations
	*	- AppRunnerClient.ServicesForAutoScalingConfiguration
	*	- AppRunnerClient.VpcConnectors
	*	- AppRunnerClient.VpcIngressConnections
	*	- AppStreamClient.AppBlockBuilderAppBlockAssociations
	*	- AppStreamClient.AppBlockBuilders
	*	- AppStreamClient.AppBlocks
	*	- AppStreamClient.ApplicationFleetAssociations
	*	- AppStreamClient.DirectoryConfigs
	*	- AppStreamClient.Entitlements
	*	- AppStreamClient.ImageBuilders
	*	- AppStreamClient.ImagePermissions
	*	- AppStreamClient.UsageReportSubscriptions
	*	- AppStreamClient.UserStackAssociations
	*	- AppStreamClient.AssociatedFleets
	*	- AppStreamClient.AssociatedStacks
	*	- AppStreamClient.EntitledApplications
	*	- DataSyncClient.Agent
	*	- DataSyncClient.DiscoveryJob
	*	- DataSyncClient.LocationAzureBlob
	*	- DataSyncClient.LocationEfs
	*	- DataSyncClient.LocationFsxLustre
	*	- DataSyncClient.LocationFsxOntap
	*	- DataSyncClient.LocationFsxOpenZfs
	*	- DataSyncClient.LocationFsxWindows
	*	- DataSyncClient.LocationHdfs
	*	- DataSyncClient.LocationNfs
	*	- DataSyncClient.LocationObjectStorage
	*	- DataSyncClient.LocationS3
	*	- DataSyncClient.LocationSmb
	*	- DataSyncClient.StorageSystem
	*	- DataSyncClient.StorageSystemResourceMetrics
	*	- DataSyncClient.StorageSystemResources
	*	- DataSyncClient.Task
	*	- DataSyncClient.TaskExecution
	*	- DataSyncClient.Agents
	*	- DataSyncClient.DiscoveryJobs
	*	- GameLiftClient.Locations
	*	- DataSyncClient.StorageSystems
	*	- DataSyncClient.TaskExecutions
	*	- HealthLakeClient.FHIRDatastore
	*	- HealthLakeClient.FHIRExportJob
	*	- HealthLakeClient.FHIRImportJob
	*	- HealthLakeClient.FHIRDatastores
	*	- HealthLakeClient.FHIRExportJobs
	*	- HealthLakeClient.FHIRImportJobs
	*	- ImagebuilderClient.ComponentBuildVersions
	*	- AmplifyUIBuilderClient.Components
	*	- ImagebuilderClient.ContainerRecipes
	*	- ImagebuilderClient.DistributionConfigurations
	*	- ImagebuilderClient.ImageBuildVersions
	*	- ImagebuilderClient.ImagePackages
	*	- ImagebuilderClient.ImagePipelineImages
	*	- ImagebuilderClient.ImagePipelines
	*	- ImagebuilderClient.ImageRecipes
	*	- ImagebuilderClient.ImageScanFindingAggregations
	*	- ImagebuilderClient.ImageScanFindings
	*	- ImagebuilderClient.InfrastructureConfigurations
	*	- ImagebuilderClient.LifecycleExecutionResources
	*	- ImagebuilderClient.LifecycleExecutions
	*	- ImagebuilderClient.LifecyclePolicies
	*	- ImagebuilderClient.WaitingWorkflowSteps
	*	- ImagebuilderClient.WorkflowBuildVersions
	*	- ImagebuilderClient.WorkflowExecutions
	*	- ImagebuilderClient.WorkflowStepExecutions
	*	- MediaConnectClient.Bridge
	*	- MediaConnectClient.FlowSourceMetadata
	*	- IoTSiteWiseClient.Gateway
	*	- MediaConnectClient.GatewayInstance
	*	- MediaConnectClient.Bridges
	*	- MediaConnectClient.Entitlements
	*	- MediaConnectClient.GatewayInstances
	*	- IoTSiteWiseClient.Gateways
	*	- GuardDutyClient.MalwareScans
	*	- GuardDutyClient.PublishingDestination
	*	- GuardDutyClient.Coverage
	*	- GuardDutyClient.Detectors
	*	- PersonalizeClient.Filters
	*	- WAFClient.IPSets
	*	- GuardDutyClient.PublishingDestinations
	*	- GuardDutyClient.ThreatIntelSets
	*	- AccessAnalyzerClient.AccessPreviewFindings
	*	- AccessAnalyzerClient.AccessPreviews
	*	- AccessAnalyzerClient.AnalyzedResources
	*	- AccessAnalyzerClient.Analyzers
	*	- AccessAnalyzerClient.ArchiveRules
	*	- AccessAnalyzerClient.FindingsV2
	*	- AccessAnalyzerClient.PolicyGenerations
	*	- ElasticTranscoderClient.JobsByPipeline
	*	- ElasticTranscoderClient.JobsByStatus
	*	- PricingClient.PriceLists
	*	- ServerlessApplicationRepositoryClient.ApplicationDependencies
	*	- ServerlessApplicationRepositoryClient.ApplicationVersions
	*	- WorkSpacesClient.AccountModifications
	*	- WorkSpacesClient.ApplicationAssociations
	*	- WorkSpacesClient.BundleAssociations
	*	- WorkSpacesClient.ClientBranding
	*	- WorkSpacesClient.ClientProperties
	*	- WorkSpacesClient.ConnectClientAddIns
	*	- WorkSpacesClient.ConnectionAliasPermissions
	*	- WorkSpacesClient.ConnectionAliases
	*	- WorkSpacesClient.ImageAssociations
	*	- WorkSpacesClient.IpGroups
	*	- WorkSpacesClient.WorkspaceAssociations
	*	- WorkSpacesClient.WorkspaceBundles
	*	- WorkSpacesClient.WorkspaceDirectories
	*	- WorkSpacesClient.WorkspaceImagePermissions
	*	- WorkSpacesClient.WorkspaceImages
	*	- WorkSpacesClient.WorkspaceSnapshots
	*	- WorkSpacesClient.Workspaces
	*	- WorkSpacesClient.WorkspacesConnectionStatus
	*	- WorkSpacesClient.AvailableManagementCidrRanges
	*	- ResourceGroupsTaggingAPIClient.ReportCreation
	*	- EFSClient.AccessPoints
	*	- EFSClient.AccountPreferences
	*	- EFSClient.BackupPolicy
	*	- EFSClient.FileSystemPolicy
	*	- FSxClient.FileSystems
	*	- EFSClient.LifecycleConfiguration
	*	- EFSClient.MountTargetSecurityGroups
	*	- EFSClient.MountTargets
	*	- EFSClient.ReplicationConfigurations
	*	- WorkMailClient.EmailMonitoringConfiguration
	*	- WorkMailClient.Entity
	*	- WorkMailClient.InboundDmarcSettings
	*	- WorkMailClient.MailboxExportJob
	*	- LakeFormationClient.Resource
	*	- WorkMailClient.AccessControlRules
	*	- WorkMailClient.AvailabilityConfigurations
	*	- WorkMailClient.GroupMembers
	*	- WorkMailClient.GroupsForEntity
	*	- WorkMailClient.ImpersonationRoles
	*	- WorkMailClient.MailDomains
	*	- WorkMailClient.MailboxExportJobs
	*	- WorkMailClient.MailboxPermissions
	*	- WorkMailClient.MobileDeviceAccessOverrides
	*	- WorkMailClient.MobileDeviceAccessRules
	*	- WorkMailClient.Organizations
	*	- WorkMailClient.ResourceDelegates
	*	- DeviceFarmClient.DeviceInstances
	*	- DeviceFarmClient.DevicePools
	*	- DeviceFarmClient.NetworkProfiles
	*	- DeviceFarmClient.OfferingPromotions
	*	- DeviceFarmClient.OfferingTransactions
	*	- DeviceFarmClient.RemoteAccessSessions
	*	- DeviceFarmClient.Runs
	*	- DeviceFarmClient.Samples
	*	- DeviceFarmClient.Suites
	*	- DeviceFarmClient.TestGridProjects
	*	- DeviceFarmClient.TestGridSessionActions
	*	- DeviceFarmClient.TestGridSessionArtifacts
	*	- DeviceFarmClient.TestGridSessions
	*	- DeviceFarmClient.Tests
	*	- DeviceFarmClient.UniqueProblems
	*	- DeviceFarmClient.Uploads
	*	- DeviceFarmClient.VPCEConfigurations
	*	- GlacierClient.Vault
	*	- GlacierClient.ProvisionedCapacity
	*	- GlacierClient.TagsForVault
	*	- GlacierClient.Vaults
	*	- ComprehendMedicalClient.EntitiesDetectionV2Job
	*	- ComprehendMedicalClient.ICD10CMInferenceJob
	*	- ComprehendMedicalClient.PHIDetectionJob
	*	- ComprehendMedicalClient.RxNormInferenceJob
	*	- ComprehendMedicalClient.SNOMEDCTInferenceJob
	*	- ComprehendMedicalClient.EntitiesDetectionV2Jobs
	*	- ComprehendMedicalClient.ICD10CMInferenceJobs
	*	- ComprehendMedicalClient.PHIDetectionJobs
	*	- ComprehendMedicalClient.RxNormInferenceJobs
	*	- ComprehendMedicalClient.SNOMEDCTInferenceJobs
	*	- LakeFormationClient.LakeFormationIdentityCenterConfiguration
	*	- LakeFormationClient.Transaction
	*	- LakeFormationClient.DataCellsFilter
	*	- LakeFormationClient.LFTags
	*	- LakeFormationClient.LakeFormationOptIns
	*	- LakeFormationClient.TableStorageOptimizers
	*	- LakeFormationClient.Transactions
	*	- OpsWorksCMClient.Backups
	*	- FSxClient.DataRepositoryAssociations
	*	- FSxClient.DataRepositoryTasks
	*	- FSxClient.FileCaches
	*	- FSxClient.FileSystemAliases
	*	- FSxClient.SharedVpcConfiguration
	*	- FSxClient.StorageVirtualMachines
	*	- IoTSiteWiseClient.AccessPolicy
	*	- IoTSiteWiseClient.Asset
	*	- IoTSiteWiseClient.AssetCompositeModel
	*	- IoTSiteWiseClient.AssetModel
	*	- IoTSiteWiseClient.AssetModelCompositeModel
	*	- IoTSiteWiseClient.AssetProperty
	*	- IoTSiteWiseClient.BulkImportJob
	*	- IoTSiteWiseClient.DefaultEncryptionConfiguration
	*	- IoTSiteWiseClient.GatewayCapabilityConfiguration
	*	- IoTAnalyticsClient.LoggingOptions
	*	- IoTSiteWiseClient.Portal
	*	- IoTSiteWiseClient.StorageConfiguration
	*	- IoTSiteWiseClient.TimeSeries
	*	- IoTSiteWiseClient.AssetModelCompositeModels
	*	- IoTSiteWiseClient.AssetModelProperties
	*	- IoTSiteWiseClient.AssetModels
	*	- IoTSiteWiseClient.AssetProperties
	*	- IoTSiteWiseClient.AssetRelationships
	*	- OutpostsClient.Assets
	*	- IoTSiteWiseClient.AssociatedAssets
	*	- IoTSiteWiseClient.BulkImportJobs
	*	- IoTSiteWiseClient.CompositionRelationships
	*	- IoTSiteWiseClient.Portals
	*	- IoTSiteWiseClient.ProjectAssets
	*	- IoTSiteWiseClient.TimeSeries
	*	- ForecastClient.AutoPredictor
	*	- PersonalizeClient.DatasetGroup
	*	- PersonalizeClient.DatasetImportJob
	*	- ForecastClient.Explainability
	*	- ForecastClient.ExplainabilityExport
	*	- ForecastClient.Forecast
	*	- ForecastClient.ForecastExportJob
	*	- ForecastClient.Monitor
	*	- ForecastClient.PredictorBacktestExportJob
	*	- ForecastClient.Predictor
	*	- ForecastClient.WhatIfAnalysis
	*	- ForecastClient.WhatIfForecast
	*	- ForecastClient.WhatIfForecastExport
	*	- PersonalizeClient.DatasetGroups
	*	- PersonalizeClient.DatasetImportJobs
	*	- ForecastClient.Explainabilities
	*	- ForecastClient.ExplainabilityExports
	*	- ForecastClient.ForecastExportJobs
	*	- ForecastClient.Forecasts
	*	- ForecastClient.MonitorEvaluations
	*	- ForecastClient.Monitors
	*	- ForecastClient.PredictorBacktestExportJobs
	*	- ForecastClient.Predictors
	*	- ForecastClient.WhatIfAnalyses
	*	- ForecastClient.WhatIfForecastExports
	*	- ForecastClient.WhatIfForecasts
	*	- GameLiftClient.Alias
	*	- GameLiftClient.Build
	*	- GameLiftClient.Compute
	*	- GameLiftClient.EC2InstanceLimits
	*	- GameLiftClient.FleetAttributes
	*	- GameLiftClient.FleetCapacity
	*	- GameLiftClient.FleetEvents
	*	- GameLiftClient.FleetLocationAttributes
	*	- GameLiftClient.FleetLocationCapacity
	*	- GameLiftClient.FleetLocationUtilization
	*	- GameLiftClient.FleetPortSettings
	*	- GameLiftClient.FleetUtilization
	*	- GameLiftClient.GameServer
	*	- GameLiftClient.GameServerGroup
	*	- GameLiftClient.GameServerInstances
	*	- GameLiftClient.GameSessionDetails
	*	- GameLiftClient.GameSessionPlacement
	*	- GameLiftClient.GameSessionQueues
	*	- GameLiftClient.GameSessions
	*	- GameLiftClient.Matchmaking
	*	- GameLiftClient.MatchmakingConfigurations
	*	- GameLiftClient.MatchmakingRuleSets
	*	- GameLiftClient.PlayerSessions
	*	- GameLiftClient.RuntimeConfiguration
	*	- GameLiftClient.ScalingPolicies
	*	- GameLiftClient.Script
	*	- GameLiftClient.VpcPeeringAuthorizations
	*	- GameLiftClient.Compute
	*	- WorkLinkClient.Fleets
	*	- GameLiftClient.GameServerGroups
	*	- GameLiftClient.GameServers
	*	- GameLiftClient.Scripts
	*	- SyntheticsClient.Canaries
	*	- SyntheticsClient.CanariesLastRun
	*	- SyntheticsClient.RuntimeVersions
	*	- SyntheticsClient.AssociatedGroups
	*	- CloudSearchClient.AnalysisSchemes
	*	- CloudSearchClient.AvailabilityOptions
	*	- CloudSearchClient.DomainEndpointOptions
	*	- CloudSearchClient.Expressions
	*	- CloudSearchClient.IndexFields
	*	- CloudSearchClient.ScalingParameters
	*	- CloudSearchClient.ServiceAccessPolicies
	*	- CloudSearchClient.Suggesters
	*	- WAFClient.ActivatedRulesInRuleGroup
	*	- WAFClient.ByteMatchSets
	*	- WAFClient.GeoMatchSets
	*	- IvschatClient.LoggingConfigurations
	*	- WAFClient.RateBasedRules
	*	- WAFClient.RegexMatchSets
	*	- WAFClient.RegexPatternSets
	*	- WAFClient.RuleGroups
	*	- WAFClient.SizeConstraintSets
	*	- WAFClient.SqlInjectionMatchSets
	*	- WAFClient.SubscribedRuleGroups
	*	- WAFClient.WebACLs
	*	- WAFClient.XssMatchSets
	*	- ServiceQuotasClient.AWSDefaultServiceQuotas
	*	- ServiceQuotasClient.RequestedServiceQuotaChangeHistoryByQuota
	*	- ServiceQuotasClient.RequestedServiceQuotaChangeHistory
	*	- ServiceQuotasClient.ServiceQuotaIncreaseRequestsInTemplate
	*	- ServiceQuotasClient.ServiceQuotas
	*	- IdentitystoreClient.GroupMembershipsForMember
	*	- SignerClient.SigningJob
	*	- SignerClient.ProfilePermissions
	*	- SignerClient.SigningJobs
	*	- SignerClient.SigningPlatforms
	*	- SignerClient.SigningProfiles
	*	- PersonalizeClient.BatchInferenceJob
	*	- PersonalizeClient.BatchSegmentJob
	*	- PersonalizeClient.Campaign
	*	- PersonalizeClient.DatasetExportJob
	*	- PersonalizeClient.EventTracker
	*	- PersonalizeClient.FeatureTransformation
	*	- PersonalizeClient.Filter
	*	- PersonalizeClient.MetricAttribution
	*	- DataBrewClient.Recipe
	*	- PersonalizeClient.Recommender
	*	- PersonalizeClient.Solution
	*	- PersonalizeClient.SolutionVersion
	*	- PersonalizeClient.BatchInferenceJobs
	*	- PersonalizeClient.BatchSegmentJobs
	*	- PersonalizeClient.Campaigns
	*	- PersonalizeClient.DatasetExportJobs
	*	- PersonalizeClient.EventTrackers
	*	- PersonalizeClient.MetricAttributionMetrics
	*	- PersonalizeClient.MetricAttributions
	*	- DataBrewClient.Recipes
	*	- PersonalizeClient.Recommenders
	*	- PersonalizeClient.SolutionVersions
	*	- PersonalizeClient.Solutions
	*	- KendraClient.AccessControlConfiguration
	*	- KendraClient.Experience
	*	- KendraClient.Faq
	*	- KendraClient.FeaturedResultsSet
	*	- KendraClient.PrincipalMapping
	*	- KendraClient.QuerySuggestionsBlockList
	*	- KendraClient.QuerySuggestionsConfig
	*	- KendraClient.Thesaurus
	*	- KendraClient.AccessControlConfigurations
	*	- KendraClient.DataSourceSyncJobs
	*	- KendraClient.EntityPersonas
	*	- KendraClient.ExperienceEntities
	*	- KendraClient.Experiences
	*	- KendraClient.Faqs
	*	- KendraClient.FeaturedResultsSets
	*	- KendraClient.GroupsOlderThanOrderingId
	*	- KendraClient.QuerySuggestionsBlockLists
	*	- KendraClient.Thesauri
	*	- DataBrewClient.JobRun
	*	- EMRContainersClient.ManagedEndpoint
	*	- EMRContainersClient.VirtualCluster
	*	- DataBrewClient.JobRuns
	*	- EMRContainersClient.ManagedEndpoints
	*	- EMRContainersClient.VirtualClusters
	*	- MemoryDBClient.ACLs
	*	- MemoryDBClient.EngineVersions
	*	- DAXClient.ParameterGroups
	*	- MemoryDBClient.ReservedNodesOfferings
	*	- DAXClient.SubnetGroups
	*	- MemoryDBClient.AllowedNodeTypeUpdates
	*	- AmplifyBackendClient.BackendJobs
	*	- AmplifyBackendClient.S3Buckets
	*	- ElasticLoadBalancingClient.InstanceHealth
	*	- ElasticLoadBalancingClient.LoadBalancerAttributes
	*	- ElasticLoadBalancingClient.LoadBalancerPolicies
	*	- ElasticLoadBalancingClient.LoadBalancerPolicyTypes
	*	- IoTSecureTunnelingClient.Tunnel
	*	- IoTSecureTunnelingClient.Tunnels
	*	- HealthClient.AffectedAccountsForOrganization
	*	- HealthClient.AffectedEntities
	*	- HealthClient.AffectedEntitiesForOrganization
	*	- HealthClient.EntityAggregates
	*	- HealthClient.EntityAggregatesForOrganization
	*	- HealthClient.EventAggregates
	*	- HealthClient.EventDetails
	*	- HealthClient.EventDetailsForOrganization
	*	- HealthClient.EventTypes
	*	- HealthClient.EventsForOrganization
	*	- HealthClient.HealthServiceStatusForOrganization
	*	- AccountClient.Regions
	*	- GrafanaClient.WorkspaceAuthentication
	*	- AmpClient.Workspace
	*	- GrafanaClient.WorkspaceConfiguration
	*	- AmpClient.Workspaces
	*	- DetectiveClient.DatasourcePackages
	*	- DetectiveClient.Graphs
	*	- DetectiveClient.Indicators
	*	- DetectiveClient.Investigations
	*	- ProtonClient.ComponentOutputs
	*	- ProtonClient.ComponentProvisionedResources
	*	- ProtonClient.EnvironmentAccountConnections
	*	- ProtonClient.EnvironmentOutputs
	*	- ProtonClient.EnvironmentProvisionedResources
	*	- ProtonClient.EnvironmentTemplateVersions
	*	- ProtonClient.EnvironmentTemplates
	*	- ProtonClient.RepositorySyncDefinitions
	*	- ProtonClient.ServiceInstanceOutputs
	*	- ProtonClient.ServiceInstanceProvisionedResources
	*	- ProtonClient.ServiceInstances
	*	- ProtonClient.ServicePipelineOutputs
	*	- ProtonClient.ServicePipelineProvisionedResources
	*	- ProtonClient.ServiceTemplateVersions
	*	- ProtonClient.ServiceTemplates
	*	- IoTTwinMakerClient.ComponentTypes
	*	- IoTTwinMakerClient.Entities
	*	- IoTTwinMakerClient.MetadataTransferJobs
	*	- IoTTwinMakerClient.Properties
	*	- IoTTwinMakerClient.Scenes
	*	- IoTTwinMakerClient.SyncJobs
	*	- IoTTwinMakerClient.SyncResources
	*	- MgnClient.JobLogItems
	*	- MgnClient.LaunchConfigurationTemplates
	*	- DrsClient.RecoveryInstances
	*	- DrsClient.RecoverySnapshots
	*	- MgnClient.ReplicationConfigurationTemplates
	*	- DrsClient.SourceNetworks
	*	- MgnClient.SourceServers
	*	- DrsClient.ExtensibleSourceServers
	*	- DrsClient.LaunchActions
	*	- DrsClient.StagingAccounts
	*	- WisdomClient.AssistantAssociations
	*	- WisdomClient.Assistants
	*	- WisdomClient.Contents
	*	- WisdomClient.ImportJobs
	*	- WisdomClient.KnowledgeBases
	*	- WisdomClient.QuickResponses
	*	- AmplifyUIBuilderClient.CodegenJobs
	*	- AmplifyUIBuilderClient.Forms
	*	- KafkaConnectClient.CustomPlugin
	*	- KafkaConnectClient.WorkerConfiguration
	*	- KafkaConnectClient.CustomPlugins
	*	- KafkaConnectClient.WorkerConfigurations
	*	- PanoramaClient.ApplicationInstance
	*	- PanoramaClient.ApplicationInstanceDetails
	*	- PanoramaClient.DeviceJob
	*	- PanoramaClient.Node
	*	- PanoramaClient.NodeFromTemplateJob
	*	- PanoramaClient.PackageImportJob
	*	- PanoramaClient.ApplicationInstanceDependencies
	*	- PanoramaClient.ApplicationInstanceNodeInstances
	*	- PanoramaClient.ApplicationInstances
	*	- PanoramaClient.DevicesJobs
	*	- PanoramaClient.NodeFromTemplateJobs
	*	- PanoramaClient.PackageImportJobs
	*	- FinspaceClient.KxChangesets
	*	- FinspaceClient.KxClusterNodes
	*	- FinspaceClient.KxClusters
	*	- FinspaceClient.KxDatabases
	*	- FinspaceClient.KxDataviews
	*	- FinspaceClient.KxEnvironments
	*	- FinspaceClient.KxScalingGroups
	*	- FinspaceClient.KxUsers
	*	- FinspaceClient.KxVolumes
	*	- ResiliencehubClient.AppAssessment
	*	- ResiliencehubClient.AppVersionAppComponent
	*	- ResiliencehubClient.AppVersion
	*	- ResiliencehubClient.AppVersionResource
	*	- ResiliencehubClient.AppVersionResourcesResolutionStatus
	*	- ResiliencehubClient.AppVersionTemplate
	*	- ResiliencehubClient.DraftAppVersionResourcesImportStatus
	*	- ResiliencehubClient.ResiliencyPolicy
	*	- ResiliencehubClient.AlarmRecommendations
	*	- ResiliencehubClient.AppAssessmentComplianceDrifts
	*	- ResiliencehubClient.AppAssessments
	*	- ResiliencehubClient.AppComponentCompliances
	*	- ResiliencehubClient.AppComponentRecommendations
	*	- ResiliencehubClient.AppInputSources
	*	- ResiliencehubClient.AppVersionAppComponents
	*	- ResiliencehubClient.AppVersionResourceMappings
	*	- ResiliencehubClient.AppVersionResources
	*	- ResiliencehubClient.AppVersions
	*	- ResiliencehubClient.RecommendationTemplates
	*	- ResiliencehubClient.ResiliencyPolicies
	*	- ResiliencehubClient.SopRecommendations
	*	- ResiliencehubClient.SuggestedResiliencyPolicies
	*	- ResiliencehubClient.TestRecommendations
	*	- ResiliencehubClient.UnsupportedAppVersionResources
	*	- AuditManagerClient.AssessmentControlInsightsByControlDomain
	*	- AuditManagerClient.AssessmentFrameworkShareRequests
	*	- AuditManagerClient.AssessmentFrameworks
	*	- AuditManagerClient.AssessmentReports
	*	- AuditManagerClient.Assessments
	*	- AuditManagerClient.ControlDomainInsightsByAssessment
	*	- AuditManagerClient.ControlDomainInsights
	*	- AuditManagerClient.ControlInsightsByControlDomain
	*	- AuditManagerClient.Controls
	*	- AuditManagerClient.KeywordsForDataSource
	*	- WellArchitectedClient.Notifications
	*	- LookoutVisionClient.ModelPackagingJob
	*	- LookoutVisionClient.ModelPackagingJobs
	*	- NimbleClient.EulaAcceptances
	*	- NimbleClient.Eulas
	*	- NimbleClient.LaunchProfileMembers
	*	- NimbleClient.LaunchProfiles
	*	- NimbleClient.StreamingImages
	*	- NimbleClient.StreamingSessionBackups
	*	- NimbleClient.StreamingSessions
	*	- NimbleClient.StudioComponents
	*	- NimbleClient.StudioMembers
	*	- AmpClient.AlertManagerDefinition
	*	- AmpClient.LoggingConfiguration
	*	- AmpClient.RuleGroupsNamespace
	*	- AmpClient.Scraper
	*	- AmpClient.RuleGroupsNamespaces
	*	- AmpClient.Scrapers
	*	- LookoutMetricsClient.Alert
	*	- LookoutMetricsClient.AnomalyDetectionExecutions
	*	- LookoutMetricsClient.AnomalyDetector
	*	- LookoutMetricsClient.MetricSet
	*	- MediaTailorClient.Alerts
	*	- LookoutMetricsClient.AnomalyDetectors
	*	- LookoutMetricsClient.AnomalyGroupRelatedMetrics
	*	- LookoutMetricsClient.AnomalyGroupSummaries
	*	- LookoutMetricsClient.AnomalyGroupTimeSeries
	*	- LookoutMetricsClient.MetricSets
	*	- MigrationHubStrategyClient.AnalyzableServers
	*	- MigrationHubStrategyClient.ApplicationComponents
	*	- MigrationHubStrategyClient.Collectors
	*	- MigrationHubStrategyClient.ImportFileTask
	*	- LookoutEquipmentClient.DataIngestionJob
	*	- LookoutEquipmentClient.InferenceScheduler
	*	- LookoutEquipmentClient.Label
	*	- LookoutEquipmentClient.LabelGroup
	*	- LookoutEquipmentClient.ModelVersion
	*	- LookoutEquipmentClient.RetrainingScheduler
	*	- LookoutEquipmentClient.DataIngestionJobs
	*	- LookoutEquipmentClient.InferenceEvents
	*	- LookoutEquipmentClient.InferenceExecutions
	*	- LookoutEquipmentClient.InferenceSchedulers
	*	- LookoutEquipmentClient.LabelGroups
	*	- LookoutEquipmentClient.Labels
	*	- LookoutEquipmentClient.ModelVersions
	*	- LookoutEquipmentClient.RetrainingSchedulers
	*	- LookoutEquipmentClient.SensorStatistics
	*	- IotDeviceAdvisorClient.SuiteDefinitions
	*	- IotDeviceAdvisorClient.SuiteRuns
	*	- ApplicationCostProfilerClient.ReportDefinitions
	*	- KeyspacesClient.Keyspaces
	*	- DataExchangeClient.DataSetRevisions
	*	- DataExchangeClient.EventActions
	*	- DataExchangeClient.RevisionAssets
	*	- BillingconductorClient.AccountAssociations
	*	- BillingconductorClient.BillingGroupCostReports
	*	- BillingconductorClient.CustomLineItemVersions
	*	- BillingconductorClient.CustomLineItems
	*	- BillingconductorClient.PricingPlansAssociatedWithPricingRule
	*	- BillingconductorClient.PricingPlans
	*	- BillingconductorClient.PricingRulesAssociatedToPricingPlan
	*	- BillingconductorClient.PricingRules
	*	- BillingconductorClient.ResourcesAssociatedToCustomLineItem
	*	- MgnClient.VcenterClients
	*	- MgnClient.ExportErrors
	*	- MgnClient.ImportErrors
	*	- MgnClient.ManagedAccounts
	*	- MgnClient.SourceServerActions
	*	- MgnClient.TemplateActions
	*	- MgnClient.Waves
	*	- MediaStoreClient.Container
	*	- MediaStoreClient.Containers
	*	- GameSparksClient.ExtensionVersions
	*	- GameSparksClient.Games
	*	- GameSparksClient.GeneratedCodeJobs
	*	- GameSparksClient.Snapshots
	*	- GameSparksClient.StageDeployments
	*	- GameSparksClient.Stages
	*	- DataBrewClient.Ruleset
	*	- DataBrewClient.RecipeVersions
	*	- DataBrewClient.Rulesets
	*	- DataBrewClient.Schedules
	*	- PinpointEmailClient.DedicatedIpPools
	*	- PinpointEmailClient.DeliverabilityTestReports
	*	- PinpointEmailClient.DomainDeliverabilityCampaigns
	*	- PinpointEmailClient.EmailIdentities
	*	- OpsWorksClient.AgentVersions
	*	- OpsWorksClient.Apps
	*	- OpsWorksClient.
	*	- OpsWorksClient.Deployments
	*	- OpsWorksClient.EcsClusters
	*	- OpsWorksClient.ElasticIps
	*	- OpsWorksClient.ElasticLoadBalancers
	*	- OpsWorksClient.Layers
	*	- OpsWorksClient.LoadBasedAutoScaling
	*	- OpsWorksClient.MyUserProfile
	*	- OpsWorksClient.OperatingSystems
	*	- OpsWorksClient.Permissions
	*	- OpsWorksClient.RaidArrays
	*	- OpsWorksClient.RdsDbInstances
	*	- OpsWorksClient.ServiceErrors
	*	- OpsWorksClient.StackProvisioningParameters
	*	- OpsWorksClient.StackSummary
	*	- OpsWorksClient.TimeBasedAutoScaling
	*	- OpsWorksClient.UserProfiles
	*	- AppIntegrationsClient.ApplicationAssociations
	*	- AppIntegrationsClient.DataIntegrationAssociations
	*	- AppIntegrationsClient.DataIntegrations
	*	- AppIntegrationsClient.EventIntegrationAssociations
	*	- AppIntegrationsClient.EventIntegrations
	*	- WellArchitectedClient.Answers
	*	- WellArchitectedClient.CheckDetails
	*	- WellArchitectedClient.CheckSummaries
	*	- WellArchitectedClient.LensReviewImprovements
	*	- WellArchitectedClient.LensReviews
	*	- WellArchitectedClient.LensShares
	*	- WellArchitectedClient.Lenses
	*	- WellArchitectedClient.Milestones
	*	- WellArchitectedClient.ProfileNotifications
	*	- WellArchitectedClient.ProfileShares
	*	- WellArchitectedClient.ReviewTemplateAnswers
	*	- WellArchitectedClient.ReviewTemplates
	*	- WellArchitectedClient.ShareInvitations
	*	- WellArchitectedClient.TemplateShares
	*	- WellArchitectedClient.WorkloadShares
	*	- WellArchitectedClient.Workloads
	*	- IoTFleetHubClient.Application
	*	- MTurkClient.AssignmentsForHIT
	*	- MTurkClient.BonusPayments
	*	- MTurkClient.HITs
	*	- MTurkClient.HITsForQualificationType
	*	- MTurkClient.QualificationRequests
	*	- MTurkClient.QualificationTypes
	*	- MTurkClient.ReviewPolicyResultsForHIT
	*	- MTurkClient.ReviewableHITs
	*	- MTurkClient.WorkerBlocks
	*	- MTurkClient.WorkersWithQualificationType
	*	- GreengrassClient.BulkDeploymentDetailedReports
	*	- GreengrassClient.BulkDeployments
	*	- GreengrassClient.ConnectorDefinitionVersions
	*	- GreengrassClient.ConnectorDefinitions
	*	- GreengrassClient.CoreDefinitionVersions
	*	- GreengrassClient.CoreDefinitions
	*	- GreengrassClient.DeviceDefinitionVersions
	*	- GreengrassClient.DeviceDefinitions
	*	- GreengrassClient.FunctionDefinitionVersions
	*	- GreengrassClient.FunctionDefinitions
	*	- GreengrassClient.GroupCertificateAuthorities
	*	- GreengrassClient.GroupVersions
	*	- GreengrassClient.LoggerDefinitionVersions
	*	- GreengrassClient.LoggerDefinitions
	*	- GreengrassClient.ResourceDefinitionVersions
	*	- GreengrassClient.ResourceDefinitions
	*	- GreengrassClient.SubscriptionDefinitionVersions
	*	- GreengrassClient.SubscriptionDefinitions
	*	- ChimeSDKIdentityClient.AppInstanceBot
	*	- ChimeSDKIdentityClient.AppInstanceUserEndpoint
	*	- ChimeSDKIdentityClient.AppInstanceBots
	*	- ChimeSDKIdentityClient.AppInstanceUserEndpoints
	*	- HoneycodeClient.TableDataImportJob
	*	- HoneycodeClient.TableColumns
	*	- HoneycodeClient.TableRows
	*	- SavingsplansClient.SavingsPlanRates
	*	- SavingsplansClient.SavingsPlans
	*	- SavingsplansClient.SavingsPlansOfferingRates
	*	- SavingsplansClient.SavingsPlansOfferings
	*	- CloudDirectoryClient.AppliedSchemaArns
	*	- CloudDirectoryClient.AttachedIndices
	*	- CloudDirectoryClient.DevelopmentSchemaArns
	*	- CloudDirectoryClient.Directories
	*	- CloudDirectoryClient.FacetAttributes
	*	- CloudDirectoryClient.FacetNames
	*	- CloudDirectoryClient.IncomingTypedLinks
	*	- CloudDirectoryClient.Index
	*	- CloudDirectoryClient.ManagedSchemaArns
	*	- CloudDirectoryClient.ObjectAttributes
	*	- CloudDirectoryClient.ObjectChildren
	*	- CloudDirectoryClient.ObjectParentPaths
	*	- CloudDirectoryClient.ObjectParents
	*	- CloudDirectoryClient.ObjectPolicies
	*	- CloudDirectoryClient.OutgoingTypedLinks
	*	- CloudDirectoryClient.PolicyAttachments
	*	- CloudDirectoryClient.PublishedSchemaArns
	*	- CloudDirectoryClient.TypedLinkFacetAttributes
	*	- CloudDirectoryClient.TypedLinkFacetNames
	*	- ShieldClient.Attack
	*	- ShieldClient.AttackStatistics
	*	- ShieldClient.DRTAccess
	*	- ShieldClient.EmergencyContactSettings
	*	- ShieldClient.Protection
	*	- ShieldClient.ProtectionGroup
	*	- ShieldClient.Subscription
	*	- ShieldClient.Attacks
	*	- ShieldClient.ProtectionGroups
	*	- ShieldClient.Protections
	*	- ShieldClient.ResourcesInProtectionGroup
	*	- FMSClient.AdminAccountsForOrganization
	*	- FMSClient.AdminsManagingAccount
	*	- FMSClient.AppsLists
	*	- FMSClient.ComplianceStatus
	*	- FMSClient.DiscoveredResources
	*	- FMSClient.MemberAccounts
	*	- FMSClient.ProtocolsLists
	*	- FMSClient.ResourceSetResources
	*	- FMSClient.ResourceSets
	*	- FMSClient.ThirdPartyFirewallFirewallPolicies
	*	- DAXClient.DefaultParameters
	*	- SWFClient.ActivityType
	*	- SWFClient.WorkflowExecution
	*	- SWFClient.WorkflowType
	*	- SWFClient.ActivityTypes
	*	- SWFClient.ClosedWorkflowExecutions
	*	- SWFClient.OpenWorkflowExecutions
	*	- SWFClient.WorkflowTypes
	*	- OpsWorksCMClient.NodeAssociationStatus
	*	- OpsWorksCMClient.Servers
	*	- MediaTailorClient.LiveSource
	*	- MediaTailorClient.Program
	*	- MediaTailorClient.SourceLocation
	*	- MediaTailorClient.VodSource
	*	- MediaTailorClient.LiveSources
	*	- MediaTailorClient.PlaybackConfigurations
	*	- MediaTailorClient.PrefetchSchedules
	*	- MediaTailorClient.SourceLocations
	*	- MediaTailorClient.VodSources
	*	- NetworkManagerClient.GlobalNetworks
	*	- NetworkManagerClient.Attachments
	*	- NetworkManagerClient.ConnectPeers
	*	- NetworkManagerClient.CoreNetworkPolicyVersions
	*	- NetworkManagerClient.CoreNetworks
	*	- NetworkManagerClient.OrganizationServiceAccessStatus
	*	- NetworkManagerClient.Peerings
	*	- OutpostsClient.CatalogItems
	*	- OutpostsClient.Orders
	*	- OutpostsClient.Outposts
	*	- OutpostsClient.Sites
	*	- WorkLinkClient.AuditStreamConfiguration
	*	- WorkLinkClient.CompanyNetworkConfiguration
	*	- WorkLinkClient.DevicePolicyConfiguration
	*	- WorkLinkClient.FleetMetadata
	*	- WorkLinkClient.IdentityProviderConfiguration
	*	- WorkLinkClient.WebsiteCertificateAuthority
	*	- WorkLinkClient.WebsiteAuthorizationProviders
	*	- WorkLinkClient.WebsiteCertificateAuthorities
	*	- IoTAnalyticsClient.Datastore
	*	- IoTAnalyticsClient.DatasetContents
	*	- IoTAnalyticsClient.Datastores
	*	- KexaAzure.vm
	*	- KexaAzure.mlWorkspaces
	*	- KexaAzure.mlJobs
	*	- KexaAzure.mlComputes
	*	- KexaAzure.mlSchedules
	*	- KexaAzure.storage
	*	- KexaAzure.blob
*/

import { AWSResources } from "../../models/aws/ressource.models";
import { getConfigOrEnvVar, setEnvVar } from "../manageVarEnvironnement.service";
import { DescribeRegionsCommand } from "@aws-sdk/client-ec2";
import { AwsConfig } from "../../models/aws/config.models";

import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { EC2Client, DescribeVolumesCommand, DescribeSecurityGroupsCommand, DescribeInstancesCommand } from "@aws-sdk/client-ec2";
import { RDSClient, DescribeDBInstancesCommand } from "@aws-sdk/client-rds";
import { ECSClient, DescribeClustersCommand } from "@aws-sdk/client-ecs";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import { ECRClient, DescribeRepositoriesCommand } from "@aws-sdk/client-ecr";
import { ResourceGroupsClient, ListGroupsCommand } from "@aws-sdk/client-resource-groups";
import { ResourceGroupsTaggingAPIClient, GetTagKeysCommand } from "@aws-sdk/client-resource-groups-tagging-api";

////////////////////////////////////////////////////////////////////////////////////////////////////////

import { getContext, getNewLogger } from "../logger.service";
const logger = getNewLogger("AWSLogger");

let currentConfig: AwsConfig;


import * as AwsImports from "./imports/awsPackage.import";

interface AwsClient {
	[key: string]: any;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
//// LISTING CLOUD RESOURCES ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function collectData(awsConfig: AwsConfig[]): Promise<AWSResources[] | null> {
    let context = getContext();
    let resources = new Array<Object>();
    for (let oneConfig of awsConfig ?? []) {
        currentConfig = oneConfig;
        let prefix = oneConfig["prefix"]??( awsConfig.indexOf(oneConfig).toString())
        try {
            let awsKeyId = await getConfigOrEnvVar(oneConfig, "AWS_ACCESS_KEY_ID", prefix);
            let awsSecretKey = await getConfigOrEnvVar(oneConfig, "AWS_SECRET_ACCESS_KEY", prefix);
            if (awsKeyId)
                setEnvVar("AWS_ACCESS_KEY_ID", awsKeyId);
            else
                logger.warn(prefix + "AWS_ACCESS_KEY_ID not found");
            if (awsSecretKey)
                setEnvVar("AWS_SECRET_ACCESS_KEY", awsSecretKey);
            else
                logger.warn(prefix + "AWS_SECRET_ACCESS_KEY not found");

            const credentialProvider = fromNodeProviderChain();

            const client = new EC2Client({region: "us-east-1", credentials: credentialProvider});

            const command = new DescribeRegionsCommand({AllRegions: false});
            const response = await client.send(command);
            let gatherAll = false;
            let userRegions = new Array<string>();
            let skip = false;
            if ('regions' in oneConfig) {
                userRegions = oneConfig.regions as Array<string>;
                if (userRegions.length > 0) {
                    userRegions.forEach((userRegion: any) => {
                        let check = false;
                        response.Regions?.forEach((regionObj: any) => {
                            if (userRegion == regionObj.RegionName)
                                check = true;
                        })
                        if (!check) {
                            logger.error("AWS - Config n°" + awsConfig.indexOf(oneConfig) + " Skipped - Regions '" + userRegion + "' is not a valid AWS region.");
                            skip = true;
                        }
                    })
                }
                else
                    gatherAll = true;
            }
            else {
                gatherAll = true;
                context?.log("AWS - No Regions found, gathering all regions...");
                logger.info("AWS - No Regions found, gathering all regions...");
            }
            if (skip)
                continue;
            else if (!gatherAll){
                context?.log("AWS - Config n°" + awsConfig.indexOf(oneConfig) + " correctly loaded user regions.");
                logger.info("AWS - Config n°" + awsConfig.indexOf(oneConfig) + " correctly loaded user regions.");
            }
            if (response.Regions) {
				
				const collectedResults: any[] = [];

                const promises = response.Regions.map(async(region) => {
                    try {
                        if (!gatherAll) {
                            if (!(userRegions.includes(region.RegionName as string)))
                                return;
                        }
						context?.log("Retrieving AWS Region : " + region.RegionName);
						const newResources = await collectAuto(credentialProvider, region.RegionName as string, currentConfig);
						collectedResults.push(newResources);						
                    } catch (e) {
                        logger.error("error in collectAWSData with AWS_ACCESS_KEY_ID: " + oneConfig["AWS_ACCESS_KEY_ID"] ?? null);
                        logger.error(e);
                    }
                });
				await Promise.all(promises);
     
                context?.log("- Listing AWS resources done -");
                logger.info("- Listing AWS resources done -");
				const groupedObjects = groupObjectsByCommonKey(collectedResults);
				console.log(groupedObjects);
                resources.push(collectedResults);
            }
        } catch (e) {
            context?.log("error in AWS connect with AWS_ACCESS_KEY_ID: " + oneConfig["AWS_ACCESS_KEY_ID"] ?? null);
            logger.error("error in AWS connect with AWS_ACCESS_KEY_ID: " + oneConfig["AWS_ACCESS_KEY_ID"] ?? null);
            logger.error(e);
        }
    }
	//console.log(resources);
    return null;
}

function addRegion(resources:any, region:string) {
    for (let resource of resources) {
        resource.region = region;
    }
    return resources;
}

type KeyedObject<T> = Record<string, T>;

function groupObjectsByCommonKey<T>(objects: KeyedObject<T>[]): Record<string, T[]> {
  const groupedObjects: Record<string, T[]> = {};

  objects.forEach((obj) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];

    if (groupedObjects[key]) {
      groupedObjects[key].push(value);
    } else {
      groupedObjects[key] = [value];
    }
  });

  return groupedObjects;
}

async function collectAuto(credential: any, region: string, config: AwsConfig) {
	logger.info("Retrieving AWS Region : " + region);

	let azureRet: any[] = [];
	// RETRIEVE OBJECT BEFORE THIS TO LOOP BEFORE REGION AND EASIER FLATTEN
	let objectToGather = retrieveAwsClients();
	for (const client of objectToGather) {
		const promises = client.map(async (object: any) => {
			const gathered = await gatherAwsObject(credential, region, config, object);
			azureRet = { ...azureRet, ...gathered };
		});
		await Promise.all(promises);
	}
	console.log(azureRet);
	return (azureRet);
}

async function gatherAwsObject(credential: any, region:string, config: AwsConfig, object: ClientResultsInterface) {
  	if(!currentConfig.ObjectNameNeed?.includes(object.clientName + "." + object.objectName)) return null;
	console.log("Gathering:" + object.clientName + "." + object.objectName);
	try {
		const client = new object.clientFunc({region: region, credentials: credential});

		const input = {};
		const command = new object.objectFunc(input);
		const data = await client.send(command);

		let jsonData = JSON.parse(JSON.stringify(data[object.objectName]));
		jsonData = addRegion(jsonData, region);
		logger.debug(region + " - " + object.clientName + "." + object.objectName + " Listing  Done");
		const customJsonObject = {
			[object.clientName + "." + object.objectName]: jsonData
		  };
		return customJsonObject ?? null;
	} catch (err) {
		logger.debug("Error in ec2SGListing: ", err);
		return null;
	}
}

function retrieveAwsClients(): Array<any> {
    let allObjects = [];

    console.log("retrieve clients, related object and function to gather...");

    for (const key of Object.keys(AwsImports)) {
        const currentItem = (AwsImports as { [key: string]: unknown })[key];
        const clientsFromModule = extractObjectsOrFunctions(currentItem, true);
        allObjects.push(clientsFromModule);
    }
	return (allObjects);
}

interface ClientResultsInterface {
	clientName: string;
	clientFunc: new (args: any) => any;
	objectName: string;
	objectFunc: new (args: any) => any;
  };

import {extractObjectBetween} from "../updateCapability.service";

function extractObjectsOrFunctions(module: any, isObject: Boolean): ClientResultsInterface[] {
    const clients: AwsClient = {};
	let clientsMatch: { name: string; func: new () => any }[] = [];
	let clientsResults: ClientResultsInterface[] = [];

    /* Start and End string to match for extract client listing functions */
    /* You can edit those as you wish, addind as much startStrings as you want */ 
    const startStrings =  ["List", "Describe"];
    const endString = "Command";
    let clientName;

    Object.keys(module).forEach((key) => {
        if ((module[key] instanceof Function && module[key].prototype !== undefined && module[key].name.endsWith("Client"))) {
            clientName = module[key].name;
            if (clientName != "Client") {
				clientsMatch.push({ name: clientName, func: module[key] });
                if (clientsMatch.length > 1)
                    logger.warn("WARNING: Multiple client found for AWS objects, gather could be wrong.");
                else if (clientsMatch.length < 1)
					logger.warn("WARNING: No client found for AWS objects, gather could be wrong.");
            }
        }
        if ((module[key] instanceof Function && module[key].prototype !== undefined 
            && module[key].name.endsWith(endString) && startStrings.some(startString => module[key].name.startsWith(startString)))) {
                if (isObject) {
                    const objectName = extractObjectBetween(module[key].name, startStrings, endString);
                    if (clientsMatch.length < 1)
                        clients[key] = objectName;
                    else {
						clientsResults.push({ clientName: clientsMatch[clientsMatch.length - 1].name, 
							clientFunc: clientsMatch[clientsMatch.length - 1].func,
							 objectName: objectName as string, objectFunc: module[key] });
                        clients[key] = clientsMatch[clientsMatch.length - 1].name + "." + objectName + "." + module[key].name;
					}
                }
                else
                    clients[key] = module[key];
        }
    });
    return clientsResults;
}

async function tagsValueListing(client: ResourceGroupsTaggingAPIClient, region: string): Promise<any> {
    if(!currentConfig.ObjectNameNeed?.includes("tagsValue")) return null;
    try {
        const input = {};
        const dataKeys = await client.send(new GetTagKeysCommand(input));
        const jsonDataKeys = JSON.parse(JSON.stringify(dataKeys.TagKeys));
        let jsonData: any[] = [];
        for (const element of jsonDataKeys) {
            const newData = { 
                Value: element,
                Region: region,
            };
            jsonData.push(newData);
        }
        logger.debug(region + " - Tags Done");
        return jsonDataKeys ?? null;
    } catch (err) {
        logger.debug("Error in Tags Value Listing: ", err);
        return null;
    }
}