import React from "react";
import { connect } from "react-redux";
import {
  sortByDate,
  sortByEmail,
  sortAscending,
  sortDescending,
  setTextFilter
} from "../actions/filters";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountUp,
  faSortAmountDown
} from "@fortawesome/free-solid-svg-icons";
library.add(faSortAmountUp, faSortAmountDown);

class SessionsFilters extends React.Component {
  state = {
    ascending: false,
    activeEmail: false,
    activeDate: true
  };

  sortByEmail = () => {
    this.props.sortByEmail();
    this.setState({ activeEmail: true, activeDate: false });
  };

  sortByDate = () => {
    this.props.sortByDate();
    this.setState({ activeDate: true, activeEmail: false });
  };

  sortAscending = () => {
    this.props.sortAscending();
  };

  sortDescending = () => {
    this.props.sortDescending();
  };

  filterByText = e => {
    this.props.filterByText(e.target.value);
  };

  sort = () => {
    this.setState({ ascending: !this.state.ascending });
    if (this.state.ascending) {
      this.sortAscending();
    } else {
      this.sortDescending();
    }
  };

  render() {
    const { ascending, activeDate, activeEmail } = this.state;
    return (
      <div>
        <div className="filters-wrapper">
          <p> Sort by: </p>
          <button
            onClick={this.sortByDate}
            className={
              activeDate ? "m-l-0 btn-filter active" : "m-l-0 btn-filter"
            }
            title="Sort by date"
          >
            Date
          </button>
          <button
            onClick={this.sortByEmail}
            className={
              activeEmail ? "m-l-0 btn-filter active" : "m-l-0 btn-filter"
            }
            title="Sort by email"
          >
            Email
          </button>
          <button onClick={this.sort} className="btn-filter-inverse">
            {<Icon ascending={ascending} />}
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by keyword"
            value={this.props.filters.text}
            onChange={this.filterByText}
            className="filter-field m-l-0"
          />
        </div>
      </div>
    );
  }
}

const Icon = ({ ascending }) => (
  <FontAwesomeIcon
    icon={`sort-amount-${ascending ? "down" : "up"}`}
    size="2x"
    color="#2ec4b6"
  />
);

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  sortByDate: () => dispatch(sortByDate()),
  sortByEmail: () => dispatch(sortByEmail()),
  sortAscending: () => dispatch(sortAscending()),
  sortDescending: () => dispatch(sortDescending()),
  filterByText: text => dispatch(setTextFilter(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionsFilters);
