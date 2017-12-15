
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

// const Link = ({active, children, onClick}) => {
//   if (active) {
//     return <b className="filter selected">{children}</b>;
//   } else {
//     return (
//       <a  className="filter not-selected" onClick={(ev) => {
//         ev.preventDefault();
//         onClick();
//       }}>
//         {children}
//       </a>
//     );
//   }
// };

class Link extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    if (this.props.active) {
      return (
        <b className="filter selected">{this.props.children}</b>
      )
    } else {
      return (
        <a className="filter not-selected" onClick={(ev) => {ev.preventDefault();this.props.onClick();}}>{this.props.children}</a>
      )
    }
  }
}

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// };

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
