import React, { useContext } from 'react'
import { UserContext } from '../../context/user'

const ReviewForm = () => {
  const { addReview } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const payload = {
      input: data.input,
      score: data.score
    }
    addReview(payload)
    console.log(payload)
  }

  return (
    <div>
      <div>
        <h1>Add a Review!</h1>
      </div>
      <label>Review: </label>
      <input
        type='textarea'
        id='input'
        name='input'
      /> <br />
      <label>Score: </label>
    </div>
  )
}

export default ReviewForm