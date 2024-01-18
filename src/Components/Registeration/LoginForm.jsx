import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const LoginForm = ({ isLogin, cancelLogin }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const signIn = async (e) => {
    e.preventDefault()
    const mail = email
    const password = pass

    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        mail,
        password
      )
      console.log(loggedInUser)
      cancelLogin()
    } catch (error) {
      console.log(error)
    }
  }

  return isLogin ? (
    <div className="p-8 absolute w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black text-white">
      <h1 className="text-4xl mb-8 text-center">Log In</h1>

      <form onSubmit={signIn} className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className="border p-6 text-black"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value)
          }}
          className="border p-6 mb-4 text-black"
        />

        <button
          type="submit"
          className="border py-4 w-[30%] m-auto bg-black text-white cursor-pointer"
          onClick={signIn}
        >
          Log In
        </button>
      </form>

      <button
        className="w-[30px] h-[30px] border text-center rounded-[50%] absolute top-4 right-4 bg-gray-300"
        onClick={cancelLogin}
      >
        X
      </button>
    </div>
  ) : null
}
export default LoginForm
