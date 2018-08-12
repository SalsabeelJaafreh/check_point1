import React from 'react';
import User from './User.jsx';

const Users = (props) => (
  <div>
    {props.users.map((user)=>
    	<Userkey={user._id} user={user} />
    	)}

  </div>
);

export default Users;