import { writable } from "svelte/store";

export const currentTab = writable<string | null>(null);
