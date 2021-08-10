import { Link } from "react-router-dom";

import "./MainNavigation.module.sass";

function MainNavigation() {
    return <header>
        <div className="identity">my stash</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Stash</Link>
                </li>
                <li>
                    <Link to="/AllTrades">Trades</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;