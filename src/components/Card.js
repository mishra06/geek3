import React from 'react'
import './Card.css';
import { useSelector} from "react-redux";

const Card = () => {

  const CoinDetail = useSelector((state)=>state.cryptoSlice.DATA);
  return (
    <div className='cards_collection'>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>Coin_Name</span>
            <span className='btcn'>{CoinDetail?.name}</span>
          </div>
      </div>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>Market_Cap</span>
            <span className='btcn'>{CoinDetail?.market_cap_rank}</span>
          </div>
      </div>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>All Time_hign</span>
            <span className='btcn'>${}</span>
          </div>
      </div>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>Market Capicity</span>
            <span className='btcn'>{CoinDetail?.market_data?.market_cap?.inr}</span>
          </div>
      </div>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>High 24hr</span>
            <span className='btcn'>{CoinDetail?.market_data?.high_24h?.inr}</span>
          </div>
      </div>
      <div className="coin_name">
          <div className="coinname">
            <span className='cname'>Low 24hr</span>
            <span className='btcn'>${CoinDetail?.market_data?.low_24h?.inr}</span>
          </div>
      </div>
       

    </div>
  )
}

export default Card
