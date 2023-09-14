import Header from "../components/Header"
import img from "../../../assets/Home.jpg"
import Instructor from "../components/Instructor"
import Education from "../components/Education"
import ChoseUs from "../components/ChoseUs"
import OurTeam from "../AboutUsComponent/OurTeam"



const AboutUs=()=>{
    return(
        <>
             <Header titleFontSize='4rem' subTitleFontSize='20px' margin='-10rem' img={img} title='About Us' btnTitle='EXPLORE COURSES' subTitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis perferendis nostrum numquam sapiente consequuntur consequatur vitae nam ratione deserunt sequuntur consequatur vitae nam ratione ." />
             <Instructor/>
             <OurTeam/>
             <Education/>
             <ChoseUs/>
        </>
    )
}

export default AboutUs