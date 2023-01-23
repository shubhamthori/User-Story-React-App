import React, { Component} from 'react';
import { useHistory ,Link} from "react-router-dom";

export class Posts extends Component {

    state={Posts:[],User:{}};
    url = localStorage.getItem("url");
    Emails=[];
    Names=[];
   
        
    
    SetValue(e) {
        this.state[e.target.id]=e.target.value;
        
    }
   async componentDidMount(){
    var Emails = await JSON.parse( localStorage.getItem('Emails'));
    var Names =await JSON.parse( localStorage.getItem('Names'));
    this.setState({Emails:Emails});
    this.setState({Names:Names});

    if(localStorage.getItem('User')!=null) this.setState({User:JSON.parse(localStorage.getItem('User'))});

    else  window.location.href = "/login";

    
    var data = "";//{Email: this.state.Email,PWD: this.state.PWD};
    const requestOptions = {
        method: 'GET'
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify(data)
    };
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    data = await response.json();
    if(response.status==401){ alert(data.Message);  }
   
    this.setState({Posts:data}); 
    console.log(this.state.Posts);

 
    }
 OnNewPostClick() {    window.location.href = "/AddPost";}
 async Delete(id)
 {
    if(!window.confirm("Confirm Delete ?\nPost Id - "+id))return;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
     alert("Deleted Post Id - "+id);
 }

  render() {
    
    return <div>


<div className="container d-flex mt-4">
    <h4 className="text-muted flex-fill">User&#39;s Posts - All</h4>
    <button onClick={()=>this.OnNewPostClick()} className="btn btn-success" type="button"><i className="fa fa-plus"></i> New Post</button>
    </div>
<hr />
<div className="container">
{this.state.Posts.map(Post => 
    <div className="card mb-2">
        <div className="card-body shadow-sm">
            <div className="media"><img className="rounded-circle mr-3" src="assets/img/avatar_2x.png" width={62} height={62}  />
                <div className="media-body">
                    <h5>{this.state.Names[ Post.userId-1]}</h5>
                    <p>{this.state.Emails[Post.userId-1]}</p>
                </div>
            </div>
            <hr className='mt-0' />
            <h4 className="text-muted card-title">{Post.title}</h4>
            <p className="card-text">{Post.body}</p>
<Link className="btn btn-primary btn-sm" to={"/viewpost?id="+Post.id}>View Comments</Link>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
{(this.state.User.userId==Post.userId)?<div role="group" className="btn-group btn-group-sm">            
            <Link className="btn btn-info" to={"/updatepost?id="+Post.id}>Update</Link>
                <button onClick={()=>{this.Delete(Post.id)}} className="btn btn-danger" type="button">Delete</button>
                </div>:<></>

}

            
        </div>
    </div>
    
)}

    
   
</div>


    </div>;
  }
}

export default Posts;
