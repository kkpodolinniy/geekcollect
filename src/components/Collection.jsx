import React from "react";
import Card from "../containers/card/Card";
import { useSelector } from "react-redux";
function Collection() {
  const collectionItems = useSelector(
    (state) => state.сollectionItems.сollectionItems
  );
  return (
    <div>
      {collectionItems.map((item) => {
        return <Card title={item.title} description={item.description} />;
      })}
    </div>
  );
}

export default Collection;
