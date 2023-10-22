<script>
	import isLocalStorageActivated from "$lib/localStorageChecker.js";
	import Save from "~icons/carbon/save";
	import Unsaved from "~icons/carbon/unsaved";
	import Cafe from "~icons/cib/ko-fi";
	let storageActive = isLocalStorageActivated();
</script>

<section>
	<h2>Important Informations</h2>
	<p>
		OIT(Open Initiative Tracker) is mostly a client-side app and uses your browser's <a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank">Local Storage</a> to save your settings and encounters. Your can however still use OIT without
		Local Storage activated on your browser. Doing so will only mean that your settings and encounters won't be saved and will disapear after reloading the page.
	</p>
	<p>
		Being a mostly client-side app also means that you might have performance issues on slower / older hardware. To help with that you can disable auto-save in the <a href="/settings">Settings</a> menu. I also intend on making a more complex version of
		this app with <a href="https://www.heavy.ai/technical-glossary/server-side-rendering" target="_blank">SSR</a>(server side rendering), which should help performance on lower-end hardware, and authentification to save everything on a remote database
		instead of the browser's Local Storage when I'll have access to a better server. I plan on keeping both version of the app running at the same time under different domains and names.
	</p>
	<div id="storage-info">
		<h3>
			Local Storage is
			{#if storageActive}
				<span class="storage-active">
					active <Save />
					<div>
						<p>The storage is active; encounters and settings can be saved.</p>
					</div>
				</span>
			{:else}
				<span class="storage-inactive">
					inactive <Unsaved />
					<div>
						<p>The storage is inactive; encounters and settings will disapear after reload. <a href="https://cloud.ibm.com/docs/vpc?topic=vpc-enable-local-browser-storage" target="_blank">How to enable Local Storage</a></p>
					</div>
				</span>
			{/if}
		</h3>
	</div>
</section>

<section>
	<h2>About this project</h2>
	<p>
		I'm a dungeon master on D&D 5e and I like using my PC to track initiative and other information while in combat encounters. It helps make the whole ordeal way faster and simpler for me and my players. However, I find current web based option like <a
			href="https://kastark.co.uk/rpgs/encounter-tracker/"
			target="_blank">Encounter Initiative Tracker</a
		>, whilst useful and well made, kind of lacking in some features I would like to have. Open Initiative Tracker is an <a href="https://en.wikipedia.org/wiki/Open-source_software" target="_blank">open-source</a> attempt at adding some features I think would
		be nice. You can fork or host your own version of this app if you want and I may accept external code contribution to the main repos at a later date.
	</p>
</section>
<section>
	<h2>Donations <Cafe /></h2>
	<p>
		If you like the app and want to help me pay the bills you can buy be a coffee through my <a href="https://ko-fi.com/medenos" target="_blank">Ko-Fi page</a>. It is very much not required of you! I'm making apps I like for the fun of it!
	</p>
</section>

<style>
	section {
		border-radius: 5px;
		background-color: var(--secondary-bg-color);
		margin: 1vh 2vw;
		padding: 0.25em 1.5vw;
		text-align: left;
	}

	#storage-info {
		text-align: right;
	}

	.storage-active {
		color: green;
	}

	.storage-inactive {
		color: red;
	}
</style>
