<template>

    <main class="pt-3">
        <div class="home-page d-flex flex-column gap-2">
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

            <!-- My Trips -->
            <section class="my-trips py-3">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h5 class="fw-bold">My Trips</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col slider">
                            <swiper :slidesPerView="'auto'" :spaceBetween="20" :modules="modules" :freeMode="true"
                                class="mySwiper h-100 border-1">
                                <swiper-slide v-for="(slide, index) in myTrips" :key="index">
                                    <div @click="openOffcanvas(slide)" class="show-offcanvas">
                                        <img :src="slide.img" :alt="slide.title">
                                        <div class="slide-content">
                                            <h5 class="title">{{ slide.title }}</h5>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Popular Destinations -->
            <section class="popular-destinations py-3">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h5 class="fw-bold">Popular destinations</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col slider">
                            <swiper :slidesPerView="'auto'" :spaceBetween="20" :modules="modules" :freeMode="true"
                                class="mySwiper h-100 border-1">
                                <swiper-slide v-for="(slide, index) in popularDestinations" :key="index">
                                    <div @click="openOffcanvas(slide)" class="show-offcanvas">
                                        <img :src="slide.img" :alt="slide.title">
                                        <div class="slide-content">
                                            <h5 class="title">{{ slide.title }}</h5>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Popular Trips -->
            <section class="popular-trips py-3">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h5 class="fw-bold">Popular Trips</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col slider">
                            <swiper :slidesPerView="'auto'" :spaceBetween="20" :modules="modules" :freeMode="true"
                                class="mySwiper h-100 border-1">
                                <swiper-slide v-for="(slide, index) in popularTrips" :key="index">
                                    <div @click="openOffcanvas(slide)" class="show-offcanvas">
                                        <img :src="slide.img" :alt="slide.title">
                                        <div class="slide-content">
                                            <h5 class="title">{{ slide.title }}</h5>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Offcanvas for show slide -->
            <BOffcanvas v-model="show" class="w-100 offcanvas-custom" body-class="d-flex flex-column align-items-start"
                :no-header="true" :style="selectedSlide ? {
                    backgroundImage: 'url(' + selectedSlide.img + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}">
                <font-awesome-icon @click="show = false" :icon="['fas', 'arrow-left-long']" class="text-white fs-3" />
                <div v-if="selectedSlide" class="offcanvas-content mt-auto">
                    <h1>{{ selectedSlide.title }}</h1>
                    <p>{{ selectedSlide.description }}</p>
                    <AppRateCard :item="selectedSlide" class="mb-4" />
                    <div class="d-flex justify-content-between gap-3">
                        <RouterLink :to="{ name: 'myTrips' }">
                            <button class="btn-custom-transparent">
                                Start your Trip
                            </button>
                        </RouterLink>
                        <button @click="show = false" class="btn-custom">
                            View other
                        </button>
                    </div>
                </div>
            </BOffcanvas>
        </div>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import AppProfileCard from '../../components/AppProfileCard.vue';
import { BButton, BOffcanvas } from 'bootstrap-vue-next';
import AppRateCard from '../../components/AppRateCard.vue';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            modules: [Pagination],
            show: false,
            selectedSlide: null,
            myTrips: [
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
            ],
            popularDestinations: [
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
            ],
            popularTrips: [
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
                { id: 1, title: 'Milano', img: '../1.jpg', description: 'Descrizione di Milano', rate_average: 4.5 },
                { id: 2, title: 'Roma', img: '../2.jpg', description: 'Descrizione di Roma', rate_average: 4.9 },
            ],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
        AppProfileCard,
        BButton,
        BOffcanvas,
        AppRateCard
    },
    methods: {
        openOffcanvas(slide) {
            this.selectedSlide = slide;
            this.show = true;
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

// Offcanvas
.offcanvas-custom {
    background-size: cover;
    background-position: center;

    .offcanvas-header .btn-close {
        color: white !important;
    }

    .offcanvas-content {
        padding: 16px 16px;
        border-radius: 12px;
        background-color: rgb(255 255 255 / 0%);
        backdrop-filter: blur(8px);
        color: white;

        & .btn-custom {
            font-size: 16px;
            @include btn-custom;

            & {
                padding: 6px 12px;
            }
        }

        & .btn-custom-transparent {
            font-size: 16px;
            @include btn-custom-transparent;

            & {
                padding: 6px 12px;
            }
        }
    }


}

.show-offcanvas {
    display: flex;
}

main {
    padding-bottom: 100px;

    .home-page {

        .my-trips,
        .popular-trips {
            & .swiper-slide {
                width: 200px;
                height: 130px;
                display: flex;

                & img {
                    border-radius: 12px;
                    max-height: 100%;
                    width: 100%;
                    object-fit: cover;
                }

                & .slide-content {
                    color: white;
                    font-size: 16px;
                    position: absolute;
                    bottom: 0%;
                    padding: 16px;

                    & .title {
                        padding: 6px 10px;
                        border-radius: 12px;
                        background-color: #ffffff0d;
                        backdrop-filter: blur(5px);
                    }
                }
            }
        }

        .popular-destinations {
            & .swiper-slide {
                width: 130px;
                height: 200px;
                display: flex;

                & img {
                    border-radius: 12px;
                    height: 100%;
                    object-fit: cover;
                }

                & .slide-content {
                    color: white;
                    font-size: 16px;
                    position: absolute;
                    bottom: 0%;
                    padding: 16px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;


                    & .title {
                        padding: 6px 10px;
                        border-radius: 12px;
                        background-color: #ffffff0d;
                        backdrop-filter: blur(5px);
                    }
                }
            }
        }
    }
}
</style>