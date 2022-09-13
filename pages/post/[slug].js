/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from "../../client"
import { PortableText } from '@portabletext/react'
import styled from 'styled-components'
 
//STYLES
export const MainImgWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
margin-top: 100px;
.img {
   width: 1400px
  
}
`
export const ImagesWrapper = styled.div`
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
     <Title>{title}</Title>
       <MainImgWrapper>
        <img
                      src={urlFor(mainImage)} 
                      alt=""
                      className="img"
                      layout="responsive"
                      />
</MainImgWrapper>
      <BodyContent>
      <PortableText value={body} components={PostComponents} />
      </BodyContent>
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
