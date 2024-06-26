'use client';
import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Fuse from 'fuse.js';
import { useState } from 'react';
import Link from 'next/link';
import lowercase from 'lodash/lowerCase';

const Search = ({ searchList, options, otherLists }: { searchList: any[]; options?: {}; otherLists?: any[] }) => {
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const fuse = new Fuse(searchList, options);
  const fuseAll = new Fuse([...searchList, ...(otherLists || [])], { ...options, findAllMatches: true });

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
      setResults(showAll ? fuseAll.search(term) : fuse.search(term));
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <>
      <div className='w-1/4 max-md:w-1/3 max-sm:w-max sm:relative'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <div className='relative flex items-center'>
          <div className='sm:pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
            {showMobileSearch ? (
              <HiXMark
                size={24}
                className=' text-blue-400 z-20 transition-all'
                aria-hidden='true'
                onClick={() => setShowMobileSearch(false)}
              />
            ) : (
              <HiMagnifyingGlass
                onClick={() => setShowMobileSearch(true)}
                size={24}
                className=' text-blue-400 z-20 transition-all'
                aria-hidden='true'
              />
            )}
          </div>
          {showMobileSearch && (
            <input
              defaultValue={searchParams.get('query')?.toString()}
              onFocus={(e) => {
                handleSearch(e.target.value);
                setShowResult(true);
              }}
              onBlur={(e) => {
                setShowResult(false);
              }}
              onChange={(e) => {
                setInputValue(e.target.value);
                handleSearch(e.target.value);
              }}
              autoComplete='off'
              id='search'
              name='search'
              className='bg-white/90 tracking-wider font-medium focus:font-semibold sm:hidden block w-[calc(100%_-_32px)]  border-2 focus:border border-gray-200 rounded-2xl py-2 pl-10 pr-3 placeholder-blue-400 focus:outline-none text-blue-700 focus:placeholder-blue-300 hover:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-md transition-colors fixed z-10 '
              placeholder='Search'
              type='search'
            />
          )}
          <input
            defaultValue={searchParams.get('query')?.toString()}
            onFocus={(e) => {
              handleSearch(e.target.value);
              setShowResult(true);
            }}
            onBlur={(e) => {
              setShowResult(false);
            }}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleSearch(e.target.value);
            }}
            autoComplete='off'
            id='search'
            name='search'
            className='bg-transparent tracking-wider font-medium focus:font-semibold max-sm:hidden block w-full  border-2 focus:border border-gray-200 rounded-2xl py-2 pl-10 pr-3 placeholder-blue-400 focus:outline-none text-blue-700 focus:placeholder-blue-300 hover:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-md transition-colors'
            placeholder='Search'
            type='search'
          />
        </div>
        {results.length > 0 && showResult == true && (
          <div
            onMouseDown={(e) => e.preventDefault()}
            className='mt-5 flex flex-col absolute border-2 px-2 py-4 rounded-2xl top-8 w-[calc(100%_-_32px)] !z-50 shadow-md bg-white/80 max-h-[500px] overflow-y-scroll'>
            <span className='text-gray-500 px-2'>Results: </span>
            <ul className='mt-2 flex flex-col divide-y-2'>
              {results.map((result) => (
                <li key={result.item._id} className='py-1'>
                  <Link
                    href={
                      result.item._type == 'subjects'
                        ? `/${result.item.slug}`
                        : `/${result.item.subject?.title.toLowerCase()}/${result.item.slug}`
                    }
                    className='px-2 py-1 flex justify-between items-center w-full hover:bg-gray-500/30 rounded-md'>
                    <span className='font-semibold text-sm '> {result.item.title}</span>
                    <span className='text-gray-600 text-xs'>{lowercase(result.item?._type)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onMouseDown={(e) => e.preventDefault()}
              className='text-blue-700 mt-5 font-semibold hover:underline capitalize'
              onClick={(e) => {
                e.preventDefault();
                setShowAll((prev) => !prev);
                handleSearch(inputValue);
              }}>
              {showAll ? 'show fewer results' : 'show all results'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
