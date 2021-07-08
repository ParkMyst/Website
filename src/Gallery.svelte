<script>
	import { _ } from "svelte-i18n";
	import SmoothScroll from "./SmoothScroll.svelte";
	import marked from "marked";
</script>

<div class="carousel m-4 relative shadow-2xl bg-white w-10/12 rounded">
	<div class="carousel-inner relative overflow-hidden rounded">
		<!--Slide 1-->
		<input
			class="carousel-open"
			type="radio"
			id="carousel-1"
			name="carousel"
			aria-hidden="true"
			hidden="true"
			checked="checked"
		/>
		<div class="carousel-item absolute opacity-0">
			<!-- TODO: Create a nice promo video and put it here -->
			<div class="video-container">
				<iframe width="1904" height="768" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<label
			for="carousel-4"
			class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
			>‹</label
		>
		<label
			for="carousel-2"
			class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
			>›</label
		>

		<!--Slide 2-->
		<input
			class="carousel-open"
			type="radio"
			id="carousel-2"
			name="carousel"
			aria-hidden="true"
			hidden="true"
		/>
		<div class="carousel-item absolute opacity-0">
			<img src="/content/gallery_img_1.png" alt="Game editor shot">
		</div>
		<label
			for="carousel-1"
			class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
			>‹</label
		>
		<label
			for="carousel-3"
			class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
			>›</label
		>

		<!--Slide 3-->
		<input
			class="carousel-open"
			type="radio"
			id="carousel-3"
			name="carousel"
			aria-hidden="true"
			hidden="true"
		/>
		<div class="carousel-item absolute opacity-0">
			<img src="/content/gallery_img_2.png" alt="Game tester shot">
		</div>
		<label
			for="carousel-2"
			class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
			>‹</label
		>
		<label
			for="carousel-4"
			class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
			>›</label
		>

		<!--Slide 4-->
		<input
			class="carousel-open"
			type="radio"
			id="carousel-4"
			name="carousel"
			aria-hidden="true"
			hidden="true"
		/>
		<div class="carousel-item absolute opacity-0">
			<img src="/content/gallery_img_3.jpg" alt="Game shot">
		</div>
		<label
			for="carousel-3"
			class="prev control-4 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
			>‹</label
		>
		<label
			for="carousel-1"
			class="next control-4 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-blue rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
			>›</label
		>

		<!-- Add additional indicators for each slide-->
		<ol class="carousel-indicators">
			<li class="inline-block mr-3">
				<label
					for="carousel-1"
					class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
					>•</label
				>
			</li>
			<li class="inline-block mr-3">
				<label
					for="carousel-2"
					class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
					>•</label
				>
			</li>
			<li class="inline-block mr-3">
				<label
					for="carousel-3"
					class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
					>•</label
				>
			</li>
			<li class="inline-block mr-3">
				<label
					for="carousel-4"
					class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
					>•</label
				>
			</li>
		</ol>
	</div>
</div>

<style>
	.carousel {
		margin-left: auto;
		margin-right: auto;
	}

	.carousel-open:checked + .carousel-item {
		position: static;
		opacity: 100;
	}
	.carousel-item {
		-webkit-transition: opacity 0.6s ease-out;
		transition: opacity 0.6s ease-out;
	}

	#carousel-1:checked ~ .control-1,
	#carousel-2:checked ~ .control-2,
	#carousel-3:checked ~ .control-3,
	#carousel-4:checked ~ .control-4  {
		display: block;
	}
	.carousel-indicators {
		list-style: none;
		margin: 0;
		padding: 0;
		position: absolute;
		bottom: 6%;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 10;
	}
	#carousel-1:checked
		~ .control-1
		~ .carousel-indicators
		li:nth-child(1)
		.carousel-bullet,
	#carousel-2:checked
		~ .control-2
		~ .carousel-indicators
		li:nth-child(2)
		.carousel-bullet,
	#carousel-3:checked
		~ .control-3
		~ .carousel-indicators
		li:nth-child(3),
	#carousel-4:checked
		~ .control-4
		~ .carousel-indicators
		li:nth-child(4)
		.carousel-bullet {
		color: #3385FF; /*Active bullet color*/
	}

	.control-1, .control-2, .control-3, .control-4 {
		border: 1px solid rgba(0, 0, 0, 0.096);
	}

	.video-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; }
	.video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
