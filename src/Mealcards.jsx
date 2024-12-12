import React from 'react';
import { Link } from 'react-router-dom';

function Mealcards({ detail }) {
  // Check if `detail` is null or an empty array
  const isEmpty = !detail || detail.length === 0;

  return (
    <div className='flex justify-center flex-wrap gap-5'>
      {isEmpty ? (
        <div className='text-xl font-semibold text-red-500'>
          Data Not Found
        </div>
      ) : (
        detail.map((currentItem) => (
          <div
            key={currentItem.idMeal} // Use a unique key for better React optimization
            className='shadow-lg rounded-b-xl bg-[orange] flex flex-col items-center pb-3 mb-3 w-96 sm:w-[270px] rounded-t-xl'
          >
            <img
              className='w-full h-80 rounded-t-xl'
              src={currentItem.strMealThumb}
              alt={currentItem.strMeal}
            />
            <p className='mt-3 px-4 text-center'>{currentItem.strMeal}</p>
            <span>
              <Link to={`/${currentItem.idMeal}`}>
                <button className='my-3 bg-orange-300 text-[#140f04] px-6 font-semibold py-1 rounded-full'>
                  Recipe
                </button>
              </Link>
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default Mealcards;
