import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';


const Main = () => {
        return (
                <div>
                        <Header></Header>
                       
                        <Outlet></Outlet>
                        <ToastContainer></ToastContainer>
                </div>
        );
};

export default Main;