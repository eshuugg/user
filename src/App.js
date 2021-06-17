import React,{useState,useEffect} from "react";
import axios from "axios";
const App = () => {
  
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [pages, setpages] = useState(0)
  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((response) => {
        setpages(response.data.total_pages)
      setdata(response.data.data)
    })
  },[page])
  return (
    <>
      <div className={"wrapper"}>
        <div className="listContainer">
          {data.map(item => <div key={item.id} className="listitem">
            <div className="avtar">
              <img src={item.avatar} alt={item.first_name} />
            </div>
            <div className="content">
              <h4>{item.first_name}{" "}{item.last_name}</h4>
              <p className="small">{item.email}</p>
            </div>
          </div>)}
          <div className="pagination">
            {new Array(pages).fill("").map((item, index) => {
              return <button key={"pg"+index} onClick={() => {
                setpage(index+1)
              }} className={"pgbutton"}>{ index+1}</button>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
