import { useState } from "react";
import "./UserList.css";
import Users from "./Users";

const UserList = () => {
    let [select, setSelect] = useState('all');
    let [sort, setSort] = useState('');
    let [input, setInput] = useState('');

    function change(num){
      setSelect(num)
    }
    function sortlist(e){
        setSort(e.target.value)
    }
    function inputText(e){
      setInput(e.target.value)
    }

    return (
      <section className="container">
        <div className="userlist">
          <div className="top-section">
          <h1 className="heading">Users</h1>
          <div className="sorting">
            <button className={select === 'all' ? 'active' : ''} onClick={() => change('all')}>All</button>
            <button className={select === 'active' ? 'active' : ''} onClick={() => change('active')}>Active</button>
            <button className={select === 'inactive' ? 'active' : ''} onClick={() => change('inactive')}>Inactive</button>
            <select name="Role" id="Role" onChange={sortlist} defaultValue=''>
              <option value="Role">
                Role
              </option>
              <option value='End User'>End User</option>
              <option value='System Administrator'>System Administrator</option>
              <option value='Developer'>Developer</option>
            </select>
            <input type="text" onChange={inputText} placeholder="Search users..." />
          <button>Add New User</button>
        </div>
        </div>
        <div className="list">
            <Users select={select} sort={sort} input={input} />
        </div>
      </div>
    </section>
  );
};

export default UserList;
