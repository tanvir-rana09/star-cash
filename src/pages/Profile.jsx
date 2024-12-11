import { UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import { getLocalStorageItem } from '../utils/setWithExpire'
import { Avatar } from 'antd'
import { ImCoinDollar } from "react-icons/im";
import { FaCircleCheck } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { RiCopperCoinLine } from "react-icons/ri";
import Histroy from "./Histroy";

const Profile = () => {
  const localUser = getLocalStorageItem("user")
  return (
    <div className=" w-full max-w-7xl mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Link to={'/profile-settings'} className="text-green-400 text-2xl hover:text-green-300">
          ⚙ Settings
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
        <div className="flex items-center bg-gray-800 rounded p-5 mt-6 grid-cols-2 ">
          <div className="relative border-4 border-gray-600 rounded-full h-[8rem] w-[8rem] ">
            {
              localUser?.profile_picture ? <img className="rounded-full w-full h-full object-cover" src={localUser?.profile_picture} alt="profile" /> :
                <Avatar className="w-full h-full object-cover text-8xl" icon={<UserOutlined className="text-gray-400 text-5xl" />} />
            }
          </div>
          <div className="ml-4 space-y-2">
            <p className="text-3xl font-semibold">{localUser.name}</p>
            <p className="text-gray-400 text-sm">{localUser.email}</p>
            <p className="text-gray-400 text-sm">{localUser.created_at}</p>
          </div>
        </div>

        <div className=" bg-gray-800 rounded p-8 mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <ImCoinDollar className="bg-green-900 rounded p-2.5 text-green-500" size={50}/>
            <div className="flex flex-col items-start">
              <p className="text-green-400 text-3xl font-bold">${localUser.balance}</p>
              <p className="text-gray-300 text-sm">Total Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaCircleCheck className="bg-green-900 rounded p-2.5 text-green-500" size={50}/>
            <div className="flex flex-col items-start">
              <p className="text-green-400 text-3xl font-bold">0</p>
              <p className="text-gray-300 text-sm">Completed Offers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GrLogout className="bg-green-900 rounded p-2.5 text-green-500" size={50}/>
            <div className="flex flex-col items-start">
              <p className="text-green-400 text-3xl font-bold">{localUser.withdrawn}</p>
              <p className="text-gray-300 text-sm">Total Withdraw</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RiCopperCoinLine className="bg-green-900 rounded p-2.5 text-green-500" size={50}/>
            <div className="flex flex-col items-start">
              <p className="text-green-400 text-3xl font-bold">{localUser.points}</p>
              <p className="text-gray-300 text-sm">Total Coins</p>
            </div>
          </div>
        </div>
      </div> 
      <Histroy/>
    </div>
  )
}

export default Profile