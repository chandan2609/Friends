
import React from "react";
import SearchIcon from '@material-ui/icons/Search';

export default function FriendForm({ addFriends ,onchange,search }) {
    const [value, setValue] = React.useState("");

  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addFriends(value);
      setValue("");
    };
  
    return (
        <div>
        

        <p style={{fontWeight:'600px',fontSize:'18px',textAlign:'center'}}>
            Friend's List
        </p>

        
        <div style={{display:'flex',width:'100%',}}>
        <div style={{width:"100%"}}>
      <form onSubmit={handleSubmit}>
        <input
        style={{height:"40px",width:"95%"}}
          type="text"
          maxLength="20"
          placeholder="Add your friends"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      </div>
      <div style={{width:"100%"}}>
      <input
          style={{height:"40px",width:"98%"}}
          type="text"
          placeholder="Search your friends"
          className="input"
          value={search}
          onChange={e => onchange(e)}
        />
        </div>
      </div>
      </div>
    );
  }
  