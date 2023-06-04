<template>
    <div @click="emit('newchat')"
        class="cont-head flex p-4 py-1  bg-[#2155bf] border-none rounded-xl my-2 hover:bg-violet-400">
        <div>
            <img :src="contact.imgUrl" class="w-14 h-14 rounded-full m-1">
        </div>
        <div class="flex flex-col m-3">
            <p class=" font-semibold text-center text-lg" v-text="contact.name"></p>
            <p title="last seen" class="text-gray-600 font-bold text-sm" v-text="contact.lastseen"></p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    contact: Object
})

const emit = defineEmits(['newchat'])

</script>