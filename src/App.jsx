import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'
import Createpost from './Components/Createposts'
import PostList from './Components/PostList'
import {useState} from "react"
import PostListprovider from './Store/Post-list'

function App() {

   const [selectedTab , setselectedTab] = useState("Home")


 

  return (
    <PostListprovider>
    <div className = "app-container">

  <Sidebar selectedTab = {selectedTab} setselectedTab =  {setselectedTab}></Sidebar>
  <div className = "content">

    <Header></Header>
    {selectedTab === "Home" ?  <PostList></PostList> : <Createpost></Createpost>}
  
   
  <Footer></Footer>

  </div>

    </div>
    </PostListprovider>
  )
}

export default App
