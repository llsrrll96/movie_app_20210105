import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component
{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async() =>{
      //es6형식
    const {data : {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //data -> data -> movies
    //state 내 상태 변수 설정
    this.setState({movies , isLoading : false});
  };
  //생성될때 호출
  componentDidMount()
  {
	this.getMovies();                   
  }

  //값 가져 오는 부분
  render()
  {
	//{}내에 들어갈 변수 초기화 , this.state.isLoading
	const {isLoading,movies} = this.state;
	return(
	  <section className ="container">
        {isLoading ? (<div className="loader">
                        <span className ="loader__text">Loading ... </span>
                    </div>) 
        : (
            <div className="movies">
                {movies.map(movie =>
                    (
                    <Movie 
                    key = {movie.id}
                    id ={movie.id}
                    year = {movie.year}
                    title = {movie.title}
                    summary= {movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                    )
                )}
            </div>
        )}
	  </section>
	);
  }
  //렌더 이후
  componentDidUpdate(){}
  //끝날때
  componentWillUnmount(){}
}

export default Home;
