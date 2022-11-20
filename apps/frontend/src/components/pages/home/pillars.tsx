import Image from 'next/image'

const Pillar = ({
  imageUrl,
  title,
  children,
}: {
  imageUrl: string
  title: string
  children: React.ReactNode
}) => (
  <div className="text-center">
    <Image
      src={imageUrl}
      width={400}
      height={400}
      alt={title}
      className="rounded-lg"
    />
    <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{title}</h3>
    <div className="mt-3 text-left rtl:text-right">{children}</div>
  </div>
)

export const Pillars = () => (
  <div className="grid gap-8 lg:grid-cols-3">
    <Pillar imageUrl="/image/team/aditya.jpg" title="Groll">
      Hello
    </Pillar>
    <Pillar imageUrl="/image/team/aditya.jpg" title="Groll">
      Hello
    </Pillar>
    <Pillar imageUrl="/image/team/aditya.jpg" title="Groll">
      Hello
    </Pillar>
  </div>
)
