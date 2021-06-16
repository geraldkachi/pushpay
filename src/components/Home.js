import React from "react";
import PropTypes from 'prop-types';
// import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import ModalCom from "./ModalCom";
import "../App.css";
import { IoAdd, IoAccessibility } from "react-icons/io5";
// import RouteNavbar from '../components/RouteNavbar'

import styled from "styled-components";

import { connect } from "react-redux";
// import CountriesApi from "./axios.fetch/ApiComponent";
// import FetchComponets from "./axios.fetch/ApiComponent";
import ApiComponent from "./axios.fetch/ApiComponent";

const Home = ({posts}) => {
  // const [posts, setPost] = React.useState([]);

  // ?_limit=5

  // React.useEffect(() => {
  //   axios(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => setPost(res.data.slice(0, 10)))
  //     .catch((err) => console.error(err));
  // }, []);

  // fetch


  // eslint-disable-next-line 

  const postList = posts.length ? (

    posts.map((post) => (
      <div
        key={post.id}
        className="card m-1 shadow-lg d-flex justify-content-between flex-row"
      >
        <Spinner />
        <div className="card-body">
          <Link to={`/posts/${post.id}`} className="card-title">{post.title}</Link>
          <p>{post.body}</p>
          <ModalCom />
        </div>
      </div>
    ))
  ) : (
    <div className="text-center">No post yet... </div>
  );

  return (
    <div>
        {/* <RouteNavbar /> */}
      <div className="container mt-5">
      <Text className="text-center">Home</Text>
      {postList}       
      <div className="float">
        <div className="my-float text-center">
          <IoAdd />
          <IoAccessibility />
        </div>
      </div>
      <div className="d-flex justify-content-between text-center py-5">
      <Link to="typeinput">TypeInput</Link>
      <Link to="formik">Formik</Link>
      <Link to="react-hook-form">React Hook Form</Link>
      </div>
    </div>
    {/* <CountriesApi /> */}
    {/* <FetchComponets /> */}
    <ApiComponent />
    </div>
  );
};

const Text = styled.h4`
  font-size: 32px;
  color: red;
`;

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(Home)
