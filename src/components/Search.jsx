import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type="text" placeholder='Cari Kontak' />
      </div>

      <div className='user-list'>
        <div className='user-wrapper'>
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <span>Harold Christ</span>
        </div>
      </div>
    </div>
  )
}

export default Search