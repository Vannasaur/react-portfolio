// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/nav';

export default function Nav() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <Navbar
            links={[
                <Link key={1} className="" to="/">
                    Home
                </Link>,
                <Link key={2} className="" to="/about">
                    About
                </Link>,
                <Link key={3} className="" to="/projects">
                    Projects
                </Link>,
                <Link key={4} className="" to="/resume">
                    Resume
                </Link>,
                <Link key={5} className="" to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}
