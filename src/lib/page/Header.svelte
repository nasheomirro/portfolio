<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';
</script>

<header id="home" class="pt-32 sm:pt-40 flex flex-col items-center">
	<h1 class="mb-4 text-center">
		<Comment>// hello there, I'm shane and I'm a</Comment>
		<span class="text-shadow-glow z-0 text-bright-300 text-5xl sm:text-7xl relative block">
			<div
				class="bg-dark-900 flicker absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2"
			/>
			#WEB DEVELOPER
		</span>
	</h1>
	<div class="w-60 sm:w-80 text-center">
		<img
			src="/portrait.gif"
			alt="a small animation of a pixelated me blinking"
			class="rounded w-full mb-10 shadow-lg"
		/>
		<div class="animate-bounce">
			<div class="text-xl rotate-90">---&gt;</div>
		</div>
	</div>
</header>

<style>
	.flicker {
		animation: flicker 3s infinite alternate;
	}

	@media (prefers-reduce-motion) {
		.flicker {
			animation: none;
		}
	}

	@keyframes flicker {
		0%,
		18%,
		22%,
		25%,
		53%,
		57%,
		100% {
			opacity: 0;
		}

		20%,
		24%,
		55% {
			opacity: 0.2;
		}
	}
</style>
