<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card card-body mt-4">
        <h3>Edit users</h3>
        <form @submit.prevent="update">
          <div class="form-group">
            <label>Name</label>
            <input v-model="form.name" class="form-control" required />
          </div>

          <div class="form-group mt-3">
            <label>Email</label>
            <input
              v-model="form.email"
              class="form-control"
              type="email"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary mt-3">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getUser, updateUser } from "../firebase";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, reactive } from "@vue/runtime-core";

const router = useRouter();
const route = useRoute();
const userId = computed(() => route.params.id);
const form = reactive({
  name: "",
  email: "",
});
onMounted(async () => {
  const user = await getUser(userId.value);
  console.log(user, userId.value);
  form.name = user.name;
  form.email = user.email;
});

const update = async () => {
  await updateUser(userId.value, { ...form });
  router.push("/");
  form.name = "";
  form.email = "";
};
</script>

<style></style>
