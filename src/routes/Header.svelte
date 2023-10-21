<script>
	import { page } from "$app/stores";
</script>

<header>
	<h1><a href="/">Open Initiative Tracker</a></h1>
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

	a {
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

	ul {
		list-style: none;
	}

	li {
		display: inline-block;
		padding: 0px 20px;
	}
</style>
