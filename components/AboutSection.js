import Image from "next/image";
import profilePic from "../public/images/about-pic.jpg";
import styled from "styled-components";

// STYLES
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 105px;

  @media only screen and (max-width: 531px) {
    margin: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "add add"
    "tl tr"
    "bl bl"
    "br br";
  grid-gap: 1em;
  #square {
    border: solid 2px black;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "add"
      "tl"
      "tr"
      "bl"
      "br";
  }
`;

//////////* ADD*/////////////
export const Add = styled.div`
  grid-area: add;
  background: orange;
  height: 400px;
  width: 100%;
  padding: 30px;

  @media only screen and (max-width: 531px) {
    padding: 40px 60px;
  }
`;

//////////* SQUARE 1 */////////////
export const Sq1 = styled.div`
  background: coral;
  grid-area: tl;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 40px 100px;

  @media only screen and (max-width: 531px) {
    padding: auto;
  }
`;

export const ContentTitle = styled.h4`
  font-size: 35px;
  padding-bottom: 15px;

  @media only screen and (max-width: 531px) {
    padding-top: 20px;
  }
`;

export const ContentBody = styled.div`
  font-size: 22px;
  line-height: 1.5em;

  a {
    color: #000;
    padding: 0 5px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 18px;
    padding: 0 50px;
  }
`;

//////////* SQUARE 2 */////////////
export const Sq2 = styled.div`
  grid-area: tr;
  // background: green;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  grid-area: img;
  position: relative;
  margin: 30px 80px;
  border: solid 2px black;

  @media only screen and (max-width: 1024px) {
    margin: auto;
    width: 260px;
  }
`;

//END STYLES
const about = () => {
  return (
    <>
      <Wrapper id="about">
        <Grid>
          {/* <Add id="square">
            Writing to Better Health is an illustrative site inspired by
            mindmapping. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Magni placeat cumque laborum consectetur, tenetur ratione,
            saepe eligendi quia mollitia soluta sequi, unde aperiam totam nulla
            aut similique error dolor consequatur.
          </Add> */}
          <Sq1 id="square">
            <ContentTitle>About</ContentTitle>
            <ContentBody>
              Hi there, I’m Elsa. I’ve started this blog to relearn some
              nutrition facts, and build up my skills with web design and
              development. I love food and food illustrations, which you will
              see a lot with this site!
            </ContentBody>
          </Sq1>

          <Sq2>
            <ImgWrapper>
              <Image
                src={profilePic}
                alt="about-me"
                layout="responsive"
                className="img"
              />
            </ImgWrapper>
          </Sq2>
        </Grid>
      </Wrapper>
    </>
  );
};

export default about;
