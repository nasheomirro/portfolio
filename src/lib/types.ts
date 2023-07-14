export type GetListeners<T> = Extract<keyof T, `on:${string}`>;
export type GetBindings<T> = Extract<keyof T, `bind:${string}`>;

export type FilterSpecialAttributes<T, E extends GetListeners<T> | GetBindings<T> = never> = Omit<
	T,
	Exclude<GetBindings<T> | GetListeners<T>, E>
>;
