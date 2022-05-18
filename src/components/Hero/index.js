import React from 'react';
import About from '../About'
import Avatar from '../Avatar'
import Skills from '../Skills'


export default function Hero() {
    return (
        <div>
            <Avatar />
            <section>
                <About />
                <Skills />
            </section>
        </div>
    );
}


