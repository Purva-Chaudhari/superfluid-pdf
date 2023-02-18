import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const { Web3Provider } = require("@ethersproject/providers");

const inter = Inter({ subsets: ['latin'] })
const receipt = () => {
  const genPDF = async () => {
  const sf = new SuperfluidSDK.Framework({ethers: new Web3Provider(window.ethereum)});
  await sf.initialize()
  const carol = sf.user({
    address: walletAddress[0],
    token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
  });

  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Wallet Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="eg: 0x..." />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="grid-state">
              Stream status
            </label>
          </div>
          <div className="md:w-2/3">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Scheduled</option>
              <option>Streaming</option>
              <option>Canceled</option>
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="grid-state">
              Stream direction
            </label>
          </div>
          <div className="md:w-2/3">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Incoming</option>
              <option>Outgoing</option> 
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            onClick={genPDF}>
              Get PDF
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default receipt
