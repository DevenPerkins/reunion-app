import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import testimonial from '../assets/testimonial.jpg'
import testimonial1 from '../assets/cheers.jpeg'
import testimonial2 from '../assets/Boxed.jpeg'

const items = [
  {
    src: testimonial,
    altText: '"We Were able to have all of the needed party items which made everyone super happy to be at our party"',
    caption: '"We Were able to have all of the needed party items which made everyone super happy to be at our party"',
    from: '-Bob Bobby from Cali, CA',
    styling: {height: "350px" , width: "650px"},
    // textStyling: {color: '#49525A' }
  },
  {
    src: testimonial1,
    altText: '"This app brought everyone together we had such a great time. The drink generator really made the party hop"',
    caption: '"This app brought everyone together we had such a great time. The drink generator really made the party hop"',
    from: '-Chole Lions from Dorchester, MA',
    styling: {height: "350px" , width: "650px"},
  },
  {
    src: testimonial2,
    altText: '"Our water party launch was a success thanks to the Reunion app. Thanks to the allergy feature, no one got sick"',
    caption: '"Our water party launch was a success thanks to the Reunion app. Thanks to the allergy feature, no one got sick"',
    from: '-Daryn Kuipers from Holland, MI',
    styling: {height: "350px" , width: "650px"},
  }
];

const Testimonial = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={item.styling} />
        <CarouselCaption className="caption" captionText={item.from} captionHeader={item.caption} style={item.textStyling} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Testimonial;