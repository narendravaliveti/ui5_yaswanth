sap.ui.controller("bidforx.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf bidforx.home
*/
//	onInit: function() {
//
//	},

	signup_form () {		
		this.oView.formtag_signup.setVisible(true);
		this.oView.formtag_login.setVisible(false);
		this.oView.formtag_login.mAggregations.formContainers[0].
		mAggregations.formElements[0].mAggregations.fields[0].setValue('');
		
		this.oView.formtag_login.mAggregations.formContainers[0].
		mAggregations.formElements[0].mAggregations.fields[1].setValue('');
		},
	login_form () {			
			this.oView.formtag_login.setVisible(true);
			this.oView.formtag_signup.setVisible(false);
			this.oView.formtag_signup.mAggregations.formContainers[0].
			mAggregations.formElements[0].mAggregations.fields[0].setValue('');
			this.oView.formtag_signup.mAggregations.formContainers[0].
			mAggregations.formElements[0].mAggregations.fields[1].setValue('');
			this.oView.formtag_signup.mAggregations.formContainers[0].
			mAggregations.formElements[0].mAggregations.fields[2].setValue('');
			},			
	canc () {
				debugger
				this.oView.formtag_signup.setVisible(false);
			},
	cancin () {
				debugger
				//this.oView.formtag2.setVisible(false);//oView is also same as getView.
				this.getView().formtag_login.setVisible(false);
			},
	logout () {
				debugger
				this.oView.normal_list.setTitle("");
				this.oView.normal_list.setInfo("");
				this.oView.side_menu.setVisible(false);
				this.oView.signup_btn.setVisible(true);
				this.oView.login_btn.setVisible(true);
				this.oView.logout_btn.setVisible(false);
				this.oView.total_list_btn.setVisible(false);
				this.oView.my_account.setVisible(false);
				this.oView.list_acc.setVisible(false);
				alert("logout successful");			
			},
	my_account(){
				debugger
				this.oView.my_account.setVisible(true);
				this.oView.list_acc.setVisible(false);
			},
	total_list(){
				debugger
				this.oView.list_acc.setVisible(true);
				this.oView.my_account.setVisible(false);
			},
	login () {
				debugger
				var login_user = this.oView.formtag_login.mAggregations.formContainers[0].
								mAggregations.formElements[0].mAggregations.fields[0].getValue();
				var login_pass = this.oView.formtag_login.mAggregations.formContainers[0].
								mAggregations.formElements[0].mAggregations.fields[1].getValue();
				var wrong="false";
				if( login_user != '' )
				{
					for(i=0;i<this.oView.oData.login_user_details.length;i++)
					{
					if( login_user == this.oView.oData.login_user_details[i].user1)
					{
						if ( login_pass == this.oView.oData.login_user_details[i].pass1 )
						{
							debugger
							sap.ui.getCore().byId("username_menu").setText(login_user);
							//clearing the login form values
							this.oView.formtag_login.mAggregations.formContainers[0].
							mAggregations.formElements[0].mAggregations.fields[0].setValue('');
							
							this.oView.formtag_login.mAggregations.formContainers[0].
							mAggregations.formElements[0].mAggregations.fields[1].setValue('');
							
							this.getView().formtag_login.setVisible(false);
							alert("Mr. "+login_user+" your login is succesfull");
							//setting true for successfull sign up
							wrong ="true";
							//setting login user name to account information
							this.oView.normal_list.setTitle(login_user);
							this.oView.normal_list.setInfo(this.oView.oData.login_user_details[i].mail1);
							
							//display menu button
							
							this.oView.side_menu.setVisible(true);
							this.oView.signup_btn.setVisible(false);
							this.oView.login_btn.setVisible(false);
							this.oView.logout_btn.setVisible(true);
							if( login_user == "admin")
								{
								this.oView.total_list_btn.setVisible(true);
								}
							
						}											
					}					
	     		  }
				}else{
					alert("Please Fill The Valid Details")
				}
				if (wrong == "false")
				{
					alert("Please Enter the Correct Usename and Password");
				}
			},
			
signup(){
				
				debugger
				var up_user=this.oView.formtag_signup.mAggregations.formContainers[0].
							mAggregations.formElements[0].mAggregations.fields[0].getValue();
				var up_pass=this.oView.formtag_signup.mAggregations.formContainers[0].
							mAggregations.formElements[0].mAggregations.fields[1].getValue();
				var up_mail=this.oView.formtag_signup.mAggregations.formContainers[0].
							mAggregations.formElements[0].mAggregations.fields[2].getValue();				
				if(up_user != '' && up_pass != '' && up_mail != ''){
					debugger
					let oModel=this.getView().getModel("user_account");
					if(oModel){						
						let aLoginUserDetails = oModel.getProperty("/login_user_details");
						if(aLoginUserDetails){
							debugger
							aLoginUserDetails.push({user1: up_user, pass1: up_pass, mail1: up_mail});
							oModel.setProperty("/login_user_details",aLoginUserDetails );
						}
					}
					
					//this.oView.oData.login_user_details.push({user1: up_user, pass1: up_pass, mail1: up_mail});
					
					this.oView.array_length= this.oView.oData.login_user_details.length;
					alert("Mr. "+up_user+" YOUR SIGNUP IS SUCCESSFULL");
					this.oView.formtag_signup.mAggregations.formContainers[0].
					mAggregations.formElements[0].mAggregations.fields[0].setValue('');
					this.oView.formtag_signup.mAggregations.formContainers[0].
					mAggregations.formElements[0].mAggregations.fields[1].setValue('');
					this.oView.formtag_signup.mAggregations.formContainers[0].
					mAggregations.formElements[0].mAggregations.fields[2].setValue('');
					this.oView.formtag_signup.setVisible(false);
					}
				else
				{
				alert("Please Fill The Valid Details");
				}
				
				}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf bidforx.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf bidforx.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf bidforx.home
*/
//	onExit: function() {
//
//	}

});