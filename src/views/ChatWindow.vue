
<script setup>
import { ref, watch } from "vue"
import Message from "@/views/Message.vue"
import http from "@/helpers/http"

const props = defineProps({
  selectedConversetion: Object,
  me: Object,
  users: Object
})

const selectedUsers = ref([]);
const typing = ref("")
const drawer = ref();

const sendMessage = async () => {
  if (typing.value.length > 0) {
    try {
      let id = props.selectedConversetion.id;
      await http.post(`/conversations/${id}/messages`, {
        text: typing.value,
        users: selectedUsers.value,
        title: ''
      }).then(res => {
        props.selectedConversetion.messages.push({
          text: typing.value,
          user: props.me,
          createdAt: Date()
          // date: new Date.now().getTime()
        })
        typing.value = "";
      })
      drawer.value.scrollTop = drawer.value.scrollHeight;
    } catch (e) {
      console.log(e)
    }
  }
}

watch(() => props.selectedConversetion, () => {
  if (drawer.value) {
    setTimeout(() => {
      drawer.value.scrollTop = drawer.value.scrollHeight;
    }, 10);
  }
})

</script>

<template>
  <div id="conversations-container" class=" w-full flex flex-col mb-5 h-full">
    <div v-if="!selectedConversetion" class="flex justify-center items-center h-full">
      <p class="text-3xl font-bold">Please select Conversation</p>
    </div>
    <div v-else class="h-[70%]">
      <div id="header-bar" class=" p-3 my-6 flex justify-between">
        <div class="flex p-4 py-1 ">
          <div class="h-full">
            <img :src="selectedConversetion.imgUrl" class="w-10 h-10 rounded-full m-1 shadow-lg shadow-slate-500">
          </div>
          <div class="flex flex-col m-2 ">
            <p class=" font-semibold text-center text-md ">{{ selectedConversetion.title }}
            </p>
            <p title="last seen" class="text-gray-400 font-bold text-xs">{{ selectedConversetion.lastseen }}</p>
          </div>
        </div>
        <div>
          <p class="m-4 text-2xl font-bold text-gray-500 hover:cursor-pointer">...</p>
        </div>
      </div>
      <div id="conversations" ref="drawer" class="flex flex-col w-fill h-full m-4 overflow-scroll">
        <message v-for="(message, key) in selectedConversetion.messages" :me="me" :users:="users" :message="message">
        </message>
      </div>
      <div id="conversation-foot" class=" justify-self-end relative m-2 mx-5">
        <div id="conversation-foot-input">
          <input type="text" v-model="typing" @keyup.enter="sendMessage" placeholder="Type a message"
            class="w-full p-4 rounded-[4rem] text-lg">
        </div>
        <div id="conversation-foot-send" @click="sendMessage"
          class="flex bg-violet-100 p-1 absolute hover:cursor-pointer right-10 top-2 rounded-full w-12 h-12 content-center items-center">
          <img src="@/assets/send.svg" alt="" class="w-8 m-auto">
        </div>
      </div>
    </div>
  </div>
</template>