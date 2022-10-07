<template>
  <div class="error-500">
    <el-avatar shape="square" src="/app-icon-dv.png"></el-avatar>
    <p><el-tag type="danger">ERREUR 500</el-tag></p>
    <h1>Erreur interne</h1>
    <p class="text-label">Aïe.. Quelque chose s'est mal passé. Nous avons été mis au courant.</p>
    <el-divider></el-divider>
    <p class="text-label"><n-link to="/" class="el-button el-button--primary">Revenir à l'accueil</n-link></p>
  </div>
</template>

<style>
  .error-500 {
    max-width: 500px;
    margin: 2em auto 0;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'error-500',
    props: {
      error: {
        type: Object,
        default: () => {},
      },
    },
  };
</script>
