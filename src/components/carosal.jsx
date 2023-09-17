import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='carouselMain' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage img="https://images-us.nivea.com/-/media/nivea/local/in/boday_page/3_banner_3080x806.png?rx=626&ry=0&rw=2063&rh=806" />
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage img="https://www.cnet.com/a/img/resize/81b8165fd683cba3aaa1f4560b9fe33c2d966bd2/hub/2022/12/16/eb02a6aa-f331-4fbe-9e5f-35efd2198f8d/p1002240-1.jpg?auto=webp&width=1200" />
      </Carousel.Item>
      <Carousel.Item>
      <ExampleCarouselImage img="https://cdn.metro-online.com/-/media/Project/MCW/PK_Metro/2020-to-2021/Product-World-2021/12-appliances.jpg?h=464&iar=0&w=1392&rev=44e671fb84bb4009a40522a023624dcb&hash=01002F834B2340B9A5426039F190F878" />
        </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;