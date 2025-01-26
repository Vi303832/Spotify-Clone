import React from 'react'
import Header from './Header'
import { albumsData } from '../assets/assets'
import Albumitems from './Albumitems'
import { songsData } from '../assets/assets'
import SongItems from './SongItems'

function DisplayHome() {

    return (
        <div>
            <Header />
            <div className='mb-4 '>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>

                    {albumsData.map((item, index) => (<Albumitems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)


                    )}



                </div>
            </div>
            <div className='mb-4 '>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>

                    {songsData.map((item, index) => (<SongItems key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)


                    )}



                </div>






            </div>
        </div>
    )
}

export default DisplayHome