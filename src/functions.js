import {
    HOURS_IN_DAY,
    MIDNIGHT_HOUR,
    PAGE_TIMELINE,
    SECONDS_IN_HOUR
} from './constants.js';
import { isPageValid } from './validators.js';

export function normalizePageHash() {
    const page = window.location.hash.slice(1);

    if (isPageValid(page)) {
        return page;
    }

    window.location.hash = PAGE_TIMELINE;
    return PAGE_TIMELINE;
}

export function generateActivities() {
    return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
        id: id(),
        name: name,
        secondsToComplete: hours * SECONDS_IN_HOUR
    }));
}

export function generateTimelineItems() {
    const timelineItems = [];
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour });
    }
    return timelineItems;
}

export function generateActivitySelectOptions(activities) {
    return activities.map((activity) => ({
        label: activity.name,
        value: activity.id
    }));
}

export function id() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
