<script>
	export let encounter;
</script>

<div class="card-container">
	<h1>{encounter.title}</h1>
</div>

<style>
	.card-container {
		border: var(--tertiary-bg-color) 1px solid;
		background-color: var(--primary-bg-color);
		margin: 2px;
	}
</style>
