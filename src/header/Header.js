import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
    <div>
          <p> GW2R </p>
            <Link to='/'>
            <button>Home</button>
            </Link>
            <Link to='/about'>
            <button>About</button>
            </Link>
            <Link to='/posts'>
            <button>Post</button>
            </Link>
            <Link to='/postform'>
            <button>Add Post</button>
            </Link>
            <Link to='/entry'>
            <button>Entry</button>
            </Link>
            <Link to='/checkvoucher'>
            <button>Check Voucher</button>
            </Link>
            <Link to='/addcheck'>
            <button>Add Check Voucher</button>
            </Link>
            <Link to='/login'>
            <button>Login</button>
            </Link>
            <Link to='/logout'>
            <button>Logout</button>
            </Link>
    </div>
)