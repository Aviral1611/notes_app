import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Navbar/>

    <div>
      <div>
        <form onSubmit={() => {}}>
          <h4 className='text-2xl mb-7'>
            Login
          </h4>
          <input type='text' placeholder='Email' className='input-box' />
          <button type='submit' className='btn-primary'>
              Login
          </button>

          <p className='text-sm text-center mt-4'>
              Not registred?{''}
              <Link to="/signUp" className=''>
                Create an account
              </Link>
          </p>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Login
