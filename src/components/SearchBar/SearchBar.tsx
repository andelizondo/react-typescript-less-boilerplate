import './SearchBar.less';
import * as React from 'react';

interface ISortOptions {
    [key: string]: string;
}
const sortByOptions: ISortOptions  = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends React.Component {

  private renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue}>
          {sortByOption}
        </li>
      );
    });
  }

  public render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses"/>
          <input placeholder="Where?"/>
        </div>
        <div className="SearchBar-submit">
          <a>Search</a>
        </div>
      </div>
    );
  }
}
export default SearchBar;
