import "client-only";

export function getLocalStorage(key, defaultValue) {
	if (typeof localStorage !== 'undefined') {
		const stickyValue = localStorage.getItem(key);

		return (stickyValue !== null && stickyValue !== 'undefined') ? JSON.parse(stickyValue) : defaultValue;
	}
}

export function setLocalStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}