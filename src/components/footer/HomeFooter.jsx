import { Link } from "react-router-dom"


const HomeFooter =()=>{
    return(
        <>
        
          <div className="row mx-0 p-5 w-100 mt-5 bg-info">
            
            <div className="col-md-4">
                 <ul style={{listStyle:'none'}}>
                  <li>
                  <Link  style={{textDecoration:"none",color:'black'}} to='students'>
                      Students
                  </Link>
                  </li>
                  <li>
                  <Link  style={{textDecoration:"none",color:'black'}} to='students'>
                      Teachers
                  </Link>
                  </li>
                 
                 </ul>
            </div>
              <div className="col-md-8" >
                      <p >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed magni enim in nam quidem distinctio voluptas deserunt suscipit quam?
                      </p>
              </div>
            
            </div>     
        
        </>
    )
}

export default HomeFooter