import React from 'react'

const Header = (
    {search,setSearch,title}
) => {
  return (
    <div className='header'>
        <div className="header-title">
            <h1>{title}</h1>
        </div>
        <div className="input-region">
            <label htmlFor="search"></label>
            <input 
                type="text" 
                name="" 
                id="search" 
                placeholder='Search.....'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Header