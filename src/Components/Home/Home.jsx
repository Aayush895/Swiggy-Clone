/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom'
import { LIVE_API } from '../../utils'
import { useEffect } from 'react'
import Nav from './Nav'

const Home = () => {
  let { state } = useLocation()
  const url = `${LIVE_API}lat=${state.lat}&lng=${state.lng}`

  useEffect(() => {
    const fetchRestaurants = async (url) => {
      const fetchData = await fetch(url)
      const jsonData = await fetchData.json()
      console.log(jsonData)
    }

    fetchRestaurants(url)
  }, [])
  return (
    <>
      <Nav lat={state.lat} long={state.lng}/>
    </>
  )
}
export default Home
