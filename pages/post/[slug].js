/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client";
import { PortableText } from "@portabletext/react";
import styled from "styled-components";

//STYLES

export const PostBanner = styled.div`
  background: teal;
  border-bottom: solid 2px gray;
`;

export const MainImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  .img {
    width: 800px;
    border: solid 2px black;
  }

  @media only screen and (max-width: 1024px) {
    .img {
      width: 650px;
      margin-left: 30px;
    }
  }

  @media only screen and (max-width: 834px) {
    .img {
      width: 500px;
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .img {
      width: 450px;
      margin-left: 5px;
    }
  }

  @media only screen and (max-width: 531px) {
    .img {
      width: 350px;
      margin-left: 5px;
    }
  }
`;
export const ImagesWrapper = styled.div`
  .postImage {
    width: 800px;
    border: solid 2px black;
    margin: 40px 0;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  text-align: center;
  padding: 30px;
  text-transform: capitalize;
  color: aquamarine;
  text-shadow: 1px 1px 1px #000;

  @media only screen and (max-width: 531px) {
    font-size: 25px;
  }
`;

export const BodyContent = styled.p`
  text-align: left;
  font-size: 18px;
  margin: 10px 250px 20px;
  line-height: 1.75;
  padding: 30px 280px;
  text-align: center;
  color: #000;
  font-weight: bold;

  @media only screen and (max-width: 1024px) {
    margin: 20px;
    padding: 20px 60px;
  }
  @media only screen and (max-width: 600px) {
    padding: 10px;
    line-height: 1.5;
  }
`;

//END STYLES

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <ImagesWrapper>
          <img
            alt={value.alt || " "}
            src={urlFor(value)}
            className="postImage"
          />
        </ImagesWrapper>
      );
    },
  },
};

const Post = ({ title, image, body }) => {
  return (
    <>
      <PostBanner>
        <Title>{title}</Title>
      </PostBanner>

      <MainImgWrapper>
        <img src={urlFor(image)} alt="" className="img" layout="responsive" />
      </MainImgWrapper>

      <BodyContent>
        <PortableText value={body} components={PostComponents} />
      </BodyContent>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[_type == "blog" && slug.current == $pageSlug][0]{
    title,
    image,
    body,
  }`;

  const post = await sanityClient.fetch(query, { pageSlug });

  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        image: post.image,
        body: post.body,
      },
    };
  }
};

export default Post;
