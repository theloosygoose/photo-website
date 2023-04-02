import { writable } from 'svelte/store';

export const collectionNamesstore = writable({});
export const modalToggle = writable(false);
export const modalPhoto = writable(0);
export const currentModal = writable("");
