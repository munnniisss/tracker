<script setup>

import ActivityItem from './ActivityItem.vue';
import { isActivityValid, ValidateActivities } from '../../validators.js';

const props = defineProps({
    activities: {
        required: true,
        type: Array,
        validator: ValidateActivities
    }
});

const emit = defineEmits({
    deleteActivity: isActivityValid
});

</script>

<template>
    <div>
        <ul class="divide-y">
            <ActivityItem v-for="activity in activities" :key="activity" :activity="activity"
                          @delete="emit('deleteActivity', activity)" />
        </ul>
    </div>
</template>

<style scoped>

</style>