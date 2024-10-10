import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { PostList  } from "../Store/Post-list"

const Post = ({post}) =>{

 const{deletepost} = useContext(PostList)


  return (
<div className="card post-card posts" style={{ width: '18rem' }}>
 
  <div className="card-body posts">
    <h5 className="card-title">{post.title}

    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      onClick={() => deletepost(post.id)}
    >
    <MdAutoDelete/>
   
  </span>
    </h5>
    <p className="card-text">
      {post.body}
      
    </p>
     
   {post.tags.map  ((tag) => (
    <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
   ))}
   <div className="alert alert-success reactions" role="alert">
 This post has been reacted by {post.reaction} people.
</div>
    
  </div>
</div>
  )

}
export default Post