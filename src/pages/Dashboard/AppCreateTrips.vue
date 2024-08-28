<template>
    <div class="create-trip-page pt-3">
        <main class="d-flex flex-column gap-2">

            <!-- Profile  -->
            <section class="Profile-card py-3">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <AppProfileCard />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Start your trip -->
            <section class="start-trip" :class="isActive ? 'd-block' : 'd-none'">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-auto">
                            <RouterLink :to="{ name: 'destinations' }">
                                <button class="btn-custom">
                                    Start
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Router view -->
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    computed: {
        isActive() {
            return this.$route.name === 'createTrips';
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.create-trip-page {
    height: 100vh;
    padding-bottom: 100px;
    position: relative;

    .start-trip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .btn-custom {
            font-size: 32px;
            @include btn-custom;
        }
    }
}
</style>