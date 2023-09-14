import { NewsContent } from "../../../const/NewsContent"
import SchoolNews from "../components/SchoolNews"



const NewsComponent =()=>{
    return(
        <>
        
        {
                    NewsContent.map((e,i)=>{
                        return(
                            <>
                             <SchoolNews description={e.description} title={e.title} subtitle={e.subTitle} img={e.img} key={i}/>
                            </>
                        )
                    })
               }
        
        </>
    )
}
export default NewsComponent