import { modalToggle } from "$lib/stores";

export function toggleModal() {
    modalToggle.update((i:boolean) => {
        return i = !i;
    })
    modalToggle.subscribe((i:boolean) => {
        console.log(i);
    })
}