import React from "react";
import "./Header.css";
import { UserService } from "../services/UserService";
import { Link } from "react-router-dom";

const Header = ({ setSwitch, switchState, setUsers, setIsLoading, hideButtons }) => {
  const onClick = () => setSwitch(!switchState);

  function refresh() {
    let counter = 0;
    let inMinutes = 0;
    let counterNode;
    let writeThis;
    counterNode = document.querySelector(".counterDiv");

    setInterval(function counting() {
      counter++;

      if (counter % 60 === 0) {
        console.log(counterNode);
        inMinutes++;
        writeThis = "last update was: " + inMinutes + "min ago";
      } else if (counter < 60) {
        writeThis = "last update was few seconds ago";
      }

      window.localStorage.setItem("write", writeThis);
    }, 1000);
    var lastUpdate = window.localStorage.getItem("write");
    counterNode.innerHTML = lastUpdate;

    setIsLoading(true);
    UserService().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }

  return (
    <nav>
     
      <Link to="/" className="link bit">BIT People</Link>
      
      <Link to="/about" className="buttons link about" ><div className="abb">About</div></Link>
      <div className={hideButtons ? 'shown' : "hidden"}>
      <button className="buttons switchButton" onClick={onClick}>
        {switchState ? (
          <span className="material-icons">view_module</span>
        ) : (
          <span className="material-icons">view_list</span>
        )}
      </button>
      <button className="buttons refreshButton" onClick={refresh}>
        <span className="material-icons">refresh</span>
      </button>
      </div>
     
    </nav>
  );
};

export default Header;
