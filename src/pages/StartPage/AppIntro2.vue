<template>
    <div class="intro-page">
        <div class="container">
            <div class="intro-page_content">
                <div class="row">
                    <div class="col">
                        <figure class="intro-image">
                            <img src="../../assets/intro2.svg" alt="Logo">
                        </figure>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <h1>Customize your High-end travel</h1>
                        <p class="mb-5">Countless high-end entertainment facilities</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink :to="{ name: 'intro-3' }">
                            <button class="btn-custom">
                                <img src="../../assets/arrow-right.svg" alt="Logo">
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.intro-page {
    @include flex-column-center;

    height: 100vh;

    .intro-page_content {
        @include flex-column-center;

        p {
            color: $grey;
        }

        .intro-image {
            width: 60vw;
            min-width: 250px;
            max-width: 700px;
        }

        .btn-custom {
            @include btn-custom;
            @include btn-circle;
            font-size: 32px;
        }
    }

}
</style>