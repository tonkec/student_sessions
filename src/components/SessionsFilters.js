import React from 'react';
import {connect} from 'react-redux';
import {sortByDate, sortByEmail} from '../actions/filters';

class SessionsFilters extends React.Component {
  sortByEmail = () => {
    this.props.sortByEmail();
  }

  sortByDate = () => {
    this.props.sortByDate();
  }

  render () {
    return (
      <div>
        <p> Sort By </p>
        <button onClick={this.sortByEmail}> Sort by Email </button>
        <button onClick={this.sortByDate}> Sort by Date </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByEmail: () => dispatch(sortByEmail())
})

export default connect (mapStateToProps, mapDispatchToProps)(SessionsFilters);
