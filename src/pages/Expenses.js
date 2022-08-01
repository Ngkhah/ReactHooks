import React from 'react'
import Footer from './component/footer'
import Header from './component/header'
import Todos from './component/todos'

const Expenses = () => {
    return (
        <main>
            <Header/>
            <Todos />
            <Footer/>
        </main>
    )
}

export default Expenses