import React from "react";
import "./temoignage.css";
import AVTR1 from "./../../images/avatar1.jpg";
import AVTR2 from "./../../images/avatar2.jpg";
import AVTR3 from "./../../images/avatar3.jpg";
import AVTR4 from "./../../images/avatar4.jpg";

// import Swiper core and required modules

import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "FATOH",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
 veniam laborum mollitia dignissimos officiis debitis, dolor placeat
 optio`
  },
  {
    avatar: AVTR2,
    name: "FATOH",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
    veniam laborum mollitia dignissimos officiis debitis, dolor placeat
    optio`,
  },
  {
    avatar: AVTR3,
    name: "FATOH",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
      veniam laborum mollitia dignissimos officiis debitis, dolor placeat
      optio`
  },
  {
    avatar: AVTR4,
    name: "FATOH",
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
      veniam laborum mollitia dignissimos officiis debitis, dolor placeat
      optio`
  }
];


const Temoignage = () => {
  return (
    <section id="temoignage">
     <h5>Review from Clients</h5>
        <h2>Portfolio</h2>
      <Swiper className="container temoignage__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
     > {
        data.map((item,index)=>{
          return(
            <SwiperSlide className="temoignage" key={index} >
            <div className="client__avatar">
              <img src={item.avatar} alt="Avatar" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="clients__review">{item.review}</small>
          </SwiperSlide>
          )
        })
       }
        
       
      </Swiper>
    </section>
  );
};

export default Temoignage;
