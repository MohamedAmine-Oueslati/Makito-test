<template>
  <div>
    <div>
      <navbar activeComponent="Details" />
    </div>

    <div class="centerCard">
      <b-card no-body class="overflow-hidden contCard">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="
                `${character.thumbnail.path}.${character.thumbnail.extension}`
              "
              :alt="character.name"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-title class="b-title">
                {{ character.name }}
              </b-card-title>
              <b-card-text class="b-text">
                {{ character.description }}
              </b-card-text>
              <div>
                <div>
                  <b-dropdown :text="`${character.name} Comics`" id="dropdown-left" variant="danger">
                    <b-dropdown-item  v-for="comic in comics"
                    :key="comic.title" :href="comic.urls[0].url" target="_blank">{{comic.title | reduce}}</b-dropdown-item>
                  </b-dropdown>
                    <b-dropdown :text="`${character.name} Series`" id="dropdown-left" variant="danger">
                    <b-dropdown-item  v-for="serie in series"
                    :key="serie.title" :href="serie.urls[0].url" target="_blank">{{serie.title | reduce}}</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import { detailChar, detailComic, detailSeries } from "../fetchAPI/api";

export default {
  name: "Details",
  components: {
    Navbar,
  },
  data: () => ({
    character:[],
    comics: [],
    series: []
  }),
  mounted: function() {
    var charId = this.$route.params.id;
    this.fetchCharById(charId);
    this.fetchCharComicById(charId);
    this.fetchCharSeriesById(charId);
  },
  methods: {
    fetchCharById(charId) {
      detailChar(charId).then(
        (data) => (this.character = data.data.results[0])
      );
    },
    fetchCharComicById(charId) {
      detailComic(charId).then((data) => (this.comics = data.data.results));
    },
     fetchCharSeriesById(charId) {
      detailSeries(charId).then((data) => (this.series = data.data.results));
    },
  },
  filters: {
    reduce: function(value) {
      return value.slice(0, 20);
    },
  },
};
</script>

<style scoped>
.centerCard {
  margin: 40px auto;
  width: 70%;
  border: 3px solid black;
  padding: 10px;
}
.b-text {
  color: gray;
}
.b-title {
  font-size: 40px;
}
#dropdown-left /deep/ .dropdown-menu {
    max-height: 150px;
    overflow-y: auto;
}
#dropdown-left {
   margin: 20px
}
</style>
