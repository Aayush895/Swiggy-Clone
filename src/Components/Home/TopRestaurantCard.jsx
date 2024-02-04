/* eslint-disable react/prop-types */
import { TOP_RES } from '../../utils'
import { MdStars } from 'react-icons/md'
import { GoDotFill } from 'react-icons/go'

const TopRestaurantCard = ({
  imgId,
  name,
  rating,
  deliveryTime,
  cuisines,
  area,
}) => {
  return (
    <div className="w-[100%]">
      <img
        src={`${TOP_RES}${imgId}`}
        alt="resImage"
        className="w-[300px] h-[150px] rounded-2xl shadow-2xl"
      />
      <h1 className="font-bold text-lg mt-4 ml-4">{name}</h1>
      <div className="flex ml-4">
        <p className="flex items-center font-bold">
          <MdStars color="green" />
          {rating}
        </p>
        <p className="mx-3 font-bold flex items-center">
          <GoDotFill />
          {deliveryTime}
        </p>
      </div>
      <p className="ml-4">
        {cuisines[0]}, {cuisines[1]}
      </p>
      <p className="ml-4">{area}</p>
    </div>
  )
}
export default TopRestaurantCard
