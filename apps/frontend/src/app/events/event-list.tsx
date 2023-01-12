'use client'

import { useCallback } from 'react'
import { useSearchParams } from 'next/navigation'

import { EventData, StrapiCollection } from 'lib/types'
import { useEventSelection } from './hooks/use-event-selection'
import Image from 'next/legacy/image'

const EventCard = ({ event }: { event: EventData }) => (
  <article className="grid bg-gray-100 ring-1 ring-gray-300">
    <h2>{event.title}</h2>
  </article>
)

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
  const searchParams = useSearchParams()
  const { empty, prevEvents, currentEvent, nextEvents, setEventSlug } =
    useEventSelection({
      events: events || [],
    })

  const setSlug = useCallback(
    (slug: string) => {
      setEventSlug(slug)
      // @ts-expect-error // THIS IS SO TROLL
      searchParams.set('slug', slug)
    },
    [searchParams, setEventSlug]
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
