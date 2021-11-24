import React from "react";
import { filmAPI } from "./services/FilmService";

const App = () => {
  // const dispatch = useAppDispatch ()
  // const {films} = useAppSelector ( state => state.filmReducer )
  // useEffect ( () => {
  //     dispatch ( fetchPopularFilms() )
  // }, [] )
  const {
    data: PopularFilms,
    error,
    isLoading,
  } = filmAPI.useFetchPopularFilmsQuery("a6ef9edc1b078d1c39013abfbd9d8509");
  console.log(PopularFilms && PopularFilms.results, error, isLoading);
  return <div></div>;
};

export default App;
