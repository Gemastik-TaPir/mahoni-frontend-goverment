import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TransportasiUmum from './components/TransportasiUmum'

const App = () => {
    return (
        <div>
            {/* Sidebar */}
            <Sidebar />

            {/* Main page */}
            <div class='main-page'>
              {/* Header */}
              <Header />

            </div>
        </div>
    )
}

export default App
