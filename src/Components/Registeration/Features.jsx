const Features = () => {
  return (
    <div className="flex justify-evenly items-center px-52 py-10 bg-orange-950 col-span-2">
      <div className="px-5">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
          alt=""
          className="m-auto w-[70%] h-[300px]"
        />

        <div className="text-center text-white mt-10">
          <h4 className="mb-5 font-bold">No Minimum Order</h4>
          <p className="text-orange-200">
            Order in for yourself or for the group, with no restrictions on
            order value
          </p>
        </div>
      </div>

      <div className="px-5">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
          alt=""
          className="m-auto w-[70%] h-[300px]"
        />

        <div className="text-center text-white mt-10">
          <h4 className="mb-5 font-bold">Live Order Tracking</h4>
          <p className="text-orange-200">
            Know where your order is at all times, from the restaurant to your
            doorstep
          </p>
        </div>
      </div>

      <div className="px-5">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          alt=""
          className="m-auto w-[70%] h-[300px]"
        />

        <div className="text-center text-white mt-10">
          <h4 className="mb-5 font-bold">Lightning-Fast Delivery</h4>
          <p className="text-orange-200">
            Experience Swiggy superfast delivery for food delivered fresh & on
            time
          </p>
        </div>
      </div>
    </div>
  )
}
export default Features
