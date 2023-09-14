


export const OurTeamContent =({name,jop,description,img})=>{
    return(
        <>
        
       
                <div className=" text-center mx-5 ">
                    <div><img style={{borderRadius:'30px'}} className='w-50 p-3' src={img} alt="" /></div>
                    <h1 className="fw-light">{name}</h1>
                    <h6 style={{color:'gray'}} className="fw-light">{jop}</h6>
                    <p style={{color:'gray'}} >{description}</p>
                </div>
            
        </>
    )
}