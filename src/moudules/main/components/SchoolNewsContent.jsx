
import { imageListClasses } from '@mui/material'
import SchoolNewsImg  from '../../../assets/children-celebrating-birthday.jpg'

const SchoolNewsContent =({img,title,subtitle,description})=>{
    return(
        <> 
         
           
                <div className="card shadow mt-3 mb-5
                 mx-3 " style={{width:'100%'}}>
                       <div className=" d-flex justify-content-around">
                            <div   style={{height:'40vh',width:'100%',backgroundImage:`url(${img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
  
                            </div>
                            <div className=' d-flex p-4  w-100' >
                                <div>
                                <p className='text-primary'>
                                    {title}
                                </p>
                                <h6 style={{color:'gray'}} className='fw-light'>
                                    {subtitle}
                                </h6>
                                <p>
                                    {description}
                                </p>
                                <a style={{textDecoration:'none'}} href="">Learn More</a>
                                </div>
                            </div>
                       </div>
                </div>
        </>
    )
}

export default SchoolNewsContent