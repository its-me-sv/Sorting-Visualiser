import React from 'react';
import './App.css';

import Header from '../components/header/header.component';
import AlgorithmsBox from '../components/algorithms-box/algorithms-box.component';
import DetailsBox from '../components/details-box/details-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orginalArray: [...Array(84)].map(() => Math.floor(Math.random() * 300)),
      toBeSorted: 0,
      viewDetails: true
    };
  }

  toggleViewDetails = () => {
    this.setState({viewDetails: !this.state.viewDetails});
  }

  updateToBeSorted = () => {
    this.setState({toBeSorted: 1});
  }

  render() {
    return (
      <div className="container">
        <Header 
          orginalArray={this.state.orginalArray} 
          handleUpdate={this.updateToBeSorted}
          toggleViewDetails={this.toggleViewDetails}
        />
        <AlgorithmsBox 
          orginalArray={this.state.orginalArray}
          toBeSorted={this.state.toBeSorted}
        />
        {this.state.viewDetails && <DetailsBox 
          orginalArray={this.state.orginalArray}
          toggleViewDetails={this.toggleViewDetails}
          />}
      </div>
  );
  }
}

export default App;
