import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const blogPost = {
    title: 'My first blog',
    body: 'lorem ipsum dolor sit amet..',
    published: true
  }
 

let isPublishedClassName;
if(blogPost.published){
  isPublishedClassName = 'green'
} else {
  isPublishedClassName = 'red'
}

const element = <h1 className={isPublishedClassName}>{blogPost.title}</h1>;

//function publishThePost(e) {
  //if(e.target.innerText === 'Publish') {
   // e.target.innerText = 'Unpublish';
  //  e.target.parentElement.querySelector('.blog-title').style.color = 'green';
 // } else {
  //  e.target.innerText = 'Publish'
 //   e.target.parentElement.querySelector('.blog-title').style.color = 'red';
 // }
//}

//const blogPost = myBlogPosts.map((myBlogPost,index) => {
 // return (
//    <div key={'post_' + index}>
 //     <h1 className={(myBlogPost.published ? 'green' : 'red') + ' blog-title'}>//{myBlogPost.title}</h1>
 //     <p>{myBlogPost.body}</p>
 //     <button onClick={publishThePost}>{myBlogPost.published ? 'Unpublish' : //'Publish'}</button>
  //    <img src="" alt="" />
  //    <hr/>
  //  </div>
  //  
  //);
//})

ReactDOM.render(
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* <React.StrictMode>
    <App />
  </React.StrictMode> */