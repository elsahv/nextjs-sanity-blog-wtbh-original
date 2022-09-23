import Image from 'next/image'
import profilePic from '../public/images/about-pic.jpg'
import styled from 'styled-components' 


// STYLES
const Wrapper = styled.div`
display: flex;
justify-content: center;
margin: 60px 105px;
`

export const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 
  'add add'
  'tl tr'
  'bl bl'
  'br br';
  grid-gap: 1em;
  // border: solid 2px black;

  #square {
    border: solid 2px black;
  }

@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  grid-template-areas: 
  'img' 
  'content';
}
`


//////////* ADD*/////////////
export const Add = styled.div`
grid-area: add;
`


//////////* SQUARE 1 */////////////
export const Sq1 = styled.div`
background: coral;
grid-area: tl;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 0 40px 100px;
`

export const ContentTitle = styled.h4`
font-size: 25px;  
padding-bottom: 15px;
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



//////////* SQUARE 2 */////////////
export const Sq2 = styled.div`
grid-area: tr;
// background: green;
`

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
`




//////////* SQUARE 3 */////////////
export const Sq3 = styled.div`
grid-area: bl;
background: aquamarine;
padding: 20px;
span {
 font-size: 18px;
}
a {
  color: #000;
  padding: 3px;
}
`



//////////* SQUARE 4 */////////////
export const Sq4 = styled.div`
grid-area: br;
background: orange;

`


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
  color: #000;
}

@media only screen and (max-width: 1024px) {
padding: 0 50px;
}

@media only screen and (max-width: 531px) {
font-size: 18px;
}
`





//END STYLES
const test = () => {
  return (
    <>
    <Wrapper>
        <Grid>

         <Add>additional about</Add>
           <Sq1 id="square">
           <ContentTitle>
             About 
          </ContentTitle>
          <ContentBody>
             Welcome to Writing to Better Health! Im Elsa,
             a freelance web developer and lover of nutrition and food in general. Ive originally started this website to relearn and recall some of the stuff Ive learned from my bachelors education in Nutrition and Food Science.
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

           <Sq3 id="square">
           <ContentTitle id="contact">
            Contact
            </ContentTitle>
            <span>Any questions or feedback? Feel free to reach out at 
            <a href="mailto:writingtobetterhealth@gmail.com">writingtobetterhealth@gmail.com</a>  
            </span>
           </Sq3>

           <Sq4 id="square">
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
           </Sq4>
        </Grid>
    </Wrapper>
    </>
  )
}

export default test