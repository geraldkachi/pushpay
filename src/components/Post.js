import React from "react";
// import axios from 'axios'
import Spinner from "../components/Spinner";
import { connect } from "react-redux";
import { deletePost } from "../components/action/postAction";

const Post = ({ match, post, deletePost, history }) => {
  // const [post, setPost] = React.useState(null)

  // React.useEffect(() => {

  //     let id = match.params.post_id

  //     axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(res => setPost(res.data))
  //     .catch(err => console.log(err))
  //     // const id = match.params.post_id
  // }, [])

  const handleClick = () => {
    deletePost(post.id);
    history.push("/");
  };

  const titlePost = post ? (
    <div className="post">
      <h4 className="text-center">{post.title}</h4>
      <p>{post.body}</p>
      <div className="text-center">
        <button className="btn-secondary " onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    // <div>Loading posts...</div>
    <Spinner />
  );

  return (
    <div className="container text-center mt-5">
      <h4>route param</h4>
      {titlePost}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(
      // { type: "DELETE_POST", id: id }
      deletePost(id)
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
