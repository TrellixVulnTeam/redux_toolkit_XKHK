import { BrowserRouter, Route } from "react-router-dom";
import PhotoPage from "src/pages/PhotoPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/photo" exact component={PhotoPage} />
    </BrowserRouter>
  );
};

export default Routes;
