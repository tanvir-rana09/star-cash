import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from './context/useAuth';
import Loader from './Common/Loading';
import Sidebar from './admin/components/Sidebar';
import Header from './admin/components/Header/Header';
import Footer from './Common/Footer';


function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { loading, isAuthenticated, user } = useAuth();
	if (loading) {
		return <Loader />;
	}
	return (

		<div className="dark:bg-boxdark-2 dark:text-bodydark ">

			<div className="flex h-screen overflow-hidden">

				{/* Sidebar */}
				{isAuthenticated && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}

				{/* Content Area */}
				<div className="relative flex flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden">

					{/* Header */}
					<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

					{/* Main Content */}
					<main>
						<div className="mx-auto p-4 md:p-6 2xl:p-10 bg-main ">
							<Outlet />
						</div>
					</main>
					<div className=''>
						<Footer />
					</div>
				</div>

			</div>

		</div>
	)
}

export default App
