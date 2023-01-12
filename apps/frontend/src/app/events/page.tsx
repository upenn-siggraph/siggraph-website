import { PageHeader } from 'components/layout/common'
import { getEvents } from 'lib/server/strapi/events'
import { EventList } from './event-list'

export const revalidate = 30

const EventsPage = async () => {
  const events = await getEvents()

  return (
    <>
      <PageHeader>Events</PageHeader>
      <EventList events={events} />
    </>
  )
}

export default EventsPage
