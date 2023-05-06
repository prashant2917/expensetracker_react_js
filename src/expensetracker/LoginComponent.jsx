import { Component } from "react";
import './login.css';
import ValidatorUtil from  '../util/ValidatorUtil';
import { Link } from "react-router-dom";


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
          username:'',
          password:'',
          message:'',
          alertClassName:"alert alert-default",
          hasLoginFailed: false,
          
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.resetInput =this.resetInput.bind(this);
      
    
    }
    loginClicked(event) {
      event.preventDefault();  
      console.log('login clicked username'+this.state.username +' password '+this.state.password);
      this.validateInput(this.state.username,this.state.password);
    }
   
    handleChange(event) {
     
      console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
        
    } 

   

   
   validateInput(email,password) {
    console.log('validating input'+email +'password'+password);
    var result = ValidatorUtil.validateEmail(email) && ValidatorUtil.validatePassword(password);
     if(!result){
      console.log('invalid credentials');
      this.setState(
        {
        message : 'Invalid Credentials, Please Input Valid Credentials',
        alertClassName: "alert alert-danger"
        }
      )
      this.setState({
        username:'',
        password:'',
      hasLoginFailed: true,
        
      }) 
    
    }

     else {
       this.setState(
        {
        message : 'Login Succssful',
        alertClassName: "alert alert-success"
        }
      ) 
     }
   
    
    }

    resetInput() {
      this.setState(
        {
          username:'',
          password:'',
          message:'',
          alertClassName:"alert alert-default",
          hasLoginFailed: false,
        }
      )
    }

    render() {
        return (
           
            <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
              <div className={this.state.alertClassName}>{this.state.message}</div>
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    name="username"
                    type="email"
                    value={this.state.username}
                   className="form-control mt-1"
                    placeholder="Enter email"
                  onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary" onClick={this.loginClicked}>
                    Submit
                  </button>
                </div>
                <div class="center">
           <Link to ="/register">
         <a href="#">New User? Register Here</a>
         </Link>  
        
    </div>
  </div>
</form>
  </div>
    )
                    
}

}

 

export default LoginComponent;