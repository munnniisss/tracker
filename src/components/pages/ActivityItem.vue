<script setup>
import BaseSelect from '../BaseSelect.vue';
import BaseButton from '../BaseButton.vue';
import { TrashIcon } from '@heroicons/vue/24/outline/index.js';
import { ref } from 'vue';
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../../constants.js';
import { isActivityValid, isUndefined } from '../../validators.js';

const props = defineProps({
    activity: {
        type: Object,
        required: true,
        validator: isActivityValid
    }
});

const emit = defineEmits({
    delete: isUndefined
});

const secondsToComplete = ref(null);
</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl">{{ activity.name }}</span>
        </div>
        <div>
            <BaseSelect
                :selected="secondsToComplete"
                class="font-mono"
                placeholder="h:mm"
                :options="PERIOD_SELECT_OPTIONS"
                @select="secondsToComplete = $event" />
        </div>
    </li>
</template>

<style scoped></style>
