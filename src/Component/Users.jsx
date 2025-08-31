import { useEffect, useState } from "react"
import './Users.css'
import Notfound from "./Notfound";

// eslint-disable-next-line react/prop-types
const Users = ({ select, sort, input } ) => {
  let [list, setList] = useState([]);
  let [found, setFound] = useState(true);
  
  useEffect(() => {
    let option = {
      method : "GET"
    }
    let url = 'http://localhost:4000/userlist'
    fetch(url, option)
    .then((res) => {
      if(!res.ok){
        throw new Error("Error: ", res)
      }
      return res.json();
    })
    .then((data) => {
        // eslint-disable-next-line react/prop-types
      const datas = data.filter((e) =>  e.name.toLowerCase().includes(input.toLowerCase()))
      if(datas.length !== 0){
        setFound(true)
        console.log('working', datas)
        if(select === 'all'){
          if(sort === '' || sort === 'Role'){
              setList(datas)
          }
          else{
            let sorted = datas.filter((s) => s.role === sort);
              setList(sorted);
          }
        }
        else{
          if(sort === '' || sort === 'Role'){
            let sorted = datas.filter((e) => e.role !== sort);
            let newdata = sorted.filter((e) => select === e.status);
              setList(newdata)
          }
          else{
            let sorted = datas.filter((e) => e.role === sort);
            let newdata = sorted.filter((e) => select === e.status);
              setList(newdata);
          }
        }
      }
      else{
        setFound(false);
      }
    })
    .catch((e) => {
      console.log("Error: ", e.message);
    })
  }, [select, sort, input])

  return (
    <>
      {found ? <table border='1' cellSpacing='0' cellPadding='8'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                {list.map((e, index) => {
                    return <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.role}</td>
                    <td>{e.status}</td>
                    <td>{e.joined}</td>
                  </tr>
                })}
              </tbody>
          </table>
        : <Notfound />}
    </>
  )
}

export default Users
