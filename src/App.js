import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// const movie1 = {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// };
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f7f0485e'
const App = () => {

	const [movies, setMovies] = useState([])
	const [searchItem, setSearchItem] = useState("")

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search)
	}

	// const allMovies = async () => {

	// 	const response = await fetch(`${API_URL}`);
	// 	const data = await response.json();

	// 	setMovies(data)
	// 	console.log(data)
	// }

	useEffect(() =>{
		searchMovies()
		console.log(movies)
	},[])

	return (
		<div className="app">
			<h1>Movies</h1>

			<div className="search">
				<input 
					placeholder="search for movies"
					value={searchItem}
					onChange={(e) =>  setSearchItem(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt="search"
					onClick={() => searchMovies(searchItem)}
				/>
			</div>
			{movies.length > 0 ? (
				<div className="container">
					{movies.map( (movie) => 
						(
							< MovieCard movie1={movie}/>
						)
					)
				}
			}
				</div>
				):
				(
				<div className="empty">
					<h1>Empty</h1>
				</div>
				)
			}
			
		</div>	
	)
}

export default App;