sap.ui.jsview("demoRoutingFramework.demorouting.ListView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demoRoutingFramework.demorouting.ListView
	*/ 
	getControllerName : function() {
		return "demoRoutingFramework.demorouting.ListView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demoRoutingFramework.demorouting.ListView
	*/ 
	createContent : function(oController) {
		debugger;
 		return new sap.m.Page({
			title: "List View",
			content: [
				new sap.m.Button({
					text: "Navigate",
					press:()=>{
						debugger;
						let oRouter = oController.getOwnerComponent().getRouter();
						if(oRouter){
							oRouter.navTo("Details");
						}
					}
				}),
				new sap.m.List({
					items:[]
				})
			]
		});
	}

});