/* eslint-disable react/prop-types */
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
const TopRestaurants = ({ header, topRes }) => {
  console.log(topRes)
  return (
    <div className="text-center mt-10 font-bold text-3xl flex justify-around -mx-4">
      <h1>{header}</h1>
      <div className="arrows flex justify-around items-center">
        <FaArrowCircleLeft
          className="text-3xl mr-3 text-slate-400 cursor-pointer hover:text-slate-800"
          // onClick={() => handleScroll('left')}
        />

        <FaArrowCircleRight
          className="text-3xl ml-3 text-slate-400 cursor-pointer hover:text-slate-800"
          // onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  )
}
export default TopRestaurants
