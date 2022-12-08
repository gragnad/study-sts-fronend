<template>
    <div class="container">
        <form>
            <div>
                <label for="username">id: </label>
                <input id="username" type="text" v-model="username">
            </div>
            <div>
                <label for="password">password: </label>
                <input id="password" type="password" v-model="password">
            </div>
        </form>
        <button type="button" @click="signIn">signIn</button>
    </div>   
</template>
<script>
import insAxios from "../api/index"
import dto from "../api/dto/collectDto"

export default {
    data() {
    return {
            username: '',
            password: '',
            role: ''
        };
    },
    methods: {
        async signIn() {
            const login = dto.user(this.username, this.password);
            const response = await insAxios.postRequst('/api/user/login', login);
            // console.log(response.data.authorities[0]);
            this.role = response.data.authorities[0].authority;
            this.$store.commit("setRole", this.role);
        }
    },
}
</script>