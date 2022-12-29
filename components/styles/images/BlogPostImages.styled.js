import styled from "styled-components";

export const BlogPostImgWrapper = styled.div`
  cursor: pointer;
  .img {
    width: 100%;
    height: 400px;
    border: solid 1px black;
    &:hover {
      opacity: 0.7;
      transition: 2s;
    }
  }

  @media only screen and (max-width: 1024px) {
    .img {
      height: 300px;
    }
  }
`;
