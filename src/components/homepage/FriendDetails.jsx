import React from 'react';
import { RiArchive2Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { MdCall, MdDelete, MdOutlineTextsms } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { useParams } from 'react-router';
import useFriendsData from '../../hooks/useFriendsData';
import { HashLoader } from 'react-spinners';

const FriendDetails = () => {

    const {id} = useParams();
    console.log(id);
    const {friends, loading} = useFriendsData();

    const expectedFriend = friends.find((friend)=> String(friend.id) === id);
    console.log(expectedFriend, 'friend');

    return (loading? <div className='flex justify-center items-center'><HashLoader color='#016630'></HashLoader></div> 
        :<div className='w-fit mx-auto text-center shadow'>
            <div className='grid grid-cols-3 gap-4 my-8'>
                <div className='space-y-4'>
                    <div className='py-5 space-y-2 shadow'>
                        <img className='mx-auto bg-gray-200 rounded-full' src={expectedFriend.picture} alt="man_pic" />
                        <p className='text-xl font-bold py-2'>{expectedFriend.name}</p>
                        {/* <p className={`'py-1' ${bgClass}`}>OverDue</p> */}
                        <p className='py-1 px-3 bg-green-100 rounded-full w-fit mx-auto'>{expectedFriend.status}</p>
                        <p>"Former colleague, great mentor"</p>
                        <p>Preferd: {expectedFriend.last_contact_method}</p>
                    </div>
                    <button className='btn w-full'>
                        <RiNotificationSnoozeLine />
                        Snooze 2 weeks</button>
                    <button className='btn w-full'>
                        <RiArchive2Line />
                        Archive</button>
                    <button className='btn w-full'>
                        <MdDelete></MdDelete>
                        Delete</button>
                </div>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3'>
                        <div className='py-8 shadow'>
                            <p className='text-3xl font-bold'>62</p>
                            <p className='text-lg font-semibold'>Days Since Contact</p>
                        </div>
                        <div className='py-8 shadow'>
                            <p className='text-3xl font-bold'>62</p>
                            <p className='text-lg font-semibold'>Days Since Contact</p>
                        </div>
                        <div className='py-8 shadow'>
                            <p className='text-3xl font-bold'>62</p>
                            <p className='text-lg font-semibold'>Days Since Contact</p>
                        </div>
                    </div>
                    <div className='p-8 shadow space-y-3'>
                        <div className='flex justify-between items-center'>
                            <p className='text-xl font-bold'>Relationship Goal</p>
                            <button className='btn'>Edit</button>
                        </div>
                        <div>
                            <p className='text-lg text-left'>Connect every <span className='font-bold'>30 days</span></p>
                        </div>
                    </div>
                    <div className='p-8 shadow space-y-3'>
                        <p className='text-lg text-left'>Quick Check-In</p>
                        <div className='text-left grid grid-cols-3 gap-4 pt-5'>
                            <div className='shadow-sm border p-4'>
                                <MdCall className='text-4xl mx-auto'></MdCall>
                                <p className='text-center text-xl'>Call</p>
                            </div>
                            <div className='shadow-sm border p-4'>
                                <MdOutlineTextsms className='text-4xl mx-auto'/>                                                                
                                <p className='text-center text-xl'>Call</p>
                            </div>
                            <div className='shadow-sm border p-4'>
                                <FaVideo className='text-4xl mx-auto'/>
                                <p className='text-center text-xl'>Call</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;