<template>
    <div>
      <Nuxt />
    </div>
  </template>
  
  <script>
  export default {
    head () {
      return {
        bodyAttrs: {
          id: 'empty-layout'
        }
      }
    },
  }
  </script>