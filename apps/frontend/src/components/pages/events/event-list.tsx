import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { EventCard } from './event-card'

import { EventData, StrapiCollection } from 'lib/types'
import { useEvents } from 'hooks/pages/useEvents'

const MiniEventCard = ({
  eventData: { title },
  onClick = () => {},
}: {
  eventData: EventData
  onClick?: () => any
}) => (
  <li>
    <button type="button" onClick={() => onClick()}>
      {title}
    </button>
  </li>
)

export const EventList = ({
  events,
}: {
  events: StrapiCollection<EventData>
}) => {
  const { replace } = useRouter()
  const { prevEvents, currentEvent, nextEvents, setEventSlug } = useEvents({
    events,
  })

  const setSlug = useCallback(
    (slug: string) => {
      setEventSlug(slug)
      replace({ query: { slug } })
    },
    [replace, setEventSlug]
  )

  return (
    <div className="relative">
      {/* prev events */}
      <ul>
        {prevEvents.map(({ attributes, id }) => (
          <MiniEventCard
            key={id}
            eventData={attributes}
            onClick={() => setSlug(attributes.slug)}
          />
        ))}
      </ul>

      {/* current event */}
      <EventCard event={currentEvent.attributes} />

      {/* next events */}
      <ul>
        {nextEvents.map(({ attributes, id }) => (
          <MiniEventCard
            key={id}
            eventData={attributes}
            onClick={() => setSlug(attributes.slug)}
          />
        ))}
      </ul>
    </div>
  )
}
