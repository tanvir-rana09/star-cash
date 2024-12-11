import { useState } from 'react';
import ClickOutside from './ClickOutSide';
import { IoMdNotifications } from 'react-icons/io';

const Notification = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
			<button
				onClick={() => setDropdownOpen(!dropdownOpen)}
				className="flex items-center gap-4 relative"
			>
				<IoMdNotifications size={40} className='ml-4 hover:bg-gray-700 p-2 duration-300 rounded-full cursor-pointer' />
				<span className='h-2 w-2 rounded-full block bg-red-500 absolute top-3 right-2.5'></span>
			</button>

			{dropdownOpen && (
				<div
					className={`absolute top-[40px] right-0 mt-4 flex w-[18rem]  flex-col rounded border border-gray-600 text-gray-400 border-stroke bg-gray-800 drop-shadow-sm dark:border-strokedark dark:bg-boxdark`}>
					<div className='bg-gray-700 flex items-center gap-2 pl-5 py-3 border-b border-gray-600 text-gray-100'>
						<IoMdNotifications size={20} /> Notification (1)
					</div>
					<ul className='grid px-2 py-1 max-h-[30rem] overflow-y-auto'>
						{
							[...Array(10)].map((_, i) => (
								<li key={i} className='flex last:border-b-0 items-center gap-2 border-b border-gray-700 pb-2 py-1.5'>
									<div className='bg-gray-600 p-2 rounded-full'><IoMdNotifications size={20} /></div>
									<div>
										<p className='text-sm text-gray-100'>Notification title</p>
										<p className='text-xs'>Lorem ipsum dolor sit amet sectetur, adipisicing elit. Reprehenderit, cumque?</p>
									</div>
								</li>
							))
						}
					</ul>
				</div>
			)}
		</ClickOutside>
	);
};

export default Notification;
