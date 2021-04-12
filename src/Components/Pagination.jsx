import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Pagination = ({ friendsPerPage, totalfriends, currentPageFriends }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalfriends / friendsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <div  style={{paddingTop:'20px'}}>
    <nav>
      <ul style={{listStyleType:'none',display:'inline',padding:'5px'}}>
        {pageNumbers.map(number => (
          <li key={number} style={{listStyleType:'none',display:'inline',padding:'5px'}} >
            <a onClick={() => currentPageFriends(number)} href='!#' >
              {number}
            </a>
          </li>
        ))}
        
      </ul>
    </nav>
    </div>
  );
};

export default Pagination;