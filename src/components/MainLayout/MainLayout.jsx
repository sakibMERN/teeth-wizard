import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            I am main layout.
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;