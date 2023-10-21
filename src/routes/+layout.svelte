<script>
	import "./global.css";

	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import { fly, fade } from "svelte/transition";

	export let data;

	let animating = false;

	$: document.body.style.overflowX = animating ? "hidden" : null;

	const hideTemporarly = (event, durationMilliseconds) => {
		event.target.style.position = "absolute";

		setTimeout(() => {
			event.target.style.position = null;
		}, durationMilliseconds);
	};
</script>

<Header />

{#key data.url}
	<div
		in:fly={{ x: -200, duration: 200, delay: 200 }}
		out:fly={{ x: 600, duration: 200 }}
		on:introstart={(e) => {
			hideTemporarly(e, 200);
			animating = true;
		}}
		on:introend={() => {
			animating = false;
		}}
	>
		<slot />
	</div>
{/key}

{#if !animating}
	<div transition:fade={{ duration: 100 }}>
		<Footer />
	</div>
{/if}

<style>
</style>
