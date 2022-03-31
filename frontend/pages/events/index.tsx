import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { SectionHeader } from '../../components/common'
import { getDisplayEvent, getEvents } from '../../lib/api'

export const getStaticProps = async () => {
  const [eventsData, displayEventData] = await Promise.all([
    getEvents(),
    getDisplayEvent(),
  ])

  return {
    props: {
      eventsData,
      displayEventData,
    },
    revalidate: process.env.NODE_ENV === 'development' ? 10 : 10 * 60,
  }
}

type ServerSideProps = InferGetStaticPropsType<typeof getStaticProps>

const EventsPage = (props: ServerSideProps) => {
  const { eventsData, displayEventData } = props
  return (
    <>
      <Head>
        <title>UPenn Siggraph - Events</title>
        <meta name="description" content="TODO: EVENTS DESCRIPTION" />
      </Head>
      <SectionHeader>Events</SectionHeader>
      <p>{JSON.stringify(eventsData)}</p>
      <p>{JSON.stringify(displayEventData)}</p>
    </>
  )
}

export default EventsPage
