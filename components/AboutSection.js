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
  padding: 0 60px 50px;

  @media only screen and (max-width: 1024px) {
    padding: auto;
  }
`;

export const ContentTitle = styled.h4`
  font-size: 35px;
  padding-bottom: 15px;
  // text-shadow: 1px 1px 1px gray;
  color: #000;

  @media only screen and (max-width: 1024px) {
    padding-top: 40px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

export const ContentBody = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  color: #000;
  // font-weight: bold;
  // text-shadow: 1px 1px 1px gray;

  @media only screen and (max-width: 531px) {
    font-size: 18px;
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
              Hi there, my name is Elsa. I’m currently creating{" "}
              <i>Writing to Better Health</i> to improve and build of my skills
              in web design and software development. I love food and nutrition,
              which you will see a lot with this site!
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
