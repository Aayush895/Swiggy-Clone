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
    <div className="w-[28%] p-2 ml-7 inline-block">
      <img
        src={`${TOP_RES}${imgId}`}
        alt="resImage"
        className="w-[100%] h-[150px] rounded-2xl shadow-2xl"
      />
      <h1 className="font-bold text-lg mt-4 ml-4 truncate">{name}</h1>
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

      <div className="flex mx-3 truncate">
        {cuisines.map((cuisine, idx) => (
          <p key={idx} className="mx-[0.1rem] text-slate-500">
            {cuisine},
          </p>
        ))}
      </div>

      <p className="ml-4 text-slate-500">{area}</p>
    </div>
  )
}
export default TopRestaurantCard
