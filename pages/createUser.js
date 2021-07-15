import Head from "next/head";
import Image from "next/image";

const CreateUser = () => {
	return (
		<div>
			<div className="user-create">
				<div className="user-create__top">
					<div className="user-create__logo">WatchList</div>
					<span className="user-create__title">Who is watching?</span>
				</div>

				<div className="user-create__form">
					<div className="user-create__user-box">
						<img
							className="user-create__user-img"
							src="https://randomuser.me/api/portraits/women/95.jpg"
						/>
						<div className="user-create__user-name">Abby</div>
					</div>
				</div>

				<div className="user-create__controls">
					<button className="user-create__save">Save</button>
					<button className="user-create__cancel">Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default CreateUser;
