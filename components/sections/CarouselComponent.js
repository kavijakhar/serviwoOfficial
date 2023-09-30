// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import React from 'react';
import Image from 'next/image';
// Initialization for ES Users


const CarouselComponent = () => {

  const logosData = [
    { id: 6, src: "/logos/logo8.jpeg" },
    { id: 1, src: "/logos/logo.jpg" },
    { id: 2, src: "/logos/logo3.jpg" },
    { id: 3, src: "/logos/logo4.png" },
    { id: 4, src: "/logos/logo5.jpeg" },
    { id: 5, src: "/logos/logo7.jpeg" },
    { id: 7, src: "/logos/logo9.jpeg" },
    { id: 8, src: "/logos/logo10.jpeg" },
    { id: 9, src: "/logos/logo11.jpeg" },
    { id: 10, src: "/logos/logo20.jpg" },
    { id: 11, src: "/logos/logo21.jpg" },
    { id: 12, src: "/logos/logo24.jpg" },
  ];
  const swiperStyle = {
    background: 'linear-gradient(purple, var(--color))',
    padding:'2rem 0rem'
};
return (
<>

<Swiper
style={swiperStyle}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards,Navigation, Pagination, A11y,]}
      className="mySwiper rounded"
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      // spaceBetween={30}
      //   effect={'fade'}
      //   navigation={true}
      //   pagination={{
      //     clickable: true,
      //   }}
      //   modules={[EffectFade, Navigation, Pagination]}
      //   className="mySwiper"
    >
      {
        logosData&& logosData.map((e)=>{
          return(

            <SwiperSlide key={e.id}>
              <div className='flex justify-center align-middle items-center'>
              <Image width={500} height={500} src={e.src} className="text-center  " alt="..." />

              </div>
              </SwiperSlide>
          )
        })
      }
      
    </Swiper>

</>
  );
};

export default CarouselComponent;
