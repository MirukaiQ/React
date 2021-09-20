import React from "react";
import data from "../../data";

class UserCard extends React.Component {
    constructor(props) {
        super(props)
    } 
    render() {
        const { user } = this.props
        return (
            <article className="userCard">
                <div className="imgWrapper">
                    <img
                        className="img"
                        src={user.profilePicture}
                        alt={user.firstName}
                    />
                </div>
                <h2 className="cardName">{user.firstName}</h2>
                <p className="cardDescription">Tese</p>
            </article>
        )
    }
}

export default UserCard