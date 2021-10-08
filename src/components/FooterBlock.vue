<template>
    <footer class="footer">
        <div class="footer__block">
            <div class="footer__logo">
                <img-logo></img-logo>
            </div>
            <a class="footer__btn" href="#">Нужна помощь?</a>
        </div>
    </footer>
</template>

<script>
    import ImgLogo from './ImgLogo.vue'

    export default {
        components: { ImgLogo }
    }
</script>

<style lang="scss">
    .footer {
        background: #F2F2F2;
        padding: 24px 32px;
        &__block {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__btn {
            font-family: 'Roboto', sans-serif;
            text-align: center;
            font-size: 16px;
            line-height: 18px;
            font-weight: 700;
            text-transform: uppercase;
            background: #F7FAFF;
            border-radius: 6px;
            padding: 15px 21px;
            color: #6699FD;
        }
    }
</style>
