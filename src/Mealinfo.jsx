import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Mealinfo() {
  const [info, setInfo] = useState(null); // Initialize `info` as null
  const { mealid } = useParams(); // Extract `mealid` from the route parameters
  console.log("Meal ID:", mealid);

  // Fetch meal details
  useEffect(() => {
    const getInfo = async () => {
      try {
        const getDetail = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await getDetail.json();
        if (jsonData.meals) {
          console.log("Meal Details:", jsonData.meals[0]);
          setInfo(jsonData.meals[0]); // Set the meal details in state
        } else {
          setInfo(null); // Handle case where no meal data is returned
        }
      } catch (error) {
        console.error('Error fetching meal info:', error);
        setInfo(null); // Set `info` to null in case of an error
      }
    };

    getInfo();
  }, [mealid]); // Dependency array ensures the fetch runs only when `mealid` changes

  // Show "Data not found" if `info` is null
  if (info === null) {
    return <div className="text-center text-xl text-red-500">Data not found</div>;
  }

  // Show loading state if `info` is undefined (while fetching)
  if (!info) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  // Render meal details
  return (
    <div className=' flex gap-5 bg-[orange] py-48 items-center px-60 w-full justify-between  xl:px-40 lg:px-20 md:px-20 md:py-16 sm:px-0 md:flex-col sm:flex-col  sm:py-16 '>
      <img src={info.strMealThumb} alt={info.strMeal} className='w-[35%] rounded-xl 2xl:h-[500px] xl:h-[400px] lg:h-80  md:w-1/2 sm:w-1/2' />
      <div className='w-[60%] text-justify'>
        <h1 className='text-3xl font-bold lg:text-2xl sm:text-xl'>Recipe Details</h1>
        <button className='bg-red-700 px-6 py-2 font-semibold text-white my-6 lg:my-4 md:my-3 sm:my-2 sm:px-3 sm:py-1'>
          {info.strMeal}
        </button>
        <h3 className='mb-6 text-xl font-semibold lg:mb-4 md:mb-3 sm:mb-2'>Instructions</h3>
        <p className='mt-3 w-full'>{info.strInstructions}</p>
      </div>
    </div>
  );
}

export default Mealinfo;
 