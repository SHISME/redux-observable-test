import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import App from '../App';
import { Index } from './Index/index';
import { Header } from './header/';

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
          <App>
            <Header/>
            <Switch>
              <Route path='/index' component={Index} />
            </Switch>
          </App>
        </Router>
      </Provider>
    );
  }
}