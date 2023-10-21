<script>
	import { page } from "$app/stores";
	import { fade, fly, slide } from "svelte/transition";
	import D20Icon from "~icons/iconoir/hexagon-dice";
	import Chevron from "~icons/carbon/chevron-up";

	let showHeader = true;
</script>

<div>
	{#if showHeader}
		<header transition:slide={{ duration: 500 }}>
			<h1 out:fade in:fly={{ x: -200, duration: 500 }}><a href="/"><D20Icon />Open Initiative Tracker</a></h1>
			<hr transition:fade={{ duration: 250 }} />
			<nav>
				<ul out:fade in:fly={{ x: 200, duration: 500 }}>
					<li><a href="/" aria-current={$page.url.pathname === "/"}>Home</a></li>
					<li><a href="/encounters" aria-current={$page.url.pathname === "/encounters"}>Encounters</a></li>
					<li><a href="/settings" aria-current={$page.url.pathname === "/settings"}>Settings</a></li>
				</ul>
			</nav>
		</header>
	{/if}

	<button
		class:rotated={!showHeader}
		on:click={() => {
			showHeader = !showHeader;
		}}
	>
		<Chevron />
	</button>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 10%;
		box-shadow: 0px 1px 2px var(--tertiary-fg-color);
		background: linear-gradient(to bottom right, var(--primary-bg-color), var(--tertiary-bg-color));
	}

	h1 {
		margin: 0px;
	}

	hr {
		display: none;
	}

	nav {
		min-width: 282px;
	}

	ul {
		list-style: none;
		padding: 0px;
		margin: 0px;
	}

	li {
		display: inline-block;
		padding: 0px 0.25em;
	}

	a {
		user-select: none;
		color: var(--primary-fg-color);
		text-decoration: none;
		transition: all 0.3s ease 0s;
	}

	a:hover {
		color: var(--tertiary-fg-color);
	}

	a[aria-current="true"] {
		color: var(--secondary-fg-color);
		border-radius: 2px;
		border-left: ridge 2px var(--tertiary-fg-color);
		padding: 0.25em 0.5em;
	}

	button {
		width: 100%;
		font-size: 1.25em;
		color: var(--secondary-bg-color);
		background-color: transparent;
		border: 0px;
		transition: all 0.3s ease 0s;
	}

	button:hover {
		cursor: pointer;
		color: var(--tertiary-fg-color);
	}

	.rotated {
		transform: rotate(180deg);
	}

	@media screen and (max-width: 1200px) {
		header {
			display: block;
			text-align: center;
		}

		hr {
			display: block;
			border: 1px solid var(--secondary-fg-color);
			margin: 1em 0px;
			height: 0px;
			width: 100%;
		}

		li {
			font-size: 18px;
		}
	}

	@media screen and (max-width: 600px) {
		li {
			font-size: 24px;
			display: block;
			padding: 0.25em 0px;
		}

		a[aria-current="true"] {
			border-left: none;
			border-bottom: ridge 2px var(--tertiary-fg-color);
		}
		button {
			font-size: 2em;
		}
	}
</style>
