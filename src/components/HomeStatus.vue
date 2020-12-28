<template>
  <div>
    <div v-if="loading">
      <b-jumbotron class="jumbotron" bg-variant="danger" lead="Loading">
        <b-overlay show="true" class="d-inline-block" rounded="circle">
        </b-overlay>
      </b-jumbotron>
    </div>
    <div v-else-if="!status">
      <b-jumbotron
        class="jumbotron"
        bg-variant="danger"
        lead="Sorry no results found ... Try Again"
      >
      </b-jumbotron>
    </div>
    <div v-else>
      <b-jumbotron
        class="jumbotron"
        bg-variant="danger"
        header="Welcome"
        lead="Please click on search character and type a name to start"
      >
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeStatus",
  data: () => ({
    order: "",
  }),
  props: ["loading", "status"],
};
</script>
<style scoped>
.jumbotron {
  margin: 5% 20%;
  border-radius: 10%;
  text-align: center;
}
</style>
