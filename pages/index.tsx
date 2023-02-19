// @ts-nocheck
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";
import Link from "next/link"
import { useRouter } from 'next/router';


function addScript() {
  var script = document.createElement('script');
  script.type = 'application/javascript';
  script.src = "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";
  document.head.appendChild(script);
  //eval("const element = document.getElementById('pdf');html2pdf().from(element).save()")
}
const receipt = () => {
  const router = useRouter();
  const [chain, setChain] = useState("");
  const [streamId, setStreamId] = useState("");
  useEffect(addScript, []) 
  const getStream = async () => {
    let resp = await fetch(`/api/id?chain=${chain}&streamId=${streamId}`);
    let data = await resp.json();
    router.push({
      pathname: '/pdf',
      query: {
        sender: data["sender"],
        reciever: data["reciever"],
        amount: data["amount"],
        tokenFlowRate: data["flowRate"],
        startTimestamp: data["startTimestamp"],
        endTimestamp: data["endTimestamp"]
      },
      });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Super fluid ID
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="eg: 0x..." onChange={e => setStreamId(e.target.value)}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Network
            </label>
          </div>
          <div className="md:w-2/3">
            <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="grid-state" onChange={e => 
              {
                console.log(e.target.options[e.target.selectedIndex].text)
                setChain(e.target.options[e.target.selectedIndex].text)
              }
            }>
              <option selected="selected">Polygon</option>
              <option>Gnosis-chain</option>
              <option>Optimism</option>
              <option>Arbitrum One</option>
              <option>Avalanche</option>
              <option>BNB Smart Chain</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
            onClick={getStream}>
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default receipt
