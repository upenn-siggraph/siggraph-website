import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { PageHeader } from 'components/layout/common'
import { getEvents } from 'lib/server/strapi/events'
import { EventList } from 'components/pages/events/event-list'

export const getStaticProps = async () => {
  const events = await getEvents()

  return {
    props: { events },
    revalidate: 30,
  }
}

const EventsPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { events } = props

  return (
    <>
      {/* TODO: use NextSeo */}
      <Head>
        <title>UPenn Siggraph - Events</title>
        <meta name="description" content="TODO: EVENTS DESCRIPTION" />
      </Head>
      <PageHeader>Events</PageHeader>
      <EventList events={events} />
    </>
  )
}

export default EventsPage
