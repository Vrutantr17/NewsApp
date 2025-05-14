import React from 'react'

const Navbar = ({ filterNews }) => {

  return (
    <>
      <nav>
        <div className='bg-black h-39'>
          <img className='h-27 w-40 pt-5 ml-165' src="public/newsimg.avif" alt="" />

          <div>
            <ul className='text-white flex gap-30 ml-23 mt-5 font-bold'>
              <li onClick={() => filterNews("everything")}>All</li>
              <li onClick={() => filterNews("business")}>Business</li>
              <li onClick={() => filterNews("entertainment")}>Entertainment</li>
              <li onClick={() => filterNews("general")}>General</li>
              <li onClick={() => filterNews("health")}>Health</li>
              <li onClick={() => filterNews("science")}>Science</li>
              <li onClick={() => filterNews("sports")}>Sports</li>
              <li onClick={() => filterNews("technology")}>Technology</li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar