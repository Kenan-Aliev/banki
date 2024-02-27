declare global {
	interface Window {
		gtag: any;
	}
}

type Event = 'submit' | 'click' | 'success'

export const gtagEvent = (eventName: Event, modelName: string) => {
	const label = `vsebanki_${eventName}_${modelName}`
	window.gtag('event', label, {
		'event_category': 'lead',
		event_label: label,
	});
};