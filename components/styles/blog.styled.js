import styled from "styled-components";

export const PostsWrapper = styled.div`
  // background: orange;
  padding: 0 50px;
  border-top: solid 1px black;

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-top: solid 2px black;
  }
`;

export const CategoryBanner = styled.div`
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 30px;
  }
  li {
    margin: 0 20px;
    list-style: none;
    // background: teal;
    color: #000;
    border: solid 1px #000;
    padding: 10px 15px;
    border-radius: 25px;
    text-align: center;
    &:hover {
      background: teal;
      text-shadow: 1px 1px 1px #000;
      transition: 1s;
      color: #fff;
    }
  }
  @media only screen and (max-width: 799px) {
    li {
      margin: 0 10px;
      padding: 2px 8px;
      font-size: 12px;
    }
  }
`;

export const IndexGrid = styled.div`
  // background: orange;
  display: grid;
  grid-template-areas: "ls rs";
  grid-gap: 2em;

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const PostTitle = styled.h2`
  padding: 10px 0px;
  text-align: left;
  text-transform: capitalize;
  // text-shadow: 1px 1px 1px #000;
  color: #000;
`;

export const PostCategory = styled.div`
  padding-bottom: 5px;
`;

export const PostTags = styled.div`
  margin-bottom: 25px;
`;

export const PostsGrid = styled.div`
  grid-area: rs;
  padding: 50px 105px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 40px;
  }

  @media only screen and (max-width: 531px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const ContentExcerpt = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;
