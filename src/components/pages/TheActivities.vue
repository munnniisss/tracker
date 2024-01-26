<script setup>

import ActivityItem from './ActivityItem.vue';
import { ValidateActivities } from '../../validators.js';

defineProps({
    activities: {
        required: true,
        type: Array,
        validatod: ValidateActivities
    }
})

</script>

<template>
    <div>
        <ul class="divide-y">
            <ActivityItem v-for="activity in activities" :key="activity" :activity="activity" />
        </ul>
    </div>
</template>

<style scoped>

</style>