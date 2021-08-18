import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestPhotoList } from "./features/photos/photosSlice";
import Routes from "./routes/Routes";
import { RootState } from "./store/store";

const App: React.FC = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
