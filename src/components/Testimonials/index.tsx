import Carousel from 'react-elastic-carousel';

const Testimonials = () => {
  return (
    <Carousel itemsToShow={1} isRTL={false} enableAutoPlay autoPlaySpeed={100}>
      <div>
        <h1>Bla #01</h1>
      </div>
      <div>
        <h1>Bla #02</h1>
      </div>
      <div>
        <h1>Bla #03</h1>
      </div>
      <div>
        <h1>Bla #04</h1>
      </div>
    </Carousel>
  );
};

export default Testimonials;
