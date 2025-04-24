import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import NextLink from 'next/link'

import CardGallery from '../components/CardGallery'
import  galleries  from '../data/gallery'
export default function Home({  }) {

  return (
    <div className="md:gap-30 mx-auto grid gap-20 py-24">
      <div className="pb-8">
        <h1 className="bg-linear-to-r from-titleg1 to-titleg2 bg-clip-text pb-8 text-center font-serif text-5xl font-bold text-transparent md:text-6xl">
        Everywhere you look, there’s 
          <br />
          something to  be found within
        </h1>
        <div className="prose prose-2xl mx-auto py-8 text-center text-gray-50">
          <p>
          Visual Narratives Rooted in Culture, Style, and Humanity
            <br />
            Learn more <NextLink href="/biography">about me</NextLink>
            {/* <a href="https://contact.jpvalery.me">get in touch</a>. */}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 items-center justify-items-center gap-12 md:gap-48">
        {galleries.map((gallery) => {
          return (
            <CardGallery
              key={gallery.id}
              slug={gallery.slug}
              image={gallery.heroImage}
              title={gallery.title}
              year={gallery.year}
              tags={gallery.tagsCollection.items}
              date={gallery.publishDate}
            />
          )
        })}
      </div>
    </div>
  )
}

// We use getStaticProps to get the content at build time
export async function getStaticProps() {
  // We use Apollo to query Contentful GraphQL API
  // const client = new ApolloClient({
  //   uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  //   cache: new InMemoryCache(),
  //   credentials: 'same-origin',
  // })

  // We define our query here
  // const { data } = await client.query({
  //   query: gql`
  //     query Index {
  //       extendedGalleryCollection(
  //         order: publishDate_DESC
  //         where: { displayHome: true }
  //       ) {
  //         items {
  //           title
  //           slug
  //           year
  //           body
  //           metaDescription
  //           summary
  //           tagsCollection {
  //             items {
  //               title
  //               slug
  //             }
  //           }
  //           publishDate
  //           heroImage {
  //             title
  //             description
  //             contentType
  //             fileName
  //             size
  //             url
  //             width
  //             height
  //           }
  //         }
  //       }
  //     }
  //   `,
  // })

  // We return the result of the query as props to pass them above
  return {
    props: {
      galleries: "",
    },
  }
}
