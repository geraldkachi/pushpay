const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle land an Egg",
      body: "one  Lorem ispem, dosor amet console",
    },
    {
      id: "2",
      title: "Squirtle land an Egg",
      body: "two  Lorem ispem, dosor amet console",
    },
    {
      id: "3",
      title: "Squirtle land an Egg",
      body: "three Lorem ispem, dosor amet console",
    },
  ],
};

const RootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => action.id !== post.id)

    return {
        ...state,
        posts: newPosts
    }
  }

  // console.log(action)
  return state;
};

export default RootReducer;
