import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import {
    AdvantagesPage,
    AuthPage,
    HomePage,
    MethodologyItemPage,
    MethodologyPage,
    NotFoundPage,
    WelcomePage
} from "./pages";

import { UserService } from "./services";

function App() {
    return (
        <div className='h-full bg-bgcolor text-black font-raleway overflow-auto '>
            <BrowserRouter>
                <UserService.Provider>
                    <Routes>
                        <Route
                            path='/'
                            element={<MainLayout />}>
                            <Route
                                index
                                element={<WelcomePage />}></Route>
                            <Route
                                path='login'
                                element={<AuthPage type='login' />}></Route>
                            <Route
                                path='register'
                                element={<AuthPage type='register' />}></Route>
                            <Route
                                path='*'
                                element={<NotFoundPage />}></Route>
                            <Route
                                path='advantages'
                                element={<AdvantagesPage />}></Route>
                            <Route
                                path='home'
                                element={<HomePage />}></Route>
                            <Route
                                path='methodology'
                                element={<MethodologyPage />}></Route>
                            <Route
                                path='methodology/:id'
                                element={<MethodologyItemPage />}></Route>
                            <Route
                                path='methodology/:id/homework'
                                element={<NotFoundPage />}></Route>
                        </Route>
                    </Routes>
                </UserService.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
