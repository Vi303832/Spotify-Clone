import React from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">

            <div className='bg-[#121212] h-[15%] p-2  flex rounded'>

                <div className='flex flex-col items-center gap-3 pl-8 cursor-pointer'>
                    <span className='flex gap-2'><img className="w-6" src={assets.home_icon} /><div>Home</div></span>
                    <span className='flex gap-2'><img className="w-6" src={assets.search_icon} /><div>Search</div></span>





                </div>

            </div>

            <div className='bg-[#121212] h-[85%] p-2 rounded'>
                <div className='flex justify-between  p-2'>

                    <span className='flex gap-2 items-center'><img className="w-8" src={assets.stack_icon} /><div>Your Libary</div></span>

                    <span className='flex gap-2 items-center'>
                        <img className='w-5' src={assets.arrow_icon}></img>
                        <img className='w-5' src={assets.plus_icon}></img>
                    </span>



                </div>

                <div className='bg-[#242424] flex flex-col h-auto justify-start items-start font-semibold p-4 rounded-md mt-2'>
                    <h1 className='font-bold text-[15px] mb-1'>Create your first playlist</h1>
                    <p className='text-[12px] font-light mb-6'>It's easy, we will help you</p>
                    <button className='bg-white text-black px-4 py-2 text-[13px] rounded-xl border'>
                        Create Playlist
                    </button>
                </div>


                <div className='bg-[#242424] flex flex-col h-auto justify-start items-start font-semibold p-4 rounded-md mt-4'>
                    <h1 className='font-bold text-[15px] mb-1'>Let's findsome podcasts to follow</h1>
                    <p className='text-[12px] font-light mb-6'>Well keep update on new episodes</p>
                    <button className='bg-white text-black px-4 py-2 text-[13px] rounded-xl border'>
                        Browse podcasts
                    </button>
                </div>


















            </div>

        </div>
    )
}

export default Sidebar