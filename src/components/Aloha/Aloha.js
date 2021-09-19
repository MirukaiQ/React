import {Component} from "react";

class Aloha extends Component {
    render() {
        const {name} = this.props
        return <div>Hello {name}</div>
    }
}

export default Aloha