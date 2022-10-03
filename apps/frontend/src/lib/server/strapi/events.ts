import { fetcher } from 'lib/server/strapi'
import {
  StrapiCollection,
  EventData,
  Identifier,
  StrapiSingle,
} from 'lib/types'

export const getEvents = async () =>
  (await fetcher<StrapiCollection<EventData>>('events')).data

export const getEventPaths = async (events?: StrapiCollection<EventData>) =>
  (events || (await getEvents())).map(({ attributes: { slug } }) => slug)

export const getEventFromId = async (id: Identifier) =>
  (await fetcher(`events/${id}?populate=*`)).data

export const getEventFromSlug = async (
  slug: string,
  events?: StrapiCollection<EventData>
) => {
  const eventsList = events || (await getEvents())
  return eventsList.find(({ attributes: { slug: s } }) => s === slug)
}

export const getDisplayEvent = async () =>
  (await fetcher<StrapiSingle<EventData>>('display-event?populate=*')).data
    .attributes.event.data
