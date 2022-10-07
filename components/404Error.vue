<template>
  <div class="error-404">
    <el-avatar shape="square" src="/app-icon-dv.png"></el-avatar>
    <p><el-tag type="danger">ERREUR 404</el-tag></p>
    <h1>Cette page est introuvable</h1>
    <p class="text-label">Cette page n'existe pas ou plus. Cliquez sur le bouton ci dessous pour revenir à l'accueil.</p>
    <el-divider></el-divider>
    <p><n-link to="/" class="el-button el-button--primary">Revenir à l'accueil</n-link></p>
  </div>
</template>

<style>
  .error-404 {
    max-width: 500px;
    margin: 2em auto 0;
    text-align: center;
  }
</style>

<script>
  export default {
    name: 'error-404',
    props: {
      error: {
        type: Object,
        default: () => {},
      },
    },
  };
</script>
