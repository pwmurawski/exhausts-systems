import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 60px;
`;

export const Slider = styled.section`
  max-height: 400px;
  height: 70vw;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Slide = styled.label`
  margin: auto;
  width: 70%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s ease;
`;

export const Radio = styled.input`
  display: none;

  &#s1:checked
    ~ ${Slide}#slide4,
    &#s2:checked
    ~ ${Slide}#slide5,
    &#s3:checked
    ~ ${Slide}#slide1,
    &#s4:checked
    ~ ${Slide}#slide2,
    &#s5:checked
    ~ ${Slide}#slide3 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-30%, 0, -200px);
  }

  &#s1:checked
    ~ ${Slide}#slide5,
    &#s2:checked
    ~ ${Slide}#slide1,
    &#s3:checked
    ~ ${Slide}#slide2,
    &#s4:checked
    ~ ${Slide}#slide3,
    &#s5:checked
    ~ ${Slide}#slide4 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-15%, 0, -100px);
  }

  &#s1:checked
    ~ ${Slide}#slide1,
    &#s2:checked
    ~ ${Slide}#slide2,
    &#s3:checked
    ~ ${Slide}#slide3,
    &#s4:checked
    ~ ${Slide}#slide4,
    &#s5:checked
    ~ ${Slide}#slide5 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);
  }

  &#s1:checked
    ~ ${Slide}#slide2,
    &#s2:checked
    ~ ${Slide}#slide3,
    &#s3:checked
    ~ ${Slide}#slide4,
    &#s4:checked
    ~ ${Slide}#slide5,
    &#s5:checked
    ~ ${Slide}#slide1 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(15%, 0, -100px);
  }

  &#s1:checked
    ~ ${Slide}#slide3,
    &#s2:checked
    ~ ${Slide}#slide4,
    &#s3:checked
    ~ ${Slide}#slide5,
    &#s4:checked
    ~ ${Slide}#slide1,
    &#s5:checked
    ~ ${Slide}#slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(30%, 0, -200px);
  }
`;
