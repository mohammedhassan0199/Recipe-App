import { useState } from "react";
import Mealcards from "./Mealcards";

function Mainpage() {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [search, setSearch] = useState("");
  const[msg,setMsg] = useState("")

  const mealByName = async () => {

    if(search == ""){
      setMsg("Please Enter Something")
    }
    else{
      setMsg("")
      try {
        const getMeal = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const jsonData = await getMeal.json();
        console.log(jsonData.meals);
  
        // Update state based on the result
        setData(jsonData.meals || []); // If meals is null, set an empty array
      } catch (error) {
        <h2>Error fetching meal data : {error}</h2>
        setData([]); // Reset data in case of an error
      }
    };

    }

    

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
     {
      !data ?'data not found' : 
      <div className='flex flex-col justify-center items-center mt-12'>
      <h1 className='text-4xl font-semibold sm:text-2xl'>FOOD RECIPE APP</h1>

      <div className='my-5 flex gap-3 w-[80%] sm:gap-1'>
        <input
          type='text'
          placeholder='Search Meals'
          className='bg-[#f1eeee] px-4 py-2 outline-none text-lg w-full sm:py-1 sm:pr-8'
          onChange={handleInput}
          value={search}
        />
        <button
          className='bg-orange-200 text-[#140f04] px-6 font-semibold sm:px-2'
          onClick={mealByName}
        >
          Search
        </button>
      </div>
      <h2>{msg}</h2>

      <Mealcards detail={data} />
    </div>
     }
    </>
  );
}

export default Mainpage;
