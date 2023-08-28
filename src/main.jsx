import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from './moudules/main/pages/main.jsx';
import GuardedRoutes from './routes/GuardedRoutes copy.jsx';
import Student from './moudules/student/pages/Student.jsx';
import Teacher from './moudules/teacher/pages/Teacher.jsx';


const isAuthenticated = localStorage.getItem('user');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<App />}>
      <Route path="" element={<Main />} />
      <Route
        path="/teachers"
        loader={ async ({ params }) => {
          return await fetch("https://dummyjson.com/users")
              .then((res) => res.json())
          .then((res) => res);
         
        }}
        element={
          <GuardedRoutes
            isAccessable={isAuthenticated}
            OnSucess={() => <Teacher />}
          />
        }
      />
      <Route 
    //   loader={ async ({ params }) => {
    //   return await fetch("https://dummyjson.com/users")
    //       .then((res) => res.json())
    //   .then((res) => res);
     
    // }}
     path="/students/:id" element={<Student />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
