import React from 'react'
import { GiTakeMyMoney } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link to={'/'} className="flex items-center gap-2 text-2xl logo text-green-400">
			<GiTakeMyMoney size={35} />
			STARCASH
		</Link>
	)
}

export default Logo