import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Pdf(){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg shadow-md py-5 bg-sf-green relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex flex-wrap items-center justify-center text-white">
                            <h1 className="text-5xl font-bold mt-0 mb-6">Superfluid Report</h1>
                    </div>
                </nav>
                <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
                    <h1 className="text-5xl font-bold mt-0 mb-6">Rishabh</h1>
                    <h3 className="text-3xl font-bold mb-8">Purva</h3>
                    <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get pdf</a>
                </div>
        </header>
        {/* <div className='box-border h-32 w-32 p-4 bg-white pl-100' /> */}
        
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Sender
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Receiver
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Token per second
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Start timestamp
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              End Timestamp
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Total Money Transferred till now
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                address
            </div>
          </div>
        </div>
      </div>

 
      
    )
 }