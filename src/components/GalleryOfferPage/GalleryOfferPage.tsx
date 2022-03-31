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
    <Container>
      <Slider>
        <Radio type="radio" name="slide" id="s1" defaultChecked />
        <Radio type="radio" name="slide" id="s2" />
        <Radio type="radio" name="slide" id="s3" />
        <Radio type="radio" name="slide" id="s4" />
        <Radio type="radio" name="slide" id="s5" />
        <Slide htmlFor="s1" id="slide1">
          <Img src={images[0]} />
        </Slide>
        <Slide htmlFor="s2" id="slide2">
          <Img src={images[1]} />
        </Slide>
        <Slide htmlFor="s3" id="slide3">
          <Img src={images[2]} />
        </Slide>
        <Slide htmlFor="s4" id="slide4">
          <Img src={images[3]} />
        </Slide>
        <Slide htmlFor="s5" id="slide5">
          <Img src={images[4]} />
        </Slide>
      </Slider>
    </Container>
  );
}
