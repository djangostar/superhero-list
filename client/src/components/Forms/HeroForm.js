import React, { useContext } from 'react'
import { UserContext } from '../../context/user'

const HeroForm = () => {
  // const [form, setForm ] = useState({
  //   full_name: '',
  //   alias: '',
  //   bio: '',
  //   universe: '',
  //   img_url: ''
  // })
  
  const { addSuperHero } = useContext(UserContext)
  
  // const handleChange = (e) => {
  //   setForm({...form,
  //   [e.target.name]:e.target.value})
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addSuperHero({
  //     full_name: form.full_name,
  //     alias: form.alias,
  //     bio: form.bio,
  //     universe: form.universe,
  //     img_url: form.img_url
  //   })
  // }

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
              // value={form.full_name}
              // onChange={handleChange}
            /> <br/>
            <label>Alias: </label>
            <input
                type='text'
                id='alias'
                name='alias'
                // value={form.alias}
                // onChange={handleChange}
            /> <br />
            <label>Biography: </label>
            <input
              type='text'
              id='bio'
              name='bio'
              // value={form.bio}
              // onChange={handleChange}
            /> <br />
            <label>Universe: </label>
            <input
              type='text'
              name='universe'
              id='universe'
              // value={form.universe}
              // onChange={handleChange}
            /> < br />
            <label>Img_Url: </label>
            <input
              type='text'
              name='img_url'
              id='img_url'
              // value={form.img_url}
              // onChange={handleChange}
            />
        </div>
        <input type='submit' value='Add Hero!' />
      </form>
    </div>
  )
}

export default HeroForm