
import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pagination from "./Components/Pagination";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./App.css";
import AddFriend from "./Components/AddFriend"
import DeleteFriend from "./Components/DeleteFriend"




function App() {
  const [friends, setFriends] = React.useState([
    {
      text: "Rahul Gupta",
      isFavourite: false
    },
    {
      text: "Shivangi Sharma",
      isFavourite: true
    },
    {
      text: "Akash Singh",
      isFavourite: false
    }
  ]);

  const [friendPerPage, setfriendPerPage] = React.useState([])
  const [search, setSearch] = React.useState('');
  const [sortValue, setSortValue] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const friendsPerPage = 4;

  let lastPage = (currentPage * friendsPerPage);
  let firstPage = (lastPage - friendsPerPage);
  let currentFriendLists = friends.slice(firstPage, lastPage);

  const  addFriends= text => {
    const newfriends = [...friends, { text }];
    setFriends(newfriends);
  };



  const removeFriends= index => {
    const newfriends = [...friends];
    newfriends.splice(index, 1);
    setFriends(newfriends);
  };

  const FavFriend = index => {
    const newfriends = [...friends];
    newfriends[index].isFavourite = true;
    setFriends(newfriends);
  };
  const NormalFriend = index => {
    const newfriends = [...friends];
    newfriends[index].isFavourite = false;
    setFriends(newfriends);
  };

  const sortList = (value) =>{
    setSortValue(value)
  }

  const SearchedFriends = currentFriendLists.filter(currentFriendList => {
    return currentFriendList.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const sortFriend = SearchedFriends.sort((a, b) => b.isFavourite - a.isFavourite);

  const currentPageFriends = (pageNumber) => setCurrentPage(pageNumber);


  const onchange = e => {
    setSearch(e.target.value);
  };

  console.log('CurrentPage',currentPage)
  return (
    <div className="app">
      <div className="friend-list">
      <AddFriend
       addFriends={addFriends}
       onchange ={onchange}
       search ={search}
       sortList={sortList}
       sortValue={sortValue}
      
       />
       {SearchedFriends.map((SearchedFriend, index) => (
          <DeleteFriend
            key={index}
            index={index}
            removeFriend={removeFriends}
            FavFriend={FavFriend}
            NormalFriend={NormalFriend}
            currentFriendList ={SearchedFriend}
          />
        ))}
        <Pagination
        friendsPerPage={friendsPerPage}
        totalfriends={friends.length}
        currentPageFriends={currentPageFriends}
      />
      </div>
    </div>
  );
}

export default App;
