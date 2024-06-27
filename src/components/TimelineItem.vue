<script setup>
import BaseSelect from './BaseSelect.vue';
import {
	isActivityValid,
	isTimelineItemValid,
	validateSelectOptions,
	validateActivities,
} from '../validators.js';
import { ref } from 'vue';
import TimelineHour from './TimelineHour.vue';

const props = defineProps({
	timelineItem: {
		type: Object,
		required: true,
		validator: isTimelineItemValid,
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
	selectActivity: isActivityValid,
});

function selectActivity(id) {
	emit(
		'selectActivity',
		props.activities.find((activity) => activity.id === id),
	);
}
</script>

<template>
	<li
		class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
		<TimelineHour :hour="timelineItem.hour" />

		<BaseSelect
			:selected="timelineItem.activityId"
			:options="activitySelectOptions"
			:placeholder="'Rest'"
			@select="selectActivity = $event" />
	</li>
</template>

<style scoped></style>
