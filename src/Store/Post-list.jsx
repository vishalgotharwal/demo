import {createContext, useReducer} from "react"




  export const PostList =    createContext({
  postList : [],
  addpost: () => {},
  deletepost: () =>{},
  addinitialposts: () => {}
 })

 const postListreducer = (currpostList ,action ) =>{
 
        let newPostlist ; 
        if(action.type === "DELETE_POST"){
          
              newPostlist = currpostList.filter(post => post.id !== action.payload.postId)
        }

        else if(action.type === "Add_Post"){
          newPostlist = [ action.payload, ...currpostList ]
        }
        else if(action.type === "Add_INITIALPostS"){
          newPostlist = action.payload.posts
        }
        
       return newPostlist
      
 }
 

 const PostListprovider = ({children}) =>{

   const [postList , dispatchPostList] =  useReducer(postListreducer 
    , []);

    const addpost = (postId , title , body , reactions , Tags) =>{
      console.log(`${postId} , ${title} ,${body} , ${reactions} , ${Tags}`)
      
                  dispatchPostList({
                    type: "Add_Post",
                    payload :{
                      id:  Date.now(),
                      title : title,
                      body : body,
                      reaction : reactions,
                      userId  :  postId,
                      tags : Tags,
                    }
                  })
          };
          const addinitialposts = (posts) =>{
           
            
                        dispatchPostList({
                          type: "Add_INITIALPostS",
                          payload :{
                            posts
                          }
                        })
                }
      

  
    const deletepost = (postId) =>{
        dispatchPostList({
          type : "DELETE_POST",
          payload : {
             postId
          }
        })
    }

 
return <PostList.Provider value={
 { postList: postList,
  addpost : addpost,
  addinitialposts,
  deletepost : deletepost
 }
}>
{children}

</PostList.Provider>

     
 }



 export default PostListprovider