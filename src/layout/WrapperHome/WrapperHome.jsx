import React from "react";
import {Outlet} from "react-router-dom"
import Container from '../../components/Container/Container'
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper";

const PageWrapper = () => {

    return (
        <WidgetWrapper>
            <Container>
                <div className="home-dashboard">
                    <Outlet />
                </div>
            </Container>
        </WidgetWrapper>
    )
}

export default PageWrapper