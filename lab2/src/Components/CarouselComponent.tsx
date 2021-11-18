import { Carousel } from "react-bootstrap";

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/gollum.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Are you greedy?</h3>
          <p>Then maybe you're gollum</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/harry.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Are you humble?</h3>
          <p>Then you might be a wizard Harry</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/minions.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Do you like being part of a group?</h3>
          <p>Then you might be a minion</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
