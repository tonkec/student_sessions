import React from 'react';
import {connect} from 'react-redux';
import {sortByDate, sortByEmail, sortAscending, sortDescending, setTextFilter} from '../actions/filters';

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

  filterByText = (e) => {
    this.props.filterByText(e.target.value);
  }

  render () {
    return (
      <div>
        <div className="flex">
          <button onClick={this.sortByEmail} className="m-l-0 button btn-filter"> Sort by Email </button>
          <button onClick={this.sortByDate} className="button btn-filter"> Sort by Date </button>
          <button onClick={this.sortAscending} className="button btn-filter"> Sort Ascending </button>
          <button onClick={this.sortDescending} className="button btn-filter"> Sort Descending </button>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search by keyword"
            value={this.props.filters.text}
            onChange={this.filterByText}
            className="filter m-l-0"
          />
        </div>
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
  sortDescending: () => dispatch(sortDescending()),
  filterByText: (text) => dispatch(setTextFilter(text))
})

export default connect (mapStateToProps, mapDispatchToProps)(SessionsFilters);
