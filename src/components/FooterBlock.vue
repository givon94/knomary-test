<template>
    <footer class="footer">
        <div class="footer__block">
            <div class="logo footer__logo">
                <p class="logo__title footer__logo-title">Knomary</p>
                <span class="logo__subtitle footer__logo-subtitle">TEST</span>
            </div>
            <a class="footer__btn" href="#">Нужна помощь?</a>
        </div>
    </footer>
</template>


<style lang="scss">
    .footer {
        background: #F2F2F2;
        padding: 24px 32px;
        &__block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
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

    @media (max-width: 575.98px) {
        .footer {
            &__block {
                flex-direction: column;
                justify-content: center;
            }
            &__btn {
                margin-top: 15px;
            }
        }
    }
</style>
