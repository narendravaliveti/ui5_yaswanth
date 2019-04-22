jQuery.sap.declare("demoRoutingFramework.Component");
sap.ui.core.UIComponent.extend("demoRoutingFramework.Component",{
	metadata:{
		"rootView": {
			"viewName":"demoRoutingFramework.demorouting.App",
			"type":"JS"
		},
		"routing":{
			"config":{
				"routerClass":"sap.m.routing.Router",
				"viewType" : "JS",
				"viewPath" : "demoRoutingFramework.demorouting",
				"controlId":"rootApp",
				"controlAggregation":"pages",
				"async":true
			},
			"routes":[
				{
					"pattern":"",
					"name": "List",
					"target":"ListView"
				},
				{
					"pattern":"Details",
					"name":"Details",
					"target":"DetailView"
				}
			],
			"targets":{
				"ListView":{
					"viewName": "ListView"
				},
				"DetailView":{
					"viewName":"DetailView"
				}
			}
		}
	},
	init:function(){
		debugger;
		// calling base component's init function
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		this.getRouter().initialize();
	}
});