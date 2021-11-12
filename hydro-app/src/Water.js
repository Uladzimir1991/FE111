import React, { useContext, useEffect, useState } from "react"
import { AppContext } from "./App.js";
import './index.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, EffectFade, Keyboard, Mousewheel} from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, EffectFade, Keyboard, Mousewheel])

function Water() {

  const {count, goal} = useContext(AppContext)

    let [perc, setPerc] = useState(0)


    useEffect(() => {

      if(count > 0) {

        let p = count / (goal / 100)

        setPerc(p)
      }

    }, [count])

    return (
      <div className="water">
        <div className="water__grad">
          <div className="wave1"></div>
          <div className="wave2"></div>
          <div className="bubles">
              <div className="bubl1"></div>
              <div className="bubl2"></div>
              <div className="bubl3"></div>
            </div>
        </div>
        <React.Fragment>
          <Swiper 
          navigation={true}
          grabCursor={true}

          watchOverflow={true}

          speed={800}

          effect={'fade'}

          fadeEffect={{
            crossFade: true
          }}

          keyboard={{
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true
          }}

          mousewheel={{
            sensitivity: 1
          }}
          slidesPerView={1}
          onInit={(swiper) => {console.log('Swiper initialized!', swiper)}}
          onSlideChange={(swiper) => {console.log('Slide index change to: ', swiper.activeIndex)}}
          onReachEnd={() => {console.log('Swiper end reached')}}
          >
            <SwiperSlide className="water__percent">{perc}%</SwiperSlide>
            <SwiperSlide className="water__percent"><span>Daily hydration rate left</span><div>{`${100 - perc}%`}</div></SwiperSlide>
            <SwiperSlide className="water__percent">{`asd`}</SwiperSlide>
          </Swiper>
        </React.Fragment>
		  </div>
    )
}

export default Water