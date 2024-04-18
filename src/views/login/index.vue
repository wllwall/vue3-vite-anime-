<template>
  <div class="login-container">
    <input type="text" v-model="Account" placeholder="请输入账号" name="username" />
    <input type="password" v-model="Password" placeholder="请输入密码" name="password" />
    <button @click.prevent="handleLogin">登录</button>
    <button @click.prevent="handleRegister">注册</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import axios from "axios";
import {useRouter} from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      Account: "",
      Password: ""
    });

    const handleLogin = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password
      };

      const response = await postData("http://127.0.0.1:3007/api/login", loginParams);
      handleResponse(response);
    };

    const handleRegister = async () => {
      const registerParams = {
        username: state.Account,
        password: state.Password
      };

      const response = await postData("http://127.0.0.1:3007/api/regUser", registerParams);
      handleResponse(response);
    };

    const postData = async (url, data) => {
      try {
        const response = await axios.post(url, data, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        });
        return response.data;
      } catch (error) {
        alert(error.message);
        console.error("错误", error.message);
      }
    };

    const handleResponse = (response) => {
      console.log(response);
      alert(response.message);
      if (response.status === 0) {
        // 登录成功跳转到首页
        debugger
        router.push("/");
      }
    };

    return {
      ...toRefs(state),
      handleLogin,
      handleRegister
    };
  }
});
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

input {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
}
</style>
