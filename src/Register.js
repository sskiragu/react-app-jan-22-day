import React from 'react'

function Register() {
  return (
    <div className='center-component'>
        <form>
            <div>
                <input type="text" placeholder='Enter username'/>
            </div>

            <div>
                <input type="email" placeholder='Enter email'/>
            </div>

            <div>
                <input type="password" placeholder='Enter password'/>
            </div>
            <div>
                <button>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Register