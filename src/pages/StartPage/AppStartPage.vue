<template>
    <div class="start-page">
        <div class="start-page_content">
            <img class="logo" src="../../assets/logo.svg" alt="Logo">
            <h1>TravelApp</h1>
            <h3 class="mb-5 fst-italic">Where Dreams Meet Destinations</h3>
            <RouterLink :to="{ name: 'intro-1' }">
                <button class="btn-custom">
                    Start
                </button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.start-page {
    @include background-base;
    @include flex-column-center;

    color: white;
    height: 100vh;

    .start-page_content {
        @include flex-column-center;

        .logo {
            width: 60%;
            min-width: 250px;
            max-width: 700px;
        }

        .btn-custom {
            @include btn-custom;
            font-size: 32px;
        }
    }

}
</style>