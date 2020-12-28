<template>
  <div>
    <b-navbar variant="dark" type="dark" tag="h4">
      <b-row>
        <b-col cols="4" v-if="activeComponent === 'Character'">
          <b-navbar-nav>
            <b-nav-item>
              <b-button
                v-b-toggle.sidebar-backdrop
                :disabled="filterStatus"
                pill
                variant="danger"
                size="lg"
                >Filter</b-button
              >
            </b-nav-item>
            <sidebar @clicked="filterConfirm" />
          </b-navbar-nav>
        </b-col>
        <b-col cols="4" v-else>
          <b-navbar-nav>
            <b-nav-item>
              <router-link :to="{ path: '/'}"  >
                <b-button pill variant="danger" size="lg">Back</b-button>
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-col>
        <b-col cols="4">
          <b-navbar-nav>
            <b-card-img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg"
              alt="Marvel"
              class="rounded-0"
              height="65px"
            ></b-card-img>
          </b-navbar-nav>
        </b-col>
        <b-col cols="4">
          <b-navbar-nav align="right" style="margin-left: 130px;">
             <b-nav-item v-if="!searched && activeComponent === 'Character' ">
              <b-button
              @click="searched = true"
                pill
                variant="danger"
                size="lg"
                >Search Character</b-button
              >
            </b-nav-item>
            <b-input-group v-else size="lg" style="margin: 8px auto;">
              <b-form-input
                v-model="name"
                type="search"
                placeholder="Search..."
                @keyup.enter="fetchCharacters"
                :disabled="activeComponent === 'Details'"
              >
              </b-form-input>
              <b-input-group-append>
                <b-button
                  type="submit"
                  @click="fetchCharacters"
                  variant="danger"
                  :disabled="activeComponent === 'Details'"
                  ><b-icon icon="search"></b-icon
                ></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-navbar-nav>
        </b-col>
      </b-row>
    </b-navbar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "Navbar",
  components: {
    Sidebar,
  },
  props: ["activeComponent"],
  data: () => ({
    name: "",
    filterStatus: true,
    searched:false
  }),
  methods: {
    filterConfirm(limit, order) {
      this.$emit("clicked1", limit, order);
    },
    fetchCharacters() {
      this.filterStatus = false;
      this.$emit("clicked2", this.name);
    },
  },
};
</script>
<style scoped></style>
