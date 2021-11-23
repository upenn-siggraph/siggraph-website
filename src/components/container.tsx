import React from 'react'

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' } : ContainerProps) => (
  <div className={`min-h-screen ${className} bg-gray-base text-gray-text-primary text-base relative`}>
    <div className="container">
      { children }
    </div>
  </div>
)

export default Container
