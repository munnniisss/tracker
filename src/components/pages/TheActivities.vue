<script setup>
import ActivityItem from './ActivityItem.vue';
import { isActivityValid, ValidateActivities } from '../../validators.js';

import TheActivityForm from '../TheActivityForm.vue';
import TheActivitiesEmptyState from './TheActivitiesEmptyState.vue';

const props = defineProps({
    activities: {
        required: true,
        type: Array,
        validator: ValidateActivities
    }
});

const emit = defineEmits({
    deleteActivity: isActivityValid,
    createActivity: isActivityValid
});
</script>

<template>
    <div class="flex flex-col grow">
        <ul v-if="activities.length > 0" class="divide-y grow">
            <ActivityItem
                v-for="activity in activities"
                :key="activity.id"
                :activity="activity"
                @delete="emit('deleteActivity', activity)" />
        </ul>
        <TheActivitiesEmptyState v-else />
        <TheActivityForm @submit="emit('createActivity', $event)" />
    </div>
</template>
