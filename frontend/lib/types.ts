export type Identifier = number | string

export type StrapiDate = string

export interface StrapiResponse<D> {
  data: D
  meta: any
}

export interface StrapiRelation {
  id: Identifier
}

export interface StrapiItem<T> {
  id: Identifier
  attributes: T
}

export interface StrapiCollection<T> extends Array<StrapiItem<T>> {}

export interface StrapiImage {
  url: string
  alternativeText: string
  width: number
  height: number
}

export interface EventData {
  mainImage: StrapiResponse<StrapiItem<StrapiImage>>
  title: string
  start: StrapiDate
  end: StrapiDate | null
  description: string | null
  signupLink: string | null
  location: string | null
  visible: boolean
  slug: string
}
