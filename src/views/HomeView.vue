
<script setup>

import { ref } from 'vue';
import Header from '@/views/Header.vue'
import Sidebar from '@/views/Sidebar.vue'
import ChatWindow from '@/views/ChatWindow.vue';
const selectedConversetion = ref();
const logedin = ref(true);
const conversations = ref([]);
const users = ref([]);

conversations.value.push({
  title: "Abdulazeez",
  lastseen: '24 Hours',
  imgUrl: "https://i.pravatar.cc/100??",
  messages: [
    {
      outgoing: true,
      text: "Hello, World!",
      username: "hdrm147"
    },
    {
      outgoing: false,
      text: "Hello, Haidar!",
      username: "azeez"
    },

  ]
})
conversations.value.push({
  title: "Ahmed Ali",
  lastseen: '12 Hours',
  imgUrl: "https://i.pravatar.cc/100???",
  messages: [
    {
      outgoing: true,
      text: "Loooop,jvj,cvucrkvviuey",
      username: "hdrm147"
    },
    {
      outgoing: false,
      text: "Hello, Hai./nk.obtuiillu tdar!",
      username: "azeez"
    },

  ]
})
conversations.value.push({
  title: "Azzam Essam",
  lastseen: '1 Hour',
  imgUrl: "https://i.pravatar.cc/100????",
  messages: [
    {
      outgoing: true,
      text: ";;bybnl  ;oihLoooop",
      username: "hdrm147"
    },
    {
      outgoing: false,
      text: "Hello,Haidar! lbhyllutlitb ",
      username: "azeez"
    },

  ]
})
conversations.value.push({
  title: "aliya ali",
  lastseen: '1 Hour',
  imgUrl: "https://i.pravatar.cc/100?????",
  messages: [
    {
      outgoing: true,
      text: "Loooj,hfv,jkop",
      username: "hdrm147"
    },
    {
      outgoing: false,
      text: "Hello,iflu Haidar!",
      username: "azeez"
    },

  ]
})
users.value.push({
  name: "Milany",
  lastseen: "",
  imgUrl: "https://i.pravatar.cc/100?",

})
users.value.push({
  name: "Abdulazeez",
  lastseen: "",
  imgUrl: "https://i.pravatar.cc/100??",

})
users.value.push({
  name: "Ahmed Ali",
  lastseen: "",
  imgUrl: "https://i.pravatar.cc/100???",

})
users.value.push({
  name: "Azzam essam",
  lastseen: "",
  imgUrl: "https://i.pravatar.cc/100????",

})
users.value.push({
  name: "Mohamed Ahmed",
  lastseen: "",
  imgUrl: "https://i.pravatar.cc/100?????",

})



const selection = (conversation) => {
  selectedConversetion.value = conversation;
}
</script>


<template>
  <div id="wraper" class=" flex w-full h-[94vh] m-6 mx-24 rounded-[4rem] bg-[#2155bf]">
    <Header></Header>
    <div id="container" class="flex w-full h-[-webkit-fill-available] m-4 ml-0 rounded-[3rem] overflow-hidden">
      <div id="main-container" class="bg-[#f3f6ff] h-full w-full mx-2 rounded-[3rem] basis-3/4 flex overflow-hidden ">
        <Sidebar :conversations="conversations" :users="users" @select="selection"></Sidebar>
        <!-- <RouterView> -->
        <chat-window :selectedConversetion="selectedConversetion"></chat-window>
      </div>
      <div id="profile-info" class=" bg-slate-100 h-full w-full mx-2 rounded-[3rem] basis-1/4 flex flex-col">

        <div class=" photo-name flex flex-col justify-center items-center p-8 ">
          <div class="bg-white rounded-full p-2 w-fit shadow-2xl m-2">
            <img src="https://i.pravatar.cc/100" alt="" class="rounded-full ">
          </div>
          <div class="flex flex-col justify-center items-center">
            <h1 class="font-bold">Milany Name</h1>
            <p class="text-gray-400 text-xs">Bio Caption</p>
          </div>
        </div>

        <!-- stared messages dropdown -->
        <div class="flex flex-col justify-center items-center">

          <div
            class="bg-orange-100 p-[1px] hover:cursor-pointer rounded-[30px] m-4 flex items-center mx-8 w-[-webkit-fill-available] shadow-sm">
            <img src="@/assets/star.png" alt="" class="rounded-full bg-white w-10 p-2 ml-3">
            <p class="text-md font-bold p-4"> Stared Messages</p>
            <p class="arrow down m-auto"></p>
          </div>

          <div
            class="bg-red-100 p-[1px] hover:cursor-pointer rounded-[30px] m-4 flex items-center mx-8 w-[-webkit-fill-available] shadow-sm">
            <img src="@/assets/media.png" alt="" class="rounded-full bg-white w-10 p-2 ml-3">
            <p class="text-md font-bold p-4"> Media (44)</p>
            <p class="arrow down m-auto"></p>
          </div>

          <div
            class="bg-blue-100 hover:cursor-pointer p-[1px] rounded-t-[30px] m-4 mb-0 flex items-center mx-8 w-[-webkit-fill-available] border-b-[1px] border-white">
            <img src="@/assets/docs.png" alt="" class="rounded-full bg-white w-10 p-2 ml-3">
            <p class="text-md font-bold p-4"> Files & Docs</p>
            <p class="arrow up m-auto"></p>
          </div>
          <div
            class="bg-blue-100 p-[1px] rounded-b-[30px] m-4 mt-0 flex flex-col items-center mx-8 w-[-webkit-fill-available] ">
            <div class="flex p-[1px] items-center justify-between w-full hover:cursor-pointer">
              <img src="@/assets/folder.png" alt="" class="rounded-full bg-white w-10 h-10 p-2 ml-3">
              <p class="text-sm text-gray-700 p-4"> Mockup_Design.zip</p>
              <img src="@/assets/download.png" alt="" class=" m-auto w-6">
            </div>
            <div class="flex p-[1px] items-center justify-between w-full hover:cursor-pointer">
              <img src="@/assets/word.png" alt="" class="rounded-full bg-white w-10 h-10 p-2 ml-3">
              <p class="text-sm text-gray-700 p-4"> Feedback_12.docx</p>
              <img src="@/assets/download.png" alt="" class=" m-auto w-6">
            </div>
            <div class="flex p-[1px] items-center justify-between w-full hover:cursor-pointer ">
              <img src="@/assets/pdf.png" alt="" class="rounded-full bg-white w-10 h-10 p-2 ml-3">
              <p class="text-sm text-gray-700 p-4"> New_Project_t.pdf</p>
              <img src="@/assets/download.png" alt="" class=" m-auto w-6">
            </div>




          </div>

          <div
            class="bg-orange-100 p-[1px] rounded-[30px] m-4 flex items-center hover:cursor-pointer mx-8 w-[-webkit-fill-available] shadow-sm">
            <img src="@/assets/info.png" alt="" class="rounded-full bg-white w-10 p-2 ml-3">
            <p class="text-md font-bold p-4"> Information </p>
            <p class="arrow down m-auto"></p>
          </div>



        </div>


      </div>
    </div>
  </div>
</template>







<!-- <template>
    <div class="home">
        <h1>Home</h1>
        <p>Home page content goes here.</p>
    </div>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
        <div class="wrapper"> 
    
          <nav>
             <RouterLink  to="/">Home</RouterLink>
            <RouterLink to="/login">Login</RouterLink> 
          </nav>
        </div>
      </header>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script> -->