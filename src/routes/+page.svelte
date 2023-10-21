<script>
	import isLocalStorageActivated from "$lib/localStorageChecker.js";
	let localStorageState = isLocalStorageActivated();
</script>

<div class="card">
	<h2>Important Informations</h2>
	<p>
		OIT(Open Initiative Tracker) is mostly a client-side app and uses your browser's <a href="https://www.w3schools.com/html/html5_webstorage.asp">Local Storage</a> to save your settings and encounters. Your can however still use OIT without Local Storage
		activated on your browser. Doing so will only mean that your settings and encounters won't be saved and will disapear after reloading the page.
	</p>
</div>
