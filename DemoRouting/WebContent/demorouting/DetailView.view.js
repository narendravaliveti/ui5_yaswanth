sap.ui.jsview("demoRoutingFramework.demorouting.DetailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demorouting.DetailView
	*/ 
	getControllerName : function() {
		return "demoRoutingFramework.demorouting.DetailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demorouting.DetailView
	*/ 
	createContent : function(oController) {
		debugger;
 		return new sap.m.Page({
			title: "Details View",
			content: [
				
			]
		});
	}

});