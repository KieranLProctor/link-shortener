<template>
    <AppLayout>
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Link Info #{{ link.code }}
                </h2>

                <div class="space-x-6">
                    <button class="text-gray-700 hover:text-red-600 text-sm">Delete</button>
                    <button
                        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent font-semibold text-sm text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                        @click="openUpdateModal">Update Link
                    </button>
                </div>
            </div>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 tablet:px-6 desktop:px-8">
            </div>
        </div>

        <JetDialogModal :show="isUpdatingLink" @close="isUpdatingLink.value = false">
            <template #title>
                Update Link
            </template>

            <template #content>
                <JetLabel for="url" value="Url" />
                <JetInput id="url" v-model="form.url" type="text" class="mt-1 block w-full" />
                <!-- <JetInputError :message="form.errors.url" class="mt-2" /> -->
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeUpdateModal">
                    Nevermind
                </JetSecondaryButton>

                <JetButton class="ml-2" @click.native="updateLink" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Update
                </JetButton>
            </template>
        </JetDialogModal>

        <JetConfirmationModal :show="isDeletingLink" @close="closeConfirmModal">
            <template #title>
                Delete Link
            </template>

            <template #content>
                Are you sure you want to delete this link? Once this link is deleted it will no longer work but you will
                still be able to see analytics.
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeConfirmModal">
                    Nevermind
                </JetSecondaryButton>

                <!-- <JetDangerButton class="ml-2" @click.native="deleteLink(link)" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"> -->
                <JetDangerButton class="ml-2" @click.native="deleteLink">Delete</JetDangerButton>
            </template>
        </JetConfirmationModal>
    </AppLayout>
</template>

<script setup>
import AppLayout from "@/Layouts/AppLayout";
import { Inertia } from '@inertiajs/inertia';
import { ref } from "vue";
import JetButton from '@/Jetstream/Button.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetDangerButton from '@/Jetstream/DangerButton.vue';
import { useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
    link: Object
});

const form = useForm({
    _method: 'PUT',
    url: props.link.url
});

const isDeletingLink = ref(false);
const isUpdatingLink = ref(false);

const openConfirmModal = () => {
    isDeletingLink.value = true;
}

const closeConfirmModal = () => {
    isDeletingLink.value = false;
}

const deleteLink = () => {
    Inertia.delete(route('links.destroy', props.link), {
        preserveScroll: true,
        onSuccess: () => console.log('Deleted'),
    });
}

const openUpdateModal = () => {
    isUpdatingLink.value = true;
}

const closeUpdateModal = () => {
    isUpdatingLink.value = false;
    reset();
}

const reset = () => {
    form.url = null;
}

const updateLink = () => {
    form.post(route('links.update', props.link), {
        errorBag: 'updateLink',
        preserveScroll: true,
        onSuccess: () => closeUpdateModal(),
    });
}
</script>
