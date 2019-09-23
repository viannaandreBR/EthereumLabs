---
id: doc-react32
title: LAB#1 - React JS / 32. React Wrapup
sidebar_label: 32. React Wrapup
---

## List Item Keys


![alt text](.\assets\React_Imagem24_1.jpg)


---

## key={video.etag} 

> video_list.js

~~~
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return <VideoListItem key={video.etag} video={video} />
  });
  //const videos = props.videos;
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;

~~~


![alt text](.\assets\React_Imagem24_2.jpg)

