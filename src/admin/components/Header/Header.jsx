/* eslint-disable react/prop-types */
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';
import DropdownUser from './UserProfile';
import { useAuth } from '../../../context/useAuth';
import Logo from '../../../Common/Logo';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';
import Notification from './Notification';
import { getLocalStorageItem } from '../../../utils/setWithExpire';
import { ImCoinDollar } from 'react-icons/im';

const Header = (props) => {
	const { isAuthenticated } = useAuth();
	const localUser = getLocalStorageItem("user");
	return (
		<header className="sticky top-0 z-[999] flex w-full bg-sidebar shadow-md border-b border-gray-700 text-white">
			{
				isAuthenticated ?
					<div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
						<div className="flex items-center gap-2 sm:gap-4 lg:hidden">
							{/* <!-- Hamburger Toggle BTN --> */}
							<button
								aria-controls="sidebar"
								onClick={(e) => {
									e.stopPropagation();
									props.setSidebarOpen(!props.sidebarOpen);
								}}
								className="z-99999 cursor-pointer text-2xl block rounded-sm border border-stroke border-gray-600 bg-slate-700 p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
							>
								<HiMiniBars3BottomLeft />

							</button>
							<Logo />
						</div>
						<div className="flex items-center justify-end w-full ">
							<div className='cursor-pointer flex items-center gap-2 bg-gray-700 rounded px-3 py-2 mr-3'><ImCoinDollar className='text-yellow-500' size={18} /> {localUser?.points}</div>
							<DropdownUser /> 
							<Notification/> 
						</div> 
					</div> : <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
						<Logo />
						<div className='space-x-4'>
							<Link to={'/signin'}>
								<Button variant='' className='border border-gray-600 px-6'>Sign in</Button>
							</Link>
							<Link to={'/signup'}>
								<Button variant='primary' className='px-6 bg-green-500 hover:bg-green-600'>Sign up</Button>
							</Link>
						</div>
					</div>
			}
		</header>
	);
};

export default Header;
