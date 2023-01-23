import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    state = {
        User: {},
        UserProfileImage: "",
        ProfileImageSrc: "assets/img/User_New.png",
        IsLoggedIn:false
    };
    async componentDidMount() {


        
        if (localStorage.getItem("User")) {
            await this.setState({ User: JSON.parse(localStorage.getItem("User")) });
            this.setState({ UserProfileImage: "http://localhost:5000/Images/Users/" + this.state.User._id + ".jpg?t=" + new Date() });
            this.setState({IsLoggedIn:true})
        }

       
    }

    setImgSrc(src) {
        this.setState({imgSrc:src});
    }
    Load() {

    }
    Logout() {
        localStorage.removeItem("User");
       
        if (window.location.href != "/login") window.location.href = "/login";
        this.setState({IsLoggedIn:false})
    }



    render() {
        this.Load();
        return (
            <>
               <nav className="navbar navbar-dark navbar-expand-md bg-dark">
    <div className="container-fluid"><a className="navbar-brand" href="#">User Stories</a><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
                {this.state.IsLoggedIn?
                <li className="nav-item"><a className="nav-link" onClick={()=>{this.Logout()}}>Logout</a></li>
                :<></>
            }
                
            </ul>
        </div>
    </div>
</nav>
            </>
        )
    }
}

export default Navbar