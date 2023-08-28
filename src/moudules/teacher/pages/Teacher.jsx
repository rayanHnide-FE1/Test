import { memo } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Card from "../../main/components/Card"


const Teacher =()=>{
    const navigate= useNavigate()
    const data = useLoaderData()
    return(
        <>
         
         <h1 className="text-center">
         Teacher
         </h1>


         <p className="text-center mt-5">
            All Students
         </p>

         <div className="row mx-0">
                {
                    data.users.map((e)=>{
                    console.log(e);
                        return(
                            <>
                                
                               <Card isTeacher={true} id={e.id} email={e.email} firsName={e.firstName} lastName={e.lastName} gender={e.gender} AddStudent={()=>{
                                navigate(`/students/${e.id}`,
                                 alert('succsses Added')
                                )
                               }}  />
                              
                            
                            </>
                        )
                    })
                }
            </div>
        
        </>
    )
}

export default memo(Teacher)