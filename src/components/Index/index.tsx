import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../../model/interface';

class IndexComponent extends React.Component {
  public render() {
    return (<div>
      hehe
    </div>);
  }
}

function mapStateToProps( state:IRootState ) {
  return {

  };
}

function mapDispatchToProps() {
  return {};
}

export const Index = connect(mapStateToProps, mapDispatchToProps)(IndexComponent);