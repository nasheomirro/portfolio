<script lang="ts">
	import { onMount } from 'svelte';

	const openDuration = 5000;
	const openDurationVariance = 2000;
	const blinkingDuration = 100;
	let blinking = false;
	let hovering = false;

	onMount(() => {
		const blink = () => {
			const varyingDuration =
				openDuration + openDurationVariance * Math.random() * (Math.random() > 0.5 ? -1 : 1);
			setTimeout(() => {
				blinking = true;
				// stop after blinking and start another sequence
				setTimeout(() => {
					blinking = false;
					blink();
				}, blinkingDuration);
			}, varyingDuration);
		};

		// start loop
		blink();
	});
</script>

<span
	class="cursor-default select-none"
	class:text-shadow-glow={hovering}
	role="none"
	on:mouseenter={() => (hovering = true)}
	on:mouseleave={() => (hovering = false)}
>
	(
	{#if hovering}
		<slot name="hovering" />
	{:else if blinking}
		<slot name="closed" />
	{:else}
		<slot name="opened" />
	{/if})
</span>
