import { Link } from "react-router-dom"

function Nav (){
    return(

       <div className="nav-cont" >
        <nav className="m-5 " >
       <ul class="nav flex-md-column  " className="navigation" >
        <h1 className="text-center">P</h1>
  <li class="nav-item m-2">
    <Link class="nav-link link " aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item m-2">
    <Link class="nav-link link  " to="/About">About</Link>
  </li>
  {/* <li class="nav-item m-2 d-none">
    <Link class="nav-link link" to="/Project">Project</Link>
  </li> */}
  <li class="nav-item m-2 d-none">
    <Link class="nav-link link disabled">Disabled</Link>
  </li>
</ul>
       </nav>
       </div>
    
     
    )
}
export default Nav