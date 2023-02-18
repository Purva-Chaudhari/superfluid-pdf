import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const { Web3Provider } = require("@ethersproject/providers");
import Link from "next/link"
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mainnet.maticvigil.com/'));

const receipt = () => {
  const [chain, setChain] = useState("");
  const [streamId, setStreamId] = useState("");

  const getStream = async () => {
    let resp = await fetch(`/api/id?chain=${chain}&streamId=${streamId}`)
    let data = await resp.json()
  }
  useEffect(() => {}, [])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text">
              Super fluid ID
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="eg: 0x..." onChange={e => setStreamId(e.target.value)}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block uppercase tracking-wide text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="grid-state">
              Network
            </label>
          </div>
          <div className="md:w-2/3">
            <select className="form-select form-select-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="grid-state" >
              <option>Gnosis chain</option>
              <option>Polygon</option>
              <option>Optimism</option>
              <option>Arbitrum One</option>
              <option>Avalanche C</option>
              <option>BNB Smart Chain</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <Link href="/Pdf">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                  onClick={getStream}>
                    Get PDF
                 </button>
              </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default receipt
