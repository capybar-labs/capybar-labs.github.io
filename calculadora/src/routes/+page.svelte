<script lang="ts">
	import Calculadora from '$lib/Calculadora.svelte';
</script>

<svelte:head>
	<title>capy.bar - Calculadora de preços Shoppee</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Calculadora de preços Shopee</h1>
	<Calculadora />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

</style>
