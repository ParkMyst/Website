<script lang="ts">
	export let scrollTo: string;
	export let title: string;

	const onClick = () => {
		const relativeTop: number | undefined = document
			.querySelector(`#${scrollTo}`)
			?.getBoundingClientRect().top;
		if (relativeTop) {
			const top = relativeTop + window.pageYOffset - 60;
			window.scrollTo({
				top,
				behavior: "smooth",
			});
		}
	};
</script>

<a {title} on:click|preventDefault={onClick} href="#Discover">
	<slot />
</a>

<style>
	a {
		cursor: pointer;
		user-select: none;
	}
</style>
