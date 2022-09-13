/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import styled from 'styled-components'
import Subscribe from "../../components/MailchimpForm"
 
//STYLES
export const Banner = styled.div`
grid-area: b;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
text-shadow: 2px 2px 2px #000;
color: #fff;
border-bottom: solid 2px #000;
text-transform: capitalize; 
margin-bottom: 35px;
padding: 15px;
`
 
export const Grid = styled.div`
margin: 0 200px;

@media only screen and (max-width: 1024px) {
  margin: auto;
}
`

export const PostWrapper = styled.div`
grid-area: a;
// background: green;
// margin-top: 150px;
`
 
export const MainImgWrapper = styled.div`
display: flex;
justify-content: center;
.img {
  border: solid 2px black;
  // width: 900px;
}

@media only screen and (max-width: 768px) {
.img {
  width: 500px;
}
}

@media only screen and (max-width: 531px) {
  .img {
    width: 300px;
  }
  }
`
  
export const Title = styled.h2`
font-size: 30px;
text-align: center;
padding: 20px;
text-transform: capitalize;
@media only screen and (max-width: 1024px) {
}
`

export const BodyContent = styled.div`
// background: teal;
text-align: left;
 font-size: 17px;
 line-height: 2em;
 margin: 30px 350px; 

 @media only screen and (max-width: 1024px) {
   margin: 20px 100px;
}
@media only screen and (max-width: 600px) {
  margin: 30px;
}
`

export const ImagesWrapper = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
.images {
  border: solid 1px black;
  width: 800px;
}

@media only screen and (max-width: 1024px) {
.images {
  width: 400px;
}
}

@media only screen and (max-width: 531px) {
  .images {
    width: 200px;
  }
  }
`
//END STYLES


 


const PostComponents = {
  types: {
    image: ({value}) => {
      return (
        <ImagesWrapper>
        <img
          alt={value.alt || ' '}
          src={urlFor(value)}
          className="images"
          />
          </ImagesWrapper>
      )
    }
  }
}


const Post = ({
  title,
  mainImage,
  body,
}) => {
  return (
    <>
       {/* <Banner>
          <Title>{title}</Title>
        </Banner> */}


        <Grid>
          <PostWrapper>
     {/* <Title>{title}</Title> */}
       <MainImgWrapper>
        <img
                      src={urlFor(mainImage)} 
                      alt=""
                      className="img"
                      // layout="responsive"
                      layout="fill"
                      />
</MainImgWrapper>
      {/* <BodyContent>
      <PortableText value={body} components={PostComponents} />
      </BodyContent> */}
      </PostWrapper>
      </Grid>
    </>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[_type == "blogPosts" && slug.current == $pageSlug][0]{
    title,
    mainImage,
    body,
    publishedAt
  }`

  const post = await sanityClient.fetch(query, { pageSlug })

  if (!post) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        title: post.title,
        mainImage: post.mainImage,
        body: post.body,
      },
    }
  }
}

export default Post
