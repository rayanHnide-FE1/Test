
import {TeacherRouter} from "../moudules/teacher/routes/TeacherRoutes"
import { studentsRoutes } from "../moudules/student/routes/StudentsRoutes"
import Main from "../moudules/main/pages/main"
import App from "../App"
export const routes = [


     {
        path:'/',
        element:<App/>,
        children:
        [
            {
            path:'',
            element:<Main />,
            },
            
            ...TeacherRouter,
            ...studentsRoutes,
    
    
        ]

     }

]