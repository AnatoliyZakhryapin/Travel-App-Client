import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'https://localhost:7026',

    tripForm: {
        title: null,
        description: null,
        tripStart: null,
        tripEnd: null,
        PlaceModel: {
            name: "",
            formattedAddress: "",
            icon: "",
            placeIdGoogle: "",
            location: null,
            viewport:{
                northeast: {
                    lat: null,
                    lng: null
                },
                southwest: {
                    lat: null,
                    lng: null
                }
            },
            photos: []
        },
    }
});


