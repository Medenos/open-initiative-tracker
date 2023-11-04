<script>
	import { encounterStore } from "$lib/encounterStore.js";
	import EncounterCard from "./EncounterCard.svelte";
</script>

<div id="encounter-grid">
	{#each $encounterStore as encounter}
		<EncounterCard {encounter} />
	{/each}
</div>

<style>
	#encounter-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (max-width: 1200px) {
		#encounter-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 600px) {
		#encounter-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
