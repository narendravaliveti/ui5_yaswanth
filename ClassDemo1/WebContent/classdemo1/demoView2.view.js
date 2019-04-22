sap.ui.jsview("classdemo1.demoView2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf classdemo1.demoView2
	*/ 
	getControllerName : function() {
		return "classdemo1.demoView2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf classdemo1.demoView2
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Demo view2",
			content: [
				new sap.m.Input({
					value: "Demo view2"
				})
			]
		});
	}

});