<script setup>
const props = defineProps({
    conversation: Object,
    index: Number,
    si: Number,
    me: Object
})

const emit = defineEmits(['select'])
const selection = (conv, i) => {
    emit('select', conv, i)
} 

</script>

<template>
    <div class="conv-head flex bg-white p-4 py-1 border-gray-100 border-solid rounded-none"
        @click="selection(conversation, index)" :class="{
            ' bg-transparent bg-opacity-0 border-l-[5px] border-solid border-pink-500 ': props.si == props.index, ' rounded-br-[3rem]': props.si - 1 == index, ' rounded-tr-[3rem]': props.si + 1 == index,
        }">
        <div>
            <img :src="conversation.imgUrl" class="w-14 h-14 rounded-full m-1">
        </div>
        <div class="flex flex-col m-3">
            <p class=" font-semibold text-center text-lg" v-text="conversation.title"></p>
            <p title="last seen" class="text-gray-600 font-bold text-sm" v-text="conversation.lastseen"></p>
        </div>
    </div>
</template>