<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';
	import Emoticon from '$lib/components/Emoticon.svelte';
	import Eye from '$lib/components/Eye.svelte';
	import Highlight from '$lib/components/Highlight.svelte';
</script>

<section id="about" class="py-20 sm:py-28 grid grid-cols-1 sm:pr-10 lg:pr-60 gap-7 relative border-b border-dark-600">
	<div class="text-xl sm:text-3xl absolute right-0 top-0 sm:top-5">
		<Emoticon>
			<span slot="hovering"><Eye>&gt;</Eye> _ <Eye>&lt;</Eye></span>
			<span slot="opened"><Eye>o</Eye> _ <Eye>o</Eye></span>
			<span slot="closed"><Eye>-</Eye> _ <Eye>-</Eye></span>
		</Emoticon>
	</div>

	<div class="mb-6">
		<div class="mb-4">
			<h2 class="text-4xl sm:text-6xl">
				<span class="text-bright-300"> ## </span>
				About me
			</h2>
			<Comment>// summarize(life.currentPosition)</Comment>
		</div>

		<p class="text-lg lg:text-xl">
			I live in the Philippines, I am a self-thought dev and I like to code. I mostly work at the
			front-end but do play with backend stuff. My favorite thing to do is to learn about new
			things, often ones that challenges me to think.
		</p>
	</div>

	<div>
		<div class="mb-4">
			<h3 class="text-2xl sm:text-4xl">
				<span class="text-bright-400">###</span> Skills
			</h3>
			<Comment>// life.skills.sortBy("importance", "desc").slice(0, 5)</Comment>
		</div>
		<ul class="sm:ml-2 list-disc pl-2 sm:pl-4 text-lg lg:text-xl">
			<li>
				Adaptable in time crunches, sometimes <Highlight>"good enough"</Highlight> is better than great.
			</li>
			<li>
				comfortable learning and working with <Highlight>
					unfamiliar tools and frameworks</Highlight
				>.
			</li>
			<li>
				had experienced maintaining old websites, maneuvering around <Highlight color="negative"
					>bloated CSS</Highlight
				>.
			</li>
			<li>had experienced converting designs to responsive production-ready web pages.</li>
      <li>able to mimic designs to create pages that matches a website's theme.</li>
		</ul>
	</div>
</section>
