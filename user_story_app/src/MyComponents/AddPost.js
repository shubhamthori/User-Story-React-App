import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export class AddPost extends Component {

    state={Post:{userId: 1, title:"",body:""},User:{}};
    url = localStorage.getItem("url");
    Post={ userId: 1,title:"",body:""};
    
    SetValue(e) {
       
         this.Post[e.target.id]=e.target.value;
         this.setState({Post:this.Post});
        

    }
   async Save()

    {
        console.log(this.state.User);

      await  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(this.Post),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    alert("New Post Saved for Id = "+json.id+ "\n Check Log for details" );
    console.log(json);
    }
    );
  
    } 


    componentDidMount(){
        if(localStorage.getItem('User')!=null) this.setState({User:JSON.parse(localStorage.getItem('User'))});
        else  window.location.href = "/login";
        this.Post.userId= this.state.User.userId;
        this.setState({Post:this.Post});
        console.log(this.url);
        
    }



   

  render() {
    
    return <div>

<div className="container d-flex mt-4">
    <h4 className="text-muted flex-fill">User&#39;s Posts - Create</h4>
    <button onClick={()=>{window.location.href = "/posts";}} className="btn btn-secondary" type="button"><i className="fa fa-arrow-left"></i> Back to List</button></div>
<hr/>
<div className="container">
    <div className="card mb-2">
        <div className="card-body shadow-sm">
            <h4 className="text-muted card-title">Post Id - [#NewID]</h4>
            <form>
                <div className="form-group"><label>Post Title</label>
                <input onChange={e=>{this.SetValue(e)}} className="form-control" id="title" type="text" placeholder="Enter Post Title / Heading" /></div>
                <div className="form-group"><label>Post Description</label>
                <textarea id="body" onChange={e=>{this.SetValue(e)}} className="form-control" placeholder="Write Description of Post" rows="4"></textarea></div>
            </form>
            <div className="btn-group btn-group-sm" role="group">
                <button onClick={e=>{this.Save()}} className="btn btn-success" type="button">Update</button></div>
        </div>
    </div>
</div>

    </div>;
  }
}

export default AddPost;
