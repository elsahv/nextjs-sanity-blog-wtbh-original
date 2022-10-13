import Image from "next/image";
import profilePic from "../public/images/about-pic.jpg";
import styled from "styled-components";

// STYLES
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0px;
  padding: 50px 150px 60px;
  background: teal;
  border-top: solid 2px black;
  border-bottom: solid 2px black;

  @media only screen and (max-width: 600px) {
    margin: 40px 0;
    padding: 50px;
  }

  @media only screen and (max-width: 531px) {
    padding: 0px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "tl tr";
  grid-gap: 1em;
  #square {
    border: solid 2px black;
  }

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "tl"
      "tr";
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

  @media only screen and (max-width: 1024px) {
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
  display: flex;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  grid-area: img;
  margin: 30px 80px;
  border: solid 2px black;

  @media only screen and (max-width: 1024px) {
    margin: auto;
    width: 260px;
  }

  @media only screen and (max-width: 531px) {
    margin-bottom: 25px;
  }
`;

//END STYLES
const about = () => {
  return (
    <>
      <Wrapper id="about">
        <Grid>
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
