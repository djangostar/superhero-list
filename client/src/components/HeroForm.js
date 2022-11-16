import React from 'react';

const HeroForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())

    const payload = {
      full_name: data.full_name,
      alias: data.alias,
      bio: data.bio,
      universe: data.universe,
      img_url: data.img_url
    }

    fetch('/create_hero', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='full_name' placeholder='Full Name' />
      <input type='text' name='alias' placeholder='Alias' />
      <input type='text' name='bio' placeholder='Bio' />
      <input type='text' name='universe' placeholder='Universe' />
      <input type='text' name='img_url' placeholder='Img URL' />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HeroForm;
