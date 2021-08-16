import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import "./MainNavigation.module.sass";

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext)
    return <header>
        <div className="identity">my stash</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Stash</Link>
                </li>
                <li>
                    <Link to="/all-trades">Trades</Link>
                </li>
                <li>
                    <Link to="/favorites">
                        Favorites 
                        <span>
                            {favoritesCtx.totalFavorites}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;