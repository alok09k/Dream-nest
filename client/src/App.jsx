import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePages from './pages/HomePages'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CreateListing from './pages/CreateListing'
import ListingDetails from './pages/ListingDetails'
import TripList from './pages/TripList'
import PropertyList from './pages/PropertyList'
import ReservationList from './pages/ReservationList'
import SearchPage from './pages/SearchPage'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/create-listing' element={<CreateListing/>} />
        <Route path='/properties/:listingId' element={<ListingDetails/>} />
        <Route path='/:userId/trips' element={<TripList/>} />
        <Route path="/:userId/properties" element={<PropertyList />} />
        <Route path="/:userId/reservations" element={<ReservationList />} />
        <Route path="/properties/search/:search" element={<SearchPage />} />
        <Route path="/properties/category/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  )
}

export default App