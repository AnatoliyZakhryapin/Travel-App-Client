<template>
    <section class="choice-destinations">
        <div class="container">

            <!-- Go back btn -->
            <div class="row mb-3">
                <div class="col">
                    <button class="btn-custom-transparent" @click="$router.back()">
                        <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
                    </button>
                </div>
            </div>

            <!-- Title -->
            <div class="row mb-3">
                <div class="col">
                    <h2>Choose your travel destination</h2>
                </div>
            </div>

            <!-- Input search destination -->
            <div class="row mb-3">
                <div class="col">
                    <input class="form-control" id="searchDestination" type="text" placeholder="Search for a city..." />
                </div>
            </div>

            <!-- Destination foto slider -->
            <div class="row mb-3" v-if="store.tripForm.PlaceModel != null">
                <div class="col slider">
                    <!-- <button @click="showDestination()">click</button> -->
                    <swiper :loop="true" :pagination="{
                        dynamicBullets: true,
                    }" :modules="modules" class="mySwiper">
                        <swiper-slide v-for="(slide, index) in store.tripForm.PlaceModel.photos" :key="index">
                            <div class="d-flex w-100">
                                <img :src="slide.photoUrl" alt="Slide Image">
                                <div class="slide-content">
                                    <h5 class="title">{{ store.tripForm.PlaceModel.name }}</h5>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>

            <!-- Continue btn -->
            <div class="row mb-3 justify-content-end" v-if="store.tripForm.PlaceModel != null">
                <div class="col-auto">
                    <RouterLink :to="{ name: 'tripDetails'}">
                        <button class="btn-custom">
                            <span>Continue</span>
                            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            modules: [Pagination],
            store: store,
            googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        };
    },
    mounted() {
        this.loadGoogleMapsScript();
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        loadGoogleMapsScript() {
            if (typeof google === 'undefined') {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&libraries=places&language=en`;
                script.async = true;
                script.defer = true;
                script.onload = this.initAutocomplete;
                document.head.appendChild(script);
            } else {
                this.initAutocomplete();
            }
        },
        initAutocomplete() {
            const input = document.getElementById('searchDestination');
            const options = {
                types: ['(regions)'],
                fields: ['name', 'formatted_address', 'icon', 'place_id', 'geometry', 'photos']
            };

            const autocomplete = new google.maps.places.Autocomplete(input, options);

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                console.log(place);

                input.value = place.formatted_address;

                // this.store.tripForm.PlaceModel = place;
                this.store.tripForm.PlaceModel.name = place.name;
                this.store.tripForm.PlaceModel.formattedAddress = place.formatted_address;
                this.store.tripForm.PlaceModel.icon = place.icon;
                this.store.tripForm.PlaceModel.placeIdGoogle = place.place_id;
                this.store.tripForm.PlaceModel.location = place.geometry.location;
                console.log( place.geometry.viewport)
                this.store.tripForm.PlaceModel.viewport.northeast.lat = place.geometry.viewport.ci.hi;  
                this.store.tripForm.PlaceModel.viewport.northeast.lng = place.geometry.viewport.Hh.hi;
                this.store.tripForm.PlaceModel.viewport.southwest.lat = place.geometry.viewport.ci.lo;
                this.store.tripForm.PlaceModel.viewport.southwest.lng = place.geometry.viewport.Hh.lo;

                if (place.photos && place.photos.length > 0) {
                    
                    this.store.tripForm.PlaceModel.photos = place.photos.map(photo => {
                        return {
                            photoUrl: photo.getUrl(),
                            htmlAttributions: photo.html_attributions.join(', '),
                            isUserUploaded: false
                        };
                    });
                } 
            });
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

.choice-destinations {
    padding-bottom: 100px;

    .btn-custom {
        font-size: 16px;
        @include btn-custom;
        align-items: center;
        gap: 10px;

        & {
            padding: 10px 16px;
        }
    }

    .btn-custom-transparent {
        font-size: 24px;
        @include btn-custom-transparent;

        & {
            padding: 8px;
            color: $blue;
            border-color: $blue;
        }
    }

    .mySwiper {
        & .swiper-slide {
            // width: 200px;
            // height: 130px;
            height: 40vh;
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
}
</style>
