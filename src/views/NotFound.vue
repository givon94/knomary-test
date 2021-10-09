<template>
    <div class="not-found">
        <h1 class="not-found__title">Page Not Found</h1>
        <h1 class="not-found__subtitle">404</h1>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .not-found {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(10px + 1vw);
        &__title {
            padding-right: 12px;
            animation: type .5s alternate infinite;
        }
        &__subtitle {
            padding-left: 9px;
        }
    }
    @keyframes type{
        from {
            box-shadow: inset -3px 0px 0px #888;
        }
        to {
            box-shadow: inset -3px 0px 0px transparent;
        }
    }

    @media (max-width: 575.98px) {
        .not-found {
            position: static;
        }
    }
</style>