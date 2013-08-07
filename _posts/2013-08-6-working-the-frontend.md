---
layout: post
title: Working the Frontend
---

Art's never really been my thing. As in, I've always sucked at it.

This, among other reasons, led me to believe that the design side of web development would fall along the same lines. However, in the time that I've spent building websites, I've really started to enjoy design. It has given me cause to start learning the basics of operating programs like GIMP and Photoshop, it has forced me to start evaluating and critiquing other websites and apps that I visit, and it's a strong outlet for my creativity. Not to mention that working on the front end diversifies the types of problems that I encounter while working on a project and keeps my mind from becoming too encumbered with back-end issues.

<!--break-->

My most recent roadblock appeared before me when I attempted to find a few icons to represent the social media buttons on an e-store that I'm building. Finding the icons wasn't too much trouble, but working with them in GIMP turned out to be both more complicated and more time-consuming than I anticipated. However, the experience rewarded me with a greater grasp on how layers work within GIMP and some knowledge of how to work with images.

The more important problem that I encountered while working with these icons was how to reduce the load times of each icon (essentially a .png image) times two images for each side of my planned animation. The solution that I used to cut back on loading double the planned pictures was combining each of the two images for one icon into a single sprite and then using CSS to switch the background position of the sprite from one image to another on mouseover. This is the CSS that I used to shift the background:

	#fbook-button {
		@include slow_transition;
		position: relative;
		height: 40px;
		width: 40px;
		margin-right: 10px;
		display: block;
		float: left;
		background-image:url(fbook-sprite-blue.png);
		background-position: 0 0;
		background-repeat: no-repeat;
		&:hover, &:active {
			background-position: 0 -40px;
		}
	}

Fairly simple, and here's looking forward to the harder problems ahead.