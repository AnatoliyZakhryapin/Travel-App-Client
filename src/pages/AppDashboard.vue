<template>
    <div class="dashboard-page">
        <main>
            <h1>DACHBOARD</h1>
        </main>
        <header>
            <BNav class="nav-mobile">
                <BNavItem active>
                    <font-awesome-icon :icon="['fas', 'house']" />
                    Home
                </BNavItem>
                <BNavItem>
                    <font-awesome-icon :icon="['fas', 'suitcase-rolling']" />
                    Trip
                </BNavItem>
                <BNavItem>
                    <font-awesome-icon :icon="['fas', 'heart']" />
                    Favorit
                </BNavItem>
                <BNavItem>
                    <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                    Logout
                </BNavItem>
            </BNav>
        </header>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../styles/mixins.scss';
@import '../styles/variables.scss';

    .dashboard-page {
        height: 100vh;
        background-color: $light-grey;

        header {
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            background-color: white;
            padding: 10px 0px;
            position: fixed;
            bottom: 0;
            width: 100%;
            justify-content: center;
            display: flex;



        }
    }
</style>