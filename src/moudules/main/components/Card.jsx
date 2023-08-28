


const Card = ({firsName,lastName,gender,email,id ,AddStudent,isTeacher=false})=>{
    return(
        <>
        
        
           <div className="col-md-4 card p-4 mx-0">
                 <ul>
                
                        {id}
                   
                    <li>
                        First Name:{firsName}
                    </li>
                    <li>
                        last Name:{lastName}
                    </li>
                    <li>
                          email:{email}
                    </li>
                    <li>
                          gender:{gender}
                    </li>

                 </ul>
                     {
                        isTeacher&&  <button onClick={AddStudent}>
                        Add student
                     </button>
                     }
           </div>
        
        </>
    )
}


export default Card