/**
 * Window events that let small client islands (buttons in the header, footer and page) talk to the
 * admin panel and toast without wrapping the server-rendered page in a shared provider.
 */
export const ADMIN_OPEN_EVENT = "anchorblock:admin-open";
export const TOAST_EVENT = "anchorblock:toast";

export function openAdmin() {
  window.dispatchEvent(new Event(ADMIN_OPEN_EVENT));
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }));
}
