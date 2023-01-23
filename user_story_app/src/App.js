
import './App.css';
import Navbar from './MyComponents/Navbar';
import React, { } from 'react'
import { Routes, Route} from "react-router-dom";
import Login from './MyComponents/Login';

import Posts from './MyComponents/Posts';
import AddPost from './MyComponents/AddPost';
import UpdatePost from './MyComponents/UpdatePost';
import ViewPost from './MyComponents/ViewPost';

function AppLoad(){
    localStorage.setItem("url","http://localhost:5000/");
}

function App() {
  UpdateUsers();
  AppLoad();


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="posts" element={<Posts />} />
      <Route path="AddPost" element={<AddPost />} />
      <Route path="updatePost" element={<UpdatePost />} />
     <Route path="ViewPost" element={<ViewPost />} />
     
      
    </Routes>
    </>
  );
}
function UpdateUsers() {
  
  //if(localStorage.getItem("Users")==null)
  
    var Users =[
      {"userId": 1,"UserName": "Admin","Email": "admin@gmail.com","Mobile": "9999999999","PWD": "aa"},
      {"userId": 2,"UserName": "Sam","Email": "sam@gmail.com","Mobile": "9898989898","PWD": "aa"},
      {"userId": 3,"UserName": "user3","Email": "user3@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 4,"UserName": "user4","Email": "user4@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 5,"UserName": "user5","Email": "user5@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 6,"UserName": "user6","Email": "user6@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 7,"UserName": "user7","Email": "user7@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 8,"UserName": "user8","Email": "user8@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 9,"UserName": "user9","Email": "user9@gmail.com","Mobile": "9988776655","PWD": "aa"},
      {"userId": 10,"UserName": "user10","Email": "user10@gmail.com","Mobile": "9988776655","PWD": "aa"}
    ];
    var Emails=["admin@gmail.com","sam@gmail.com","user3@gmail.com","user4@gmail.com",
      "user5@gmail.com","user6@gmail.com","user7@gmail.com","user8@gmail.com","user9@gmail.com","user10@gmail.com"
  ];
    var Names=[  "admin","sam","user3","user4","user5","user6","user7","user8","user9","user10"];
    
    
  
  localStorage.setItem('Users',JSON.stringify(Users));
    localStorage.setItem('Names',JSON.stringify(Names));
    localStorage.setItem('Emails',JSON.stringify(Emails));
  console.log(JSON.parse(localStorage.getItem('Names'))[1]);
}    

export default App;
