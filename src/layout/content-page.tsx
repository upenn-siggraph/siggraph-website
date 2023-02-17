export default function ContentPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="container mx-auto pt-10">
      <h2 className="mb-3 text-3xl font-bold">This is a layout</h2>
      <div className="mdx">{children}</div>
    </article>
  )
}
