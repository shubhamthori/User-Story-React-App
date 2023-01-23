import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export class Login extends Component {

    state={Email:"",PWD:""};
    url = localStorage.getItem("url");
    
    SetValue(e) {
        this.state[e.target.id]=e.target.value;
        
    }
    componentDidMount(){
        console.log(this.url);
        
    }



    async Login()
    {
        var Result=false;
        var data = {Email: this.state.Email,PWD: this.state.PWD};
        console.log(data);
        var Users = await JSON.parse( localStorage.getItem('Users'));
       await Users.forEach(User => {
        

            if(!Result && User.Email == this.state.Email && User.PWD == this.state.PWD)
            {
                  localStorage.setItem('User',JSON.stringify(User)); 
                  Result=true;
            }
          
               
               
        });


        if(!Result) {alert("Error : Invalid Credentials");return;}
        window.location.href = "/posts";
return;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const response = await fetch(this.url +'users/login', requestOptions);
        
        if(response.status==401){

             data = await response.json();
              alert(data.Message);
        }
           
       
        if(response.status==200)
        {
               
            data = await response.json();
                localStorage.setItem("User",JSON.stringify(data));
                localStorage.setItem("UserType",data.UserType);
                console.log(localStorage.getItem("User"));
                window.location.href = "/home";
        }
        
       

        return;


        fetch(this.url+'users/login', requestOptions)
        .then(response => response.json())
        .then(data => {

            console.log(data.status);
            localStorage.setItem("User",JSON.stringify(data));
         localStorage.setItem("UserType",data.UserType);
        });

return;




        
    }


  render() {
    
    return <div>



<div className="login-card">
    <img alt='' className="bg-white border rounded-circle shadow-sm profile-img-card" src="assets/img/lock.png" />
    <p className="profile-name-card"></p>
    <form className="form-signin" onSubmit={event=>Login(event)}>
        <span className="reauth-email"></span>
        <input onChange={e=>{this.SetValue(e)}} type="email" className="form-control" id="Email" required placeholder="Email address" autofocus />
        <input onChange={e=>{this.SetValue(e)}} type="password" className="form-control" id="PWD" required placeholder="Password" />
        <button className="btn btn-primary btn-block btn-lg btn-sign-in" onClick={()=>this.Login()} type='button'>Sign in</button>
    </form>
</div>

    </div>;
  }
}

export default Login;
