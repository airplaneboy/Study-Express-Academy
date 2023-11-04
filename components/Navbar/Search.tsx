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
          <HiMagnifyingGlass size={24} className=' text-blue-400' aria-hidden='true' />
        </div>
        <input
          autoComplete='off'
          id='search'
          name='search'
          className='tracking-wider font-medium focus:font-semibold max-sm:hidden block w-full hover:bg-blue-50 focus:bg-blue-100 border-2 focus:border border-gray-200 rounded-2xl py-2 pl-10 pr-3 placeholder-blue-400 focus:outline-none text-blue-700 focus:placeholder-blue-300 hover:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-md'
          placeholder='Search'
          type='search'
        />
      </div>
    </div>
  );
};

export default Search;
