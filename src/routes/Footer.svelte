<script>
	import LogoGithub from "~icons/carbon/logo-github";
	import Launch from "~icons/carbon/launch";
	import Cafe from "~icons/carbon/cafe";
</script>

<footer>
	<a href="https://ko-fi.com/medenos" target="_blank"><Cafe /> Ko-Fi<span class="launch-icon"><Launch /></span></a>
	<a href="https://github.com/Medenos/open-initiative-tracker" title="link to github repository" target="_blank"><LogoGithub /> Github<span class="launch-icon"><Launch /></span></a>
	<a href="https://www.gnu.org/licenses/gpl-3.0.en.html" title="link to codebase license" target="_blank">License<span class="launch-icon"><Launch /> </span></a>
	<p>This app was made with <a href="https://kit.svelte.dev" title="link to sveltekit" target="_blank">SvelteKit<span class="launch-icon"><Launch /> </span></a></p>
</footer>

<style>
	footer {
		padding: 10px 5px;
		border-top: solid 1px var(--secondary-bg-color);
		border-radius: 5px;
		text-align: right;
		color: var(--secondary-fg-color);
	}

	a {
		font-family: "0xProto";
		margin: 0px 5px;
		text-decoration: none;
		font-size: 14px;
	}

	.launch-icon {
		margin-left: 0.25em;
		font-size: 0.75em;
	}

	@media screen and (max-width: 600px) {
		footer {
			text-align: center;
		}

		a {
			font-size: 16px;
		}

		p {
			font-size: 14px;
		}
	}
</style>
