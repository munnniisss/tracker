<script setup>

import ActivityItem from './ActivityItem.vue';
import { isActivityValid, ValidateActivities } from '../../validators.js';

import TheActivityForm from '../TheActivityForm.vue';

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
    <div>
        <ul class="divide-y">
            <ActivityItem v-for="activity in activities" :key="activity" :activity="activity"
                          @delete="emit('deleteActivity', activity)" />
        </ul>
        <TheActivityForm @submit="emit('createActivity', $event)"/>
    </div>
</template>

<style scoped>

</style>