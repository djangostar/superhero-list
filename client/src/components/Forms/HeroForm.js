import React, { useContext } from 'react'
import { UserContext } from '../../context/user'

const HeroForm = () => {

  const { addSuperHero } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const payload = {
      full_name: data.full_name,
      alias: data.alias,
      bio: data.bio,
      universe: data.universe,
      img_url: data.img_url
    }
    addSuperHero(payload)
    console.log(payload)
  }

  return (
    <div>
      <div>
        <h1>Add a Superhero You can't find!</h1>
      </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name: </label>
            <input
              type='text'
              name='full_name'
            /> <br/>
            <label>Alias: </label>
            <input
                type='text'
                id='alias'
                name='alias'
            /> <br />
            <label>Biography: </label>
            <input
              type='text'
              id='bio'
              name='bio'
            /> <br />
            <label>Universe: </label>
            <input
              type='text'
              name='universe'
              id='universe'
            /> < br />
            <label>Img_Url: </label>
            <input
              type='text'
              name='img_url'
              id='img_url'
            />
        </div>
        <input type='submit' value='Add Hero!' />
      </form>
    </div>
  )
}

export default HeroForm