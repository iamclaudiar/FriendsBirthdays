import './App.css';
import AddFriend from './components/AddFriend';
import DeleteFriend from './components/DeleteFriend';
import ShowFriends from './components/ShowFriends';
import UpdateFriend from './components/UpdateFriend';

function App() {
  return (
    <div className="App">
      <AddFriend/>
      <DeleteFriend/>
      <ShowFriends/>
      <UpdateFriend/>
    </div>
  );
}

export default App;
