<template>
    <div class="dashboard">

        <!-- Router view -->
        <router-view></router-view>


        <!-- Tool bar for mobile version -->
        <nav class="tool-bar">
            <BNav class="nav-mobile">
                <RouterLink :to="{ name: 'home' }" v-slot="{ isActive }">
                    <BNavItem :active="isActive">
                        <font-awesome-icon :icon="['fas', 'house']" />
                        Home
                    </BNavItem>
                </RouterLink>
                <RouterLink :to="{ name: 'createTrips' }" v-slot="{ isActive }">
                    <BNavItem :active="isActive">
                        <font-awesome-icon :icon="['fas', 'suitcase-rolling']" />
                        Create Trip
                    </BNavItem>
                </RouterLink>
                <BNavItem>
                    <font-awesome-icon :icon="['fas', 'heart']" />
                    Favorit
                </BNavItem>
                <BNavItem>
                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                    Logout
                </BNavItem>
            </BNav>
        </nav>
    </div>
</template>

<script>
import AppProfileCard from '../../components/AppProfileCard.vue';

export default {
    data() {
        return {
            
        };
    },
    components: {
        AppProfileCard,
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.dashboard {
    height: 100vh;
    background-color: $light-grey;

    nav.tool-bar {
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        background-color: white;
        padding: 10px 0px;
        position: fixed;
        bottom: 0;
        width: 100%;
        justify-content: center;
        display: flex;
        z-index: 100;
    }
}
</style>