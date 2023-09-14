
import {NewsRouter} from '../moudules/main/routes/NewsRoutes'
import { AboutUsroutes} from '../moudules/main/routes/AboutUsRoutes'
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
            
           ...NewsRouter,
            ...AboutUsroutes,
    
    
        ],

     },

];