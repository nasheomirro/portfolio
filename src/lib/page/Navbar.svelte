<script lang="ts">
	import Emoticon from '$lib/components/Emoticon.svelte';
	import Eye from '$lib/components/Eye.svelte';
	import Logo from '$lib/components/icons/Logo.svelte';

	let isOpen = false;
	const createToggle = (bool?: boolean) => () => (isOpen = bool === undefined ? !isOpen : bool);
</script>

<div class="max-w-screen-xl py-4 px-4 mx-auto sm:px-5 lg:py-7">
	<div class="flex justify-between items-center">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="w-12 block hover:text-highlight-300 md:w-14">
			<Logo />
		</a>
		<div class="sm:hidden">
			<button
				class={`z-20 relative ${isOpen && 'text-shadow-glow text-bright-300'}`}
				on:click={createToggle()}>{isOpen ? 'CLOSE' : 'MENU'}</button
			>
		</div>

		<!-- panel -->
		<div
			class={`fixed sm:static sm:translate-x-0 sm:bg-transparent sm:w-auto flex flex-col sm:p-0 justify-center p-6 top-0 left-0 w-full h-full z-10 transition bg-dark-950 ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<ul class="flex flex-col gap-3 text-2xl sm:text-lg sm:flex-row sm:gap-10 lg:gap-14">
				<li class="flex justify-between items-center sm:flex-col sm:items-start">
					<a class="underline hover:text-shadow-glow" on:click={createToggle(false)} href="#"
						>home</a
					>
					<div class="sm:hidden">
						<Emoticon>
							<span slot="hovering"><Eye>&gt;</Eye> _ <Eye>&lt;</Eye></span>
							<span slot="opened"><Eye>*</Eye> _ <Eye>*</Eye></span>
							<span slot="closed"><Eye>-</Eye> _ <Eye>-</Eye></span>
						</Emoticon>
					</div>
				</li>
				<li class="flex justify-between items-center sm:flex-col sm:items-start">
					<a class="underline hover:text-shadow-glow" on:click={createToggle(false)} href="#about"
						>about</a
					>
					<div class="sm:hidden">
						<Emoticon>
							<span slot="hovering"><Eye>&gt;</Eye> _ <Eye>&lt;</Eye></span>
							<span slot="opened"><Eye>^</Eye> _ <Eye>^</Eye></span>
							<span slot="closed"><Eye>-</Eye> _ <Eye>-</Eye></span>
						</Emoticon>
					</div>
				</li>
				<li class="flex justify-between items-center sm:flex-col sm:items-start">
					<a
						class="underline hover:text-shadow-glow"
						on:click={createToggle(false)}
						href="#projects">projects</a
					>
					<div class="sm:hidden">
						<Emoticon>
							<span slot="hovering"><Eye>&gt;</Eye> _ <Eye>&lt;</Eye></span>
							<span slot="opened"><Eye>-</Eye> _ <Eye>-</Eye></span>
							<span slot="closed"><Eye>=</Eye> _ <Eye>=</Eye></span>
						</Emoticon>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
