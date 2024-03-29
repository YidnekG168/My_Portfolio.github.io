import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import usestate from '../assets/portfolio/usestate.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: reactParallax
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactSmooth
        },
        {
            id: 5,
            src: installNode
        },
        {
            id: 6,
            src: reactWeather
        },
        {
            id: 7,
            src: usestate
        },
    ]

  return (
    <div>
        <div>
            <div>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio</p>
                <p className=' py-6'> Under Constraction</p>

            </div>

            {
                portfolios.map(({id, src}) => {

                    <div
                    key={id} 
                    className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className=' shadow-md shadow-gray-500 rounded-lg'>
                        <img src={src} alt='' className=' rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> Demo</button><br/>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'> Code</button>
                        </div>
                    </div>
                </div>

                })
            }
           
        </div>
    </div>
  )
}

export default Portfolio