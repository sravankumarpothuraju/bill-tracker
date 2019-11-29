import React, { useState } from "react";

import AddCategory from "./components/AddCategory.js";
import NavBar from "./components/NavBar.js";
import Chart from "./components/Chart.js";
import BillsTable from "./components/BillsTable.js";

function App() {
  const [shouldShowAddCategory, setShouldShowAddCategory] = useState(true);
  const [categories, setCategories] = useState([]);

  const addCategory = category => {
    const updatedCategories = [...(categories || []), category];
    setCategories(updatedCategories);
    setShouldShowAddCategory(false);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  return (
    <div className="App">
      {shouldShowAddCategory ? (
        <AddCategory onSubmit={addCategory} />
      ) : (
        <div>
          <NavBar />
          <div className="container flex">
            <div className="w-1/2">
              <BillsTable />
            </div>
            <div className="w-1/2">
              <Chart />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
