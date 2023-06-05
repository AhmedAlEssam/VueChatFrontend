<template>
 
<chat-item v-for="(conversation,index) in conversations" :conversation="conversation" :index="index" @select="selection" :si="si"></chat-item> 
 
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