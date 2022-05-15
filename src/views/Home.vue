<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <UserCreate />
    </div>
    <div class="col-md-8">
      <UserList />
    </div>
  </div>
</template>

<script setup>
import UserCreate from "../components/UserCreate.vue";
import UserList from "../components/UserList.vue";
</script>

<style></style>
