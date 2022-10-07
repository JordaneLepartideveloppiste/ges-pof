<template>
  <h1>wesh</h1>
</template>

<script>
export default {
    name: "dashboard",
    layout: "default",

  //   asyncData({ $axios, params, error }) {
  //   return $axios
  //     .get(`http://localhost:3009/v1/ges/psys`)
  //     .then((res) => {
  //       /**
  //        * Return async data
  //        */
  //       console.log(res.data);
  //       return {
  //         psys: res.data,
  //       };
  //     })
  //     .catch((err) => {
  //       if (err.response) {
  //         if (err.response.status === 404) {
  //           return error({ statusCode: 404 });
  //         }
  //       }
  //     });
  // },

  data() {
    return {
        psys: [],
    }
  }
}
</script>

<style>

</style>