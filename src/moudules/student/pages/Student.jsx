import { memo, useEffect, useState } from "react"
import axios from 'axios'
import Card from "../../main/components/Card"
import { useParams } from "react-router-dom"
import { Prev } from "react-bootstrap/esm/PageItem"



const Student =()=>{
    const {id} = useParams()
    const [data1,setData] = useState([])
   useEffect(()=>{
          axios.get('https://dummyjson.com/users/'+id).then((res)=>{
            // console.log(res.data.users);
            setData(res.data)
          })
   })
        
    
    
    return(
        <>
         
         <h1 className="text-center" onClick={()=>console.log(data1)}>
            Student
         </h1>
              
              <div className="row mx-0 d-flex justify-content-center">         
                  <Card   firsName={data1.firstName} email={data1.email}  lastName={data1.lastName} gender={data1.gender}/>
              </div>

           
        
        </>
    )
}

export default memo(Student)




