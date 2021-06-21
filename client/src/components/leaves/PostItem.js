import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

import { Col, Row } from "react-bootstrap";

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
            <p className="text-center">{post.firstName}</p>
          </div>
          <div className="col-md-10">
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Reason :</h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.reason}</h6>
            </Col>
            </Row>

            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Name of Actor :</h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.nameOfActor}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">actor email : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.actorEmail}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">leave type : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.leaveType}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">HOD Approval : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.isHODApproved.toString()}</h6>
            </Col>
            </Row>
        
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Dean Approval : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.isDeanApproved.toString()}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">AR Approval : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.isARApproved.toString()}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Location to : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.location}</h6>
            </Col>
            </Row>
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Duration : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.duration}</h6>
            </Col>
            </Row>
            
            <Row style={{"marginTop":"5px"}}>
            <Col sm={4}>
            <h6 className="lead">Institute : </h6>
            </Col>
            <Col sm={8} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px"}}>
            <h6>{post.institute}</h6>
            </Col>
            </Row>
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
                {post.user === auth.user.id ? (

                  <button
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >delete Leave Aplication 
                    <i className="fas fa-times" />
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

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
