<template>
  <div id="navigation" class=" h-full rounded-[4rem] flex flex-col justify-between ">
    <div id="logo" class="w-20 m-5">
      <img src="@/assets/logo.png" class=" hover:cursor-pointer" alt="ChatLogo" title="LOGO">
    </div>
    <div id="nav" class=" flex flex-col ">
      <div id="chats">
        <img src="@/assets/chats.png" alt="" title="Chats">
      </div>
      <div id="groups">
        <img src="@/assets/groups.png" alt="" title="Groups">
      </div>
      <div id="notifications">
        <img src="@/assets/notfication.png" alt="" title="Notifications">
      </div>
      <div id="settings">
        <img src="@/assets/settings.png" alt="" title="Settings">
      </div>
      <div id="settings">
        <img src="@/assets/settings.png" alt="">
      </div>
      <div id="settings" @click="logout" class=" cursor-pointer">
        <svg class="svg-icon w-[29px]" style=" vertical-align: middle;fill: currentColor;overflow: hidden;"
          viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M768 106V184c97.2 76 160 194.8 160 328 0 229.6-186.4 416-416 416S96 741.6 96 512c0-133.2 62.8-251.6 160-328V106C121.6 190.8 32 341.2 32 512c0 265.2 214.8 480 480 480s480-214.8 480-480c0-170.8-89.6-321.2-224-406z"
            fill="#fff" />
          <path d="M512 32c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V64c0-17.6-14.4-32-32-32z"
            fill="#fff" />
        </svg>

        <!-- <img src="@/assets/settings.png" alt=""> -->
      </div>
    </div>
    <div id="nav-foot"></div>
    <div id="nav-foot2"></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import http from "@/helpers/http";
const router = useRouter();
const logout = async () => {
  let storedEmail = JSON.parse(localStorage.getItem("user"));
  storedEmail = storedEmail.email;
  try {  await http.post('/auth/logout', { email: storedEmail }).then((res) => {
      console.log(res.data);
    }); 
  } catch (e) {
    console.log(e);
    // localStorage.clear();
    // if(e.response.data.message)
    // errorMsg.value = e.response.data.message;
  }
  // finally {
  //     isSubmitting.value = false
  // }

  localStorage.removeItem('accessToken')
  router.push('/login')
}
</script>