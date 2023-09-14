

const CoursesContent =({img,icon,number,numberOfStar,lessonName,star,title,subTitle,price})=>{
    return(
        <>
        

               <div className="card  mx-2 mt-3">
                <div>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='text-primary pt-3 d-flex justify-content-around'>
                  <div>
                  <span >{icon}</span>
                    <span className='ps-2'>{number}</span>
                    <span  className='ps-2'>{lessonName}</span>
                  </div>
                  <div>
                      <h6>
                       <span style={{color:'gold'}}> {star}</span>
                       <span style={{color:'gold'}} className='ps-2'>{numberOfStar}</span>
                      </h6>
                  </div>
                 
                </div>
                  <div className="mt-4">
                  <h6 className='ps-5'>{title}</h6>
                <p className='ps-5' style={{color:'gray'}}>
                    {subTitle}
                </p>
                  <div className='d-flex justify-content-center'>
                  <hr className='w-50 ' />
                  </div>
                  <div className=' p-3 d-flex justify-content-around'>
                        <h6>
                           {price}
                        </h6>
                        <a href="" style={{textDecoration:'none'}}>
                            Learn More
                        </a>
                  </div>
                  </div>
               </div>
        
        </>
    )
}

export default CoursesContent