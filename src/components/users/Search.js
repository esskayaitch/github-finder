import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text); // pass serarch string up to app.js  };
    this.setState({ text: '' }); // set local state to null
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // handles multiple input fields (Rather than say {text: e.target.value})
  };

  render() {
    const { showClear, clearUsers } = this.props; // destructure props

    return (
      <div>
        <form onSubmit={this.onSubmit} action="" className="form">
          <input type="text" name="text" placeholder="Search for..." value={this.state.text} onChange={this.onChange} />
          <input type="submit" className="btn btn-dark btn-block" value="Search" />
        </form>

        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear search
          </button>
        )}
      </div>
    );
  }
}

export default Search;
