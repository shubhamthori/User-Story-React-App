import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export class ViewPost extends Component {

    state={Post:{userId: 1, title:"",body:"",Comments:[]},Names:[],Emails:[]
  };
    url = localStorage.getItem("url");
    Post={id:0, title:"",body:"",Comments:[]};
    SetValue(e) {
       
         this.Post[e.target.id]=e.target.value;
         this.setState({Post:this.Post});
         console.log(this.state.Post);

    }
   


   async componentDidMount(){

    if(localStorage.getItem('User')!=null) this.setState({User:JSON.parse(localStorage.getItem('User'))});
    else  window.location.href = "/login";
    var Emails = JSON.parse( localStorage.getItem('Emails'));
    var Names = JSON.parse( localStorage.getItem('Names'));
    this.setState({Emails:Emails});
    this.setState({Names:Names});
    console.log(Emails[2]);
   // await this.setState({Emails: });
   //await this.setState({Names :JSON.parse( localStorage.getItem('Names'))});
    console.log(this.state.Names);
        const queryParams = new URLSearchParams(window.location.search);
        var  id =  queryParams.get("id");
        this.Post.id = id;

        var response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {method: 'GET'});
        var data = await response.json();
        this.Post=data;

        response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+"/comments", {method: 'GET'});
        this.Post.Comments = await response.json();
        this.setState({Post:this.Post});
        console.log(this.Post.Comments);



       
    }



    


  render() {
    
    return <div>

<div className="container d-flex mt-4">
    <h4 className="text-muted flex-fill">User&#39;s Posts - View</h4>
    <button onClick={()=>{window.location.href = "/posts";}} className="btn btn-secondary" type="button"><i className="fa fa-arrow-left"></i> Back to List</button></div>
<hr/>
      <div className="container">
      <div className="card mb-2">
    <div className="card-body shadow-sm">
        <div className="media"><img className="rounded-circle mr-3" src="assets/img/avatar_2x.png" height={62} width={62}  />
            <div className="media-body">
                <h5>{this.state.Names[this.state.Post.userId-1]}</h5>
                <p>{this.state.Emails[this.state.Post.userId-1]}</p>
            </div>
        </div>
        <hr  className="mt-0" />
        <h4 className="text-muted card-title">{this.state.Post.title}</h4>
        <p className="card-text">{this.state.Post.body}</p>
        
    </div>
</div>  
{this.state.Post.Comments.map(Comment => 
  <div className="card shadow mb-4" style={{"borderRadius":"33px"}}>
  <div className="card-body">
      <div className="media"><img src="assets/img/male_user128.png" height={62} width={62} className="mr-3" />
          <div className="media-body">
              <h5>{Comment.name}</h5>
              <h6 class="text-info"><strong>{Comment.email}</strong></h6>
              <p>{Comment.body} </p>
          </div>
      </div>
  </div>
</div>
)}



      </div>
      
    </div>;
  }
}

export default ViewPost;
