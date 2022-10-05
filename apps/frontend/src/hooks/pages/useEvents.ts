import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

import { EventData, StrapiCollection } from 'lib/types'

export const useEvents = ({
  events,
}: {
  events: StrapiCollection<EventData>
}) => {
  // specified event from memo
  const {
    query: { slug: querySlug },
    replace,
  } = useRouter()

  // find next upcoming event
  const nextUpcomingEventSlug = useMemo(
    () =>
      events.reduce((prev, curr) => {
        const currDate = new Date(curr.attributes.start)
        return currDate > new Date() ? curr.attributes.slug : prev
      }, events[events.length - 1].attributes.slug),
    [events]
  )

  // get event slug from query, or next upcoming
  const eventSlug = useMemo(() => {
    if (querySlug === undefined) {
      return nextUpcomingEventSlug
    }
    if (typeof querySlug === 'string') {
      return querySlug
    }
    return querySlug.join('')
  }, [nextUpcomingEventSlug, querySlug])

  // get event index
  const eventIndex = useMemo(() => {
    const index = events.findIndex(
      ({ attributes: { slug } }) => slug === eventSlug
    )
    if (index === -1) {
      return events.findIndex(
        ({ attributes: { slug } }) => slug === nextUpcomingEventSlug
      )
    }
    return index
  }, [eventSlug, events, nextUpcomingEventSlug])

  // set new slug
  const setEventSlug = useCallback(
    (slug: string) => {
      replace({ query: { slug } })
    },
    [replace]
  )

  const prevEvents = useMemo(
    () => events.slice(0, eventIndex),
    [events, eventIndex]
  )
  const currentEvent = useMemo(() => events[eventIndex], [events, eventIndex])
  const nextEvents = useMemo(
    () => events.slice(eventIndex + 1),
    [events, eventIndex]
  )

  return { currentEvent, prevEvents, nextEvents, setEventSlug }
}
