import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Buttom";

import "./TaskDetails.css";

const TaskDetails = () => {
	const params = useParams();
	const history = useNavigate();

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					texto de exemplo
				</p>
			</div>
		</>
	);
};

export default TaskDetails;