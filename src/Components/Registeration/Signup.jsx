import { FaLocationCrosshairs } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { LIVE_API } from '../../utils'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Signup = () => {
  const [location, setLocation] = useState(null)
  const [signup, setSignup] = useState(false)
  const [login, setLogin] = useState(false)
  const [authUser, setAuthUser] = useState(null)

  async function fetchLiveData() {
    const fullUrl = `${LIVE_API}lat=${location.lat}&lng=${location.lng}`
    const data = await fetch(fullUrl)
    const json = await data.json()
    console.log(json)
  }

  async function fetchLocation() {
    function success(pos) {
      const coord = pos.coords
      setLocation({
        lat: coord.latitude,
        lng: coord.longitude,
      })
    }

    function error() {
      console.log(`Something went wrong`)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
  }, [])

  function showSignup() {
    if (signup) {
      setSignup(false)
    } else {
      setSignup(true)
    }
  }

  function showLoginForm() {
    if (login) {
      setLogin(false)
    } else {
      setLogin(true)
    }
  }

  return (
    <div className="signup-container p-14">
      <div className="signup-navbar flex items-center justify-between">
        <div className="pl-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg"
            alt="logo"
          />
        </div>

        {authUser === null ? (
          <div>
            <button className="px-10 font-bold" onClick={showLoginForm}>
              Login
            </button>
            <button
              className="bg-black px-6 py-2 text-white"
              onClick={showSignup}
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <p className="mx-8">
              Welcome,{' '}
              <span className="font-bold">
                {authUser.email.substring(0, authUser.email.indexOf('@'))}
              </span>
            </p>
            <button
              className="bg-black px-6 py-2 text-white"
              onClick={() => {
                signOut(auth)
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>

      <div className="header pl-16 mt-10">
        <h1 className="font-bold text-4xl mb-2">Hungry?</h1>
        <p className="text-2xl text-gray-400">
          Order food from favourite restaurants near you.
        </p>
      </div>

      <div className="flex items-center">
        <div className="location-container w-[75%] ml-16 mt-16 p-3 border border-gray-400 flex justify-between items-center">
          <p className="text-gray-500 text-xl">
            Click on locate for delivery location
          </p>
          <button
            className="flex justify-between items-center mx-5 cursor-pointer"
            onClick={fetchLocation}
          >
            <FaLocationCrosshairs />
            Locate Me
          </button>
        </div>

        {location ? (
          <button
            className="bg-orange-500 p-4 mt-16 px-3 text-white font-bold tracking-wide"
            onClick={fetchLiveData}
          >
            FIND FOOD
          </button>
        ) : null}
      </div>

      <div className="header-content mt-12 ml-16">
        <p className="text-gray-400 font-semibold mb-2">
          POPULAR CITIES IN INDIA
        </p>
        <p className="text-gray-500 w-[90%]">
          <span className="text-gray-500 font-bold pr-2">Ahmedabad </span>
          Bangalore
          <span className="text-gray-500 font-bold px-2">Chennai </span> Delhi
          <span className="text-gray-500 font-bold px-2">Gurgaon </span>
          Hyderabad{' '}
          <span className="text-gray-500 font-bold px-2">Kolkata </span>
          Mumbai <span className="text-gray-500 font-bold pr-1">Pune</span> &
          more.
        </p>
      </div>

      <SignupForm isSignup={signup} cancelSignup={showSignup} />
      <LoginForm isLogin={login} cancelLogin={showLoginForm} />
    </div>
  )
}
export default Signup
