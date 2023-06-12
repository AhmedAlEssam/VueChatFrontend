<script setup>
import { onMounted, ref, nextTick, reactive } from 'vue'
import { useRouter } from "vue-router";
import http from "@/helpers/http";

const router = useRouter();
const errorMsg = ref('');
const isLogin = ref(true)
const s_u_name = ref('Ahmed')
const s_u_email = ref('a@b.c')
const s_u_password = ref('1234')
const s_i_email = ref('a@b.c')
const s_i_password = ref('1234')


const slide_signin = () => {
    isLogin.value = !isLogin.value;
    // if (isLogin.value)
    // window.location.replace('/login')
    // else
    // window.location.replace('/signup')
}

const signup = async () => {
    errorMsg.value = null;
    if (!s_u_name.value || !s_u_email.value || !s_u_password.value) {
        errorMsg.value = "Please fill all fields"
        return;
    }
    try {
        const { data } = await http.post('/auth/signup', {
            name: s_u_name.value,
            email: s_u_email.value,
            password: s_u_password.value
        })
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push({ name: "home" });
    } catch (e) {
        console.log(e);
        // if(e.response.data.message)
        // errorMsg.value = e.response.data.message;
    }
    // finally {
    // isSubmitting.value = false
    // }
}

const signin = async () => {
    errorMsg.value = null;
    if (!s_i_email.value || !s_i_password.value) {
        errorMsg.value = "Please fill all fields"
        return;
    }
    try {
        const { data } = await http.post('/auth/login', {
            email: s_i_email.value,
            password: s_i_password.value
        })
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push({ name: "home" });
    } catch (e) {
        console.log(e);
        if (e.response.data.message)
            errorMsg.value = e.response.data.message;
    }
}

// maybe this fanction can be deleted 
// because thier is a Middleware in router (beforeEach) doing its job
const refresh = async () => {
    try {
        let storedEmail = JSON.parse(localStorage.getItem("user"));
        storedEmail = storedEmail.email;
        if (localStorage.getItem("accessToken")) {
            await http.get('/auth/me', { email: storedEmail }).then((res) => {
                router.push({ name: "home" });
            })
        }
    } catch (e) {
        localStorage.setItem("accessToken", '');
    }
}

onMounted(() => {
    isLogin.value = true;
    refresh();
})
</script>
<template>
    <div id="modal" class="flex justify-center items-center h-screen w-full bg-black bg-opacity-10 ">
        <div id="login-modal"
            class="select-none w-[900px] h-[600px] relative border-0 border-solid border-red-700 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out transform bg-blue-600 ">
            <div id="signin-front"
                class="pt-20 bg-white absolute h-full z-10 transition-all duration-1000 ease-in-out text-center left-0 overflow-hidden"
                :class="{ 'w-[60%] ': isLogin, 'w-0': !isLogin }">
                <div class="w-[540px] relative transition-all duration-1000 ease-in-out right-0"
                    :class="{ 'right-[0%] ': isLogin, 'right-[-1080px]': !isLogin }">
                    <h1 class="text-center font-bold text-4xl text-sky-600 mb-9" style=" letter-spacing: -1px; ">Sign in
                        to VueChat</h1>
                    <div class="icons flex w-full justify-center items-center ">
                        <a href="/login/facebook"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                                class="w-8" /></a>
                        <a href="/login/google"><img src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                                class="w-8" /></a>
                        <a href="/login/github"><img src="https://img.icons8.com/fluent/48/000000/github.png"
                                class="w-8" /></a>
                    </div>
                    <p class="text-sm text-black">Or Use Your Email Account</p>
                    <div class="inputs">
                        <div method="POST" action="{{route('login')}}">
                            <input id="email" type="email" v-model="s_i_email"
                                class=" px-4 py-4 m-1 w-[85%] border-solid border-2 border-gray-100 text-center"
                                name="email" placeholder="E-Mail" required autofocus>
                            <input id="password" type="password" v-model="s_i_password"
                                class=" px-4 py-4 m-1 w-[85%] border-solid border-2 border-gray-100 text-center"
                                name="password" required placeholder="Password">
                            <span class="block text-red-500 font-bold" v-text="`${errorMsg}${' .'}`" role="alert"
                                :class="{ 'opacity-0': !errorMsg, 'opacity-100': errorMsg }" />
                            <div class="form-check">
                                <input class="form-check-input m-1" type="checkbox" name="remember" id="remember">
                                <label class="form-check-label" for="remember">Remember Me</label>
                            </div>
                            <a href="/forget_password" class=" text-blue-600">Forget your password?</a>
                            <br>
                            <input type="button" value="SIGN IN"
                                class="text-white font-bold rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out cursor-pointer m-9 p-3 w-36"
                                @click="signin">
                        </div>
                    </div>
                </div>
            </div>
            <div id="signin-back" class="w-[40%] flex items-center justify-center">
                <div class="text-white pt-[41%] m-[18%] bg-transparent text-center">
                    <p>To Keep Connected with us </p>
                    <p>Please login with your personal info</p>
                </div>
            </div>
            <div id="signup-back"
                class=" right-0 absolute h-full w-[50%] bg-blue-800 transition-all duration-1000 ease-in-out text-center float-left"
                style="background-color: #0c1bd38a;">
                <div class=" text-white relative w-[540px] transition-all duration-1000 ease-in-out pt-[41%]"
                    :class="{ 'right-[0%] ': isLogin, 'right-[-1080px]': !isLogin }">
                    <h1>Hello,Friend!</h1>
                    <p>Enter your personal details</p>
                    <p>And start journey with us</p>
                </div>
            </div>
            <div id="middle"
                class=" w-[40%] h-full text-white text-center z-30 absolute top-0 transition-all duration-1000 ease-in-out"
                :class="{ 'right-[0] ': isLogin, 'right-[60%]': !isLogin }">
                <div @click="slide_signin"
                    class=" w-[57%] m-auto mt-[102%] relative h-12 border-solid border-2 border-white rounded-full cursor-pointer p-[3%]">
                    <div v-if="isLogin">to SIGN UP</div>
                    <div v-else>to SIGN IN</div>
                </div>
            </div>
            <div id="signup-front"
                class=" flex flex-col max-w-xl absolute h-full z-10 transition-all duration-1000 ease-in-out text-center w-full overflow-hidden bg-white"
                style="padding-top: 9%;" :class="{ 'right-[-80%] ': isLogin, 'right-[0%]': !isLogin }">
                <div class=" absolute w-full transition-all duration-1000 ease-in-out"
                    :class="{ 'left-[-1080px] ': isLogin, 'left-[0%]': !isLogin }">
                    <h1 class="text-center font-bold text-4xl text-sky-600 mb-9" style=" letter-spacing: -1px; ">Create
                        Account</h1>
                    <p>To Keep Connected with us please</p>
                    <p>Signup with your personal info</p>
                    <div class="icons flex w-full justify-center items-center ">
                        <a href="/login/facebook"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                                class="w-8" /></a>
                        <a href="/login/google"><img src="https://img.icons8.com/fluent/48/000000/google-logo.png"
                                class="w-8" /></a>
                        <a href="/login/github"><img src="https://img.icons8.com/fluent/48/000000/github.png"
                                class="w-8" /></a>
                    </div>
                    <p>Or use Your E-Mail for Registeration</p>
                    <div class="inputs ">
                        <form action="/" method="post" autocomplete="off" class="flex flex-col justify-center items-center">
                            <input v-model="s_u_name"
                                class=" px-4 py-4 m-1 w-[85%] border-solid border-2 border-gray-100 text-center" type="text"
                                name="name" placeholder="Your Name">
                            <input v-model="s_u_email"
                                class=" px-4 py-4 m-1 w-[85%] border-solid border-2 border-gray-100 text-center" type="text"
                                name="email" placeholder="Valid Email" autocomplete="off">
                            <input v-model="s_u_password"
                                class=" px-4 py-4 m-1 w-[85%] border-solid border-2 border-gray-100 text-center"
                                type="password" name="pass" placeholder="Password" autocomplete="new-password">
                            <input
                                class="text-white font-bold rounded-full bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out cursor-pointer m-9 p-3 w-36"
                                value="Signup" type="button" @click="signup">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped> 

#signup-front div .inputs {
     left: 0;
 }

 #signin-front div p,
 #signup-front div p {
     color: black !important;
 }

 #signin-back,
 #signup-back {
     float: left;
 }

 #tep {
     height: 76px !important;
 }

 #signin-back div,
 #signup-back div {
     padding-top: 41%;
     position: initial !important;
 }

 #signin-back div h1,
 #signup-back div h1 {
     color: white !important;
 }

 .button:before {
     content: "";
     border-radius: 50%;
     border: chartreuse 1px solid;
     display: block;
     position: absolute;
     top: -23px;
     margin: 0 40%;
     bottom: 0;
     width: 93px;
     height: 93px;
     max-height: 300px;
     left: -24px;
     transform: scale(0.001, 0.001);
 }

 .button:active {
     transition: transform 0.2s ease-in-out !important;
     transform: scale(0.9);
 }

 .button div {
     position: absolute !important;
     width: 100% !important;
 }

 .button:active:before {
     animation: effect_dylan 0.4s ease-out;
 }

 @keyframes effect_dylan {
     50% {
         transform: scale(1.5, 1.5);
         opacity: 1;
     }

     100% {
         transform: scale(0.001, 0.001);
         opacity: 0;
     }
 }

 .sign_icon {
     display: inline-block;
     font: normal normal normal 14px/1 FontAwesome;
     font-size: inherit;
     text-rendering: auto;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     padding: 14px;
     width: 47px;
     margin: 5px 4px;
     border-radius: 50%;
     border: 1px solid #ced8d9;
 }

 .navbar {
     background-image: linear-gradient(141deg, rgb(28, 130, 226) 57%, rgb(28, 125, 217) 15%);
 }
</style>