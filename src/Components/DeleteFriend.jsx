import React from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Modal from "./Modal"
import "../App.css";

export default function DeleteFriend({ currentFriendList, index, removeFriend ,FavFriend,NormalFriend, }) {

    const [modal,setMODAL] = React.useState(false);
    const [indexvalue,setIndexvalue] = React.useState();

    const ModalState = () => {
        setIndexvalue(index)
         setMODAL(!modal)
      }
   
    return (
      <div
        className="friend"
      >
      <Modal
      displayModal={modal}
      closeModal={ModalState}
      indexvalue={indexvalue}
      removeFriend={removeFriend}
       />
      <div style={{paddingTop:'15px'}}>
       <div ><b> {currentFriendList.text} </b></div>
       <div > <p style={{margin:"0px",fontSize:'10px'}}> is your friend</p></div>
       </div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
         { currentFriendList.isFavourite ? (<StarIcon  style={{paddingRight:'30px',color:'blue'}} onClick={() => NormalFriend(index)}></StarIcon>):(<StarBorderIcon  style={{paddingRight:'30px'}} onClick={() => FavFriend(index)}></StarBorderIcon>)}
          <DeleteForeverIcon style={{color:'red'}}onClick={() => ModalState(index)}></DeleteForeverIcon>
        </div>
      </div>
    );
  }