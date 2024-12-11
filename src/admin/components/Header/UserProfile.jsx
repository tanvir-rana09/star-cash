import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClickOutside from './ClickOutSide';
import { getLocalStorageItem } from '../../../utils/setWithExpire';
import { useAuth } from '../../../context/useAuth';
import useApi from '../../../utils/useApi';
import { toast } from 'react-toastify';
import { AiOutlineUser } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const DropdownUser = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const { user } = useAuth();
	const [admin, setAdmin] = useState();
	const localUser = getLocalStorageItem("user");
	const { callApi, error } = useApi('/auth/logout', 'GET');
	const navigate = useNavigate();
	useEffect(() => {
		setAdmin(user ? user : localUser);
	}, [localUser, user]);

	const logout = async () => {
		const data = await callApi();

		if (data?.status == 200) {
			localStorage.removeItem('token')
			localStorage.removeItem('user')
			toast.success(data?.message)
			navigate('/signin');
		}

		if (error) {
			toast.error(error?.data?.message);
			localStorage.removeItem('token');
			localStorage.removeItem('user');
		}
	}

	return (
		<ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
			<Link
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className="flex items-center gap-4"
				to="#"
			>

				<div className='flex items-center  gap-4'>
					<span className="h-10 w-10 rounded-full overflow-hidden">
						{
							admin?.profile_picture ? <img src={admin?.profile_picture} alt="User" /> : <span className="h-10 w-10 bg-gray-300 block animate-pulse rounded-full "></span>
						}
					</span>
					<span className="hidden text-left lg:block ">
						<span className="block font-medium text-gray-300 ">
							{admin?.name}
						</span>
						<span className="block text-xs text-gray-500 -mt-1">{admin?.email}</span>
					</span>
				</div>

				<svg
					className="hidden fill-current sm:block"
					width="12"
					height="8"
					viewBox="0 0 12 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
						fill=""
					/>
				</svg>
			</Link>

			{/* <!-- Dropdown Start --> */}
			{dropdownOpen && (
				<div
					className={`absolute top-[40px] -right-14 mt-4 flex w-[18rem] flex-col rounded border border-gray-600 text-gray-400 border-stroke bg-gray-800 drop-shadow-sm dark:border-strokedark dark:bg-boxdark`}
				>
					<ul className="flex flex-col gap-5 border-b border-gray-600 border-stroke px-6 py-4 dark:border-strokedark">
						<li>
							<Link
								to="/profile"
								className="flex hover:text-gray-100 items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue lg:text-base"
							>
								<AiOutlineUser size={20} /> 
								My Profile
							</Link>
						</li>
						<li>
							<Link
								to="/profile-settings"
								className="flex hover:text-gray-100 items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue lg:text-base"
							>
								<IoSettingsOutline size={20} /> 
								Account Settings
							</Link>
						</li>

						<li>
							<Link
								to="/history"
								className="flex hover:text-gray-100 items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue lg:text-base"
							>
								<FaHistory size={17} className='mr-0.5' />
								History
							</Link>
						</li>
						<li>
							<Link
								to="/withdraw"
								className="flex hover:text-gray-100 items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-blue lg:text-base"
							>
								<HiOutlineCurrencyDollar size={22} />
								Withdraw
							</Link>
						</li>
					</ul>
					<button onClick={logout} className="flex items-center gap-3.5 hover:text-gray-100 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-blue lg:text-base">
						<RiLogoutCircleRLine size={20} />
						Log Out
					</button>
				</div>
			)}
			{/* <!-- Dropdown End --> */}
		</ClickOutside>
	);
};

export default DropdownUser;
