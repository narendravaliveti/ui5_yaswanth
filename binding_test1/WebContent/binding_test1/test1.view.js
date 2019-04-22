sap.ui.jsview("binding_test1.test1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf binding_test1.test1
	*/ 
	getControllerName : function() {
		return "binding_test1.test1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf binding_test1.test1
	*/ 
	createContent : function(oController) {
		this.a=new sap.m.Button({
			text:"SIGN UP",
			
			type:sap.m.ButtonType.Emphasized,
			width: "30%",
			//press:[oController.signup_form,oController]
			press:function(oController){
				debugger
				alert("abcd");
			}
		});
			let oData={
				"firstname":"yaswanth",
				"lastname":"kumar",
				"id":"13004252"				
			};
			let oData1={
					"persondetails":[
						{"firstname":"yaswanth","lastname":"kumar","id":"13004252"},
						{"firstname":"praveen","lastname":"kumar","id":"13004146"},
						{"firstname":"bhargav","lastname":"kris","id":"13004013"},
						{"firstname":"harsha","lastname":"kumar","id":"13004119"}
					]
			};
			let oModel = new sap.ui.model.json.JSONModel(oData);
			let oModel2=new sap.ui.model.json.JSONModel(oData1);
			let oModel1=new sap.ui.model.json.JSONModel({
				"comp":{
					"dest":"jr"
				}
			});
			//named model
			this.setModel(oModel,"mname1");
			this.setModel(oModel2,"pdetails");
			//unnamedmodel
			this.setModel(oModel1);
	 		return new sap.m.Page({
				title: "Title",
				content: [
					new sap.m.Input({
					//	value:oData.firstname
						value:"{mname1>/persondetails/firstname}"
					}),
					new sap.m.Input({
						value:""
					}),
					new sap.m.Input({
						value:oData.id
					}),
					new sap.m.Input({
						value:"{/comp/dest}"
					}),
					this.a,
					new sap.m.List({
						items:{
							path:"pdetails>/persondetails",
							factory:(sIdx, oContext)=>{
								debugger
								return new sap.m.StandardListItem({
									title:"{pdetails>firstname}",
									description: "{pdetails>lastname}",
									info: "{pdetails>id}"
								});
							}
						}
					})
//						.bindAggregation("items", 
//							"pdetails>/persondetails",
//							(sIdx, oContext)=>{
//								//debugger;
//								return new sap.m.StandardListItem({						
//									title:"{pdetails>firstname}",
//									description: "{pdetails>lastname}",
//									info: "{pdetails>id}"
//								}) 
//							}),

				
				]
			});
		}

});