import { ref } from 'vue';
import { auth } from '@/firebase/config.js'

const user = ref(auth.currentUser)


auth.onAuthStateChanged(currentUser => {
  user.value = currentUser;
  console.log(user.value);
});

const getUser = () => {
  return { user }
}

export default getUser;