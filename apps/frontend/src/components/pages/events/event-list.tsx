import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { EventCard } from './event-card'

import { EventData, StrapiCollection } from 'lib/types'
import { useEventSelection } from 'hooks/pages/use-event-selection'
import Image from 'next/image'

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
  const { empty, prevEvents, currentEvent, nextEvents, setEventSlug } =
    useEventSelection({
      events: events || [],
    })

  const setSlug = useCallback(
    (slug: string) => {
      setEventSlug(slug)
      replace({ query: { slug } })
    },
    [replace, setEventSlug]
  )

  return (
    <>
      {empty || (
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
      )}
      {empty && (
        <div className="text-center text-xl">
          {/* TODO: replace with graphic or something */}
          <Image
            className="rounded-full"
            src="/image/team/aditya.webp"
            alt="Sad"
            width={300}
            height={300}
          />
          <p className="mt-4 font-mono">No events at the moment... :(</p>
        </div>
      )}
    </>
  )
}
