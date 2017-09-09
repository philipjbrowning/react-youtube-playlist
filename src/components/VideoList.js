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
		<ul className="col-md-4 list-group">{videoItems}</ul>
	);
};

export default VideoList;