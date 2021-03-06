// import packages
import React from 'react';

// import components
import Gamestatus from './Gamestatus'

const Gameheader = (props) => {
	return (
		<div className="gameheader">
			<div className="player">
				<div className="profile"></div>
				<div className="username"></div>
			</div>
			<div className="center-dashboard">
				<div className="game-logo">Code<span className="game-logo-alt">Off</span></div>
				<div className="game-dashboard-wrapper">
					<div className="game-dashboard">
						{props.challenge.map((game, i) => (
							<Gamestatus
								key = {i}
								gameNumber = {i} 
								challengeProgress={props.challengeProgress}
								challenge={props.challenge} 
								gameProgress={props.gameProgress} 
								currentGameStats={props.currentGameStats} 
								playerNames={props.playerNames}
								currentGameType={props.currentGameType} />
						))}
					</div>
				</div>
			</div>
			<div className="powerup">
			</div>
			<div className="player">
				<div className="profile"></div>
				<div className="username"></div>
			</div>
		</div>
	)
}

export default Gameheader
