import { HOURS_IN_DAY, MIDNIGHT_HOUR, PAGE_TIMELINE } from './constants.js';
import { isPageValid } from './validators.js';

export function normalizePageHash() {
    const page = window.location.hash.slice(1);

    if (isPageValid(page)) {
        return page;
    }

    window.location.hash = PAGE_TIMELINE;
    return PAGE_TIMELINE;
}


export function generateTimelineItems() {
    const timelineItems = [];
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour });
    }
    return timelineItems;
}