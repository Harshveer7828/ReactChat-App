import React from 'react'

const SearchBox = () => {
    return <>
        <div className='p-2 w-full '>
            <form className='w-full flex items-center justify-center lg:gap-6 gap-2'>
                <input
                    type="text"
                    placeholder="Search "
                    className="input input-bordered input-md w-full max-w-xs rounded-full" />
                
                <button className='fa-solid fa-magnifying-glass text-xl'></button>
            </form>
        </div>

    </>
}

export default SearchBox