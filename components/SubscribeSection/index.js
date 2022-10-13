import MailchimpForm from "./MailchimpForm";
import Link from "next/link";
import styled from "styled-components";

const MailchimpWrapper = styled.div`
  border-top: solid 2px black;
  padding-top: 50px;
  grid-area: right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a"
    "b";

  @media only screen and (max-width: 1024px) {
    padding-top: 30px;
  }
`;

const ContentParagraph = styled.p`
  font-size: 18px;
  padding: 20px 20px 5px;
  color: #000;
  opacity: 0.8;
  a {
    color: #000;
    padding: 0 6px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 15px;
    padding-top: 50px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 18px;
    padding-top: 10px;
  }
`;

const MailchimpContainer = styled.div`
  // background: green;
  @media only screen and (max-width: 531px) {
  }
`;

const SubscribeCTA = () => {
  return (
    <MailchimpWrapper>
      <ContentParagraph>
        A weekly newsletter regarding: food, plants, and other writings...
        Subscribe for post updates! You can also read it for free
        <a
          target="_blank"
          href="https://elsahovey.com/newsletter"
          rel="noreferrer"
        >
          here
        </a>
      </ContentParagraph>
      <MailchimpContainer>
        <MailchimpForm />
      </MailchimpContainer>
    </MailchimpWrapper>
  );
};

export default SubscribeCTA;
