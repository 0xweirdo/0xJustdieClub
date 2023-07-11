import React from 'react'

import {Helmet} from "react-helmet";

import FavviconJD from "./Icon.svg" ;


const Icon = () => {
  return (
    <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Just'die Club</title>
                <link rel="canonical" href="https://justdieclub.com" />
                <meta name="description" content="Just'die Club is a Next Generation of PFPs & NFT Collectibles on zkSync." />
                <img src={FavviconJD} className="App-logo" alt="FavviconJD" />
            </Helmet>
            
        </div>
  )
}

export default Icon