import React from 'react'
import './testimonial.css'
import avatar from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






function Testimonial() {
  const data = [
    {
      id:1,
      avatar: avatar,
      name: 'Sexy Diva',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga molestiae velit quod saepe esse minima cupiditate provident dolor! Fuga, fugiat velit pariatur ullam repellat quasi? A fugiat illum cumque.'
    },
    {
      id:2,
      avatar: avatar2,
      name: 'The man',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga molestiae velit quod saepe esse minima cupiditate provident dolor! Fuga, fugiat velit pariatur ullam repellat quasi? A fugiat illum cumque.'
    },
    {
      id:3,
      avatar: avatar3,
      name: 'That nigga',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga molestiae velit quod saepe esse minima cupiditate provident dolor! Fuga, fugiat velit pariatur ullam repellat quasi? A fugiat illum cumque.'
    },
    {
      id:4,
      avatar: avatar4,
      name: 'Habibi',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga molestiae velit quod saepe esse minima cupiditate provident dolor! Fuga, fugiat velit pariatur ullam repellat quasi? A fugiat illum cumque.'
    },
  ]




  return (
    <section id="testimonials">
      <h5>
        Review from clients
      </h5>
      <h2> Testimonials</h2>

     
      
      {/* using swiperjs to create a slide */}
      <Swiper className="container testimonials__container"
      
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}

      >
        {
          data.map(({ id, avatar, name, review }) =>
    
    <SwiperSlide key={id} className='testimonial'>
      <div className='client__avatar'>
        <img src={avatar} alt="" />
      </div>
      <h5 className='client__name'>{name}</h5>
      <small className='client__review'>{review}</small>
    </SwiperSlide>

          )
        }

      </Swiper>
    </section>
  )
}

export default Testimonial