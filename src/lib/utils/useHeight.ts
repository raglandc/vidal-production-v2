let intersectionObserver: IntersectionObserver;
let elementIntersectionRatio: number;
let ratio: number;

function ensureObserver() {
	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				elementIntersectionRatio = entry.intersectionRatio;
			}
		});
	});
}

export default function useHeight(element: HTMLElement) {
	ensureObserver();

	intersectionObserver.observe(element);

	ratio = elementIntersectionRatio * 100;

	return ratio;
}
