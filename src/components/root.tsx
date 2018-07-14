import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';

interface RootProps {
  store:any;
}

export class Root extends React.Component<RootProps>{

  public constructor(props:RootProps) {
    super(props);
  }

  public render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Route path='/' component={App} />
        </Router>
      </Provider>
    );
  }
}