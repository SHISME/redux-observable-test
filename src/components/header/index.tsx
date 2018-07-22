import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../model/interface';

const nav = [
  {
    code:"Index",
    name:'Index',
    path:'/index',
  },
  {
    code:"Douban",
    name:'Douban',
    path:'/douban',
  },
];

interface HeaderProps {
  msg:string;
}

class HeaderComponent extends React.Component<HeaderProps> {
  public constructor(props:HeaderProps) {
    super(props);
  }
  public render(){
    return (<div>
      <ul>
      {
        nav.map((val, index) => {
          return (
            <div key={index}>
              <Link to={val.path}>{val.name}</Link>
            </div>
            );
        })
      }
      </ul>
    </div>);
  }
}

function mapStateToProps(state:IRootState) {
  return {
    msg:state.headerState.msg,
  };
}

function mapDispatchToProps(dipatch:Dispatch) {
  return bindActionCreators({
  },dipatch);
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
