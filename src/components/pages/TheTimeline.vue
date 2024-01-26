<script setup>

import TimelineItem from '../TimelineItem.vue';
import { validateTimelineItems } from '../../validators.js';


const props = defineProps({
    timelineItems: {
        type: Array,
        required: true,
        validator: validateTimelineItems
    }
})


</script>

<template>
    <div class="mt-7">
        <ul>
            <TimelineItem
                v-for="timelineItem in timelineItems"
                :key="timelineItem.hour"
                :timeline-item="timelineItem"
            />
        </ul>
    </div>
</template>

<style scoped>

</style>