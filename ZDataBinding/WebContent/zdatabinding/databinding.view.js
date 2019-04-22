sap.ui.jsview("zdatabinding.databinding", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zdatabinding.databinding
	*/ 
	getControllerName : function() {
		return "zdatabinding.databinding";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zdatabinding.databinding
	*/ 
	createContent : function(oController) {
		let oData = {
			"companyDetails":{
				"id":"00101102",
				"name":"Pivox",
				"place": "Guntur",
				"employees":[
					{"id":"1101","name":"Narendra","designation":"Jr. Software Developer"},
					{"id":"1102","name":"Yashwanth","designation":"Sr. Software Developer"},
					{"id":"1103","name":"Venkat","designation":"Team Leader"},
					{"id":"1104","name":"Drona","designation":"Admin"},
					{"id":"1105","name":"Vasundhara","designation":"CEO"}]
			}
		};
		let oModel =  new sap.ui.model.json.JSONModel(oData);
		oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
		
		let oModel1 =  new sap.ui.model.json.JSONModel({
			"companyDetails":{
				"name":"JRT"	
			}
		});
		let oModel2 =  new sap.ui.model.json.JSONModel({
			"companyDetails":{
				"name":"IBM"	
			}
		});
		this.setModel(oModel, "companyModel"); // Named Model
		this.setModel(oModel1); // Nameless Model
//		this.setModel(oModel2); // Nameless Model
 		return new sap.m.Page({
			title: "Title",
			content: [
				new sap.m.Input({
					value: "{companyModel>/companyDetails/id}"
				}),
				new sap.m.Input({
					value: "{companyModel>/companyDetails/name}"
				}),
				new sap.m.Input({
					value: "{companyModel>/companyDetails/place}"
				}),
				new sap.m.Toolbar({
					content:[
						new sap.m.Title({
							text: "Employees"
						})
					]
				}),
				new sap.m.List({
//					items:{
//						path: "companyModel>/companyDetails/employees",
//						factory:(sIdx, oContext)=>{
//							debugger;
//							return new sap.m.StandardListItem({
////								title: oContext.getObject().id,
////								description: oContext.getObject().name,
////								info: oContext.getObject().designation
//								
//								
//								title: "{companyModel>id}",
//								description: "{companyModel>name}",
//								info: "{companyModel>" + oContext.getPath() + "/name}"
////								info: "{companyModel>designation}"
//							});
//						}
//					}
				}).bindAggregation("items", 
						"companyModel>/companyDetails/employees",
						(sIdx, oContext)=>{
							debugger;
							return new sap.m.StandardListItem({
		//						title: oContext.getObject().id,
		//						description: oContext.getObject().name,
		//						info: oContext.getObject().designation
								
								
								title: "{companyModel>id}",
								description: "{companyModel>name}",
//								info: "{companyModel>" + oContext.getPath() + "/name}"
		//						info: "{companyModel>designation}"
							}) 
						}),
						
						
						// Name less data binding control
						new sap.m.Input({
							value: "{/companyDetails/name}"
						}),
						new sap.m.Input({
							value: "{/companyDetails/name}"
						})
			]
		});
 		
	}

});