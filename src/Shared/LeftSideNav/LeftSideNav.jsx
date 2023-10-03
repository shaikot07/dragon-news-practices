import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const LeftSideNav = () => {
      const [categories, setCategories]= useState([])

      useEffect(()=>{
            fetch('categories.json')
            .then(res =>res.json())
            .then(data =>setCategories(data))
      },[])
      return (
            <div className="p-4">
                 <h2 className="text-2xl font-semibold mb-4">All Categories</h2>
                 {
                  categories.map(category => <NavLink to={`/category/${category.id}`} key={category.id}
                  className="block py-4 text-xl  px-5  mb-7 text-center"
                  
                  >{category.name}</NavLink>)
                 }

            </div>
      );
};

export default LeftSideNav;