import styled from 'styled-components'


//STYLES
export const Wrapper = styled.div`
line-height: 2;
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




const AboutPortfolio = () => {
  return (
    <>
    <Wrapper id="contact">
    <Body>
       <ul>
        <h4>Need a website? Or perhaps you have questions about web development or design?</h4>
        <li>- For business inquiries... you can reach me at
          <a href="mailto:devdesignsbyelsa@gmail.com">devdesignsbyelsa@gmail.com</a> </li>
        <li>- You can also access my portfolio<a href="http://elsahovey.com">here</a> </li>
       </ul>
              </Body>
            </Wrapper>
    </>
  )
}
export default AboutPortfolio