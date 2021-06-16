import React, { useState, useEffect } from "react";

const AndreFetch = () => {
  useEffect(() => {
    FetchDataSync();
    AsyncFetchDataSync();
    AndreAsyncFetchDataSync()
  }, []);

  const FetchDataSync = () => {
    fetch("https://jsonplaceholder.typicode.com/user")
      .then((res) => res.json())
      .then((user) => {
        const firstUser = user[0];
        console.log(firstUser);
        return fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
        );
      })
      .then((res) => res.json())
      .then((posts) => console.log(posts))
    //   error handleing in sync
      .catch(err => console.log(err))
  };

  const AsyncFetchDataSync = async () => {
   await fetch("https://jsonplaceholder.typicode.com/user")
      .then((res) => res.json())
      .then((user) => {
        const firstUser = user[0];
        console.log(firstUser);
        return await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
        );
      })
      .then((res) => res.json())
      .then((posts) => console.log(posts))
      .catch(err => console.log(err))
  };

//   ////////////////////////////////////////////
// try this out =>  swapi.co

// andre way 

try {
    const AndreAsyncFetchDataSync = async () => {
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/user")
           const users = await userResponse.json()
           const secondUser = users[1]
           console.log(secondUser)
           const postsResponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=" + secondUser.id
           )
           const posts = await postsResponse.json()
           console.log(posts)
           }
} catch (error) {
    console.log("there was an error")
}




  return <div></div>;
};

export default AndreFetch;

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
  // .then( res => setState(res))
  // .catch( err => setState(err))

  // OR

  //     axios(`https//jsonplaceholder.typicode.com/todos?_limit=5`)
  //     .then( res => setState(res))
  //     .catch( err => setState(err))
  //     console.log(getTodos);
  // }