import React from 'react';
import VideoListItem from "./VideoListItem";

const VideoList = ({ onVideoSelect, videos }) => {
	const videoItems = videos.map(video => {
		return (
			<VideoListItem
				onVideoSelect={onVideoSelect}
				video={video}
				key={video.id.videoId}/>
		);
	});
	
	return (
		<div className="col-md-4">
			<ul className="list-group">{videoItems}</ul>
		</div>
	);
};

export default VideoList;