import {Component} from "react";

class Image extends Component {
    render() {
        const {src,alt} = this.props
        return <div className = "imagewrapper">
            <img className="image" src={src} alt ={alt}></img>
        </div>
    }
}

export default Image