import { Route, Switch } from "react-router-dom";

import AllTrades from "./pages/AllTrades";
import Favorites from "./pages/Favorites";
import NewTrade from "./pages/NewTrade";
import NewItem from "./pages/NewItem";
import AllItems from "./pages/AllItems";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <AllItems />
            </Route>
            <Route path="/new-item">
                <NewItem />
            </Route>
            <Route path="/all-trades">
                <AllTrades />
            </Route>
            <Route path="/new-trade">
                <NewTrade />
            </Route>
            <Route path="/favorites">
                <Favorites />
            </Route>
        </Switch>
    );
}

export default Routes;