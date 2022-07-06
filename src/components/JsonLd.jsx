import React from 'react'
import Helmet from 'react-helmet'

const JsonLd = ({data}) => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}>

      </script>
    </>
  )
}

export default JsonLd