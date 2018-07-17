import * as React from 'react';
import { connect } from 'react-redux';
import { IMyReducers } from '../../model/';

class IndexComponent extends React.Component {
  public componentDidMount() {
    console.warn('Index did mount');
  }
  public render() {
    return (<div>
      hehe
    </div>);
  }
}

function mapStateToProps( state:IMyReducers ) {
  console.warn('state',state);
  return {

  };
}

function mapDispatchToProps() {
  return {};
}

export const Index = connect(mapStateToProps, mapDispatchToProps)(IndexComponent);