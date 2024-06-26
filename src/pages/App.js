import "./App.css";
import GameEntry from "../components/GameEntry";

import NaviBar from "../components/NaviBar";

import React, { useState, useEffect } from "react";

import gameIcon1 from "../img/game-icon-1.svg";
import gameIcon2 from "../img/game-icon-2.svg";
import gameIcon3 from "../img/game-icon-3.svg";
import gameIcon4 from "../img/game-icon-4.svg";
import Footer from "../components/Footer";
import { axiosInstance } from "../utils/axios";

function App() {
	const gameIcons = [gameIcon1, gameIcon2, gameIcon3, gameIcon4];
	const [games, setGames] = useState([]);

	useEffect(() => {
		axiosInstance
			.get(`/game/getAll`)
			.then((response) => {
				setGames(response.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	// return <div className="app">This is my app.</div>;

	return (
		<div>
			<NaviBar />
			<div className="app">
				{games.map((game) => (
					// <div>{game.title}</div>
					<GameEntry
						key={game._id}
						game={game}
						icon={gameIcons[Math.floor(Math.random() * gameIcons.length)]}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
