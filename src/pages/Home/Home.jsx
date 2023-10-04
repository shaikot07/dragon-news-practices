import React from 'react';
import Navbar from '../../Shared/Navbar';
import Header from '../../Shared/header/Header';
import BreackingNews from './BreackingNews';
import RightSideNav from '../../Shared/RightsideNav/RightSideNav';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {
      const news = useLoaderData()
      console.log(news);
      return (
            <div>
                  <Header></Header>
                  <BreackingNews></BreackingNews>
                  <Navbar></Navbar>
                  <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className='border border-cyan-600'>
                              <LeftSideNav></LeftSideNav>
                          </div>
                        <div className='md:col-span-2 border border-purple-600'>
                              {
                                    news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                              }
                        </div>
                        <div className='border border-red-700'>
                              <RightSideNav></RightSideNav>
                        </div>
                  </div>
            </div>
      );
};

export default Home;