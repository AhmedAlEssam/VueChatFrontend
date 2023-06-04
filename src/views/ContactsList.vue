<template>
    <div id="contactlist" @click.self="emit('close')"
        class="  absolute w-screen h-screen top-0 left-0 bg-gray-500 bg-opacity-10 ">
        <div
            class=" list absolute w-[400px] h-[60%] overflow-scroll  bg-[#2155bf] top-[20%]   left-[40%]  rounded-2xl p-5 z-50">
            <chat-item :conversation="newgroup" class="rounded-lg bg-white"></chat-item>
            <hr class="my-4">
            <contact v-for="user in users" :contact="user" @newchat="emit('close')"></contact>
        </div>
    </div>
</template>

<script setup>
import ChatItem from '@/views/ChatItem.vue'
import Contact from '@/views/Contact.vue'
const props = defineProps(
    {
        users: Object
    }

)
const newgroup = {
    title: "New Group Chat",
    lastseen: "",
    imgUrl: "/src/assets/groups.png"

};

const emit = defineEmits(['close'])
</script>

<style scoped></style>