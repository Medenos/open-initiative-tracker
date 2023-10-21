<script>
	import LogoGithub from "~icons/carbon/logo-github";
	import LogoSvelte from "~icons/carbon/logo-svelte";
	import LogoKoFi from "~icons/cib/ko-fi";
	import Launch from "~icons/carbon/launch";
</script>

<footer>
	<a href="https://ko-fi.com/medenos" target="_blank"><LogoKoFi /> Ko-Fi<span class="launch-icon"><Launch /></span></a>
	<a href="https://github.com/Medenos/open-initiative-tracker" title="link to github repository" target="_blank"><LogoGithub /> Github<span class="launch-icon"><Launch /></span></a>
	<a href="https://www.gnu.org/licenses/gpl-3.0.en.html" title="link to codebase license" target="_blank">License<span class="launch-icon"><Launch /> </span></a>
	<p>This app was made with <a href="https://kit.svelte.dev" title="link to sveltekit" target="_blank"><LogoSvelte />SvelteKit<span class="launch-icon"><Launch /> </span></a></p>
</footer>

<style>
	footer {
		padding: 10px 5px;
		border-top: solid 1px var(--secondary-bg-color);
		text-align: right;
		color: var(--secondary-fg-color);
	}

	a {
		margin: 0px 5px;
		text-decoration: none;
		font-size: 16px;
	}

	p {
		font-size: 12px;
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
			font-size: 24px;
		}
	}
</style>
