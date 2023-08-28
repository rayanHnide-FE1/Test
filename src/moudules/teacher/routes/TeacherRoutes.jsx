import { ROUTES } from "../constans/Conts";
import Teacher from "../pages/Teacher";

export const TeacherRouter ={
    path:ROUTES.TEACHER,
    loader: async () => {
        const first = await fetch("https://dummyjson.com/products/1")
          .then((res) => res.json())
          .then((res) => res);
        const data = await fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((res) => res.products);
  
        return { first, data };
      },
      element:<Teacher/>
}