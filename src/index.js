import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myBlogPosts = [
  {
    title: 'My first blog',
    body: 'lorem ipsum dolor sit amet..',
    published: false
  },
  {
    title: 'My second blog',
    body: 'lorem ipsum dolor sit amet..',
    published: true
  },
  {
    title: 'My third blog',
    body: 'lorem ipsum dolor sit amet..',
    published: false
  },
  {
    title: 'My fourth blog',
    body: 'lorem ipsum dolor sit amet..',
    published: true
  }
]

function publishThePost(e) {
  if(e.target.innerText === 'Publish') {
    e.target.innerText = 'Unpublish';
    e.target.parentElement.querySelector('.blog-title').style.color = 'green';
  } else {
    e.target.innerText = 'Publish'
    e.target.parentElement.querySelector('.blog-title').style.color = 'red';
  }
}

const blogPost = myBlogPosts.map((myBlogPost,index) => {
  return (
    <div key={'post_' + index}>
      <h1 className={(myBlogPost.published ? 'green' : 'red') + ' blog-title'}>{myBlogPost.title}</h1>
      <p>{myBlogPost.body}</p>
      <button onClick={publishThePost}>{myBlogPost.published ? 'Unpublish' : 'Publish'}</button>
      <img src="" alt="" />
      <hr/>
    </div>
    
  );
})

ReactDOM.render(
  blogPost,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}