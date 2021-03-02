import React from "react";
import Resume from "../Utils/Resume.pdf";

const Modal = () => {
	return (
		<div
			className="modal fade"
			id="resumeModal"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Resume
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<iframe
							title="resume"
							className="resume-iframe"
							src={Resume}
							width="100%"
							height="800px"
							frameBorder="0"
						></iframe>
					</div>
					{/* <div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Modal;
