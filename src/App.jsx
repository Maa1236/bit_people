import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPart from "./components/MainPart/MainPart";
import { Search } from "./components/Search/Search";
import { Routes, Route } from "react-router-dom";
import { About } from './components/About/About'
import { UserService } from './components/services/UserService'

function App() {
  const [switchState, setSwitch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hideSearch, setHideSearch] = useState(true);
  const [hideButtons, setHideButtons] = useState(true);
  

  const refresh = () => {

    UserService().then((users) => {
        setUsers(users);
    });
}

  return (
    <Fragment>
      <Header
        setSwitch={setSwitch}
        switchState={switchState}
        setUsers={setUsers}
        setIsLoading={setIsLoading}
        refresh={refresh}
        hideButtons={hideButtons}
      />
      {(!isLoading) ? <Search setSearchTerm={setSearchTerm} hideSearch={hideSearch} /> : ""}
      <Routes>
        <Route path="/" element={<MainPart 
        switchState={switchState}
        searchTerm={searchTerm}
        users={users}
        setUsers={setUsers}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setHideSearch={setHideSearch}
        setHideButtons={setHideButtons}
        />} />
        <Route path="/about" element={<About 
        setHideSearch={setHideSearch}
        setHideButtons={setHideButtons}
         />}/>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
