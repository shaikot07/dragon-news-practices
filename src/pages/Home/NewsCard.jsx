import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
      // console.log(news);
      const {_id,image_url,details,title,thumbnail_url,rating} = news 
      return (
            <div className="flex w-full mb-14 p-4 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                  <div className="mb-3 ">
                        <h5 className="block font-poppins text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                             {title}
                        </h5>

                  </div>
                  <div className="  mt-4 overflow-hidden rounded-xl  bg-clip-border text-white  ">
                        <img
                              src={image_url}
                              alt="ui/ux review check"
                        />
                       
                        
                  </div>
                  <div className="p-6">

                        <div className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                              {
                                    details.length > 180 ? <p>{details.slice(0,180)} <Link to={`/news/${_id}`} className='text-[#D72050] font-bold'>Read More...</Link> </p>
                                    : <p>{details}</p>
                              }
                        </div>

                  </div>

            </div>
      );
};

export default NewsCard;