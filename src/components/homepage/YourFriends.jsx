import { HashLoader } from 'react-spinners';
import useFriendsData from '../../hooks/useFriendsData';
import { Link } from 'react-router';


const YourFriends = () => {    

   const {friends, loading} = useFriendsData();
   console.log(friends, 'friends');

    return (
            
             loading? <div className='flex justify-center items-center'><HashLoader color='#016630'></HashLoader></div>: 
             <div className='grid grid-cols-4 gap-5 space-y-4 text-center my-15'>
            {
                friends.map((friend, ind) => {
                    console.log(friend.name);

                    const pValue = friend.status;

                    const bgClass =
                        pValue === "due"
                            ? "bg-yellow-500"
                            : pValue === "overdue"
                                ? "bg-red-500"
                                : "bg-green-500";

                    return <Link to={`/${friend.id}`} key={ind}>
                        <div className='shadow space-y-3 py-5'>
                            <img className='rounded-full mx-auto' src={friend.picture} alt={friend.name} />
                            <p className='text-xl font-bold'>{friend.name}</p>
                            <p>{friend.days_since_contact}d ago</p>
                            <p className={`${bgClass} rounded-xl px-4 text-white mx-auto py-1 w-fit`}>{friend.status}</p>
                        </div>
                    </Link>
                })
            };

        </div>
        
    );
};

export default YourFriends;