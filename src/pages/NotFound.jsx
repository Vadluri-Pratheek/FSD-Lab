import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <main className="loading-screen">
            <h2>404 - Page Not Found</h2>
            <p>Oops! The page you are looking for doesn't exist.</p>
            <br />
            <Link to="/" className="project-detail-back">Go back to Home</Link>
        </main>
    );
}

export default NotFound;