<template>
    <div id="chat-head-sidebar-with-search" class="h-fill basis-1/3 rounded-[3rem] m-5 overflow-hidden">
        <div id="newchat-searchbar" class="bg-white flex flex-col rounded-[3rem] rounded-bl-none  overflow-hidden pb-6" :class="{'rounded-br-none':Index}"
        >
            <div class="bg-white flex justify-between">
                <div class="border-[2px] border-dashed border-gray-300 rounded-[2rem] m-3 w-full flex">
                    <div @click="isNewChatOpen = true"
                        class="flex hover:translate-x-5 hover:translate-y-5 transition-all bg-white rounded-[2rem] hover:shadow-2xl hover:cursor-pointer">
                        <div class="flex ">
                            <p class="w-16 h-16 rounded-full bg-violet-100 text-[3rem] text-blue-800 text-center m-2"
                                style="-webkit-writing-mode: vertical-lr; font-family: monospace">+</p>
                        </div>
                        <div>
                            <p class=" text-2xl text-center m-5 my-6">Create New</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class=" text-3xl m-5 my-6 font-bold font-sans">Chats</p>
            </div>
            <div class="relative">
                <input type="text" name="" id="" placeholder="Search"
                    class=" bg-violet-100 rounded-full m-5 p-3 font-bold font-sans">
                <img src="@/assets/search.png" alt="" class="w-8 absolute right-14 bottom-7 hover:cursor-pointer">
            </div>
        </div>
        <div id="chatheads" class=" h-[550px] overflow-scroll ">
            <chat-list :conversations="conversations" @select="selection" :si="selectedIndex"></chat-list>
        </div>
        <contacts-list @close="isNewChatOpen = false" v-if="isNewChatOpen" :users="users" > </contacts-list>
    </div>
</template>

<script setup>
import ChatList from '@/views/Chatlist.vue'
import ContactsList from '@/views/ContactsList.vue'
import { ref } from 'vue';
const props = defineProps({
    conversations: Object,
    index: Number,
    users: Object,
})
const Index = ref(100);
const selectedIndex = ref(1000);

const selection = (conv,i) => {
    selectedIndex.value = i; 
    emit('select', conv,i);
    Index.value = i;

}

const emit = defineEmits(['select'])

const isNewChatOpen = ref(false);


</script>