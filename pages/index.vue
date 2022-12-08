<template>

  <div>
    <div class="header">
      <div class="right">
        <div class="actions">
          <button class="button back alt2" @click="moveSignIn">로그인</button>
          <button class="button back alt2" @click="moveSignUp">회원가입</button>
        </div>
        
      </div>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
      moveSignUp() {
        this.$router.push('/login-form');
      },
      moveSignIn() {
        this.$router.push('/login');
      }
  }
}
</script>
