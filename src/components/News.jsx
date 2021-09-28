import React from 'react'
import { Select, Typography, Row, Col , Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import Loader from './Loader';


const { Text,Title } = Typography;

const { Option } = Select;



function News({simplified}) {

    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10: 100})



    if(!cryptoNews) return <Loader/>



    return (
        <Row gutter={[24,24]}>
            {cryptoNews?.value?.map((news,i)=>(
                <Col xs={24} sm={12} lg={8} key={i}>
                   <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{width:'100px', height:'100px', margin:'10px'}} src={news?.image?.thumbnail?.contentUrl } />
                            </div>
                            <p>
                                {news?.description> 100 ? `${news.description.substring(0,100)}...` : `${news.description}`}
                            </p>
                            <div className="provider-container">
                                
                                    <Avatar alt="news" src= {news.provider[0]?.image?.thumbnail?.contentUrl} />
                                    <Text>{moment(news.datePUblished).startOf('ss').fromNow()}</Text>
                                
                            </div>
                        </a>


                    </Card>  
                </Col>
            ))}


        </Row>
    )
}

export default News
