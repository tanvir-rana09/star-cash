import { Route, Routes } from 'react-router-dom';
import App from '../App.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import NoneProtectedRoute from './NoneProtectedRoute.jsx';
import { AuthProvider } from '../context/AuthProvider.jsx';
import SignIn from '../pages/Signin.jsx';
import Home from '../pages/Home.jsx';
import SignUp from '../pages/Signup.jsx';
import Histroy from '../pages/Histroy.jsx';
import Offers from '../pages/Leaderboard.jsx';
import Withdraw from '../pages/Withdraw.jsx';
import Profile from '../pages/Profile.jsx';
import Earn from '../pages/Earn.jsx';
import ProfileSettings from '../pages/ProfileSettings.jsx';

const AppRoutes = () => (
	<AuthProvider>
		<Routes>

			<Route element={<App />}> 
			<Route path='/' element={<NoneProtectedRoute><Home /></NoneProtectedRoute>} />
			<Route path='/signin' element={<NoneProtectedRoute><SignIn /></NoneProtectedRoute>} />
			<Route path='/signup' element={<NoneProtectedRoute><SignUp /></NoneProtectedRoute>} />
				<Route path="earn" element={<ProtectedRoute><Earn /></ProtectedRoute>} />
				<Route path='profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
				<Route path='profile-settings' element={<ProtectedRoute><ProfileSettings /></ProtectedRoute>} />
				<Route path='history' element={<ProtectedRoute><Histroy /></ProtectedRoute>} />
				<Route path='leaderboard' element={<ProtectedRoute><Offers /></ProtectedRoute>} />
				<Route path='withdraw' element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
			</Route>

			{/* <Route path="/admin" element={<Admin />}>
			</Route> */}
		</Routes>
	</AuthProvider>
);

export default AppRoutes;