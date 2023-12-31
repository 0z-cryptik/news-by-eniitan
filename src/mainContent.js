import App from "./App";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { Arts } from "./components/arts";
import { General } from "./components/general";
import { Politics } from "./components/politics";
import { Movies } from "./components/movies";
import { Fashion } from "./components/fashion";
import { Science } from "./components/science";
import { Tech } from "./components/tech";
import { SearchComp } from "./components/searchplace";
import { ListProvider } from "./hooks&functions/myHooks";
import { useNavigate } from "react-router-dom";
import { ErrorPage } from "./components/errorpage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const MainCon = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/general");
  }, []);

  return (
    <ListProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={<App />}>
            <Route
              path="/general"
              element={<General />}
            />
            <Route
              path="/arts"
              element={<Arts />}
            />
            <Route
              path="/politics"
              element={<Politics />}
            />
            <Route
              path="/movies"
              element={<Movies />}
            />
            <Route
              path="/fashion"
              element={<Fashion />}
            />
            <Route
              path="/science"
              element={<Science />}
            />
            <Route
              path="/tech"
              element={<Tech />}
            />
            <Route
              path="/search"
              element={<SearchComp />}
            />
          </Route>
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </QueryClientProvider>
    </ListProvider>
  );
};
