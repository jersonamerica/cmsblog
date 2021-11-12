import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Post } from 'components/types';
import { getFeaturedPosts } from 'services';

import CarouselItem from 'section/CarouselItem';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const FeaturedPosts = function asd() {
	const [featuredPosts, setFeaturedPosts] = useState<Array<Post>>([]);

	useEffect(() => {
		getFeaturedPosts().then((result) => setFeaturedPosts(result));
	}, []);

	return (
		<div className="bg-black bg-opacity-20 p-4 mb-8">
			<h3 className="text-3xl text-white font-semibold mb-4">Featured Posts</h3>
			<Carousel
				swipeable
				draggable={false}
				// showDots={true}
				responsive={responsive}
				ssr // means to render carousel on server-side.
				infinite
				autoPlay={false}
				// autoPlaySpeed={3000}
				keyBoardControl
				customTransition="transform 400ms ease-in-out"
				transitionDuration={400}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				{featuredPosts.map((post) => (
					<CarouselItem key={post.createdAt} post={post} />
				))}
			</Carousel>
		</div>
	);
};

export default FeaturedPosts;
