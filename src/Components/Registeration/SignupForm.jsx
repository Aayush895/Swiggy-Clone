/* eslint-disable react/prop-types */
import { useState } from 'react'
import { auth } from '../../firebase'
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const SignupForm = ({ isSignup, cancelSignup }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  async function createAccount(e) {
    e.preventDefault()
    const signupEmail = email
    const signupPass = pass

    try {
      await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPass
      )
      setEmail('')
      setPass('')
      cancelSignup()
    } catch (error) {
      console.log(error)
    }
  }

  return isSignup ? (
    <div className="p-8 absolute w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black text-white">
      <h1 className="text-4xl mb-8 text-center">Sign up</h1>

      <form onSubmit={createAccount} className="flex flex-col">
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
          onClick={createAccount}
        >
          Sign up
        </button>
      </form>

      <button
        className="w-[30px] h-[30px] border text-center rounded-[50%] absolute top-4 right-4 bg-gray-300"
        onClick={cancelSignup}
      >
        X
      </button>
    </div>
  ) : null
}
export default SignupForm
