import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/header'

export function Layout(props) {
    

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}
