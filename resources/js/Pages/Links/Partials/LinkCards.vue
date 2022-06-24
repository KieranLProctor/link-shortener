<template>
    <!-- Grid View -->
    <div class="mt-6" :hidden="!isGridView">
        <div class="flex flex-wrap -m-2">
            <div v-for="link in links" :key="link.code" class="flex flex-col w-1/4">
                <div class="flex flex-auto flex-col m-2 p-6 bg-white shadow-sm">
                    <div class="flex items-center">
                        <div class="truncate">
                            <a class="text-black text-sm font-bold tracking-normal truncate" :href="link.url">{{
                                    link.url
                            }}</a>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    <div class="flex flex-col flex-grow text-gray-500">
                        <div class="mt-2">
                            <div class="inline-block">
                                <div class="-mx-1 px-1 cursor-pointer" tabindex="0">
                                    <a :href="route('links.info', link)" class="flex items-center">#{{
                                            link.code
                                    }}
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-7">
                        <div>
                            <LinkStatus :status="link.is_expired ? 'Expired' : 'Active'" />
                        </div>
                        <div>
                            <span class="relative">
                                <button class="rounded-full text-gray-600 hover:bg-gray-200 cursor-pointer">
                                    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="p-1 h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M5.83325 3.49999C5.83325 2.85566 6.35559 2.33333 6.99992 2.33333C7.64425 2.33333 8.16658 2.85566 8.16658 3.49999C8.16658 4.14433 7.64425 4.66666 6.99992 4.66666C6.35559 4.66666 5.83325 4.14433 5.83325 3.49999ZM6.99992 5.83333C6.35559 5.83333 5.83325 6.35566 5.83325 6.99999C5.83325 7.64433 6.35559 8.16666 6.99992 8.16666C7.64425 8.16666 8.16658 7.64433 8.16658 6.99999C8.16658 6.35566 7.64425 5.83333 6.99992 5.83333ZM5.83325 10.5C5.83325 9.85566 6.35559 9.33333 6.99992 9.33333C7.64425 9.33333 8.16658 9.85566 8.16658 10.5C8.16658 11.1443 7.64425 11.6667 6.99992 11.6667C6.35559 11.6667 5.83325 11.1443 5.83325 10.5Z"
                                            fill="currentColor">
                                        </path>
                                    </svg>
                                </button>
                                <div class="forge-dropdown z-10 right-0 w-52 origin-top-right" style="display: none;">
                                    <button class="forge-dropdown-item text-gray-900">Refresh
                                        Status</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- List View -->
    <div class="w-full bg-white divide-gray-100 divide-y shadow-sm mt-6">
        <div v-for="link in links" :key="link.code" class="px-6 py-4" :hidden="isGridView">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="w-72 truncate">
                        <a class="text-black text font-bold tracking-normal flex items-center" :href="link.url">{{
                                link.url
                        }}
                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                    <div class="ml-10 mr-4">
                        <div class="text-gray-500">
                            <div class="inline-block">
                                <div class="-mx-1 px-1 cursor-pointer" tabindex="0">
                                    <a class="flex items-center" :href="route('links.info', link)">#{{
                                            link.code
                                    }}
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="ml-6">
                        <LinkStatus :status="link.is_expired ? 'Expired' : 'Active'" />
                    </div>
                    <div class="ml-6 pt-1">
                        <span class="relative">
                            <button class="rounded-full text-gray-600 hover:bg-gray-200 cursor-pointer"><svg
                                    viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-1 h-6">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.83325 3.49999C5.83325 2.85566 6.35559 2.33333 6.99992 2.33333C7.64425 2.33333 8.16658 2.85566 8.16658 3.49999C8.16658 4.14433 7.64425 4.66666 6.99992 4.66666C6.35559 4.66666 5.83325 4.14433 5.83325 3.49999ZM6.99992 5.83333C6.35559 5.83333 5.83325 6.35566 5.83325 6.99999C5.83325 7.64433 6.35559 8.16666 6.99992 8.16666C7.64425 8.16666 8.16658 7.64433 8.16658 6.99999C8.16658 6.35566 7.64425 5.83333 6.99992 5.83333ZM5.83325 10.5C5.83325 9.85566 6.35559 9.33333 6.99992 9.33333C7.64425 9.33333 8.16658 9.85566 8.16658 10.5C8.16658 11.1443 7.64425 11.6667 6.99992 11.6667C6.35559 11.6667 5.83325 11.1443 5.83325 10.5Z"
                                        fill="currentColor"></path>
                                </svg>
                            </button>
                            <div class="forge-dropdown z-10 right-0 w-52 origin-top-right" style="display: none;">
                                <button class="forge-dropdown-item text-gray-900">Refresh Status</button>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import LinkStatus from '@/Pages/Links/Partials/LinkStatus.vue'

defineProps({
    isGridView: Boolean,
    links: Object,
});
</script>
