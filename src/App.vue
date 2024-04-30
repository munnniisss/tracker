<script setup>
import TheHeader from './components/TheHeader.vue';
import TheNav from './components/TheNav.vue';
import TheTimeline from './components/pages/TheTimeline.vue';
import TheActivities from './components/pages/TheActivities.vue';
import TheProgress from './components/pages/TheProgress.vue';
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants.js';
import { computed, ref } from 'vue';
import {
    generateTimelineItems,
    normalizePageHash,
    generateActivitySelectOptions,
    generateActivities
} from './functions.js';

const currentPage = ref(normalizePageHash());

const timelineItems = generateTimelineItems();

const activities = ref(generateActivities());

function goTo(page) {
    currentPage.value = page;
}

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value));

function deleteActivity(activity) {
    activities.value.splice(activities.value.indexOf(activity), 1);
}

function createActivity(activity) {
    activities.value.push(activity);
}
</script>

<template>
    <TheHeader @navigate="goTo($event)" />

    <main class="flex flex-grow flex-col">
        <TheTimeline
            v-show="currentPage === PAGE_TIMELINE"
            :timeline-items="timelineItems"
            :activity-select-options="activitySelectOptions" />
        <TheActivities
            v-show="currentPage === PAGE_ACTIVITIES"
            :activities="activities"
            @delete-activity="deleteActivity"
            @create-activity="createActivity" />
        <TheProgress v-show="currentPage === PAGE_PROGRESS" />
    </main>

    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped></style>
