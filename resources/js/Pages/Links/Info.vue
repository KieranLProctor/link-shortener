<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Link Info
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 tablet:px-6 desktop:px-8">
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
    components: {AppLayout},
    props: {
        link: Object
    }
}
</script>
