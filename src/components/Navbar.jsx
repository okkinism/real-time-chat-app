import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>ChatFlow</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John Doe</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar