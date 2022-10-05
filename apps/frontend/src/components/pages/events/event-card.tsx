import { EventData } from 'lib/types'

export const EventCard = ({ event }: { event: EventData }) => (
  <article className="grid bg-gray-100 ring-1 ring-gray-300">
    <h2>{event.title}</h2>
  </article>
)
