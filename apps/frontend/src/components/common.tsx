interface BasicWrapperProps {
  children: React.ReactNode
}

export const Container = ({ children }: BasicWrapperProps) => (
  <div className="container mx-auto flex flex-col px-4">{children}</div>
)

export const SectionHeader = ({ children }: BasicWrapperProps) => (
  <h1 className="mt-8 mb-12 self-center text-6xl font-black tracking-tight text-gray-100 drop-shadow dark:text-gray-900">
    {children}
  </h1>
)
