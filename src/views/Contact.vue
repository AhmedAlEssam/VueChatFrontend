<script setup>

const props = defineProps({
    contact: Object
})

const timeSince = () => {
    var seconds = (Date.now() - new Date(props.contact.lastseen).getTime()) / 1000;
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return "Online";
}

const emit = defineEmits(['newchat'])

</script>

<template>
    <div @click="emit('newchat')"
        class="cont-head flex p-4 py-1 bg-[#2155bf] border-none rounded-xl my-2 hover:bg-violet-400">
        <div>
            <img :src="contact.pfp" class="w-14 h-14 rounded-full m-1">
        </div>
        <div class="flex flex-col m-3">
            <p class=" font-semibold text-gray-200 text-lg" v-text="contact.name"></p>
            <p title="last seen" class="text-gray-200 font-bold text-sm" v-text="timeSince()"></p>
        </div>
    </div>
</template>
