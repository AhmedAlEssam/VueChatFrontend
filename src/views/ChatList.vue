<template>
    <!-- <div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid hov ">
        <div>
            <img src='https://i.pravatar.cc/100' class="w-14 h-14 rounded-full m-1">
        </div>
        <div class="flex flex-col m-3">
            <p class=" font-semibold text-center text-lg">Milany Name</p>
            <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
        </div>
    </div>
    <div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid  rounded-tr-[3rem]">
        <div>
            <img src="https://i.pravatar.cc/100?" class="w-14 h-14 rounded-full m-1">
        </div>
        <div class="flex flex-col m-3">
            <p class=" font-semibold text-center text-lg">User Name</p>
            <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
        </div>
    </div> -->

<chat-item v-for="(conversation,index) in conversations" :conversation="conversation" :index="index" @select="selection" :si="si"></chat-item> 
<!-- <div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid hov ">
    <div>
        <img src='https://i.pravatar.cc/100' class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">Milany Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid  rounded-tr-[3rem]">
    <div>
        <img src="https://i.pravatar.cc/100?" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100??" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100???" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100????" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100?????" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100??????" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100???????" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div>
<div class="conv-head flex p-4 py-1 border-b-[1px] border-gray-100 border-solid ">
    <div>
        <img src="https://i.pravatar.cc/100" class="w-14 h-14 rounded-full m-1">
    </div>
    <div class="flex flex-col m-3">
        <p class=" font-semibold text-center text-lg">User Name</p>
        <p title="last seen" class="text-gray-600 font-bold text-sm">24 Hours</p>
    </div>
</div> -->
</template>

<script setup>
import ChatItem from '@/views/ChatItem.vue'
const props = defineProps({
    conversations: Object,
    index: Number,
    si: Number
})
const selection = (conv,i) =>{
    emit('select',conv,i) 
    
}
const emit= defineEmits(['select'])
</script>