sap.ui.jsview("bidforx.home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bidforx.home
	*/ 
	getControllerName : function() {
		return "bidforx.home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bidforx.home
	*/ 
	createContent : function(oController) {
		
		var oView2 = this;
		oView2.admin_check="true";
		this.oData={
				"login_user_details":[
					{"user1":"admin","pass1":"admin","mail1":"admin mail"},
					{"user1":"yaswanth","pass1":"yaswanth","mail1":"yaswanth"}
				],
//				"signupInput":[
//					
//				]
		}
		this.oModel=new sap.ui.model.json.JSONModel(this.oData);
		this.setModel(this.oModel,"user_account");
		
		oView2.list_acc=new sap.m.List({
			visible:false,
			items:{
			path:"user_account>/login_user_details",
			factory:(sIdx, oContext)=>{
				return new sap.m.StandardListItem({					
					title:"{user_account>user1}",					
					info: "{user_account>mail1}"
			});
			}
		}
	});
		oView2.normal_list=new sap.m.StandardListItem({
			//visible:false,
			title:"",				
			info: ""
		});
		oView2.my_account=new sap.m.List({
			visible:false,
			items:[
				oView2.normal_list
			]
	});
		//sign up form
		oView2.formtag_signup = new sap.ui.layout.form.Form("formsignup",{
    		title: new sap.ui.core.Title({text:"SIGN UP FORM"}),
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
    	    			
    	    				fields:[
    	    					new sap.m.Input
    							({
    								//value:"user name",
    							    placeholder:"username",
    							    width: "80%"
    							}),
    							new sap.m.Input
    							({
    								placeholder:"password",type:sap.m.InputType.Password,width: "80%"
    							}),
    							new sap.m.Input
    							({
    								placeholder:"email",type:sap.m.InputType.Email,width: "80%"
    							}),
    							
    							new sap.m.RadioButtonGroup
    							("radiobutton",{
    								text:"Select the Gender",    							
    								buttons:[
    									new sap.m.RadioButton
    									({
    										text:"male",       										
    									}),
    									new sap.m.RadioButton
    									({
    										text:"female",
    									}),
    									new sap.m.RadioButton
    									({
    										text:"others"
    									})
    								],
    								
    							}),
    							
    							
    							new sap.m.Button
    							("signup",{
    								text:"SIGN UP",
    								type:sap.m.ButtonType.Emphasized,
    								width: "30%",
    								press:[oController.signup,oController]
    							}),
    							new sap.m.Button
    							({
    								text:"CANCEL",
    								type:sap.m.ButtonType.Emphasized,
    								width: "30%",
    								press:[oController.canc,oController]    							
    							})
    			   		    		
    	    				]
    	    			})
    	    		]
    	    	})
    	    ]
    			
    	});
		//login form
		oView2.user=new sap.m.Input({
			placeholder:"User Name",		
			width: "80%"
		});
		oView2.pass=new sap.m.Input({
			placeholder:"Password",type:sap.m.InputType.Password,width: "80%"
		});
		oView2.formtag_login=new sap.ui.layout.form.Form("formsignin",{
    		title:
	    		new sap.ui.core.Title({text:"LOGIN PAGE"}),
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
	    	    				
	    	    			   fields:[
	    	    					oView2.user,
	    	    					oView2.pass,
	    	    					new sap.m.Button("login",{
	    	    						text:"LOGIN",
	    	    						type:sap.m.ButtonType.Emphasized,
	    								width: "30%",
	    	    						press:[oController.login,oController]  
	    	    						}),
	    	    					new sap.m.Button({
		    	    					text:"CANCEL",
		    	    					type:sap.m.ButtonType.Emphasized,
		    							width: "30%",
		    	    					press:[oController.cancin,oController]  
		    	    				    })
	    	    			     ]
	    	    			})
	    	    		]
	    	    	})
	    	    ]
	    			
	    	});
	oView2.img1=new sap.ui.layout.Grid({
			defaultSpan:"L12 M12 S12",
			width:"100%",
			content:[
//				new sap.ui.layout.Grid({
//					//defaultSpan:"L12 M12 S12",
//					width:"50%",
//					content:[
//					new sap.m.Image({
//						//mode:sap.m.ImageMode.Image,
//						src:"applex.jpg",
//						alt:"applex",
//						width:"50%"
//						
//					})
//					
//					]
//				}),
//				new sap.ui.layout.Grid({
//					//defaultSpan:"L12 M12 S12",
//					width:"50%",
//					content:[
//					new sap.m.Image({
//						//mode:sap.m.ImageMode.Image,
//						src:"oneplus6.jpg",
//						alt:"oneplus6",
//						width:"40%"
//						
//					})
//					
//					]
//				}),
//				new sap.ui.layout.Grid({
//					//defaultSpan:"L12 M12 S12",
//					width:"50%",
//					content:[
//					new sap.m.Image({
//						//mode:sap.m.ImageMode.Image,
//						src:"oppof9.jpg",
//						alt:"oppof9",
//						width:"40%"
//						
//					})
//					
//					]
//				})
			]
		});
	oView2.side_menu=new sap.m.MenuButton({
    	icon:"sap-icon://menu2",
    	visible:false,
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
    });
	oView2.signup_btn=new sap.m.Button({
		text:"SIGN UP",					
		visible:true,
		press:[oController.signup_form,oController],
	});
	oView2.login_btn=new sap.m.Button({
		text:"LOGIN",
		visible:true,
		press:[oController.login_form,oController]
	});
	oView2.total_list_btn=new sap.m.Button({
		visible:false,
		text:"TOTAL USERS LIST",
		press:[oController.total_list,oController]
	});
	oView2.logout_btn=new sap.m.Button({
		visible:false,
		text:"LOGOUT",
		press:[oController.logout,oController]
	});
 		return new sap.m.Page({
 			title: "BIDFORX",			
			content: [				
				new sap.ui.layout.Grid({
					defaultSpan:"L12 M12 S12",
					position:sap.ui.layout.GridPosition.Center,
					width:"30%",
					content:[
						oView2.formtag_signup,
						oView2.formtag_login,
						oView2.list_acc,
						oView2.my_account
					]
				}),
				
				oView2.img1
				
				
			],
			subHeader:new sap.m.Bar("bar",{			
				contentLeft:[	
					oView2.side_menu,
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
				
				oView2.total_list_btn,
				oView2.signup_btn,
				oView2.login_btn,
				oView2.logout_btn,
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