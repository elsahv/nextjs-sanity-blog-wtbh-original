/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import { sanityClient, urlFor } from "../client";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import styled from "styled-components";

// STYLES
export const Content = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 45px;
  padding-top: 5px;
  padding-bottom: 150px;

  @media only screen and (max-width: 531px) {
    padding-left: 15px;
  }
`;

export const PostTitle = styled.div`
  text-transform: capitalize;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-top: 100px;
  color: #fff;
  text-shadow: 1px 1px 1px black;

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 834px) {
    width: 350px;
  }

  @media only screen and (max-width: 531px) {
    width: 300px;
  }
`;

export const ImgWrapper = styled.div`
.img {
  width: 1300px;
  border: solid 2px black;
}

@media only screen and (max-width: 1024px) {
.img {
  width: 900px;
}
}

@media only screen and (max-width: 834px) {
  .img {
    width: 700px;
  }

  @media only screen and (max-width: 600px) {
    .img {
      width: 500px;
    }

    @media only screen and (max-width: 531px) {
      .img {
        width: 370px;
      height: 300px;
      }
    @media only screen and (max-width: 400px) {
      .img {
        width: 330px;
      height: 250px;
      }
    }
`;
//END STYLES

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Writing To Better Health</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="p:domain_verify"
          content="0eb994c4a2db7b6db7409469d390cc92"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {posts &&
        posts.map((post, index) => (
          <span key={index}>
            <Link href={`post/${post.slug.current}`}>
              <Content>
                <PostTitle>{post.title}</PostTitle>
                <ImgWrapper>
                  <img
                    src={urlFor(post.mainImage)}
                    alt="main pic"
                    className="img"
                  />
                </ImgWrapper>
              </Content>
            </Link>
          </span>
        ))}

      <AboutSection />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "blogPosts"]';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Home;
