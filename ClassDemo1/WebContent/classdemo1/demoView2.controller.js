sap.ui.controller("classdemo1.demoView2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf classdemo1.demoView2
*/
//	onInit: function() {
//
//	},
	btnEvent1(oEvt, oObj){
		debugger;
//		console.log("Button Event");
		alert("Test");
		app.to(page1);
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf classdemo1.demoView2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf classdemo1.demoView2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf classdemo1.demoView2
*/
//	onExit: function() {
//
//	}

});