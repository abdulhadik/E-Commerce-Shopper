import React from "react";
import "./New_collections.css";
import Item from "../Items/Item";
import new_collections from "../Assets/new_collections";
const New_collections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
      {new_collections.map((item, i) => {
        return (
          <Item
            key={1}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      })}
      </div>
      <div className="new-collections-item">{}</div>
    </div>
  );
};

export default New_collections;
