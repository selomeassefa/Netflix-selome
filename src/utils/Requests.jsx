const API_KEY = `e61c1c0913344736916c8114751bed04`;
const fetchData = {
	FetchNetflixOriginals: ` /discover/tv?api_key=${API_KEY}&with_networks=213`,
	FetchUpcommingMovies: ` /movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
	FetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US`,
	FetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	FetchActionMovies: ` /discover/movie?api_key=${API_KEY}&with_genres=28`,
	FetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	FetchHorrorMovies: ` /discover/movie?api_key=${API_KEY}&with_genres=27`,
	FetchRomanceMovies: ` /discover/movie?api_key=${API_KEY}&with_genres=10749`,
	FetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	FetchTvShows: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default fetchData;
