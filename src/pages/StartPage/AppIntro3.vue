<template>
    <div class="intro-page">
        <div class="container">
            <div class="intro-page_content">
                <div class="row">
                    <div class="col">
                        <figure class="intro-image">
                            <img src="../../assets/intro3.svg" alt="Logo">
                        </figure>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        <h1>High-end leisure projects to choose from</h1>
                        <p class="mb-5">The world's first-class modern leisure and entertainment method</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <RouterLink :to="{ name: 'register' }">
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
    padding: 100px 0px;

    .intro-page_content {
        @include flex-column-center;

        p {
            color: $grey;
        }

        .intro-image {
            width: 40vw;
            min-width: 250px;
            max-width: 500px;
        }

        .btn-custom {
            font-size: 32px;
            @include btn-custom;

            & {
                padding: 12px 12px;
            }
        }
    }

}
</style>