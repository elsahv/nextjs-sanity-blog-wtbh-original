import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 105px;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 834px) {
    margin: 10px 60px;
  }
`;

export const ContentTitle = styled.h4`
  font-size: 35px;
  padding-bottom: 15px;

  @media only screen and (max-width: 531px) {
    padding-top: 20px;
  }
`;

//////////* SQUARE 3 */////////////
export const Sq3 = styled.div`
  margin-top: 150px;
  margin-right: 20px;
  grid-area: bl;
  background: aquamarine;
  padding: 65px;
  p {
    font-size: 22px;
  }
  a {
    color: #000;
    padding: 5px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 70px;
    margin: 20px 0;
    p {
      font-size: 18px;
    }
  }
`;

//////////* SQUARE 4 */////////////
export const Sq4 = styled.div`
  grid-area: br;
  background: orange;
  margin-bottom: 300px;
`;

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
`;

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
  p {
    font-size: 22px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 50px;
    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 531px) {
    font-size: 18px;
  }
`;

const ContactSection = () => {
  return (
    <>
      <Wrapper>
        <Sq3 id="square">
          <ContentTitle id="contact">Contact</ContentTitle>
          <p>
            Any questions or feedback? Feel free to reach out at
            <a href="mailto:writingtobetterhealth@gmail.com">
              writingtobetterhealth@gmail.com
            </a>
          </p>
        </Sq3>

        <Sq4 id="square">
          <PortfolioCTA>
            <Body>
              <h4>
                Need a website?
                {/* Or perhaps you have questions about web
                development or design? */}
              </h4>
              <p>
                For business inquiries... you can reach me at
                <a href="mailto:devdesignsbyelsa@gmail.com">
                  devdesignsbyelsa@gmail.com
                </a>
              </p>
              <p>
                {" "}
                You can also access my portfolio
                <a href="http://elsahovey.com">here</a>
              </p>
            </Body>
          </PortfolioCTA>
        </Sq4>
      </Wrapper>
    </>
  );
};

export default ContactSection;
