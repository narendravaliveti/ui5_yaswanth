sap.ui.controller("binding_test1.test1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf binding_test1.test1
*/
//	onInit: function() {
//
//	},
	signup_form(){
		debugger
		var first=this.oView.mAggregations.content[0].mAggregations.content[0].getValue();
		var last=this.oView.mAggregations.content[0].mAggregations.content[1].getValue();
		var id=this.oView.mAggregations.content[0].mAggregations.content[2].getValue();
		
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf binding_test1.test1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf binding_test1.test1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf binding_test1.test1
*/
//	onExit: function() {
//
//	}

});