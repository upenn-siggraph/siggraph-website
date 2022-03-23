import {
  EventData,
  Identifier,
  StrapiCollection,
  StrapiRelation,
  StrapiResponse,
} from './types'

/* eslint-disable import/prefer-default-export */
const apiUrl = process.env.STRAPI_URL || 'http://localhost:1337/api'

export const fetcher = <T = any>(url: string): Promise<StrapiResponse<T>> =>
  fetch(`${apiUrl}${url}`, {
    headers: { Authorization: `bearer ${process.env.API_TOKEN}` },
  }).then((r) => r.json())

export const getEvents = async () =>
  (await fetcher<StrapiCollection<EventData>>('/events?populate=*')).data

export const getEventPaths = async (events?: StrapiCollection<EventData>) =>
  (events || (await getEvents())).map(({ attributes: { slug } }) => slug)

export const getEventFromId = async (id: Identifier) =>
  (await fetcher(`/events/${id}?populate=*`)).data

export const getEventFromSlug = async (
  slug: string,
  events?: StrapiCollection<EventData>
) => {
  const eventsList = events || (await getEvents())
  return eventsList.find(({ attributes: { slug: s } }) => s === slug)
}

export const getDisplayEvent = async () =>
  (await fetcher<StrapiRelation>('/display-event?populate=*')).data
