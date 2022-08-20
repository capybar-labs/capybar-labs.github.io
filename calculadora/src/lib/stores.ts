import { writable } from 'svelte/store';
import { browser } from "$app/env";

let taxaStore;
let receberStore;
let cobrarStore;
if (browser) {
    taxaStore = localStorage.taxa;
    receberStore = localStorage.receber;
    cobrarStore = localStorage.cobrar;
}

export const taxaLocalStorage = writable<number>(taxaStore)
export const receberLocalStorage = writable<number>(receberStore)
export const cobrarLocalStorage = writable<number>(cobrarStore)


if (browser) {
    taxaLocalStorage.subscribe((value) => localStorage.taxa = value)
    receberLocalStorage.subscribe((value) => localStorage.receber = value)
    cobrarLocalStorage.subscribe((value) => localStorage.cobrar = value)
}
