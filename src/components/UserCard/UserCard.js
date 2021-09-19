import React from "react";

class UserData extends React.Component {

}

class UserCard extends React.Component {
    render() {
        const { userName, userPicture, userDescription } = this.props
        return (
            <article className="userCard">
                <div className="imgWrapper">
                    <img
                        className="img"
                        src={userPicture}
                        alt={userName}
                    />
                </div>
                <h2 className="cardName">{userName}</h2>
                <p className="cardDescription">{userDescription}</p>
            </article>
        )
    }
}

export default UserCard