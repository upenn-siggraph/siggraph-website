const PeoplePhotosURL = '/resources/img/people/'

export const getPhotoURL = (member: TeamMember) => PeoplePhotosURL + member.photo

export interface TeamMember {
  name: string
  role: string
  photo: string
}

const TeamMembers: TeamMember[] = [
  {
    name: 'Thomas',
    role: 'Webguy',
    photo: 'thomas.png',
  },
]

export default TeamMembers
