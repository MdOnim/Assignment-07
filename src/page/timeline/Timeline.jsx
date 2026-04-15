import { useContext, useState } from "react";
import { FriendsContext } from "../../context/friendsContext";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoCallImg from "../../assets/video.png";

const Timeline = () => {
  const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);
  const [filter , setFilter]=useState("all")


  return (
    <div className="container mx-auto" >
      
      
      {
        callFriend.length=== 0 && textFriend.length === 0 && videocallFriend.length === 0 ? <h1 className="text-2xl font-bold text-center">No friends to show</h1> :  <div className="p-4 bg-slate-50 min-h-screen">
    

    <div className="max-w-4xl mx-auto">
    <h2>Timeline </h2>

  <div className="dropdown jusftify-start flex items-start ">
  <div tabIndex={0} role="button" className="btn m-1">Filter timeline</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=> setFilter("all")}><a>all</a></li>
    <li onClick={()=> setFilter("call")} ><a>Call</a></li>
    <li onClick={()=> setFilter("text")}><a>Text</a></li>
    <li onClick={()=> setFilter("video")}><a>Video</a></li>
  </ul>
</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-3">

        {(filter === "all" || filter === "call")&& callFriend.map((call) => (
          <div key={call.id} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={callImg} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Audio Call <span className="text-slate-500 font-normal">with {call.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{call.date}</p>
              </div>
            </div>
          </div>
        ))}

       
        {(filter === "all" || filter === "text")&&textFriend.map((text) => (
          <div key={text.id} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={textImg} alt="" />
                </div>
              </div>
              <div className="">
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Message <span className="text-slate-500 font-normal">to {text.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{text.date}</p>
              </div>
            </div>
          </div>
        ))}

  
        {(filter === "all" || filter === "video")&&videocallFriend.map((video) => (
          <div key={video.id} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={videoCallImg} alt="" />
                </div>
              </div>
              <div >
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Video Call <span className="text-slate-500 font-normal">with {video.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{video.date}</p>
              </div>
            </div>
          </div>

          
        ))}

      </div>
       </div>
    </div>
      }
    </div>

  );
};

export default Timeline;