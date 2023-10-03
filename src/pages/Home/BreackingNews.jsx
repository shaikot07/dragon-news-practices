import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreackingNews = () => {
      return (
            <div>
                  <div className='flex'>
                        <button className='btn btn-secondary'>Breaking News</button>
                        <Marquee pauseOnHover={true} speed={100}>
                              <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                              <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                              <Link className='mr-12' to="/">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                        </Marquee>
                  </div>
            </div>
      );
};

export default BreackingNews;