import {Component} from 'react';

class Image extends Component {

  render() {
    const {src, alt,} = this.props;
    
    return <div className="imgWrapper">
      <img className="img" src={src} alt={alt}/>
    </div>
  }
}

export default Image;