<template>
    <chat-item v-for="(conversation, index) in conversations" :conversation="conversation" :si="si" :me="me" :index="index"
        @select="selection"></chat-item>
</template>

<script setup>
import ChatItem from '@/views/ChatItem.vue'

const props = defineProps({
    conversations: Object,
    index: Number,
    me: Object,
    si: Number
})

const selection = (conv, i) => {
    emit('select', conv, i)
}

const emit = defineEmits(['select'])

</script>