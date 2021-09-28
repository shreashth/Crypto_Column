import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Loader from './Loader';




const {Title} = Typography;

function Linechart({ coinHistory, currentPrice, coinName}) {

    const coinPrice= []
    const coinTimeStamp =[]

    
    for(let i=0; i< coinHistory?.data?.history?.length; i++) {
      
      coinPrice.push(coinHistory.data.history[i].price)
      coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
    }
    console.log(coinHistory)
    console.log(coinTimeStamp)

    const data = {
      labels: coinTimeStamp,
      datasets: [
        { 
          label:'Price in USD', 
          data: coinPrice, 
          fill: false, 
          backgroundColor: '#0071bd',
          borderColor: '#0071bd'
        }
      ]
    }

    const options = {
        scales: {
          yAxes: { 
              ticks: {
                beginAtZero: true
              }
            }
          }
        }
    



    return (
        <>
          <Row className="chart-header">
              <Title level={2} className="chart-title">{coinName} Price Chart</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Percentage Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price : $ {currentPrice}</Title>
                </Col>
            </Row>
          <Line data={data} options={options} />
          
          
        
        </>
    )
}

export default Linechart
