<script setup>

import NavItem from "./NavItem.vue";
import { NAV_ITEMS } from "../constants.js";

defineProps(["currentPage"])

const emit = defineEmits(["navigate"])

</script>

<template>
    <nav class="sticky bottom-0 z-10 bg-white">
        <ul class="flex items-center justify-around border-t">
            <NavItem v-for="(icon, page) in NAV_ITEMS" :key="page"
                     @click="emit('navigate', page)"
                     :href="`#${page}`"
                     :class="{'bg-gray-200 pointer-events-none': currentPage === page}">
                <component :is="icon" class="h-6 w-6"/> {{ page }}
            </NavItem>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>