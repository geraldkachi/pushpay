import React, { useState, useEffect } from "react";
// import axios from "axios"

const FetchComponets = () => {

    const [datas, setDatas] = useState([]);
    // const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        loadData();
        // getData()
      }, []);
    

 //  fetch
 const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((err) => console.log(err));
  };


  const loadDataList = datas.length ? (
    datas.map(item => (
        <div key={item.id}>{item.name}</div>
    ))
  ) : (
    <div>loading todos here...</div>
  );

// //////////////////////////////////////////


// const getData = async () => {
//     const api = `https://jsonplaceholder.typicode.com/users`;
//     const result = await fetch(api)
//     const getResult = result.json()
//     setDatas(getResult)
//     console.log(getResult)
// }

//   const getDataList = datas.length ? (
//       datas.map(item => (
//           <div key={item.id}>{item.name}</div>
//       ))
//   ) : (<p>loading users</p>)

//   ////////////////////////////////////


  return (
    <div className="text-center">
      <h1>List fo Load Data</h1>
      {loadDataList}
      {/* {getDataList} */}
    </div>
  )
}

export default FetchComponets
