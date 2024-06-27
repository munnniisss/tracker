import {
	BUTTON_TYPES,
	HOURS_IN_DAY,
	MIDNIGHT_HOUR,
	NAV_ITEMS,
} from './constants.js';

export function isPageValid(page) {
	return Object.keys(NAV_ITEMS).includes(page);
}

export function isTimelineItemValid({ hour }) {
	return isHourValid(hour);
}

export function validateSelectOptions(options) {
	return options.every(isSelectOptionValid);
}

function isSelectOptionValid({ value, label }) {
	return (
		(isNotEmptyString(value) || isNumber(value)) && isNotEmptyString(label)
	);
}

export function validateTimelineItems(timelineItems) {
	return timelineItems.every(isTimelineItemValid);
}

export function isUndefinedOrNull(value) {
	return isUndefined(value) || isNull(value);
}

export function isNumberOrNull(value) {
	return isNumber(value) || isNull(value);
}

export function isHourValid(value) {
	return isNumber(value) && isBetween(value, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);
}

export function isActivityValid({ id, name, secondsToComplete }) {
	return [
		isNotEmptyString(id),
		isNotEmptyString(name),
		isNumber(secondsToComplete),
	].every(Boolean);
}

export function validateActivities(value) {
	return value.every(isActivityValid);
}

export function isButtonTypeValid(value) {
	return BUTTON_TYPES.includes(value);
}

function isNotEmptyString(value) {
	return isString(value) && value.length > 0;
}

function isNumber(value) {
	return typeof value === 'number';
}

function isString(value) {
	return typeof value === 'string';
}

export function isNull(value) {
	return value === null;
}

export function isUndefined(value) {
	return value === undefined;
}

function isBetween(value, start, end) {
	return value >= start && value <= end;
}

export function isSelectValueValid(value) {
	return isNotEmptyString(value) || isNumberOrNull(value);
}
