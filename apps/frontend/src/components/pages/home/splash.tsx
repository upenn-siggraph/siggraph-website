import Link from 'next/link'

export const Splash = () => (
  <div
    className="relative flex h-[42rem] flex-col items-start justify-center text-white [background-repeat:repeat] [background-size:0.8rem]"
    style={{ backgroundImage: 'url(/image/design/background-dots.svg)' }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black to-[rgba(0,0,0,0.45)]" />
    <div className="relative">
      <h1 className="mb-6 text-4xl font-black tracking-tight lg:text-8xl">
        UPenn Siggraph
      </h1>
      <Link href="/team" className="text-2xl underline hover:text-gray-600">
        Meet the Team
      </Link>
    </div>
  </div>
)
