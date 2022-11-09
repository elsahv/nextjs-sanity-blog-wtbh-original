import MailchimpForm from "./MailchimpForm";
import Link from "next/link";
import styled from "styled-components";

const MailchimpWrapper = styled.div`
  padding-top: 50px;
  grid-area: right;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "a"
    "b";

  @media only screen and (max-width: 834px) {
    padding: 20px 40px;
    grid-template-rows: 1fr;
    grid-template-areas: "a b";
  }
  @media only screen and (max-width: 600px) {
    padding: 20px 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a"
      "b";
  }
`;

const ContentParagraph = styled.h2`
  font-size: 20px;
  padding: 20px 20px 5px;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  opacity: 0.8;
  a {
    color: aquamarine;
    padding: 0 6px;
  }

  @media only screen and (max-width: 531px) {
    font-size: 17px;
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

const MailchimpContainer = styled.div``;

const SubscribeCTA = () => {
  return (
    <MailchimpWrapper>
      <ContentParagraph>
        A newsletter under construction, coming soon!
      </ContentParagraph>
      <MailchimpContainer>
        <MailchimpForm />
      </MailchimpContainer>
    </MailchimpWrapper>
  );
};

export default SubscribeCTA;
