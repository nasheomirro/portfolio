<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';
</script>

<section class="py-20 lg:py-40 border-b border-dark-600">
	<div class="text-center mb-10">
		<h2 class="text-4xl text-bright-300 text-shadow-glow sm:text-6xl">## PROJECTS</h2>
		<Comment>// await github.getAll(&#123; filter: "highlighted" &#125;)</Comment>
	</div>

	<ul class="flex flex-col gap-20">
		<li class="flex flex-col items-start md:flex-row gap-5 md:gap-10">
			<img src="/proj1.jpg" alt="" class="rounded-md shadow-lg w-full max-w-xs bg-dim-600" />
			<div>
				<h3 class="text-2xl sm:text-4xl mb-3">
					<span class="text-bright-400">###</span> react-polymorphed
				</h3>
				<p class="text-lg lg:text-xl mb-4">
					A typescript package to easily create fast polymorphic components in react! The package is
					open-source and downloadable through NPM and gets an average of <span
						class="text-highlight-400">700+ weekly downloads</span
					>. I wanted to create polymorphic components for a project but a lot of implementations
					felt <span class="text-bright-600">too slow</span>, so I tried solving the problem and
					created my own solution.
				</p>

				<div class="flex gap-4 items-center">
					<a
						target="_blank"
						href="https://github.com/nasheomirro/react-polymorphed"
						class="py-0.5 hover:text-shadow-glow px-4 sm:text-lg bg-dim-700 rounded">github</a
					>
					<a
						target="_blank"
						href="https://www.npmjs.com/package/react-polymorphed"
						class="py-0.5 hover:text-shadow-glow px-4 sm:text-lg bg-[#cc3534] rounded">NPM</a
					>
				</div>
			</div>
		</li>
		<li class="flex flex-col items-start md:flex-row gap-5 md:gap-10">
			<img src="/proj2.jpg" alt="" class="rounded-md shadow-lg w-full max-w-xs bg-dim-600" />
			<div>
				<h3 class="text-2xl sm:text-4xl mb-3">
					<span class="text-bright-400">###</span> gradials
				</h3>
				<p class="text-lg lg:text-xl mb-4">
					A tool to quickly create radial gradient backgrounds for CSS. Built using
					<span class="text-highlight-400"> sveltekit</span>, it takes advantage of two-way binding
					to help sync updates in multiple places. Honestly I only built this just to test myself
					whether or not I could replicate the tool on
					<a target="_blank" href="https://cssgradient.io" class="hover:text-shadow-glow underline"
						>cssgradient.io</a
					>, they didn't have a way to create multiple radial gradients at different positions so
					that's what I went with.
				</p>

				<div class="flex gap-4 items-center">
					<a
						target="_blank"
						href="https://github.com/nasheomirro/gradials"
						class="py-0.5 hover:text-shadow-glow px-4 sm:text-lg bg-dim-700 rounded">github</a
					>
					<a
						target="_blank"
						href="https://gradials.vercel.app/"
						class="py-0.5 hover:text-shadow-glow px-4 sm:text-lg bg-bright-500 rounded">live</a
					>
				</div>
			</div>
		</li>
	</ul>
</section>
