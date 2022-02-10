import team from '../../lib/team'
import LazyImage from '../util/lazy-image'

const TeamList = () => (
  <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
    {team.map(({ name, role, image }) => (
      <li key={name} className="mb-4">
        <LazyImage
          image={image}
          width={300}
          height={300}
          alt={name}
          className="aspect-square w-auto h-auto rounded-xl shadow-lg"
        />
        <div className="m-4">
          <h3 className="text-xl font-bold dark:text-gray-900">{name}</h3>
          <p className="text-gray-600 dark:text-gray-500">{role}</p>
        </div>
      </li>
    ))}
  </ul>
)

export default TeamList
