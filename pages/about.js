import Image from 'next/image'
import profilePic from '../public/images/about-pic.jpg'
import styled from 'styled-components' 


export const AboutContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
grid-area: left;
// background: teal;

@media only screen and (max-width: 1024px) {
padding: 30px 50px;
border-bottom: solid 2px black;
}

@media only screen and (max-width: 600px) {
 display: flex;
flex-direction: column;
  }
`


export const ContentWrapper = styled.div`
 display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
  'img'
  'content';
`

export const ContentSection = styled.div`
padding: 25px 25px 0;
font-size: 18px;  
grid-area: content;

@media only screen and (max-width: 834px) {
  padding: auto;
}
`


export const ContentTitle = styled.h4`
font-size: 25px;  
padding-top: 20px;
padding-bottom: 5px;
`

export const ContentBody = styled.div`
font-size: 20px;
line-height: 1.5em;
a {
  color: #000;
  padding: 0 5px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`


export const ImgWrapper = styled.div`
width: 250px;
grid-area: img;
position: relative;
margin: 30px 80px;
border: solid 2px black; 

@media only screen and (max-width: 1024px) {
 margin: auto;
 width: 260px;
}
`







//STYLES
export const PortfolioCTA = styled.div`
font-size: 22px;  
display: flex;
justify-content: center;
padding: 65px 25px;

@media only screen and (max-width: 1024px) {
line-height: 1.5;
}

@media only screen and (max-width: 834px) {
text-align: left;
overflow-x: hidden;
}
`

export const Body = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 20px;
ul {
 list-style: none;
}
a {
  margin: 0px 5px;
  color: #007ba5;
}

@media only screen and (max-width: 1024px) {
padding: 0 50px;
}

@media only screen and (max-width: 531px) {
font-size: 18px;
}
`
//END STYLES

const SubscribeCta = () => {
  return (
    <>  
      <AboutContainer id="about"> 
        <ContentWrapper>
          <ContentSection>
          <ContentTitle>
             About 
          </ContentTitle>
           <ContentBody>
              <div> Welcome to Writing to Better Health! Im Elsa,
             a freelance web developer and lover of nutrition and food in general. Ive originally started this website to relearn and recall some of the stuff Ive learned from my bachelors education in Nutrition and Food Science.</div>
           
             <ImgWrapper>
            <Image
              src={profilePic}
              alt="about-me"
              layout="responsive"
              className="img"
          />
          </ImgWrapper>
       
          <ContentTitle>
            Contact
            </ContentTitle>
      <div>Any questions or feedback? Feel free to reach out at 
      <a href="mailto:writingtobetterhealth@gmail.com">writingtobetterhealth@gmail.com</a>  
      </div>
            </ContentBody>
            </ContentSection>
            </ContentWrapper>
      </AboutContainer>




      <PortfolioCTA id="contact">
    <Body>
        <h4>Need a website? Or perhaps you have questions about web development or design?</h4>
        <p>For business inquiries... you can reach me at
          <a href="mailto:devdesignsbyelsa@gmail.com">devdesignsbyelsa@gmail.com</a> 
          </p>
          <br />
        <p> You can also access my portfolio
          <a href="http://elsahovey.com">here</a>
           </p>
              </Body>
            </PortfolioCTA>
</>
  )
}

export default SubscribeCta