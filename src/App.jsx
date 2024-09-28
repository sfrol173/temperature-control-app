import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PageRooms from './pages/PageRooms/PageRooms';
import PageBadRoom from './pages/PageBadroom/PageBadRoom';
import PageWeatherDashboard from "./pages/PageWeatherDashboard/PageWeatherDashborad"
import PageWeatherCity from "./pages/PageWeatherCity/PageWeatherCity"
import PageChildren from './pages/PageChildren/PageChildren';
import WrapperHome from './layout/WrapperHome/WrapperHome';

function App() {    
    return (
        <Routes>
            {/* <Route path='/' element={<div>КОРІНЬ</div>} /> */}
            <Route index element={<PageWeatherDashboard />} />
            <Route path='/home' element={<WrapperHome />}>
                <Route path='rooms' element={<PageRooms />} />  {/* (втрішні роути) Компонент будет показаний тільки і тільки при вікористанні компонента Outlet у батьківського роута  */}
                <Route path='room' element={<PageBadRoom />} />
                <Route path='baby-room' element={<PageChildren/>} />    
            </Route>
        
            <Route path='/weather/' element={<PageWeatherDashboard/>} />
            <Route path='/weather/:cityName' element={<PageWeatherCity/>}/> 
            {/* <Route path='/home' element={<div>базовий компонент для внутрішні сторінок</div>}> */}
                {/* <Route path='room' element={""}/> ///  /home/room */}
                {/* <Route path='asdasdsd' element={""}/> ///   /home/asdasdsd */}
                {/* <Route path='adsadasdsad' element={""}/> /// /home/adsadasdsad */}
            {/* </Route> */}
        </Routes>
    )
}

export default App
