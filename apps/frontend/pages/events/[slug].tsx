import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Error from 'next/error'
import Head from 'next/head'
import { getEventFromSlug, getEventPaths } from '../../lib/api'
import { EventData, StrapiItem } from '../../lib/types'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getEventPaths()).map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  eventData: StrapiItem<EventData> | null
}> = async ({ params }) => {
  const eventData = await getEventFromSlug(params!.slug as string)

  return {
    props: {
      eventData: eventData || null,
    },
    revalidate: 10 * 60,
  }
}

const EventPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { eventData } = props

  if (!eventData) {
    return <Error statusCode={404} />
  }

  const { attributes } = eventData

  return (
    <>
      <Head>
        <title>Awesome Page</title>
      </Head>
      <h1 className="text-4xl font-black">{attributes.title}</h1>
    </>
  )
}

export default EventPage
