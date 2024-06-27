<script setup>
import TimelineItem from '../TimelineItem.vue';
import {
	validateActivities,
	validateSelectOptions,
	validateTimelineItems,
	isTimelineItemValid,
	isActivityValid,
} from '../../validators.js';

const props = defineProps({
	timelineItems: {
		type: Array,
		required: true,
		validator: validateTimelineItems,
	},
	activitySelectOptions: {
		required: true,
		type: Array,
		validator: validateSelectOptions,
	},
	activities: {
		required: true,
		type: Array,
		validator: validateActivities,
	},
});

const emit = defineEmits({
	setTimelineItemActivity({ timelineItem, activity }) {
		return [isTimelineItem(timelineItem), isActivity(activity)].every(
			Boolean,
		);
	},
});
</script>

<template>
	<div class="mt-7">
		<ul>
			<TimelineItem
				v-for="timelineItem in timelineItems"
				:key="timelineItem.hour"
				:timeline-item="timelineItem"
				:activities="activities"
				:activity-select-options="activitySelectOptions"
				@select-activity="
					emit('setTimelineItemActivity', {
						timelineItem,
						activity: $event,
					})
				" />
		</ul>
	</div>
</template>

<style scoped></style>
