import { HiMagnifyingGlass } from 'react-icons/hi2';
import { RiSearch2Line } from 'react-icons/ri';
const Search = () => {
  return (
    <div className='w-1/4 max-md:w-1/3 max-sm:w-max'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative flex items-center'>
        <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
          <HiMagnifyingGlass size={24} className=' text-indigo-400' aria-hidden='true' />
        </div>
        <input
          autoComplete='off'
          id='search'
          name='search'
          className=' lg:shadow-sm shadow-indigo-300 max-sm:hidden block w-full hover:bg-indigo-50 focus:bg-indigo-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none text-indigo-700 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md font-bold  '
          placeholder='Search'
          type='search'
        />
      </div>
    </div>
  );
};

export default Search;