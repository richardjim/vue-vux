<template>
    <nav>
        <h1>Vuex Auth</h1>
        <!-- for all users -->
        <div v-if="authIsReady">
            <router-link to="/">Home</router-link>
        </div>
        <!-- for logged in users -->
        <div v-if="user">
            <span>Logged in as{{ user.email }}</span>
            <button @click="logout">Logout</button>
        </div>
        <!-- for logged out users -->
        <div v-if="!user">
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">Signup</router-link>
        </div>
    </nav>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    setup() {
        const store = useStore()
        const logout = () => {
            store.dispatch('logout')
        }
        return {
            logout,
            user: computed(() => store.state.user),
            authIsReady: computed(() => store.state.authIsReady)

        }
    }

}
</script>