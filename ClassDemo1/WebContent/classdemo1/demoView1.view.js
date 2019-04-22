sap.ui.jsview("classdemo1.demoView1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf classdemo1.demoView1
	*/ 
	getControllerName : function() {
		return "classdemo1.demoView1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf classdemo1.demoView1
	*/ 
	createContent : function(oController) {
		debugger;
 		return new sap.m.Page({
			title: "Test Demo",
			content: [
				new sap.m.Button({
					text: "Test",
					press:()=>{
						console.log("Test Demo Button1");
					}
				}),
				new sap.m.Input({
					value: "TestTtasds"
				}),
				new sap.m.Button({
					"text": "Test1",
					press: [[10,20,30],oController.btnEvent]
//					press: (oEvt) =>{
//						oController.btnEvent(oEvt,{"action":"Press"});
//					},
//					press: oController.btnEvent(this)
				})
			]
		});
	}

});