<script>
	import { page } from "$app/stores";
	import D20Icon from "~icons/iconoir/hexagon-dice";
</script>

<header>
	<h2><a href="/"><D20Icon />Open Initiative Tracker</a></h2>
	<hr />
	<nav>
		<ul>
			<li><a href="/" aria-current={$page.url.pathname === "/"}>Home</a></li>
			<li><a href="/encounters" aria-current={$page.url.pathname === "/encounters"}>Encounters</a></li>
			<li><a href="/settings" aria-current={$page.url.pathname === "/settings"}>Settings</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10%;
	}

	hr {
		border: 1px solid var(--secondary-bg-color);
		height: 2em;
		width: 0px;
		margin: 0px auto;
	}

	nav {
		min-width: 282px;
	}

	ul {
		list-style: none;
		padding: 0px 0px;
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
		border: solid 2px var(--tertiary-fg-color);
		border-radius: 2px;
		padding: 0.25em 0.5em;
	}

	@media screen and (max-width: 1200px) {
		header {
			display: block;
			text-align: center;
		}

		hr {
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
	}
</style>
