import React, { useState, useEffect } from "react";
import axios from "axios"

const ApiComponent = () => {
  const [persons, setPersons] = useState([]);
  // const [datas, setDatas] = useState([]);

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    ListoFPersons();
    // ListofCountries();
    // loadData();
  }, []);


  const ListoFPersons = async () => {
    await axios(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPersons(res.data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="text-center">
      <h2>List of Post</h2>
      {persons.map(item => (
        <div key={item.id}>{item.title} - {item.body}</div>
      ))}
    </div>
  )

};

export default ApiComponent;


// brad

  // const [setState] = useState([])

  // const getTodos = () => {
  // axios({
  //     method: 'get',
  //     url: 'https//jsonplaceholder.typicode.com/todos',
  //     params: {
  //         _limit: 5
  //     }
  // })
  // .then( res => setState(res.data))
  // .catch( err => setState(err))

  // OR

  //     axios(`https//jsonplaceholder.typicode.com/todos?_limit=5`)
  //     .then( res => setState(res.data))
  //     .catch( err => setState(err))
  //     console.log(getTodos);
  // }