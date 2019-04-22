sap.ui.jsview("bidforx.alhome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bidforx.alhome
	*/ 
	getControllerName : function() {
		return "bidforx.home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bidforx.alhome
	*/ 
	createContent : function(oController) {
		this.form_acc=new sap.ui.layout.form.Form({
    		title: new sap.ui.core.Title({text:"USER DETAILS"}),
    		visible:false,
    		layout:[
    			new sap.ui.layout.form.FormLayout({
    				backgroundDesign:sap.ui.layout.BackgroundDesign.Translucent
    			})
    		],
    	    formContainers:[
    	    	new sap.ui.layout.form.FormContainer({
    	    		formElements:[
    	    			new sap.ui.layout.form.FormElement({
    	    			label:"name",
    	    			fields:[
    	    				new sap.m.Text("login_acc_name",{
    	    					text:""
    	    				}),
    	    				new sap.m.Text("login_acc_mail",{
    	    					text:""
    	    				})
    	    			]

    	    			})
    	    		]
    	    	})
    	    ]
    			
    	});
		
 		return new sap.m.Page({
 			title: "BIDFORX",
			
			content: [
				
				this.form_acc
			],
			subHeader:new sap.m.Bar({
				
			
				contentLeft:[
					 new sap.m.MenuButton({
					    	icon:"sap-icon://menu2",
					    	
					    	menu:[
					    		new sap.m.Menu({
					    			items:[
					    				new sap.m.MenuItem("username_menu",{
					    					icon:"sap-icon://customer",
					    				    text:"My Account",
					    				    press:[oController.my_account,oController]
					    				}),
					    				new sap.m.MenuItem({
					    					icon:"sap-icon://competitor",
					    				    text:"My Wins"
					    				}),
					    				new sap.m.MenuItem({
					    					icon:"sap-icon://wallet",
					    				    text:"Wallet"
					    				}),
					    			]
					    		})
					    	]
					    	
					    }),
					
					new sap.m.Button({
						text:"ON GOING"
					}),	
					new sap.m.Button({
						text:"COMMIMG SOON"
					}),	
					new sap.m.Button({
						text:"COMPLETED"
					})
				    ],
			contentRight:[	
				new sap.m.Button({
				text:"LOGOUT",press:[oController.logout,oController ]
				}),				
				new sap.m.Input({
					placeholder:"SEARCH BOX"
				})
				]
			}),
			footer:new sap.m.Bar({ 
				contentLeft:[
					new sap.m.Button({
						text:"Contact US",
						//icon:"sap-icon://world"
					    icon:"sap-icon://customer-and-contacts"
					}),
					new sap.m.Button({
						text:"Mail",
						icon:"sap-icon://email"
					}),
					new sap.m.Button({
						text:"Call",
						icon:"sap-icon://call"
					})					
				     ],
			   contentRight:[
				   new sap.m.Text({
						text:"Copyright"
					}),
				   new sap.m.Button({
						text:" 2018",
						icon:"sap-icon://sap-ui5"
					}),
					new sap.m.Text({
						text:"All rights reserved."
					})
			   ]
			})
		
			
		});
	}

});