<template>
    <span class="inline-flex items-center px-2.5 py-1 text-sm" :class="classes.badge">
        <span class="relative flex mr-1.5 w-2.5 h-2.5">
            <span class="relative inline-flex w-2.5 h-2.5 rounded-full" :class="classes.circle"></span>
        </span>{{ text }}
    </span>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    status: String
});

const text = ref(null);

const classes = {
    badge: null,
    circle: null,
};

switch (props.status) {
    case 'Active':
        classes.badge = 'bg-green-100 text-green-800';
        classes.circle = 'bg-green-800';
        text.value = props.status;
        break;
    case 'Expired':
        classes.badge = 'bg-red-100 text-red-800';
        classes.circle = 'bg-red-800';
        text.value = props.status;
        break;
    default:
        classes.badge = 'bg-gray-100 text-gray-800';
        classes.circle = 'bg-gray-800';
        text.value = 'Unknown';
        break;
}
</script>
