let definition = 
                {"states":[{"fields":[{"name":"['CaseNumber']","label":"Number","displayLabel":"['CaseNumber']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['CaseOpenDate']","label":"Date Opened","displayLabel":"['CaseOpenDate']","type":"date","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['CaseStatus']","label":"Status","displayLabel":"['CaseStatus']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false},{"name":"['CaseSubject']","label":"Subject","displayLabel":"['CaseSubject']","type":"string","fieldType":"standard","group":"Custom Properties","collapse":true,"editing":false}],"conditions":{"group":[{"field":"$scope.data.status","operator":"===","value":"'active'","type":"system"}]},"definedActions":{"actions":[{"type":"Vlocity Action","id":"team Update Case","displayName":"Update Case","iconName":"action:description","collapse":true,"isCustomAction":false,"hasExtraParams":false}]},"name":"Active","lwc":{"MasterLabel":"cardMiniActive","DeveloperName":"cardMiniActive","Id":"0Rb5e000001gu7gSAM","name":"cardMiniActive"},"isSmartAction":false,"smartAction":{},"sObjectType":"Case","actionCtxId":"['CaseId']"}],"filter":{},"dataSource":{"type":"IntegrationProcedures","value":{"ipMethod":"sample_getCaseList","optionsMap":{"vlcClass":"vlocity_cmt.IntegrationProcedureService"},"inputMap":{"AccountId":"{{params.id}}"},"resultVar":"['Cases']"},"contextVariables":[{"name":"params.id","val":"0015e00000AsdJVQAS"}]},"title":"Case Details","enableLwc":true,"sessionVars":[{"name":"leftIcon","val":"new_case"}],"GlobalKey__c":"team Case Details/vlocityDev/1/1594254629980"}; 
            export default definition