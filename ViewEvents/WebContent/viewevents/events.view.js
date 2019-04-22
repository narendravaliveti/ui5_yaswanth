sap.ui.jsview("viewevents.events", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf viewevents.events
	*/ 
	getControllerName : function() {
		debugger;
		return "viewevents.events";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf viewevents.events
	*/ 
	createContent : function(oController) {
		debugger;
 		return new sap.m.Page({
			title: "Title",
			content: [
				new sap.m.Button({
					text:"navigate",
					press:()=>{
						debugger;
						app.to(page1);
//						this.destroy();
					}
				})
			]
		});
	}

});