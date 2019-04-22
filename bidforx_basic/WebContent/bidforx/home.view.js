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
		this.array_user=["admin"];
		this.array_pass=["admin"];
		this.array_mail=["admin"];
		this.array_length=this.array_user.length;
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
				new sap.ui.layout.Grid({
					//defaultSpan:"L12 M12 S12",
					width:"50%",
					content:[
					new sap.m.Image({
						//mode:sap.m.ImageMode.Image,
						src:"applex.jpg",
						alt:"applex",
						width:"50%"
						
					})
					
					]
				}),
				new sap.ui.layout.Grid({
					//defaultSpan:"L12 M12 S12",
					width:"50%",
					content:[
					new sap.m.Image({
						//mode:sap.m.ImageMode.Image,
						src:"oneplus6.jpg",
						alt:"oneplus6",
						width:"40%"
						
					})
					
					]
				}),
				new sap.ui.layout.Grid({
					//defaultSpan:"L12 M12 S12",
					width:"50%",
					content:[
					new sap.m.Image({
						//mode:sap.m.ImageMode.Image,
						src:"oppof9.jpg",
						alt:"oppof9",
						width:"40%"
						
					})
					
					]
				})
			]
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
						oView2.formtag_login						
					]
				}),
				oView2.img1
				
			],
			subHeader:new sap.m.Bar({			
				contentLeft:[					
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
					text:"SIGN UP",
					press:[oController.signup_form,oController],
				}),//.attachPress(oController.hide_login,oController),
				new sap.m.Button({
					text:"LOGIN",
					press:[oController.login_form,oController]
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