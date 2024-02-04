/* eslint-disable react/prop-types */
import { RES_IMAGES } from '../../utils'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { useRef } from 'react'

const Header = ({ header, resImages }) => {
  const scrollRef = useRef(null)
  const handleScroll = (direction) => {
    if (scrollRef.current && direction === 'left') {
      scrollRef.current.scrollLeft -= 560
    } else {
      scrollRef.current.scrollLeft += 560
    }
  }

  return (
    <div className="mt-10">
      <div className="flex justify-around -mx-24">
        <h1 className="font-bold text-3xl">{header}</h1>
        <div className="arrows flex justify-around items-center">
          <FaArrowCircleLeft
            className="text-3xl mr-3 text-slate-400 cursor-pointer hover:text-slate-800"
            onClick={() => handleScroll('left')}
          />

          <FaArrowCircleRight
            className="text-3xl ml-3 text-slate-400 cursor-pointer hover:text-slate-800"
            onClick={() => handleScroll('right')}
          />
        </div>
      </div>

      {!resImages ? (
        <h1>Loading....</h1>
      ) : (
        <div className="res-images relative flex items-center mt-14">
          <div
            className="m-auto border-b w-[75%] h-full overflow-x-hidden scroll whitespace-nowrap scroll-smooth overflow-y-hidden"
            ref={scrollRef}
          >
            {resImages.map((data) => (
              <img
                key={data?.id}
                src={`${RES_IMAGES}${data?.imageId}`}
                alt="Food Categories"
                className="w-[170px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default Header
