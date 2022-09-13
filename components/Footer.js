import SmIcons from './Header/SmIcons'
import SubscribeIndex from './IndexCTA/SubscribeIndex'
import styled from 'styled-components'


 

export const Footer = styled.footer`
margin-top: 200px;
padding: 10px 30px;
border-top: solid 2px black;
 width: 100%;
 background: gray;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas:
'a b';

@media only screen and (max-width: 10244px) {
margin: auto;
}


@media only screen and (max-width: 834px) {
  grid-template-columns: 1fr;
  grid-template-areas:
  'a' 
  'b';
  
}

    @media only screen and (max-width: 531px) {
       padding: 10px 4px;
    }
`

export const SubscribeWrapper = styled.div`
grid-area: a;
`

export const Content = styled.div`
display: flex;
grid-area: b;
// background: teal;
padding: 5px;
ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}
li {
  list-style: none;
  font-size: 20px;
  margin: 5px;
}


@media only screen and (max-width: 531px) {
  li {
    font-size: 15px;
  }
}
`

 



export default function FooterSection() {
  return (
    <>
    <Footer>
      <SubscribeWrapper>
            <SubscribeIndex />
      </SubscribeWrapper>

      <Content>
          <ul>
      <SmIcons />

            <li>Contact</li>
            <li>Writing to Better Health- Copyright @ 2022</li>
          </ul>
          </Content>
  </Footer>
  </>

  )
}
