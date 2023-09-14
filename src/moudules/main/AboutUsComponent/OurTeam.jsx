import { OurTeamContent } from "./OurTeamContent"
import { OurTeamData } from "../../../const/OurTeamData"
export const OurTeam=()=>{
    return(
        <>
        <div className="mt-5">
            <h1 className="text-primary text-center ">
                    Our Team
            </h1>
                
            <p className="text-center" style={{color:'gray'}}>
                Far far away,behind the word mountains,far fromthe countres vokalia and <br /> Consonantia ,there live the blind texts.
            </p>
            <div className=" mx-0 w-100 d-flex flex-lg-nowrap flex-wrap justify-content-center ">
            {
                OurTeamData.map((e,i)=>{
                    return(
                        <>
                        <OurTeamContent img={e.img} name={e.name} description={e.description} jop={e.jop}/>
                        </>
                    )
                })
            }
            </div>
           
        </div>
        
        
        </>
    )
}
export default OurTeam