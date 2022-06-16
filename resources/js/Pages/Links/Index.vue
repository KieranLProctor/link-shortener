<template>
    <AppLayout title="Links">
        <template #header>
            <div class="flex justify-between">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight align-middle">
                    Links <span class="text-xs">(Total: {{ links.length }})</span>
                </h2>

                <button
                    class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    @click="openCreateModal()">Shorten Link
                </button>
            </div>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 tablet:px-6 desktop:px-8">
                <div>
                    <h3 class="text-lg leading-6 font-medium text-gray-900">All time</h3>
                    <dl class="mt-5 grid grid-cols-1 gap-5 tablet:grid-cols-3">
                        <div
                            class="px-4 py-5 bg-white shadow overflow-hidden tablet:p-6">
                            <dt class="text-sm font-medium text-gray-500 truncate">
                                Total Links
                            </dt>
                            <dd class="mt-1 text-3xl font-semibold text-gray-900">
                                {{ links.length }}
                            </dd>
                        </div>

                        <div
                            class="px-4 py-5 bg-white shadow overflow-hidden tablet:p-6">
                            <dt class="text-sm font-medium text-gray-500 truncate">
                                Total Visitors
                            </dt>
                            <dd class="mt-1 text-3xl font-semibold text-gray-900">
                                {{
                                    links.length > 0 ? links.map(link => link.visitors.length).reduce((prev, next) => prev + next) : 0
                                }}
                            </dd>
                        </div>

                        <div
                            class="px-4 py-5 bg-white shadow overflow-hidden tablet:p-6">
                            <dt class="text-sm font-medium text-gray-500 truncate">
                                ?????
                            </dt>
                            <dd class="mt-1 text-3xl font-semibold text-gray-900">
                                0
                            </dd>
                        </div>
                    </dl>
                </div>

                <div class="mt-6 space-y-2">
                    <Link v-for="link in links" :key="link.code" :href="route('links.info', link)"
                          class="px-4 py-2 bg-white shadow overflow-hidden tablet:px-6 tablet:py-4 block">
                        <!-- TODO: Change this to be the actual url in the .env (like this for testing purposes) -->
                        URL: {{ link.url }} | Short URL: https://link-shortener.test/{{ link.code }}
                    </Link>
                </div>
            </div>
        </div>

        <JetDialogModal :show="isCreatingLink" @close="isCreatingLink = false">
            <template #title>
                Shorten Link
            </template>

            <template #content>
                <JetLabel for="url" value="Url"/>
                <JetInput id="url" v-model="form.url" type="text" class="mt-1 block w-full"/>
                <!-- <JetInputError :message="form.errors.url" class="mt-2" /> -->
            </template>

            <template #footer>
                <JetSecondaryButton @click.native="closeCreateModal()">
                    Nevermind
                </JetSecondaryButton>

                <JetButton class="ml-2" @click.native="createLink" :class="{ 'opacity-25': form.processing }"
                           :disabled="form.processing">
                    Shorten
                </JetButton>
            </template>
        </JetDialogModal>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import JetButton from '@/Jetstream/Button.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';
import JetDialogModal from '@/Jetstream/DialogModal.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import {useForm} from '@inertiajs/inertia-vue3';
import {Link} from '@inertiajs/inertia-vue3';

export default {
    components: {
        AppLayout,
        JetButton,
        JetSecondaryButton,
        JetDialogModal,
        JetInput,
        JetLabel,
        Link,
    },
    props: {
        links: Object
    },
    data() {
        return {
            isCreatingLink: false,
            form: useForm({
                url: null
            }),
        }
    },
    methods: {
        openCreateModal: function () {
            this.isCreatingLink = true;
        },
        closeCreateModal: function () {
            this.isCreatingLink = false;
            this.reset();
        },
        reset: function () {
            this.form = {
                url: null
            }
        },
        createLink: function () {
            this.form.post(route('links.store'), {
                errorBag: 'updateProfileInformation',
                preserveScroll: true,
                onSuccess: () => {
                    this.reset()
                    this.closeCreateModal()
                }
            });
        },
    },
}
</script>

