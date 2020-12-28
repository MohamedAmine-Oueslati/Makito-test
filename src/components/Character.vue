<template>
  <div>
    <navbar
      activeComponent="Character"
      @clicked1="onClickFilter"
      @clicked2="fetchAllData"
      class="sticky-top"
    />
    <div v-if="characters.length != 0">
      <b-pagination
        v-model="currentPage"
        :total-rows="characters.length"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        align="center"
        class="pagination"
      ></b-pagination>
      <b-card-group
        v-for="char in characters.slice(
          (currentPage - 1) * perPage,
          (currentPage - 1) * perPage + perPage
        )"
        :key="char.id"
        class="cardbox"
        deck
      >
        <router-link :to="{ path: '/Details/' + char.id }">
          <b-card class="b-card">
            <b-card-img class="b-img" :src="`${char.thumbnail.path}.${char.thumbnail.extension}`"
            :alt="char.name"></b-card-img>
            <div class="b-text">
              <b-card-title :title="char.name" style="color:black"></b-card-title>
              <b-card-text style="color:gray">
                {{ char.description | reduce }}
              </b-card-text>
            </div>
          </b-card>
        </router-link>
      </b-card-group>
      <b-pagination
        v-model="currentPage"
        :total-rows="characters.length"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        align="center"
        class="pagination"
      ></b-pagination>
    </div>
    <div v-else>
    <home-status :status="status" :loading="loading"  />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import HomeStatus from "./HomeStatus.vue";
import { searchChar } from "../fetchAPI/api";

export default {
  name: "Character",
  components: {
    Navbar,
    HomeStatus
  },
  data: () => ({
    perPage: 4,
    currentPage: 1,
    name: "",
    characters: [],
    limit: 100,
    order: "",
    loading: false,
    status: true,
  }),
  methods: {
    fetchAllData(name) {
      this.loading = true;
      this.name = name;
      searchChar(name, this.limit, this.order).then((data) => {
        this.characters = data.data.results;
        if (data.data.total == 0) this.status = false;
        this.loading = false;
      });
    },
    onClickFilter(limit, order) {
      this.limit = limit;
      this.order = order;
      this.fetchAllData(this.name);
    },
  },
  filters: {
    reduce: function(value) {
      if (!value) return "";
      return value.slice(0, 200) + " . . .";
    },
  },
};
</script>
<style scoped>
.cardbox {
  margin: 0 auto;
  margin-bottom: 30px;
  width: 600px;
}
.b-card:hover {
  cursor: pointer;
  opacity: 0.7;
}
.b-card {
  height: 400px;
   width: 600px;
  border-radius: 25% 0 25%;
  overflow: hidden;
}
.b-text {
  position: absolute;
  top: 50%;
  left: 0%;
  background-color: white;
  width: 100%;
  height: 50%;
  padding: 30px;
}
.b-img {
  position: absolute;
  top:-30%;
  margin: -4%;
  width: 101%;
}
.pagination {
  margin: 3% 0;
}
</style>
