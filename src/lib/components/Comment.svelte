<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { FilterSpecialAttributes } from '$lib/types';

	type $$Props = Omit<FilterSpecialAttributes<HTMLAttributes<HTMLSpanElement>>, 'class'>;
</script>

<span {...$$restProps} class="block text-dark-400"><slot /></span>
