import  { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useApi from '../../utils/useApi';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/useAuth';
import {  MdOutlineLeaderboard} from 'react-icons/md';
import { FaSackDollar } from 'react-icons/fa6';
import { FaHistory } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Logo from '../../Common/Logo';
import { AiOutlineUser } from 'react-icons/ai';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const { loading } = useAuth();
  const navigate = useNavigate();
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded') == 'true'
  );

  const { callApi, error } = useApi('/auth/logout', 'GET');

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (
        sidebar.current &&
        trigger.current &&
        !sidebar.current.contains(target) &&
        !trigger.current.contains(target)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarOpen]);

  // Close sidebar on Escape key press
  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (sidebarOpen && keyCode === 27) setSidebarOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen]);

  // Save expanded state in localStorage
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    document.body.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);

  const logout = async () => {
    const data = await callApi();
    if (data?.status === 200) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.success(data?.message);
      navigate('/signin');
    } else if (error) {
      toast.error(error?.data?.message);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  const menuItems = [
    { to: '/earn', label: 'Earn', icon: <FaSackDollar size={15} /> },
    { to: '/history', label: 'Earings History', icon: <FaHistory size={15} /> },
    { to: '/profile', label: 'Profile', icon: <AiOutlineUser size={19} /> },
    { to: '/leaderboard', label: 'Leaderboard', icon: <MdOutlineLeaderboard size={18} /> },
    { to: '/withdraw', label: 'Withdraw', icon: <HiOutlineCurrencyDollar size={20} /> },
  ];

  const renderMenuItems = () =>
    menuItems.map(({ to, label, icon }) => (
      <li key={to}>
        <NavLink
          to={to}
          className={`group relative flex items-center gap-2 hover:bg-gray-700 rounded text-gray-400 duration-300 px-4 py-2 font-medium text-bodydark1 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
            pathname.includes(to) && 'bg-gray-700 !text-gray-100'
          }`}
        >
          {icon}
          {label}
        </NavLink>
      </li>
    ));

  return (
    <aside
      ref={sidebar}
      className={`${!loading ? 'absolute' : ''} left-0 text-white  top-0 pt-10 z-10 flex h-screen w-[17rem] flex-col overflow-y-hidden bg-sidebar duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <div className='-mt-5'>
        <Logo/>
        </div>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* Menu Group */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold">MENU</h3>
            <ul className="mb-6 flex flex-col gap-1.5">{renderMenuItems()}</ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold">OTHERS</h3>
            <button
              onClick={logout}
              className="group bg-red-500 hover:bg-red-600 w-full relative flex items-center gap-2 rounded justify-center py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
            >
              <RiLogoutCircleRLine />
              Log out
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
