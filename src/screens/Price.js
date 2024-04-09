import React, { useState } from 'react';
import { fetchApi } from '../utils/api';
import { useDispatch,useSelector} from "react-redux";
import { SetData } from '../slices/CryptoSlice';
// import Card from '../components/Card';
import '../components/Card.css'
import ChartSection from '../components/ChartSection';
import Card from '../components/Card';


const Price = () => {

    const [name,setName] = useState();

//   const CoinDetail = useSelector((state)=>state.cryptoSlice.DATA);
  const dispatch = useDispatch();

    function submitdata(){
        GetData();
        // setName("");
    }

    async function GetData() {
        const data = await fetchApi(`https://api.coingecko.com/api/v3/coins/${name}`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_API_KEY}`,
              },
        });
        dispatch(SetData(data?.data));     
    }
    
// useEffect(()=>{
//     GetData()
// },[])
    // console.log("newData",CoinDetail);

  return (
    <div className='mainContainer'>
        <div className='search_section'>
            <div className='input_sec'>
                <input placeholder='Enter coin name....' value={name} type="text" onChange={(e) => setName(e.target.value.toLowerCase())} />
                <button onClick={submitdata}>search</button>
            </div>
            <div className="name">
                <p>hello</p>
            </div> 
        </div>
        <div className="second_sec">
        {
            <Card />
        }
        </div>
        <ChartSection />
    </div>
  );
};

export default Price;