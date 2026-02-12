import events22 from './event22';
import events23 from './event23';
import events24 from './event24';
import { eventsData } from './event25';

export interface ClubEvent {
	type: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
}

export { eventsData };

export const getEventsByYear = (year: string): ClubEvent[] => {
	switch (year) {
		case '2022 - 2023':
			return events22;
		case '2023 - 2024':
			return events23;
		case '2024 - 2025':
			return events24;
		case '2025 - 2026':
			return eventsData.map((e) => ({
				type: e.type,
				title: e.title,
				description: e.description,
				image: e.image,
				imageAlt: e.title
			}));
		default:
			return [];
	}
};
