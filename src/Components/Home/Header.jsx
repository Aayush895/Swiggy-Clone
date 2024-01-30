/* eslint-disable react/prop-types */
import { RES_IMAGES } from '../../utils'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Header = ({ header, resImages }) => {
  console.log(resImages)
  return (
    <div className="mt-10">
      <div className="flex justify-around -mx-24">
        <h1 className="font-bold text-4xl">{header}</h1>
        <div className="arrows flex justify-around items-center">
          <FaArrowCircleLeft className="text-3xl mr-3 text-slate-400" />
          <FaArrowCircleRight className="text-3xl ml-3 text-slate-400" />
        </div>
      </div>

      <div className="res-images flex justify-around mt-10 w-[70%] m-auto px-2">
        {resImages.map((data) => (
          <div key={data?.id} className='border w-[100%]'>
            <img src={`${RES_IMAGES}${data?.imageId}`} alt='Food Categories' className='w-[100%]'/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Header
