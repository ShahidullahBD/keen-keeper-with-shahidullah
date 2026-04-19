import React, { useEffect, useState } from 'react';


const YourFriends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/src/friendsData/friends.json');
            const data = await res.json();
            // console.log(data);
            setFriends(data);
        };
        fetchData()
    }, [])

    console.log(friends);

    return (
        <div className='grid grid-cols-4 gap-5 space-y-4 text-center my-15'>
            {
                friends.map((friend, ind) => {
                    console.log(friend.name);

                    const pValue = friend.status;

                    const bgClass =
                        pValue === "due"
                            ? "bg-green-500"
                            : pValue === "overdue"
                                ? "bg-red-500"
                                : "bg-gray-400";

                    return <div key={ind}>
                        <div className='shadow space-y-3'>
                            <img className='rounded-full mx-auto' src={friend.picture} alt={friend.name} />
                            <p>{friend.name}</p>
                            <p>{friend.days_since_contact}d ago</p>
                            <p className={`${bgClass} rounded-xl px-4 text-white py-1 w-fit`}>{friend.status}</p>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default YourFriends;