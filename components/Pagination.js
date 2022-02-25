import React, { useState } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

function Pagination({ postsPerPage, totalPosts, totalFilteredPost, paginate }) {

    const [isActive, setIsActive] = useState(1)
    var pageNumbers = []

    if (totalFilteredPost !== 0) {
        pageNumbers = []

        for (let i = 1; i <= Math.ceil(totalFilteredPost / postsPerPage); i++) {
            pageNumbers.push(i)
        }
    }
    else if (totalPosts > 0) {
        pageNumbers = []

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i)
        }
    }


    return (
        <div className='flex flex-1 items-center p-5 max-w-screen-xl mx-auto'>
            {/* First Page */}
            <div className='flex flex-grow items-start justify-start pl-5' onClick={() => { paginate(1); setIsActive(1) }}>
                <div className={`rounded-full border px-4 py-4 cursor-pointer hover:scale-105 transition transform ease-out ${1 === isActive ? '' : 'bg-blue-200'}`}>
                    <FaAngleDoubleLeft />
                </div>
            </div>

            {/* Prev Page */}
            <div className='flex flex-grow items-start justify-start pl-5' onClick={() => { paginate(isActive <= 1 ? 1 : isActive - 1); setIsActive(isActive <= 1 ? 1 : isActive - 1) }}>
                <div className={`rounded-full border px-4 py-4 cursor-pointer hover:scale-105 transition transform ease-out ${1 === isActive ? '' : 'bg-blue-200'}`}>
                    <FaAngleLeft />
                </div>
            </div>

            {/* Pages */}
            <ul className='flex items-center justify-center space-x-10'>
                {pageNumbers.map((number, idx) => (
                    <li key={idx} className={`rounded-full border px-4 py-2 cursor-pointer hover:scale-105 transition transform ease-out ${number === isActive ? '' : 'bg-blue-200'}`}
                        onClick={() => { paginate(number); setIsActive(number) }}> {number} </li>
                ))}
            </ul>

            {/* next page */}
            <div className='flex flex-grow items-end justify-end pr-5' onClick={() => { paginate(isActive >= pageNumbers.length ? pageNumbers.length : isActive + 1); setIsActive(isActive >= pageNumbers.length ? pageNumbers.length : isActive + 1) }}>
                <div className={`rounded-full border px-4 py-4 cursor-pointer hover:scale-105 transition transform ease-out ${pageNumbers.length === isActive ? '' : 'bg-blue-200'}`}>
                    <FaAngleRight className='cursor-pointer' />
                </div>
            </div>
            
            {/* last page */}
            <div className='flex flex-grow items-end justify-end pr-5' onClick={() => { paginate(pageNumbers.length); setIsActive(pageNumbers.length) }}>
                <div className={`rounded-full border px-4 py-4 cursor-pointer hover:scale-105 transition transform ease-out ${pageNumbers.length === isActive ? '' : 'bg-blue-200'}`}>
                    <FaAngleDoubleRight className='cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Pagination