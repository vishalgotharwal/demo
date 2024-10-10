import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../Store/Post-list"
import Welcomemethod from './Welcomemethod'
import Loadingspinner from "./Loadingspinner"

const PostList = () =>{


  const {postList , addinitialposts} =  useContext(PostListData)

  const [fetching , setfetching] = useState(false)

  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addinitialposts(data.posts);
        setfetching(false);
      });
  
    return () => {
      controller.abort();
    };
  }, []);


//  if( !dataFetched ){
  
//   setdataFetched(true)
//  }

const handleGetPostClick = () => {
 
}
  

 
  return  (


  <>
  {fetching && <Loadingspinner/>}


  { !fetching && postList.length === 0 && <Welcomemethod  />}
  
   { !fetching && postList.map(post => <Post key = {post.id} post = {post}/>)}
 
  </>
  )
}
export default PostList