import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  componentDidMount() {
    console.log("component did mount ran");
    this.props.fetchPost();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPost })(PostList);
