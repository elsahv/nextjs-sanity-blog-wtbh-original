import MailchimpForm from './MailchimpForm'
import Link from 'next/link'
import styled from 'styled-components'



 const MailchimpWrapper = styled.div`
// background: green;
margin-top: 385px;
padding-left: 55px; 
grid-area: right;
border-bottom: solid 2px black;
border-top: solid 2px black;
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-areas:
'a'
'b';
 

@media only screen and (max-width: 1024px) {
  padding: 0;
}
`

 const CTA = styled.div`
padding: 20px;  
grid-area: a;
color: #2a9d8f;
display: flex;
justify-content: flex-end;
flex-direction: column;

@media only screen and (max-width: 600px) {
padding-top: 45px;
}
`

 const ContentTitle = styled.h4`
font-size: 22px;

@media only screen and (max-width: 768px) {
    margin: 0;
}

@media only screen and (max-width: 531px) {
    font-size: 20px;
    text-align: center;
    margin: 5px;
}
`



 const ContentParagraph = styled.div`
font-size: 18px;
// padding-left: 10px;
color: #000;
a {
  color: #000;
  padding: 0 6px;
}

@media only screen and (max-width: 834px) {
   font-size: 18px;
}

@media only screen and (max-width: 531px) {
  font-size: 18px;
}
`


 const MailchimpContainer = styled.div`

@media only screen and (max-width: 531px) {
  }
`


const SubscribeCTA = () => {
    return (
      <MailchimpWrapper>
      <CTA>
        <ContentTitle>
       Weekly Newsletter
          </ContentTitle>
  
        <ContentParagraph>
      Regarding food, plants, and other writings...  Subscribe for post updates! 
      <Link href="/newsletter">View newsletter</Link>
      
          </ContentParagraph>
        </CTA>
          <MailchimpContainer>
            <MailchimpForm />
          </MailchimpContainer>
       </MailchimpWrapper>
    )
  }
  
  export default SubscribeCTA