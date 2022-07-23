let intersectionObserver: IntersectionObserver;
let intersectionObserverEntry: IntersectionObserverEntry;
let ratio: number;

function ensureObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			intersectionObserverEntry = entry;
		});
	});
}

export default function useHeight(element: HTMLElement) {
	ensureObserver();

	intersectionObserver.observe(element);

	// window.addEventListener('scroll', () => {
	// 	console.log(ratio * 100);
	// });

	return {
		update() {
			console.log(intersectionObserverEntry);
		},

		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
