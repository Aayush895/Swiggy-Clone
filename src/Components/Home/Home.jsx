/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom'
import { LIVE_API } from '../../utils'
import { useEffect } from 'react'

const Home = () => {
  let { state } = useLocation()
  const url = `${LIVE_API}lat=${state.lat}&lng=${state.lng}`

  // TODO: Have to convert the restaurant fetching useEffect into a custom hook
  useEffect(() => {
    const fetchRestaurants = async (url) => {
      const fetchData = await fetch(url)
      const jsonData = await fetchData.json()
      console.log(jsonData)
    }

    fetchRestaurants(url)
  }, [])
  return <div className="text-black">Hi, I display all the restuarants</div>
}
export default Home
