
const offerHistoryColumn = [
	{
		title: '#',
		dataIndex: 'key',
		key: 'key',
		width: '4%',

	},
	{
		title: 'Date',
		dataIndex: 'created_at',
		key: 'created_at',
		width: '20%',
	},
	{
		title: 'Offer Name',
		dataIndex: 'offer_name',
		key: 'offer_name',
	},
	{
		title: 'Points',
		dataIndex: 'points',
		key: 'points',
	},
	{
		title: 'Offer Wall',
		dataIndex: 'offerwall',
		key: 'offerwall',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		render: (_, record) => {
			return <p
				style={{ width: 120 }}
				className={`border  rounded-sm flex items-center max-w-fit text-xs py-1 px-2 uppercase tracking-wide ${{
					pending: 'bg-orange-200 border-orange-200 text-orange-500',
					successful: 'bg-green-200 border-green-200 text-green-500',
					canceled: 'bg-red-200 border-red-200 text-red-500',
				}[record.status] || 'bg-gray-200 border-gray-200 text-gray-500'
					}`}>
				{record.status}
			</p>
		}
	},

];

export default offerHistoryColumn;