import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMyReducers } from '../../model/';

const nav = [
  {
    code:"Index",
    name:'Index',
    path:'/index',
  }
];

interface HeaderProps {
  msg:string;
}

class HeaderComponent extends React.Component<HeaderProps> {
  public render(){
    return (<div>
      <ul>
      {
        nav.map((val, index) => {
          return (<Link key={index} to={val.path}>{val.name}</Link>);
        })
      }
      </ul>
      Header
    </div>);
  }
}

function mapStateToProps(state:IMyReducers) {
  return {
    msg:state.headerState.msg,
  };
}

function mapDispatchToProps() {
  return {};
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
