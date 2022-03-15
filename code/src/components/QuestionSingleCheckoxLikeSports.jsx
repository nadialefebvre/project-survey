import React from "react"

const QuestionSingleCheckoxLikeSports = (props) => {
  const { likeSports, onLikeSportsChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question10"></div>
      </div>
      <form onSubmit={() => onStepChange(likeSports ? 1 : 2)}>
        <label>
        <h1>Check this box if you like watching sports on TV.</h1>
          <input
            type="checkbox"
            checked={likeSports}
            onChange={onLikeSportsChange}
          />
        </label>

        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionSingleCheckoxLikeSports