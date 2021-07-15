import Head from "next/head";
import Image from "next/image";

const Home = () => {
	return (
		<div>
			<div className="user-login">
				<div className="user-login__top">
					<div className="user-login__logo">WatchList</div>
					<span className="user-login__title">Who is watching?</span>
				</div>

				<div className="user-login__form">
					<div className="user-login__user-box">
						<img
							className="user-login__user-img"
							src="https://randomuser.me/api/portraits/women/95.jpg"
						/>
						<div className="user-login__user-name">Abby</div>
					</div>
				</div>

				<div className="user-login__controls">
					<button className="user-login__adult">Add Adult</button>
					<button className="user-login__child">Add Child</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
