<template>
  <div>
    <b-sidebar id="sidebar-backdrop" bg-variant="dark" text-variant="light" backdrop>
      <template #default="{hide}">
        <div class="px-3 py-4">
          <b-form-group label="Order By : " label-for="orderBy">
            <b-form-select
              id="orderBy"
              v-model="order"
              :options="orders"
            ></b-form-select>
          </b-form-group>
        </div>
        <div class="px-3 py-4">
          <b-form-group>
            <div class="mt-2">Limit: {{ limit }}</div>
            <b-form-input id="range-2" v-model="limit" type="range" min="0" max="100" step="-1"></b-form-input>
          </b-form-group>
        </div>
        <div class="px-3 py-4">
          <b-button variant="danger" block @click="filterConfirm"
            >Confirm</b-button
          >
        </div>
          <div class="px-3 py-4">
          <b-button variant="danger" block @click="hide"
            >Hide</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    order: "",
    orders: [
      { text: "Please select an option", value: "", disabled: true },
      "name",
      "-name",
    ],
    limit: "100",
  }),
  methods: {
    filterConfirm() {
      this.$emit("clicked", this.limit, this.order);
    },
  },
};
</script>
<style scoped></style>
