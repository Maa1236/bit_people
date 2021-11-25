import React from 'react';
import './UserListItem.css'

const UserListItem=({
    imgOfUser,
    firstName,
    lastName,
    email,
    dateOfBirth,
    index,
    gender
})=>{
    let redBgColor = (gender === "female") ? "red" : "";
    let day = new Date(dateOfBirth).getDate();
    let month = new Date(dateOfBirth).getMonth() + 1;
    let year = new Date(dateOfBirth).getFullYear();
    let dob = `${day}.${month}.${year}`;
    return(
        <div className={`singleElUserList ${redBgColor}`}>
            <img src={imgOfUser} alt="img of user"/>
            <div className="info">
                <h3>{firstName} {lastName}</h3>
                <h3><span className="material-icons color">email</span>{email}</h3>
                <h3><span className="material-icons color">cake</span>{dob}</h3>

            </div>
        </div>
    )
}
export default UserListItem;