import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Journey from '../components/Journey'
import Protfolio from '../components/Protfolio'
import Technology from '../components/Technology'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <div>
            <Navbar />

            <section id="home">
                <Hero />
            </section>

            <section id="journey">
                <Journey />
            </section>

            <section id="portfolio">
                <Protfolio />
            </section>

            <section id="technology">
                <Technology />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="contact">
                <Contact />
            </section>


        </div>
    )
}

export default Home


