
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/friendsContext';


const Stats = () => {
 const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);

    const data = [
  { name: 'Text', value: textFriend.length, fill: '#7f37f5' },
  { name: 'Call', value: callFriend.length, fill: '#244d3f' },
  { name: 'VideoCall', value: videocallFriend.length, fill: '#37a163' },
  
];
    return (
        <div className=' container mx-auto '>

            <h1 className='m-2 font-bold text-center md:text-3xl text-left' >Friendship Analytics</h1>

<div className="my-10 shadow-lg p-5 md:p-10 rounded-md border border-slate-100 bg-white ">

<p className='font-semibold mb-5'>By Interaction Type</p>

    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 , margin: 'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend />
     <Tooltip />
    </PieChart>
        </div>
        </div>
    );
};

export default Stats;