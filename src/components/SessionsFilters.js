import React from 'react';
import {connect} from 'react-redux';
import {sortByDate, sortByEmail, sortAscending, sortDescending} from '../actions/filters';

class SessionsFilters extends React.Component {
  sortByEmail = () => {
    this.props.sortByEmail();
  }

  sortByDate = () => {
    this.props.sortByDate();
  }

  sortAscending = () => {
    this.props.sortAscending();
  }

  sortDescending = () => {
    this.props.sortDescending();
  }

  render () {
    return (
      <div>
        <p> Sort By </p>
        <button onClick={this.sortByEmail}> Sort by Email </button>
        <button onClick={this.sortByDate}> Sort by Date </button>
        <button onClick={this.sortAscending}> Sort Ascending </button>
        <button onClick={this.sortDescending}> Sort Descending </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByEmail: () => dispatch(sortByEmail()),
  sortAscending: () => dispatch(sortAscending()),
  sortDescending: () => dispatch(sortDescending())
})

export default connect (mapStateToProps, mapDispatchToProps)(SessionsFilters);
