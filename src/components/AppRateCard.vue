<template>
    <div class="card-rate">
        <div class="rate">
            <span class="rate-star">
                <font-awesome-icon 
                    v-for="n in filledStars" 
                    :key="'filled-' + n" 
                    icon="fa-solid fa-star" 
                />
                <font-awesome-icon 
                    v-if="halfStar" 
                    :key="'half-star'" 
                    icon="fa-solid fa-star-half-alt" 
                />
            </span>
            <span class="not-rate-star">
                <font-awesome-icon 
                    v-for="n in emptyStars" 
                    :key="'empty-' + n" 
                    icon="fa-regular fa-star" 
                />
            </span>
        </div>
        <div class="value">
            {{item.rate_average}}
            <span>( 78 reviews)</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed: {
        filledStars() {
            return Math.floor(this.item.rate_average);
        },
        halfStar() {
            const decimalPart = this.item.rate_average - Math.floor(this.item.rate_average);
            return decimalPart >= 0.5;
        },
        emptyStars() {
            return 5 - this.filledStars - (this.halfStar ? 1 : 0);
        }
    },
}
</script>

<style lang="scss" scoped>

.card-rate {
    display: flex;
    gap: 10px;

    .rate {
        color: #EE9903;
    }
}
</style>