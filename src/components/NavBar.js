import React from "react";

export default props => {
  const triggerShowAddCategory = () => {
    props.showAddCategory();
  };

  const liStyle =
    "p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer";

  return (
    <ul className="list-reset inline flex justify-center border-b-4 mb-0">
      {props.categories
        ? props.categories.map((value, index) => {
            return (
              <li className={liStyle} key={index}>
                {value}
              </li>
            );
          })
        : "<li>No categories</li>"}
      <li className={liStyle} onClick={triggerShowAddCategory}>
        ➕
      </li>
    </ul>
  );
};
