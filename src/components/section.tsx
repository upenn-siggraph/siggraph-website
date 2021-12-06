import React from 'react'

interface SectionProps {
  children: React.ReactNode
  title: string
}

const Section = ({ children, title }: SectionProps) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
)

export default Section
