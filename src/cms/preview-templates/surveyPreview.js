import React from 'react'
import PropTypes from 'prop-types'

const surveyPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
      console.log({data});
    return (
     <>
        <h1>{data.title}</h1>
     </>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default surveyPreview