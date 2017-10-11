import './BusinessList.less';
import * as React from 'react';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  public render() {
    return (
      <div className="BusinessList">
        <Business/>
        <Business/>
        <Business/>
        <Business/>
        <Business/>
        <Business/>
      </div>
    );
  }
}
export default BusinessList;
