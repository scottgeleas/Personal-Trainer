import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/"class="navbar-brand">
                Navbar
            </Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <section class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item navColor">
                        <Link to="/" class="nav-link">
                            About
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact" class="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </section>
        </nav>
    );
}
