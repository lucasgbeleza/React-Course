import React, {Component} from 'react';
import './Card.css';

class Card extends React.Component {
  render(){
    let data = this.props
    let classes = 'card '+ data.className
    return(
      <div className={classes}>{data.children}</div>
    )
  }
}

export default Card;
