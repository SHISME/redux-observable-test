import * as React from 'react';
import './App.css';

class App extends React.Component {

  public componentDidMount() {
    console.warn('action_start_app')
    console.log(this);
  }

  public render() {
    return (
          <div className="App">
            <div>
              {this.props.children}
            </div>
          </div>
    );
  }

}

export default App;
