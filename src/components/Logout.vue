<template>
    <button id="btn" @click="signOut()" v-if="user">Logout</button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
    name:"Logout",

    data() {
        return{
            user:false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    },

    methods: {
        signOut() {
            const auth = getAuth();
            const user = auth.currentUser;
            signOut(auth, user)
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style scoped>
#btn{
    text-aligned: center;
    margin: auto;
}
#btn:hover{
    color:pink;
    background-colour: blue;
    box-shadow: 3px 3px grey;
}
</style>