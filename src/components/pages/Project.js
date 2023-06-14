import { Link } from "react-router-dom"
import Durgsnap from "../asset/durg-24 snap.png"
import Portfolio from "../asset/portfolio.png"
import Shekhar from "../asset/shekhar acedemy.png"
import Movie from "../asset/movie .png"
import Nav from "../pages/Nav"
function Project(){
    return(
        <div>
          
          <nav className="m-5 " >
       <ul class="nav flex-row align-items-center "  >
        <h1 className="text-center">D</h1>
  <li class="nav-item m-2">
    <Link class="nav-link link " aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item m-2">
    <Link class="nav-link link  " to="/About">About</Link>
  </li>
  <li class="nav-item m-2">
    <Link class="nav-link link" to="/Project">Project</Link>
  </li>
  <li class="nav-item m-2 d-none">
    <Link class="nav-link link disabled">Disabled</Link>
  </li>
</ul>
       </nav>


         <div className="container my-5" >
          <div className="row justify-content-center align-items-center w-100 h-100" >
           <div className="col-md-4 h-100 my-3" >
           <div class="card  h-100" >
              <img src={Durgsnap} class="card-img-top" alt="..."/>
            <div class="card-body d-flex justify-content-between">
             <h5 class="card-title">Durg 24</h5>
            
             <a href="https://durg24.vercel.app/" class="btn btn-primary">Go to Durg24 </a>
            </div>
           </div>
           </div>
           <div className="col-md-4 h-100 my-3" >
           <div class="card h-100" >
              <img src={Portfolio} class="card-img-top" alt="..."/>
            <div class="card-body d-flex justify-content-between">
             <h5 class="card-title">Portfolio Project</h5>
            
             <a href="https://dhamendra-sahu.vercel.app/" class="btn btn-primary">Go to Portfolio</a>
            </div>
           </div>
           </div>
           <div className="col-md-4 h-100 my-3" >
           <div class="card h-100" >
              <img src={Shekhar} class="card-img-top" alt="..."/>
            <div class="card-body d-flex justify-content-between">
             <h5 class="card-title">Educational website</h5>
            
             <a href="https://shekhar-academy.vercel.app/" class="btn btn-primary">Go to shekhar academy </a>
            </div>
           </div>
           </div>
          </div>
          <div className="row justify-content-center align-items-center w-100 h-100" >
          <div className="col-md-4 h-100 my-3" >
           <div class="card h-100" >
              <img src={Movie} class="card-img-top" alt="..."/>
            <div class="card-body d-flex justify-content-between">
             <h5 class="card-title">Movie application</h5>
            
             <a href="https://movie-appliction.vercel.app/" class="btn btn-primary">Go to Movie application </a>
            </div>
           </div>
           </div>
          </div>

         </div>
        </div>
    )
}
export default Project


