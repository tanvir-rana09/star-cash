import { Table } from "antd"
import offerHistoryColumn from "../columns/OfferHistory"
import withdrawColumns from "../columns/Withdraw"
import Button from "../admin/components/Buttons/Button"
import { useState } from "react"

const Histroy = () => {
  const [activeBtn, setActiveBtn] = useState('earnings')
  return (
    <div className="w-full max-w-7xl mx-auto py-20 space-y-10">
      <h1 className="text-4xl border-gray-700 text-gray-300">History</h1>
      <div className="space-x-5">
        <Button className={`${activeBtn=='earnings' && 'bg-green-500'}`} onClick={() => setActiveBtn('earnings')} variant="secondary">Earnings</Button>
        <Button className={`${activeBtn=='withdrawls' && 'bg-green-500'}`} onClick={() => setActiveBtn('withdrawls')} variant="secondary">Withdrawls</Button>
      </div>
      {
        activeBtn=='earnings' ?
          <div>
            <h1 className="text-xl border-gray-700 pb-2 text-gray-300">Offer History</h1>
            <div className="">
              <Table
                scroll={{ x: true }}
                columns={offerHistoryColumn}
                dataSource={[]}
                rowHoverable={false}
              />
            </div>
          </div> :
          <div>
            <h1 className="text-xl border-gray-700 pb-2 text-gray-300">Withdraw History</h1>
            <div className="">
              <Table
                scroll={{ x: true }}
                columns={withdrawColumns}
                dataSource={[]}
                rowHoverable={false}
              />
            </div>
          </div>
      }
    </div>
  )
}

export default Histroy