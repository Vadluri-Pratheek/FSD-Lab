import { NavLink } from 'react-router-dom';

function Navbar({theme, setTheme}) {
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <header>
            <img className='profile_pic' src="/assets/profilepic.jpeg" alt="Profile Pic"></img>

            <div className='top_right'>
                <h1>PRATHEEK VADLURI</h1>
                <button className="theme-btn" onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
                <nav>
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home <span className="secret"></span></NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About <span className="secret"> Who I am</span></NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects <span className="secret"> My work </span></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact <span className="secret"> Let's talk </span></NavLink>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;