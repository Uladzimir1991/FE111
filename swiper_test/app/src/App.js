import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Lazy, EffectCoverflow, EffectCube, EffectFade, Autoplay, Scrollbar, Keyboard, Mousewheel, HashNavigation} from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.css';

SwiperCore.use([Navigation, Pagination, Lazy, EffectCoverflow, EffectCube, EffectFade, Autoplay, Scrollbar, Keyboard, Mousewheel, HashNavigation])

export default function App() {
  const slides = [];

  for(let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide data-hash={`slide-${i+1}`} key={`slide-${i}`} tag="li">
        <img src={`https://picsum.photos/id/${i+1}/500/300`} alt={`Slide ${i+1}`} />
      </SwiperSlide>
    )
  }

  return (
    <React.Fragment>
      <Swiper 
      tag="section" 
      wrapperTag="ul" 
      id="main"
      navigation
      grabCursor={true}
      
      hashNavigation={{
        watchState: true,
      }}

      watchOverflow={true}

      // loop={true}
      
      freeMode={true}

      speed={800}

      // lazy={{
      //   loadOnTransitionStart: false,
      //   loadPrevNext: true,
      // }}

      watchSlidesProgress={true}
      watchSlidesVisibility={true}

      effect={'cowerFlow'}

      // coverflowEffect={{
      //   rotate: 20,
      //   stretch: 50,
      //   slideShadows: true
      // }}

      // effect={'cube'}

      // cubeEffect={{
      //   slideShadows: true,
      //   shadow: true,
      //   shadowOffset: 20,
      //   shadowScale: 0.94,
      // }}

      effect={'fade'}

      fadeEffect={{
        crossFade: true
      }}

      // direction={'vertical'}

      // autoplay={{
      //   delay: 2000,
      //   stopOnLastSlide: true,
      //   disableOnInteraction: false
      // }}

      keyboard={{
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      }}

      mousewheel={{
        sensitivity: 1
      }}

      // scrollbar={{
      //   draggable: true
      // }}
      pagination={{ 
        type: "fraction",
        renderFraction: function(currentClass, totalClass) {
          return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        }
        // clickable: true, 
        // dynamicBullets: true, 
        // renderBullet: function(activeIndex, className) {
        //   return '<span class="' + className + '"><span class="point">' + (activeIndex + 1) + '</span></span>';  
        // },
      }}
      slidesPerView={1}
      onInit={(swiper) => {console.log('Swiper initialized!', swiper)}}
      onSlideChange={(swiper) => {console.log('Slide index change to: ', swiper.activeIndex)}}
      onReachEnd={() => {console.log('Swiper end reached')}}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  )
}