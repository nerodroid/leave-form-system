import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike, approveLeave } from '../../actions/postActions';

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  onClickApprove = (id) => {
    const { auth} = this.props;
    console.log(id)
    this.props.approveLeave(id, auth.user.userType)
  }

  // findUserLike(likes) {
  //   const { auth } = this.props;
  //   if (likes.filter(like => like.user === auth.user.id).length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
    const { post, auth, showActions } = this.props;

    console.log("post", post)

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              {/* <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              /> */}
            </a>
            <br />
            
          </div>
          <div className="col-md-10">

          
            <p className="lead">Reason : {post.reason}</p>
            <p className="lead">Name of Actor : {post.nameOfActor}</p>
            <p className="lead">actor email : {post.actorEmail}</p>
            <p className="lead">leave type : {post.leaveType}</p>
            
            <p className="lead">Dean Approval : {post && post.isDeanApproved.toString()}</p>
            <p className="lead">HOD Approval : {post && post.isHODApproved.toString()}</p>
            <p className="lead">AR Approval : {post && post.isARApproved.toString()}</p>
            <p className="lead">Location to : {post.location}</p>
            <p className="lead">Duration : {post.duration}</p>
            <p className="lead">Institute : {post.institute}</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    // className={classnames('fas fa-thumbs-up', {
                    //   'text-info': this.findUserLike(post.likes)
                    // })}
                  />
                  {/* <span className="badge badge-light">{post.likes.length}</span> */}
                </button>
                {/* <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button> */}
                {/* <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                  Comments
                </Link> */}

                  {auth.user.userType === 'dean' && 
                    <button
                      onClick={this.onClickApprove.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger mr-1"> 
                      <i className="fas fa-times" />
                        Approve Dean
                    </button>
                  }
                  {auth.user.userType === 'a-r' && 
                    <button
                      onClick={this.onClickApprove.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger mr-1"> 
                      <i className="fas fa-times" />
                        Approve AR
                    </button>
                  }
                  {auth.user.userType === 'hod' && 
                    <button
                      onClick={this.onClickApprove.bind(this, post._id)}
                      type="button"
                      className="btn btn-danger mr-1"> 
                      <i className="fas fa-times" />
                        Approve HOD
                    </button>
                  }
                {post.user === auth.user.id ? (

                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  > 
                    <i className="fas fa-times" />
                      delete Leave Aplication
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike, approveLeave })(
  PostItem
);
