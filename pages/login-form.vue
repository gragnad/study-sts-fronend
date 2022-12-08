<template>
    <div class="container">
        <form>
                <div>
                    <label for="username">id: </label>
                    <input id="username" type="text" v-model="username">
                </div>
                <div>
                    <label for="password">password: </label>
                    <input id="password" type="text" v-model="password">
                </div>
                <div>
                    <label for="fullname">fullname: </label>
                    <input id="fullname" type="text" v-model="fullname">
                </div>
                <div>
                    <label for="street">street: </label>
                    <input id="street" type="text" v-model="street">
                </div>
                <div>
                    <label for="city">city: </label>
                    <input id="city" type="text" v-model="city">
                </div>
                <div>
                    <label for="state">state: </label>
                    <input id="state" type="text" v-model="state">
                </div>
                <div>
                    <label for="zip">zip: </label>
                    <input id="zip" type="text" v-model="zip">
                </div>
                <div>
                    <label for="phoneNumber">phoneNumber: </label>
                    <input id="phoneNumber" type="text" v-model="phoneNumber">
                </div>
            
        </form>
        <button type="button" @click="submitFrom">signUp</button>
    </div>
</template>

<script>
import insAxios from "../api/index"
import registerationForm from "../api/dto/RegistrationForm"

export default {
    data() {
        return {
            username: '',
            password: '',
            fullname: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            phoneNumber: '',
        };
    },
    methods: {
        submitFrom() {
            const register = registerationForm.regist(
                this.username,
                this.password,
                this.fullname,
                this.street,
                this.city,
                this.state,
                this.zip,
                this.phoneNumber
            );
            
            insAxios.postRequst('/api/user/register', register);
        }
    }
}

</script>
