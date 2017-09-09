import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const title = video.snippet.title;
	const description = video.snippet.description;
	
	return (
		<div className="col-md-8 video-detail ">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} title={title} className="embed-responsive-item"></iframe>
			</div>
			<div className="details">
				<div>{title}</div>
				<div>{description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;