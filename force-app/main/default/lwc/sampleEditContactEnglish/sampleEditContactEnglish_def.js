export const OMNIDEF = {"userTimeZone":-420,"userProfile":"System Administrator","userName":"dprieto-0858427024@industryapps.com","userId":"0055e000003po6PAAQ","userCurrencyCode":"USD","timeStamp":"2021-06-18T10:49:49.455Z","sOmniScriptId":"a295e0000009h8aAAA","sobjPL":{},"RPBundle":"","rMap":{},"response":null,"propSetMap":{"stepChartPlacement":"right","disableUnloadWarn":true,"errorMessage":{"custom":[]},"consoleTabIcon":"custom:custom18","consoleTabTitle":null,"rtpSeed":false,"showInputWidth":false,"currencyCode":"","autoFocus":false,"pubsub":false,"message":{},"ssm":false,"wpm":false,"consoleTabLabel":"New","cancelRedirectTemplateUrl":"vlcCancelled.html","cancelRedirectPageName":"OmniScriptCancelled","cancelSource":"%ContextId%","allowCancel":true,"cancelType":"SObject","visualforcePagesAvailableInPreview":{},"hideStepChart":true,"timeTracking":true,"knowledgeArticleTypeQueryFieldsMap":{},"lkObjName":null,"bLK":false,"enableKnowledge":false,"trackingCustomData":{},"seedDataJSON":{},"elementTypeToHTMLTemplateMapping":{},"autoSaveOnStepNext":false,"saveURLPatterns":{},"saveObjectId":"%ContextId%","saveContentEncoded":false,"saveForLaterRedirectTemplateUrl":"vlcSaveForLaterAcknowledge.html","saveForLaterRedirectPageName":"sflRedirect","saveExpireInDays":null,"saveNameTemplate":null,"allowSaveForLater":true,"persistentComponent":[{"modalConfigurationSetting":{"modalSize":"lg","modalController":"ModalProductCtrl","modalHTMLTemplateId":"vlcProductConfig.html"},"itemsKey":"cartItems","id":"vlcCart","responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false},{"modalConfigurationSetting":{"modalSize":"lg","modalController":"","modalHTMLTemplateId":""},"itemsKey":"knowledgeItems","id":"vlcKnowledge","postTransformBundle":"","preTransformBundle":"","remoteOptions":{"postTransformBundle":"","preTransformBundle":""},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","label":"","render":false}]},"prefillJSON":"{}","lwcId":"62eac84b-3bac-83dc-e86f-a265ab8e8fd4","labelMap":{"ContactPhone":"StepContact:ContactPhone","LineBreak2":"StepContact:LineBreak2","ContactEmail":"StepContact:ContactEmail","LineBreak1":"StepContact:LineBreak1","ContactName":"StepContact:ContactName","NavigateAction1":"NavigateAction1","IPSaveContactDetails":"IPSaveContactDetails","StepContact":"StepContact","IPGetContactDetails":"IPGetContactDetails"},"labelKeyMap":{},"errorMsg":"","error":"OK","dMap":{},"depSOPL":{},"depCusPL":{},"cusPL":{},"children":[{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"IPGetContactDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"None","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"ContactId":"%ContextId%"},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"sample_getContactDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"IPGetContactDetails","level":0,"indexInParent":0,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPGetContactDetails","lwcId":"lwc0"},{"type":"Step","propSetMap":{"HTMLTemplateId":"","conditionType":"Hide if False","knowledgeOptions":{"typeFilter":"","remoteTimeout":30000,"dataCategoryCriteria":"","keyword":"","publishStatus":"Online","language":"English"},"remoteOptions":{},"remoteTimeout":30000,"remoteMethod":"","remoteClass":"","showPersistentComponent":[false,false],"instruction":"","completeMessage":"Are you sure you want to complete the script?","completeLabel":"Complete","saveMessage":"Are you sure you want to save it for later?","saveLabel":"Save for later","cancelMessage":"Are you sure?","cancelLabel":"Cancel","nextWidth":3,"nextLabel":"Next","previousWidth":3,"previousLabel":"Previous","validationRequired":true,"disOnTplt":false,"label":"Contact Details","show":null,"uiElements":{"StepContact":"","ContactName":"","ContactEmail":"","ContactPhone":""},"aggElements":{}},"offSet":0,"name":"StepContact","level":0,"indexInParent":1,"bHasAttachment":false,"bEmbed":false,"response":null,"inheritShowProp":null,"children":[{"response":null,"level":1,"indexInParent":0,"eleArray":[{"type":"Text","rootIndex":1,"response":null,"propSetMap":{"label":"Name","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"readOnly":true,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":4},"name":"ContactName","level":1,"JSONPath":"StepContact:ContactName","indexInParent":0,"index":0,"children":[],"bHasAttachment":false,"bText":true,"lwcId":"lwc10-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":1,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"HTMLTemplateId":"","padding":0,"disOnTplt":false,"label":"LineBreak1","show":null},"name":"LineBreak1","level":1,"JSONPath":"StepContact:LineBreak1","indexInParent":1,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc11-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":2,"eleArray":[{"type":"Email","rootIndex":1,"response":null,"propSetMap":{"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","ptrnErrText":"","helpText":"","help":false,"readOnly":false,"repeatClone":false,"repeat":false,"required":true,"inputWidth":12,"showInputWidth":false,"controlWidth":4,"disOnTplt":false,"label":"Email","show":null},"name":"ContactEmail","level":1,"JSONPath":"StepContact:ContactEmail","indexInParent":2,"index":0,"children":[],"bHasAttachment":false,"bEmail":true,"lwcId":"lwc12-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":3,"eleArray":[{"type":"Line Break","rootIndex":1,"response":null,"propSetMap":{"HTMLTemplateId":"","padding":0,"disOnTplt":false,"label":"LineBreak2","show":null},"name":"LineBreak2","level":1,"JSONPath":"StepContact:LineBreak2","indexInParent":3,"index":0,"children":[],"bHasAttachment":false,"bLineBreak":true,"lwcId":"lwc13-0"}],"bHasAttachment":false},{"response":null,"level":1,"indexInParent":4,"eleArray":[{"type":"Telephone","rootIndex":1,"response":null,"propSetMap":{"label":"Phone","disOnTplt":false,"hide":false,"HTMLTemplateId":"","debounceValue":0,"accessibleInFutureSteps":false,"conditionType":"Hide if False","show":null,"maxLength":255,"minLength":0,"ptrnErrText":"","pattern":"","mask":"","helpText":"","help":false,"defaultValue":null,"readOnly":false,"repeatLimit":null,"repeatClone":false,"repeat":false,"required":false,"inputWidth":12,"showInputWidth":false,"controlWidth":4},"name":"ContactPhone","level":1,"JSONPath":"StepContact:ContactPhone","indexInParent":4,"index":0,"children":[],"bHasAttachment":false,"bTelephone":true,"lwcId":"lwc14-0"}],"bHasAttachment":false}],"bAccordionOpen":false,"bAccordionActive":false,"bStep":true,"isStep":true,"JSONPath":"StepContact","lwcId":"lwc1"},{"type":"Integration Procedure Action","propSetMap":{"disOnTplt":false,"enableActionMessage":false,"enableDefaultAbort":false,"errorMessage":{"default":null,"custom":[]},"label":"IPSaveContactDetails","svgIcon":"","svgSprite":"","pubsub":false,"message":{},"ssm":false,"wpm":false,"HTMLTemplateId":"","show":null,"showPersistentComponent":[false,false],"redirectPreviousWidth":3,"redirectPreviousLabel":"Previous","redirectNextWidth":3,"redirectNextLabel":"Next","redirectTemplateUrl":"vlcAcknowledge.html","redirectPageName":"","validationRequired":"None","failureAbortMessage":"Are you sure?","failureGoBackLabel":"Go Back","failureAbortLabel":"Abort","failureNextLabel":"Continue","postMessage":"Done","inProgressMessage":"In Progress","extraPayload":{"":null},"responseJSONNode":"","responseJSONPath":"","sendJSONNode":"","sendJSONPath":"","postTransformBundle":"","preTransformBundle":"","remoteTimeout":30000,"remoteOptions":{"chainable":false,"useFuture":false,"postTransformBundle":"","preTransformBundle":""},"useContinuation":false,"integrationProcedureKey":"sample_saveContactDetails","controlWidth":12,"aggElements":{}},"offSet":0,"name":"IPSaveContactDetails","level":0,"indexInParent":2,"bHasAttachment":false,"bEmbed":false,"bIntegrationProcedureAction":true,"JSONPath":"IPSaveContactDetails","lwcId":"lwc2"},{"type":"Navigate Action","propSetMap":{"targetName":"Contact","disOnTplt":false,"targetLWCLayoutOptions":["lightning","newport"],"targetLWCLayout":"lightning","replaceOptions":[{"value":false,"label":"No"},{"value":true,"label":"Yes"}],"replace":true,"iconPositionOptions":["left","right"],"iconPosition":"left","iconVariant":"","iconName":"","variantOptions":["brand","outline-brand","neutral","success","destructive","text-destructive","inverse","link"],"targetTypeOptions":["Component","Current Page","Knowledge Article","Named Page","Navigation Item","Object","Record","Record Relationship","Web Page","Vlocity OmniScript"],"targetId":"%ContextId%","targetFilter":"Recent","recordActionOptions":["clone","edit","view"],"recordAction":"view","objectActionOptions":["home","list","new"],"objectAction":"home","label":"NavigateAction1","message":{},"pubsub":true,"variant":"brand","HTMLTemplateId":"","show":null,"validationRequired":null,"targetType":"Record","controlWidth":12,"aggElements":{}},"offSet":0,"name":"NavigateAction1","level":0,"indexInParent":3,"bHasAttachment":false,"bEmbed":false,"bNavigate":true,"JSONPath":"NavigateAction1","lwcId":"lwc3"}],"bReusable":false,"bpVersion":1,"bpType":"sample","bpSubType":"editContact","bpLang":"English","bHasAttachment":false,"lwcVarMap":{}};