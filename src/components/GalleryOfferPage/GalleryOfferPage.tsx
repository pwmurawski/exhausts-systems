/* eslint-disable react/no-array-index-key */
import {
  Container,
  Slider,
  Img,
  Radio,
  Slide,
} from "./styles/GalleryOfferPageStyles";
import img from "../../assets/fot.jpg";
import img2 from "../../assets/fot2.jpeg";
import img3 from "../../assets/map.jpg";
import img4 from "../../assets/maxresdefault.jpg";
import img5 from "../../assets/fot4.jpg";

export default function GalleryOfferPage() {
  const images = [img, img2, img3, img4, img5];

  return (
    <Container data-testid="conGalleryOfferPage">
      <Slider data-testid="slider">
        <Radio
          data-testid="radio-0"
          type="radio"
          name="slide"
          id="s0"
          defaultChecked
        />
        <Radio data-testid="radio-1" type="radio" name="slide" id="s1" />
        <Radio data-testid="radio-2" type="radio" name="slide" id="s2" />
        <Radio data-testid="radio-3" type="radio" name="slide" id="s3" />
        <Radio data-testid="radio-4" type="radio" name="slide" id="s4" />
        {images.map((imgEl, idx) => (
          <Slide
            key={idx}
            htmlFor={`s${idx}`}
            id={`slide${idx}`}
            data-testid={`slide-${idx}`}
          >
            <Img data-testid={`img-${idx}`} src={imgEl} />
          </Slide>
        ))}
      </Slider>
    </Container>
  );
}
