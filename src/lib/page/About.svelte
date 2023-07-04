<script lang="ts">
	import Emoticon from '$lib/components/Emoticon.svelte';
	import Eye from '$lib/components/Eye.svelte';
</script>

<section class="pb-20 grid grid-cols-1 sm:pr-10 lg:pr-60 gap-7 relative border-b border-dark-600">
	<div class="text-xl sm:text-3xl absolute right-0 top-0">
		<Emoticon>
			<span slot="hovering"><Eye>&gt;</Eye> _ <Eye>&lt;</Eye></span>
			<span slot="opened"><Eye>o</Eye> _ <Eye>o</Eye></span>
			<span slot="closed"><Eye>-</Eye> _ <Eye>-</Eye></span>
		</Emoticon>
	</div>

	<div class="mb-6">
		<h2 class="text-4xl sm:text-6xl">
			<span class="text-bright-300"> ## </span>
			About me
		</h2>
		<span class="block mb-4 text-dark-400">// summarize(life.currentPosition)</span>

		<p class="text-lg lg:text-xl">
			I live in the Philippines, I am a self-thought dev and I like to code. I mostly work at the
			front-end but do play with backend stuff. My favorite thing to do is to learn about new
			things, often ones that challenges me to think.
		</p>
	</div>

	<div>
		<h3 class="text-2xl sm:text-4xl">
			<span class="text-bright-400">###</span> Skills
		</h3>
		<span class="block mb-4 text-dark-400"
			>// life.skills.sortBy("importance", "desc").slice(0, 4)</span
		>
		<ul class="sm:ml-2 list-disc pl-2 sm:pl-4 text-lg lg:text-xl">
			<li>
				Understand how to manage my time, I know that it's okay for it to just be
				<span class="text-highlight-400"> "good enough". </span>
			</li>
			<li>
				comfortable working with and learning <span class="text-highlight-400">
					unfamiliar tools and frameworks</span
				>.
			</li>
			<li>
				had experienced maintaining old websites, maneuvering around <span class="text-bright-600"
					>bloated CSS</span
				>.
			</li>
			<li>had experienced converting designs to responsive production-ready web pages.</li>
		</ul>
	</div>
</section>
