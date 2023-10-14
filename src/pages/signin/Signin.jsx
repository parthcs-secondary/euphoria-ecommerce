import React from 'react'

const Signin = () => {
  return (
    <div>
        <div className="login-div" >
            <form action="" method="post" style={{display: "flex", flexDirection: 'column'}}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />
                <button type="submit">Sign in</button>
            </form>
        </div>
    </div>
  )
}

export default Signin