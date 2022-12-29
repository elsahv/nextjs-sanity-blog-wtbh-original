import Image from "next/image";
import Link from "next/link";
import { Grid, LeftSide, RightSide } from "../styles/Grid.styled";
import { ImgWrapper } from "../styles/images/SectionImages.styled";
import { ContactBtn } from "../styles/buttons/ContactBtn.styled";
import img1 from "../../public/images/sketch2.jpg";
import content from "./data";
import { HeroContent, Headline } from "./Hero.styled";

export default function Hero({
  headline1,
  headline2,
  listItem1,
  listItem2,
  listItem3,
  ctaBtn,
}) {
  return (
    <>
      <Grid>
        <LeftSide>
          <HeroContent>
            <div>
              {content.map((item, index) => (
                <div key={index} item={item}>
                  <h2>{item.headline1}</h2>
                  <Headline>{item.headline2}</Headline>
                  <p>{item.businessGoal}</p>
                  <ul>
                    <li>{item.listItem1}</li>
                    <li>{item.listItem2}</li>
                    <li>{item.listItem3}</li>
                  </ul>
                  <ContactBtn
                    style={{
                      marginTop: "15px",
                      background: "teal",
                      color: "aquamarine",
                    }}
                  >
                    <Link href="/contact">{item.ctaBtn}</Link>
                  </ContactBtn>
                </div>
              ))}
            </div>
          </HeroContent>
        </LeftSide>
        <RightSide>
          <ImgWrapper>
            <Image
              src={img1}
              alt="about-me"
              layout="responsive"
              className="img"
            />
          </ImgWrapper>
        </RightSide>
      </Grid>
    </>
  );
}
