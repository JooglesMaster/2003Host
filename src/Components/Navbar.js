import React from 'react'
import { Link } from 'react-router-dom'


export default function Home (){



  return (
    <div>
      <nav className='nav'>
        <ul>
          <hr />
          <li>
            <Link to="/about">About</Link>
          </li>
          <hr />
          <li>
            <Link to="/boat">Boats</Link>
          </li>
          <hr />
          <li>
            <Link to="/rent">Rent a Boat</Link>
          </li>
          <hr />
        </ul>
      </nav>
    </div>
  )
}

