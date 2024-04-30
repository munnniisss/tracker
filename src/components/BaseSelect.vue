<script setup>

import BaseButton from './BaseButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline/index.js';
import { isSelectValueValid, isUndefinedOrNull, validateSelectOptions } from '../validators.js';
import { computed } from 'vue';
import { BUTTON_TYPE_NEUTRAL } from '../constants.js';
import { normalizeSelectValue } from '../functions.js';


const props = defineProps(
    {
        selected: [String, Number],
        options: {
            type: Array,
            required: true,
            validator: validateSelectOptions
        },
        placeholder: {
            type: String,
            required: true
        }
    }
);

const emits = defineEmits({
    select: isSelectValueValid

});

const isNotSelected = computed(
    () => {
        return isUndefinedOrNull(props.selected);
    }
);

function select(value) {
    emits('select', normalizeSelectValue(value));
}

</script>

<template>
    <div class="flex gap-2">
        <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
                @change="select($event.target.value)">
            <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
            <option
                v-for="{ value, label } in options"
                :key="value"
                :value="value"
                :selected="value === selected"
            >
                {{ label }}
            </option>
        </select>
    </div>

</template>

<style scoped>

</style>