import { fetcher } from 'lib/server/strapi'
import { StrapiCollection, EventData, Identifier } from 'lib/types'

export const getEvents = async () =>
  (await fetcher<StrapiCollection<EventData>>('events?sort=start')).data

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
