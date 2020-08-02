import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input style={{ marginBottom: '5px' }} {...input} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
}

export default SurveyField
