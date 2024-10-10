import {useContext, useRef} from 'react'
import  { PostList } from '../Store/Post-list';

function Createpost(){
        const {addpost} =  useContext(PostList)

     const userIDElement =   useRef() ;
     const titleElement =   useRef() ;
     const bodyElement =   useRef() ; 
     const reactionsElement =   useRef() ; 
     const TagsElement =   useRef() ; 
     const handleSubmit = (event) =>{
     
  
         event.preventDefault();
       const userID = userIDElement.current.value
       const title = titleElement.current.value;
       const body = bodyElement.current.value;
       const reactions = reactionsElement.current.value;
       const Tags = TagsElement.current.value.split(" ")
       userIDElement.current.value = ""
       titleElement.current.value = ""
       bodyElement.current.value = ""
       reactionsElement.current.value = ""
       TagsElement.current.value = ""

       addpost(userID , title , body , reactions , Tags)

     }


  return (
    <>
    <form className = "create-post"  onSubmit={handleSubmit}>


    <div className="mb-3">

<label htmlFor="userID"  className="form-label">Enter your userID here</label>

<input type="text" 
 ref={userIDElement}
className="form-control" id="userID"
 placeholder = "Your userID" />

</div>

  <div className="mb-3">

    <label htmlFor="title"  className="form-label">Post Title</label>

    <input type="text" 
    ref={titleElement}
    className="form-control" id="title"
     placeholder = "How are you feeling today" />

  </div>
  <div className="mb-3">

<label htmlFor="body"  className="form-label">Post Content</label>

<textarea rows = '4' 
 ref = {bodyElement}
type="text" className="form-control" id="body"
 placeholder = "Tell us more about it" />

</div>

<div className="mb-3">

<label htmlFor="reactions"  className="form-label">No of reactions</label>

<input type="text" 
ref={reactionsElement}
className="form-control" id="reactions"
 placeholder = "How many people reacted to this" />

</div>


<div className="mb-3">

<label htmlFor="Tags"  className="form-label">Enter your Hastags here</label>

<input type="text" 
ref={TagsElement}
className="form-control" id="Tags"
 placeholder = "please enter your tags" />

</div>


  
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>

    </>
  )
}
export default Createpost