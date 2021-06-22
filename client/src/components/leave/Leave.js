import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
// import CommentForm from './CommentForm';
// import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
import {  getLeave } from '../../actions/leaveActions';
import axios from 'axios';
import { Col, Row } from "react-bootstrap";
import ReactToPrint from "react-to-print";

class Leave extends Component {
  componentDidMount() {
   
    console.log( this.props.match.params.id);
    const { user } = this.props.auth;
    this.props.getLeave(this.props.match.params.id)
  }

//   render() {
//     const { post, loading } = this.props.post;
//     let postContent;

//     if (post === null || loading || Object.keys(post).length === 0) {
//       postContent = <Spinner />;
//     } else {
//       postContent = (
//         <div>
//           <PostItem post={post} showActions={false} />
//           {/* <CommentForm postId={post._id} />
//           <CommentFeed postId={post._id} comments={post.comments} /> */}
//         </div>
//       );
//     }

//     return (
//       <div className="post">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <Link to="/feed" className="btn btn-light mb-3">
//                 Back To Feed
//               </Link>
//               {postContent}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }



render() {


  // const { id } = this.props.match.params;
  

  // console.log( id)
  const { post, loading } = this.props.post;
    let postContent;

    //console.log(this.props.post);
    console.log(post);
    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
         
        </div>
      );
    }

  


 

  return (
   

    
      <div>
        
      <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Applicant Name:</h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.applicantName}</h6> }
          </Col>
          </Row>

          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Applicant Type :</h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.applicantUserType}</h6> }
          </Col>
          </Row>



          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Reason :</h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.reason}</h6> }
          </Col>
          </Row>

          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Name of Actor :</h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.nameOfActor}</h6> }
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">actor email : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.actorEmail}</h6> }
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">leave type : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.leaveType}</h6> }
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">HOD Approval : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          {/* { <h6>{post.isHODApproved.toString()}</h6> } */
              <h6>True</h6>
        
        }
          </Col>
          </Row>
      
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Dean Approval : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          {/* <h6>{post.isDeanApproved.toString()}</h6> */
         <h6>True</h6>}
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">AR Approval : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          {/* { <h6>{post.isARApproved.toString()}</h6> } */
        
        <h6>True</h6>}
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Location to : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.location}</h6> }
          </Col>
          </Row>
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Duration : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          { <h6>{post.duration}</h6> }
          </Col>
          </Row>
          
          <Row style={{"marginTop":"5px"}}>
          <Col sm={4} style={{ "margin":"10px"}}>
          <h6 className="lead">Institute : </h6>
          </Col>
          <Col sm={7} style={{"backgroundColor": "#b0bec5", "padding":"5px", "borderRadius":"3px", "margin":"10px"}}>
          {<h6>{post.institute}</h6> }
          </Col>
          </Row>
      </div>
 
  );
}
}

// ComponentToPrint.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors,
//   post: state.post
// });

Leave.propTypes = {
  getLeave: PropTypes.func.isRequired,
 
  errors: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { getLeave })(Leave);





