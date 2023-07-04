import './App.css';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';
import ShowFriends from './components/ShowFriends';
import UpdateFriend from './components/UpdateFriend';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>BIRTHDATE BOOK</h1>
      </div>
      <div className="Content">
      <div className="LeftColumn">
        <div  className="Component">
          <AddFriend/>
        </div>
        <div  className="Component">
          <DeleteFriend/>
        </div>
        <div  className="Component">
          <UpdateFriend/>
        </div>
      </div>
      <div className="RightColumn">
        <div  className="Component">
          <ShowFriends/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
