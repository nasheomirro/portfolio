<script lang="ts">
	import type { FilterSpecialAttributes } from '$lib/types';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = Omit<FilterSpecialAttributes<HTMLAttributes<HTMLSpanElement>>, 'class'>;
</script>

<span {...$$restProps} class="text-bright-600 text-shadow-glow"><slot /></span>
