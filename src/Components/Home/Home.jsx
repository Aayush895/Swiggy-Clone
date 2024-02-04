/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom'
import { LIVE_API } from '../../utils'
import { useEffect, useState } from 'react'
import Nav from './Nav'
import Header from './Header'
import TopRestaurants from './TopRestaurants'

const Home = () => {
  const [resData, setResData] = useState(null)
  let { state } = useLocation()
  const url = `${LIVE_API}lat=${state.lat}&lng=${state.lng}`

  useEffect(() => {
    const fetchRestaurants = async (url) => {
      const fetchData = await fetch(url)
      const jsonData = await fetchData.json()
      setResData(jsonData)
    }

    fetchRestaurants(url)
  }, [])
  return (
    <>
      <Nav lat={state.lat} long={state.lng} />
      <Header
        header={resData?.data?.cards[0]?.card?.card?.header?.title}
        resImages={resData?.data?.cards[0]?.card?.card?.imageGridCards?.info}
      />
      <TopRestaurants
        header={resData?.data?.cards[1]?.card?.card?.header?.title}
        topRes={
          resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        }
      />
    </>
  )
}
export default Home
