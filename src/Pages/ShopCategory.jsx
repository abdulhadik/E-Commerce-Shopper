import React, { useContext } from "react";
import "../Pages/css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdownIcon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Items/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 54 products
        </p>
      
      <div className="shopCategory-sort">
        Sort By <img src={dropdownIcon} alt="" />
      </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((items, i) => {
          if (props.category === items.category) {
            return (
              <Item
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-exploremore">
      Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
