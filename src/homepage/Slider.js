
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './styles.css'

 const slides = [
    {
      id:0,
        url: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_614138202_365699.jpg'
        },
        {
          id:1,
          url: 'https://thumbs.dreamstime.com/b/webinar-concept-technology-light-background-blurred-abstract-177876237.jpg'
          },
    
        {  id:2,
          url: 'https://image.freepik.com/free-vector/abstract-live-concert-music-background-with-guitar_1017-19495.jpg'},
    
       { id:3,
         url:' https://images.pexels.com/photos/4145037/pexels-photo-4145037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
     {
      id:4,
       url:'https://images.pexels.com/photos/5325049/pexels-photo-5325049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},];


    export  const Slider = () => {
        const [index, set] = useState(0)
        // const [current, setCurrent] = useState(0);
         // const length = slides.length;
        const transitions = useTransition(slides[index], item => item.id, {
          from: { opacity: 0, transform: 'scale(1.1)' },
          enter: { opacity: 1, transform: 'scale(1)' },
          leave: { opacity: 0, transform: 'scale(0.9)' },
          config: config.molasses,
        })
        useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 2000), [])
        //useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 2000), [])
        return transitions.map(({ item, props, key }) => {
          return<animated.div
            key={key}
            class="bg"
            style={{  backgroundImage: `url(${item.url})`,
          ...props }}
          />
        })
      }
      export default Slider  