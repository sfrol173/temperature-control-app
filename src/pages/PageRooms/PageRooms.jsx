import React from "react";
import {Link,Outlet} from 'react-router-dom'
import Container from "../../components/Container/Container";
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper";
import Room from './icons/room.svg?react';
import BabyRoom from './icons/baby_bed_room.svg?react';

import './PageRooms.scss';

const PageRooms = () => {
    return (
        <div className="dashboard-rooms">
            <div className="room-card">
                <Link to="/home/room" className="room-icon">
                    <Room />
                </Link>
            </div>
            <div className="room-card">
                <Link to="/home/baby-room" className="room-icon">
                    <BabyRoom />
                </Link>
            </div>
        </div>
    )
}

export default PageRooms
