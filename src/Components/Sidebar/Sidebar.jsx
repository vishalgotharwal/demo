function Sidebar ({selectedTab , setselectedTab}) {


const handleonclik = (tabName) =>{
    setselectedTab(tabName)
}

  return (
<>

<div 
className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar" style={{ width: '180px' }}>
  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
    <svg className="bi pe-none me-2" width="40" height="32">
      <use href="#bootstrap"></use>
    </svg>
    <span className="fs-4">Sidebar</span>
  </a>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={() => {handleonclik("Home")}}>
      <a href="#" className={`nav-link ${selectedTab === "Home" && "active"} `} aria-current="page"
         
      >
        <svg className="bi pe-none me-2" width="16" height="16">
          <use href="#home"></use>
          
        </svg>
        
        Home
      </a>
    </li>
    <li   onClick={() => {handleonclik("Create post")}}>
      <a href="#" className={`nav-link link-body-emphasis ${selectedTab === "Create post" && "active"}`}>
        <svg className="bi pe-none me-2" width="16" height="16">
          <use href="#speedometer2"></use>
        </svg>
        Create post
      </a>
    </li>
   
  
   
  </ul>
  <hr />
  <div className="dropdown">
    <a
      href="#"
      className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
      data-toggle="dropdown"
      aria-expanded="false"
    >
      <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
      <strong>mdo</strong>
    </a>
    <ul className="dropdown-menu text-small shadow">
      <li><a className="dropdown-item" href="#">New project...</a></li>
      <li><a className="dropdown-item" href="#">Settings</a></li>
      <li><a className="dropdown-item" href="#">Profile</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Sign out</a></li>
    </ul>
  </div>
</div>

</>
  )
}
export default Sidebar