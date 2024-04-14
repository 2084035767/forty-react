import React, { useState } from 'react'

const Error = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try refreshing the page or contact support.</p>
      </div>
    )
  }

  return children
}

export default Error