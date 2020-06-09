import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Results from "./pages/404";
// import Button from "./pages/ui/buttons";
import Root from "./root";
const router = () => {
  return (
    <Router>
      <Root>
        {/* <Route path="/login" component={Login} /> */}
        <Route
          path="/"
          render={() => (
            <App>
              <Switch>
                {/* <Route path="/ui/buttons" component={Button} /> */}
                <Route component={Results} />
              </Switch>
            </App>
          )}
        />
      </Root>
    </Router>
  );
};
export default router;
