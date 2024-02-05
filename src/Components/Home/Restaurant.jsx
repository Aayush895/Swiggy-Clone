import FilterRestaurant from "./FilterRestaurant"

/* eslint-disable react/prop-types */
const Restaurant = ({ header, res }) => {
  console.log(res)
  return (
    <div className="mt-10">
      <h1 className="font-bold text-3xl mx-[12.5rem]">{header}</h1>
      <FilterRestaurant />
    </div>
  )
}
export default Restaurant
