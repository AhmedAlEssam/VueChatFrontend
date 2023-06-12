
<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  message: Object,
  me: Object,
  users: Object
});

const id = ref();
const getTime = (time) => {
  let d = new Date(time)
  return ((d.getHours() < 10 ? '0' + d.getHours() : d.getHours()) + ':' + (d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()))
}

onMounted(() => {
  id.value = props.me.id;
})

</script>
<template>
  <div id="conversation1" class="flex my-2 "
    :class="{ 'justify-end': message.user.id == id, 'justify-start': message.user.id != id }">
    <div id="conversation-body" class="w-2/4 m-3 flex">
      <div id="conversation-head" v-if="message.user.id != id" class="flex">
        <div id="conversation-head-avatar" class="w-[70px] rounded-full flex flex-col h-full justify-end">
          <img :src="message.user.pfp" alt="" class="rounded-full mx-2 shadow-lg shadow-slate-500">
        </div>
      </div>
      <div class="messages w-full rounded-3xl p-4 text-justify relative shadow-lg shadow-slate-500 "
        :class="{ 'bg-[#f26baa] text-white rounded-br-none': message.user.id == id, 'bg-[#ffffff] rounded-bl-none ': message.user.id != id }">
        <p class="text-xs cursor-pointer">{{ message.user.name }} </p>
        <hr>
        <p class=" text-sm absolute bottom-[-5px] m-1 "
          :class="{ 'right-3 text-white float-right': message.user.id == id }">
          {{ getTime(message.createdAt) }}</p>
        <p class=" w-full ">{{ message.text }}
        </p>
      </div>
    </div>
    <div id="conversation-head" v-if="message.user.id == id" class="flex">
      <div id="conversation-head-avatar" class="w-[70px] rounded-full flex flex-col h-full justify-end">
        <img :src="message.user.pfp" alt="" class="rounded-full mx-2 shadow-lg shadow-slate-500">
      </div>
    </div>
  </div>
</template>
