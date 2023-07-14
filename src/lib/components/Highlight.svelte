<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { FilterSpecialAttributes } from '$lib/types';

	type $$Props = Omit<FilterSpecialAttributes<HTMLAttributes<HTMLSpanElement>>, 'class'> & {
		color?: 'positive' | 'negative';
	};
  
	export let color: 'positive' | 'negative' = 'positive';
</script>

<span {...$$restProps} class={color === 'positive' ? 'text-highlight-400' : 'text-bright-600'}
	><slot /></span
>
