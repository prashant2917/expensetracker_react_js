import { Component } from "react";
import './login.css';
import ValidatorUtil from  '../util/ValidatorUtil';


class RegisterUserComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
          uname:'',
          password:'',
          confirmpassword:'',
          email:'',
          message:'',
          alertClassName:"alert alert-default",
          hasLoginFailed: false,
          
        }
       
        this.handleNameChange =this.handleNameChange.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handlePasswordChange =this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange =this.handleConfirmPasswordChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.resetInput =this.resetInput.bind(this);
        this.resetMessage = this.resetMessage.bind(this);
      
    
    }
    submitClicked(event) {
      event.preventDefault();  
      console.log('Registration  clicked name'+this.state.uname +'email'+this.state.email+ 'password '+this.state.password+'confirm password '+this.state.confirmpassword);
      this.validateInput(this.state.uname,this.state.email,this.state.password,this.state.confirmpassword);
    }
   
   
    
    handleNameChange(event) {
        this.setState(
            {
            uname : event.target.value
        } 
    )
    }

    handleEmailChange(event) {
        this.setState(
            {
            email : event.target.value
        } 
    )
    }

    handlePasswordChange(event) {
        this.setState(
            {
            password : event.target.value
        } 
    )
    }

    handleConfirmPasswordChange(event) {
        this.setState(
            {
            confirmpassword : event.target.value
        } 
    )
    }


   

   
   validateInput(uname,email,password,confirmpassword) {
    console.log('validating input'+'name'+uname +'email '+email +'password '+password+ 'confirm pass '+confirmpassword);
  //var result = ValidatorUtil.validateEmail(email) && ValidatorUtil.validatePassword(password);
   if(!ValidatorUtil.validateName(uname)) {
    this.setState(
        {
        message : 'Name should not be empty',
        alertClassName: "alert alert-danger"
        }
      )
    }
    else if(!ValidatorUtil.validateEmail(email))  {
        this.setState(
            {
                message: 'Please Enter Valid Email Id',
                alertClassName:"alert alert-danger"
            }
        )
    }

    else if(!ValidatorUtil.validatePassword(password))  {
        this.setState(
            {
                message: 'Password must contains at least 6 characters with Minimum 1 Lowercase, 1 Number, 1 Uppercase, and 1 Symbol',
                alertClassName:"alert alert-danger"
            }
        )
    }

    else if(!ValidatorUtil.validatePassword(confirmpassword))  {
        this.setState(
            {
                message: 'Confirm Password must contains at least 6 characters with Minimum 1 Lowercase, 1 Number, 1 Uppercase, and 1 Symbol',
                alertClassName:"alert alert-danger"
            }
        )
    }
    
    else {
        if(password !== confirmpassword) {
            this.setState(
                {
                    message: 'Password and confirm password doesn\'t match',
                    alertClassName:"alert alert-danger"
                }
            ) 
        }
        else {
        console.log('name '+this.state.uname+'email '+this.state.email +'password '+this.state.password + 'confirm password '+this.state.confirmpassword);
        this.setState(
         {
         message : 'Registeration Succssful',
         alertClassName: "alert alert-success"
         }
       )
        } 
      } 
 /*  if(!result){
      console.log('invalid credentials');
      this.setState(
        {
        message : 'Invalid Credentials, Please Input Valid Credentials',
        alertClassName: "alert alert-danger"
        }
      )
      this.setState({
        name:'',
        password:'',
      hasLoginFailed: true,
        
      }) 
    
    }

     else {
       this.setState(
        {
        message : 'Registeration Succssful',
        alertClassName: "alert alert-success"
        }
      ) 
     } */
   
    
    }

    resetInput() {
      this.setState(
        {
            uname:'',
          password:'',
          message:'',
          alertClassName:"alert alert-default",
          hasLoginFailed: false,
        }
      )
    }

    resetMessage() {
        this.setState(
            {
                
              message:'',
              alertClassName:"alert alert-default",
             
            }
          )
    }

    render() {
        return (
           
            <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
              <div className={this.state.alertClassName}>{this.state.message}</div>
                <h3 className="Auth-form-title">Registeration</h3>
                <div className="form-group mt-3">
                  <label>Name</label>
                  <input
                    name="uname"
                    type="name"
                    value={this.state.uname}
                   className="form-control mt-1"
                    placeholder="Enter name"
                  onChange={this.handleNameChange}
                  onInput={this.resetMessage}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    name="email"
                    type="email"
                    value={this.state.email}
                   className="form-control mt-1"
                    placeholder="Enter email"
                  onChange={this.handleEmailChange}
                  onInput={this.resetMessage}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                  name="password"
                    type="password"
                    value={this.state.password}
                  className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={this.handlePasswordChange}
                    onInput={this.resetMessage}
                    
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Confirm Password</label>
                  <input
                  name="confirmpassword"
                    type="password"
                    value={this.state.confirmpassword}
                  className="form-control mt-1"
                    placeholder="Confirm password"
                    onChange={this.handleConfirmPasswordChange}
                    onInput={this.resetMessage}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary" onClick={this.submitClicked}>
                    Submit
                  </button>
                </div>
               
  </div>
</form>
  </div>
    )
                    
}

}

 

export default RegisterUserComponent;