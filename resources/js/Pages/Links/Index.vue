<template>
    <AppLayout title="Links">
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-black leading-tight align-middle">
                    Links <span class="text-xs text-gray-700">(Total: {{ links.length }})</span>
                </h2>

                <button
                    class="inline-flex items-center px-4 py-2 bg-black border border-transparent font-semibold text-sm text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    @click="openCreateModal">Shorten Link
                </button>
            </div>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-4 px-4 tablet:py-8 tablet:px-6 desktop:px-8">
                <div class="flex justify-between mt-3 w-full">
                    <div class="flex">
                        <label class="relative flex items-center text-gray-400 focus-within:text-gray-500">
                            <span class="absolute inset-0 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                    class="ml-4 h-3">
                                    <path fill-rule="evenodd"
                                        d="M6 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zM0 6a6 6 0 0 1 2.46-4.845A6 6 0 0 1 7.824.283a6 6 0 0 1 3.867 3.818 6 6 0 0 1-.802 5.375l4.817 4.817a1 1 0 0 1-.012 1.402 1 1 0 0 1-1.402.012l-4.816-4.816a6 6 0 0 1-6.229.442A6 6 0 0 1 0 6z">
                                    </path>
                                </svg>
                            </span>
                            <input type="text" placeholder="Search"
                                class="pl-10 pr-3 w-full text-gray-900 text-sm bg-white border border-gray-200 focus:border-black focus:outline-none appearance-none focus:ring-0"
                                autocomplete="off" autocorrect="off">
                        </label>
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <button
                                class="inline-flex items-center justify-center px-3 py-2 text-gray-900 text-sm font-semibold"
                                :class="{ 'bg-gray-200': isGridView }" @click="isGridView = true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-5 h-5 text-gray-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                    </path>
                                </svg>
                            </button>
                            <button
                                class="inline-flex items-center justify-center px-3 py-2 text-gray-900 text-sm font-semibold"
                                :class="{ 'bg-gray-200': !isGridView }" @click="isGridView = false"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-5 h-5 text-gray-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <LinkCards :isGridView="isGridView" :links="links" @update="(link) => openUpdateModal(link)"
                    @delete="(link) => openDeleteModal(link)" />
            </div>
        </div>

        <!-- TODO: Combine the Create & Update modals. -->
        <JetDialogModal :show="isCreatingLink" @close="isCreatingLink = false">
            <template #title>
                Shorten Link
            </template>

            <template #content>
                <JetLabel for="url" value="Url" />
                <JetInput id="url" v-model="form.url" type="text" class="mt-1 block w-full" />
                <!-- <input type="text" id="url" name="url" v-model="form.url" class="mt-1 block w-full border border-gray-200 focus:border-black focus:outline-none appearance-none focus:ring-0" required /> -->
                <JetInputError :message="form.errors.url" class="mt-2" />
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeCreateModal">
                    Nevermind
                </JetSecondaryButton>

                <JetButton class="ml-2" @click.native="createLink" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Shorten
                </JetButton>
            </template>
        </JetDialogModal>

        <JetDialogModal :show="isUpdatingLink" @close="isUpdatingLink = false">
            <template #title>
                Update Link
            </template>

            <template #content>
                <JetLabel for="url" value="Url" />
                <JetInput id="url" v-model="formUpdate.url" type="text" class="mt-1 block w-full" />
                <!-- <input type="text" id="url" name="url" v-model="form.url" class="mt-1 block w-full border border-gray-200 focus:border-black focus:outline-none appearance-none focus:ring-0" required /> -->
                <JetInputError :message="formUpdate.errors.url" class="mt-2" />
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeUpdateModal">
                    Nevermind
                </JetSecondaryButton>

                <JetButton class="ml-2" @click.native="updateLink(selectedLink)"
                    :class="{ 'opacity-25': formUpdate.processing }" :disabled="formUpdate.processing">
                    Update
                </JetButton>
            </template>
        </JetDialogModal>

        <JetConfirmationModal :show="isDeletingLink" @close="closeDeleteModal">
            <template #title>
                Delete Link
            </template>

            <template #content>
                Are you sure you want to delete this link? Once this link is deleted it will no longer work.
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeDeleteModal">
                    Nevermind
                </JetSecondaryButton>

                <JetDangerButton class="ml-2" @click.native="deleteLink(selectedLink)"
                    :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Delete</JetDangerButton>
            </template>
        </JetConfirmationModal>
    </AppLayout>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia';
import { ref } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetConfirmationModal from '@/Jetstream/ConfirmationModal.vue';
import JetDangerButton from '@/Jetstream/DangerButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import { useForm } from '@inertiajs/inertia-vue3';
import LinkCards from '@/Pages/Links/Partials/LinkCards.vue';

// TODO: Combine all forms & create & updte logic.
const form = useForm({
    url: null
});

const formUpdate = useForm({
    _method: 'PUT',
    url: null
});

defineProps({
    links: Object
});

const isGridView = ref(true);
const isCreatingLink = ref(false);
const isUpdatingLink = ref(false);
const isDeletingLink = ref(false);
const selectedLink = ref(null);

const openCreateModal = (link) => {
    isCreatingLink.value = true;
}

const closeCreateModal = () => {
    isCreatingLink.value = false;
    form.reset();
}

const createLink = (link) => {
    Inertia.post(route('links.store', form), {
        preserveScroll: true,
        onSuccess: () => console.log('su'),
        onError: (err) => console.log(err),
    });
}

const openUpdateModal = (link) => {
    isUpdatingLink.value = true;
    selectedLink.value = link;
    formUpdate.url = link.url;

    console.log(formUpdate.url);
}

const closeUpdateModal = () => {
    isUpdatingLink.value = false;
    selectedLink.value = null;
    formUpdate.reset();
}

const updateLink = (link) => {
    console.log(link);


    Inertia.put(route('links.update', link), {
        preserveScroll: true,
        onSuccess: () => closeUpdateModal(),
        onError: (err) => console.log('error')
    });
}

const openDeleteModal = (link) => {
    isDeletingLink.value = true;
    selectedLink.value = link;
}

const closeDeleteModal = () => {
    isDeletingLink.value = false;
}

const deleteLink = (link) => {
    Inertia.delete(route('links.destroy', link), {
        preserveScroll: true,
        onSuccess: () => closeDeleteModal(),
        onError: (err) => console.log(err)
    });
}
</script>

