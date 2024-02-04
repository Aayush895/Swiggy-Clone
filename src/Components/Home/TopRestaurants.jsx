/* eslint-disable react/prop-types */
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import TopRestaurantCard from './TopRestaurantCard'

const TopRestaurants = ({ header, topRes }) => {
  return (
    <>
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

      {topRes == null ? (
        <h1>Loading...</h1>
      ) : (
        <div className="relative flex items-center mt-14">
          <div className="m-auto border-b w-[75%] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth overflow-y-hidden flex">
            {topRes.map((res) => (
              <TopRestaurantCard
                key={res?.info?.id}
                imgId={res?.info?.cloudinaryImageId}
                name={res?.info?.name}
                rating={res?.info?.avgRating}
                deliveryTime={res?.info?.sla?.slaString}
                cuisines={res?.info?.cuisines}
                area={res?.info?.areaName}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default TopRestaurants
