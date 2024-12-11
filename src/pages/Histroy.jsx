import { IoChatboxEllipsesOutline } from "react-icons/io5"

const Histroy = () => {
  return (
    <div>
      <h1 className="text-2xl border-b border-gray-700 pb-2 text-gray-300">History</h1>
      <div className="text-gray-500 flex items-center justify-center flex-col mt-20">
        <IoChatboxEllipsesOutline size={100} />
        <p>You haven't started any offers yet</p>
      </div>
    </div>
  )
}

export default Histroy