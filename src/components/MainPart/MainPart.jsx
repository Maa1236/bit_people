import React, { useEffect } from 'react';
import UserListItem from '../UserListItem/UserListItem';
import UserCardItem from '../UserCardItem/UserCardItem'
import { UserService } from '../services/UserService';
import './MainPart.css'
import { Loader } from '../Loader/Loader';
import { NoResults } from '../NoResults/NoResults';


const MainPart = (props) => {

  const { switchState, searchTerm, users, setUsers, setIsLoading, isLoading, setHideSearch, setHideButtons } = props;

  useEffect(() => {
    if (window.localStorage.getItem("firstTime?") === null) {
      UserService().then((users) => {
        setUsers(users);
        setIsLoading(false)
        setHideSearch(true)
        setHideButtons(true);
      });
    } else if (window.localStorage.getItem("firstTime?") === "beenHereBefore") {
      UserService().then((users) => {
        let parsedArray;
        let savedArray = window.localStorage.getItem("array")
        if (savedArray && savedArray.length) {
          parsedArray = JSON.parse(savedArray)
        }
        setUsers(parsedArray);
        setIsLoading(false)
        setHideSearch(true)
        setHideButtons(true);
      });
    }
    window.localStorage.setItem('firstTime?', 'beenHereBefore');

  }, [setUsers, setIsLoading, setHideSearch, setHideButtons]);


  if (isLoading) return <Loader />



  let array = users.filter((elem) => {
    let result = null;
    if (searchTerm === "") {
      result = elem;
    } else if (elem.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || elem.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
      result = elem;
    }


    return result;
  });

  window.localStorage.setItem("array", JSON.stringify(array))

  let component = <NoResults />
  let countFemale = 0;
  let countMale = 0;
  if (array && array.length > 0) {
    component = array.map((user, index) => {
      (user.gender === "female" ? (countFemale++) : (countMale++))
      return switchState ? (
        <UserListItem
          imgOfUser={user.imgOfUser}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          dateOfBirth={user.dateOfBirth}
          key={index}
          gender={user.gender}
        />
      ) : (
        <UserCardItem
          imgOfUserLarge={user.imgOfUserLarge}
          firstName={user.firstName}
          email={user.email}
          dateOfBirth={user.dateOfBirth}
          key={index}
          gender={user.gender}
        />
      );
    });
  }

  return (
    <>
      <div className="genderCount">Male: {countMale} Female: {countFemale}</div>
      <div className="containerMain">
        {component}
      </div>
    </>
  );
};

export default MainPart;
