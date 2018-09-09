import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IRootState } from '../../model/interface';
import { action_fetch_top_250_movie_from_douban } from './model/action';
import { ISubject } from './model/state';

interface DoubanProps {
  count:number;
  start:number;
  title:string;
  action_fetch_top_250_movie_from_douban:typeof action_fetch_top_250_movie_from_douban;
  subjects:ISubject[];
}

class DoubanComponent extends React.Component<DoubanProps> {
  public constructor(props:DoubanProps) {
    super(props);
  }

  public render(){
    const {title, subjects} = this.props;
    return (<div>
      <h1>{title}</h1>
      {
        subjects.map((subject:ISubject, index) => {
          return (
            <fieldset style={styles.box} key={subject.id}>
              <legend>{subject.title}</legend>
              <div>
                <div>
                  <b>评分：</b>{subject.rating.average}
                </div>
              </div>
            </fieldset>
          );
        })
      }
    </div>);
  }
  public componentDidMount() {
    const { count, start } = this.props;
    this.props.action_fetch_top_250_movie_from_douban({
      count,
      start,
    });
  }
}

function mapStateToProps(state:IRootState) {
  return {
    count:state.doubanState.count,
    start:state.doubanState.start,
    title:state.doubanState.title,
    subjects:state.doubanState.subjects,
  };
}

function mapDispatchToProps(dipatch:Dispatch) {
  return bindActionCreators({
    action_fetch_top_250_movie_from_douban,
  },dipatch);
}

export const Douban = connect(mapStateToProps, mapDispatchToProps)(DoubanComponent);

const styles = {
  box:{
    width:'50%',
    marginLeft:'25%',
    marginBottom:25,
  }
};
