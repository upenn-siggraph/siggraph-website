import { LazyImage } from 'components/util/lazy-image'

export const TeamList = ({
  team,
}: {
  team: {
    name: string
    role: string
    image: string
    lqip: string
  }[]
}) => (
  <ul className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
    {team.map(({ name, role, image, lqip }) => (
      <li key={name} className="mb-4">
        <LazyImage
          image={image}
          lqip={lqip}
          width={300}
          height={300}
          alt={name}
          className="aspect-square h-auto w-full rounded-xl shadow-lg"
        />
        <div className="m-4">
          <h3 className="text-xl font-bold dark:text-gray-900">{name}</h3>
          <p className="text-gray-600 dark:text-gray-500">{role}</p>
        </div>
      </li>
    ))}
  </ul>
)
