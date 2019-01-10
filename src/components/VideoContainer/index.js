import React, { HTMLVideoElement } from 'react'
import { videoDetailsJson } from '../../api/video-api-mock'


const VideoContainer = () => {
	const video = videoDetailsJson.response.data

	return (
		<video>
			<source src={video} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
			<source src={video} type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
		</video>
	)
}

export default VideoContainer
