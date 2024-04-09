import React from 'react';
// import Chart from "react-apexcharts";
import { fetchApi } from '../utils/api';
import { useDispatch,useSelector} from "react-redux";

import { SetChart} from '../slices/CryptoSlice';


const ChartSection = () => {
    const dispatch = useDispatch()
    const  { DATA: coinDetail } = useSelector((state)=>state.cryptoSlice);
    const id = coinDetail ? coinDetail.id : undefined;
    console.log(coinDetail);

    const chartSection = useSelector((state)=>state.cryptoSlice.CHART);

    

    async function GetData() {
        const data = await fetchApi(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.REACT_API_KEY}`,
              },
        });

        console.log("data",data);
        dispatch(SetChart(data));
        
    }
    GetData()
    

    console.log("chartSection",chartSection);

//   const [options, setOptions] = useState({
//     chart: {
//       id: "basic-bar"
//     },
//     xaxis: {
//       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }
//   });

//   const [series, setSeries] = useState([
//     {
//       name: "series-1",
//       data: [30, 40, 45, 50, 49, 60, 70, 91]
//     }
//   ]);

  return (
    <div>
      {/* <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="area"
              width="500"
            />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ChartSection;


// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30