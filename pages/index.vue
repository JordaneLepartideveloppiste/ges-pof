<template>
  <el-row class="auth-row" type="flex" justify="center">
    <el-col :sm="8" :span="20" class="auth-column auth-column-form d-flex v-align-center h-align-center">
      <el-form :model="login" class="shadow p-1">
        <div class="d-flex v-align-center">
          <el-avatar shape="square" size="medium" src='/img/logo_pic.png'></el-avatar>
          <h1 class="ml-1">GES - Psy Of Life</h1>
        </div>
        <el-form-item label="Email" :rules="rules.email">
          <el-input type="email" placeholder="Votre adresse mail" prefix-icon="el-icon-message" v-model="login.email"></el-input>
        </el-form-item>
        <el-form-item label="Mot de passe" :rules="rules.password">
          <el-input type="password" placeholder="Votre mot de passe" prefix-icon="el-icon-lock"
                    show-password v-model="login.password"></el-input>
        </el-form-item>

        <p class="color-danger text-small" v-if="login.message">{{login.message}}</p>

        <el-button type="primary" @click="userLogin" :loading="isLoading" icon="el-icon-arrow-right" class="d-block full-width-content">Se connecter</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  layout: "empty",
  auth: "guest",
  data() {
    return {
      login: {
        email: '',
        password: '',
        message: ''
      },
      rules: {
        email: [
          {required: true, message: 'Veuillez renseigner une adresse e-mail', trigger: 'blur'},
          {type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change']}
        ],
        password: [
          {required: true, message: 'Veuillez renseigner un mot de passe', trigger: 'blur'}
        ]
      }, 
      isLoading : false
    }
  },
  head() {
    return {
      title: process.env.name + " | Connexion"
    }
  },
  methods: {
    async userLogin() {
      this.isLoading= true;
      await this.$auth.loginWith('local', {data: this.login}).then(() => {
        this.$message({
          message: 'Vous êtes connecté',
          type: 'success'
        })
        this.$router.push('/dashboard')
      }).catch(err => {
        this.isLoading= false;
       console.log(err)
        this.$message({
          message: 'Une erreur est survenue dans ton cul' + err,
          type: 'error'
        });
      })
    }
  },
  async mounted() {
    if (this.$auth.loggedIn) {
      await this.$auth.fetchUser().then((res) => {
        return this.$router.push('/dashboard');
      }).catch((e) => {
        console.log(e);
      })
    }
  }
}
</script>
