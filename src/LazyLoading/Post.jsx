import { useState, useEffect } from "react"

function Post() {
const  [post, setPost] = useState([])


useEffect(() => {
     const fetchPost = async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts')
          const data = await res.json()
          setPost(data)
     }
     fetchPost()
}, [])


    return(
    <div>
    <h1>Post</h1>
    <ul>
         {post.map(post => (
              <li key={post.id}>{post.title}</li>
         ))}
    </ul>
    </div>

    )
}

export default Post