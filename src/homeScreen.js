/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from './graphql/queries'
import awsExports from "./aws-exports";
import Rating from "./components/Rating";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homeScreen.css"

Amplify.configure(awsExports);


const HomeScreen = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts))
      const posts = postData.data.listPosts.items
      setPosts(posts)
    } catch (err) { console.log('error fetching todos') }
  }


  return (
    <div>
      {posts.map((post, index) => (
        <div class="card" key={post.id ? post.id : index}>
          <div class="image-container">
            <a href={post.url}>
              <img className="book-image" src={post.image} alt="" />
            </a>
            <div class="title-review">
              <a href={post.url} className="post-name">
                <h1>{post.name}</h1>
              </a>
              <p>著者: {post.writer} </p>
              <Rating rating={post.star} />
            </div>
          </div>
          <p>ジャンル: {post.category}</p>
          <p>
            読了日: {post.date.substr(0, 4)}/{post.date.substr(4, 2)}/
            {post.date.substr(6, 2)}
          </p>
          <p>概要</p>
          <p> {post.description} </p>
        </div>
      ))}
    </div>
  );
}


export default HomeScreen
