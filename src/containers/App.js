import React from 'react';
import './App.css';

import Header from '../components/header/header.component';

import AlgorithmsBox from '../components/algorithms-box/algorithms-box.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orginalArray: [...Array(84)].map(() => Math.floor(Math.random() * 300)),
      toBeSorted: 0
    };
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
        />
        <AlgorithmsBox 
          orginalArray={this.state.orginalArray}
          toBeSorted={this.state.toBeSorted}
        />
      </div>
  );
  }
}

export default App;
