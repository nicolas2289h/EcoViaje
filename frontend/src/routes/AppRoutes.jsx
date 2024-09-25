import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegisterPage from '../pages/RegisterPage'
import ProtectedRoutes from './ProtectedRoutes'
import DetailTripPage from '../pages/DetailTripPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/create-trip' element={<h1>Crear viaje...</h1>} />
            <Route path='/detail-trip/:id' element={<DetailTripPage />} />
            <Route path='*' element={<NotFoundPage />} />

            <Route element={<ProtectedRoutes />}>
                {/* Protected routes */}
            </Route>
        </Routes>
    )
}
export default AppRoutes