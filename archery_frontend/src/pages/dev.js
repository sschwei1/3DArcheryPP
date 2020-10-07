import React from 'react'

const DevPage = ({match}) => {
  let devName = match.params.name ?? 'no name';
  return (
    <div>
      Dev {devName}
    </div>
  )
}

export default DevPage
