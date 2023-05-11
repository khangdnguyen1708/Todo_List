import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1<button className="btn btn-danger">Delete</button>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2<button className="btn btn-danger">Delete</button>
          </label>
        </li>
      </ul>
    </>
  );
}
