interface BasicWrapperProps {
  children: React.ReactNode
}

export const Container = ({ children }: BasicWrapperProps) => (
  <div className="container mx-auto flex flex-col px-4">{children}</div>
)

export const SectionHeader = ({ children }: BasicWrapperProps) => (
  <h1 className="text-6xl font-black tracking-tight text-gray-100 dark:text-gray-900 mt-8 mb-12 drop-shadow self-center">
    {children}
  </h1>
)
