<template>
    <section class="trip-details">
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
                    <h2>Trip details</h2>
                </div>
            </div>

            <!-- Trip details -->
            <div class="row mb-3">
                <div class="col">
                    <BForm>
                        <div class="row">
                            <div class="col">
                                <BFormFloatingLabel label="Title" label-for="floatingTitle" class="my-2">
                                    <BFormInput 
                                        id="floatingEmail" 
                                        type="text" 
                                        placeholder="Title" 
                                        v-model="store.tripForm.title"    
                                    />
                                </BFormFloatingLabel>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <BFormFloatingLabel label="Description" label-for="floatingDescription" class="my-2">
                                    <BFormTextarea 
                                        id="floatingDescription" placeholder="Description" 
                                        v-model="store.tripForm.description"    
                                    />
                                </BFormFloatingLabel>
                            </div>
                        </div>

                        <!-- Dates inputs -->
                        <div class="row">
                            <div class="col-6">
                                <BFormFloatingLabel label="FromDate" label-for="floatingFromDate" class="my-2">
                                    <BFormInput 
                                        id="floatingFromDate" 
                                        type="date" 
                                        placeholder="FromDate" 
                                        v-model="store.tripForm.tripStart"
                                        :class="{ 'is-invalid': !isToDateValid }"
                                    />
                                </BFormFloatingLabel>
                            </div>
                            <div class="col-6">
                                <BFormFloatingLabel label="ToDate" label-for="floatingToDate" class="my-2">
                                    <BFormInput 
                                        id="floatingToDate" 
                                        type="date"
                                        placeholder="ToDate" 
                                        v-model="store.tripForm.tripEnd" 
                                        :class="{ 'is-invalid': !isToDateValid }"
                                    />
                                </BFormFloatingLabel>
                            </div>
                        </div>
                        <div v-if="!isToDateValid" class="text-danger mt-2">
                            The "To Date" cannot be earlier than the "From Date".
                        </div>
                    </BForm>
                </div>
            </div>

            <!-- Continue btn -->
            <div class="row mb-3 justify-content-end">
                <div class="col-auto">
                    <button class="btn-custom">
                        <span>Continue</span>
                        <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../../store/store';

export default {
    data() {
        return {
            store: store,
        };
    },
    computed: {
        isToDateValid() {
            const fromDate = this.store.tripForm.tripStart;
            const toDate = this.store.tripForm.tripEnd;
            return !fromDate || !toDate || new Date(toDate) >= new Date(fromDate);
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
@import '../../styles/variables.scss';

.trip-details {
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

}
</style>