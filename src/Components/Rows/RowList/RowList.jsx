import Row from "../Row/Row";
import requests from "../../../utils/Requests";
const RowList = () => {
	return (
		<>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.FetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchUrl={requests.FetchTrending} />

			<Row title="Top Rated" fetchUrl={requests.FetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.FetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.FetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.FetchHorrorMovies} />
			<Row title="Upcomming Movies" fetchUrl={requests.FetchUpcommingMovies} />
			<Row title="TV Shows" fetchUrl={requests.FetchTvShows} />
			<Row title="Documentaries" fetchUrl={requests.FetchDocumentaries} />
		</>
	);
};

export default RowList;
