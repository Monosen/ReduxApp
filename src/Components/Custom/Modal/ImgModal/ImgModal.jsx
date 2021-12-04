import React from "react";

//Styles
import "./ImgModal.styles.css";

const ImgModal = ({ data, setImgModal }) => {
	return (
		<button
			className="box-modal fixed inset-0 w-full flex justify-center items-center z-50"
			onClick={() => setImgModal(false)}
		>
			<div className="w-4/5 h-4/5">
				<img
					className="box-img mx-auto"
					src={data.src.large2x}
					alt={data.photographer}
				/>
			</div>
			<h2>image</h2>
		</button>
	);
};

export default ImgModal;
