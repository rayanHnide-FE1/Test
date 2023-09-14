
import React from "react";
import img from "../../../assets/Home.jpg"
import Header from "../components/Header";
import Category from "../components/Category";
import Instructor from "../components/Instructor";
import Education from "../components/Education";
import Courses from "../components/Courses";
import HomeAboutUS from "../components/HomeAboutUS";
import HomeNews from "../components/SchoolNews";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import ChoseUs from "../components/ChoseUs";

export default function Main(){

    return(
        <>     
        <Header margin='-10rem' img={img} title='WHATCH THE VIDEO' btnTitle='EXPLORE COURSES' subTitle=' Education is the Mother of Leadership' />
        <Category/>
        <Instructor />
        <Education/>
        <Courses/>
        <HomeAboutUS/>
        <HomeNews/>
        <Pricing/>
        <Testimonials/>
        <ChoseUs/>

        </>
    )
}

