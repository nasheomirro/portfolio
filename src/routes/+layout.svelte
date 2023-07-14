<script lang="ts">
	import '$lib/app.css';
	import Navbar from '$lib/page/Navbar.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="dark" />
</svelte:head>

<Navbar />
<div class="px-6 max-w-screen-xl lg:px-12 mx-auto">
	<slot />
</div>
