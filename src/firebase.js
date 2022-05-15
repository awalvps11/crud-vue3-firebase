import firebase from "firebase";
import { ref, onUnmounted } from "vue";
const config = {
  apiKey: "AIzaSyAiWvXisUl4f1bYfkfIdJaKyGHYf74x77E",
  authDomain: "vue-fire-45c64.firebaseapp.com",
  projectId: "vue-fire-45c64",
  storageBucket: "vue-fire-45c64.appspot.com",
  messagingSenderId: "629065963910",
  appId: "1:629065963910:web:dddfc999ce631a9188b407",
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  if (confirm("Are you sure you want to delete this user?")) {
    return usersCollection.doc(id).delete();
  }
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
