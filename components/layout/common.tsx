interface LayoutComponentProps {
  children: React.ReactNode
}

/* eslint-disable import/prefer-default-export */
export const Container = ({ children }: LayoutComponentProps) => (
  <div className="container mx-auto flex flex-col px-4">{children}</div>
)
