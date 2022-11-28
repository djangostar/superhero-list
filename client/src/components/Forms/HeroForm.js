// import React, { useContext, useState } from 'react'
// import { UserContext } from '../../context/user'
// import { useNavigate } from 'react-router-dom'

// const HeroForm = () => {
//   const [form, setForm ] = useState({
//     input: '',
//     score: 0
//   })

//   const navigate = useNavigate()
  
//   const {login, allHeroes, addSuperHero } = useContext(UserContext)
  
//   const handleChange = (e) => {
//     setForm({...form,
//     [e.target.name]:e.target.value})
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addSuperHero({
//       input: '',
//       score: 0
//     })
//     navigate('/all_heroes')
//   }

//   if 
//   return (
//     <>
//       <div>Add a Superhero You can't find!</div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type='text'
//                 id='input'
//                 value={input}
//                 onChange={handleChange}
//               /> <br/>
//               <input
//                 type='integer'
//                 id='score'
//                 value={score}
//                 onChange={handleChange}
//               />
//             </div>

//           </form>
//       </div>
//     </>
//   )
// }

// export default HeroForm