import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const AppRouter = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (_e, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <ThemeProvider>
      <Router>
        <NavBar value={currentTab} setValue={setCurrentTab} handleChange={handleChange} />
        <Switch>
          <Route exact path="/" render={() => <Home tab={currentTab} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
