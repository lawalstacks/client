import { useEffect, useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toastt'


const Card = ({card, postedBy}) => {
  const [user,setUser] = useState(null)

  return (
    <div>
      <p>{user?.name}</p>
      <div>
        {}
      </div>
    </div>
  );
};

export default Card;