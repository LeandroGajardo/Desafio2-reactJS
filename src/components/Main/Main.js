import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Main.css"

const Main = () => {
    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <Navbar/>
                </div>
                <h1>La Dulceria</h1>
            </div>
        </main>
    )
}

export default Main
