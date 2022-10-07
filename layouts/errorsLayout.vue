<template>
    <div class="nuxt-error">
      <component :is="errorPage" :error="error" />
    </div>
  </template>
  <script>
    import error404 from '~/components/404Error.vue';
    import error500 from '~/components/500Error.vue';
    export default {
      name: 'nuxt-error',
      layout: 'empty',
      props: {
        error: {
          type: Object,
          default: () => {
          },
        },
      },
      head () {
        return {
          bodyAttrs: {
            id: 'error-layout'
          }
        }
      },
      computed: {
        errorPage() {
          if(this.error.statusCode){
            if (this.error.statusCode === 404) {
              return error404;
            }
            return error500;
          }
        },
      }
    }
  </script>
  