<template>
    <div id="conversation1" class="flex my-2 "
    :class="{ 'justify-end': message.outgoing, 'justify-start': !message.outgoing }">
    <div id="conversation-body" class="w-2/4 m-3 flex">
      <div id="conversation-head" v-if="!message.outgoing" class="flex">
        <div id="conversation-head-avatar" class="w-[70px] rounded-full flex flex-col h-full justify-end">
          <img src='https://i.pravatar.cc/100?{message.username}' alt=""
            class="rounded-full mx-2 shadow-lg shadow-slate-500">
        </div>
      </div>
      <div class="messages w-full rounded-3xl p-4 text-justify relative shadow-lg shadow-slate-500 "
        :class="{ 'bg-[#f26baa] text-white rounded-br-none': message.outgoing, 'bg-[#ffffff] rounded-bl-none ': !message.outgoing }">
        <p class=" text-sm absolute bottom-[-5px] m-1 "
          :class="{ 'right-3 text-white float-right': message.outgoing }">2:00</p>
        <p class=" w-full ">{{ message.text }}
        </p>
      </div>
    </div>
    <div id="conversation-head" v-if="message.outgoing" class="flex">
      <div id="conversation-head-avatar" class="w-[70px] rounded-full flex flex-col h-full justify-end">
        <img src='https://i.pravatar.cc/100?${message.username}' alt=""
          class="rounded-full mx-2 shadow-lg shadow-slate-500">
      </div>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
  message: Object,
});
</script>