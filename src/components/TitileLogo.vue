<template>
    <div class="logo">
        <h1 class="logo__title">Knomary</h1>
        <span class="logo__subtitle">TEST</span>
    </div>
</template>


<style lang="scss">
    .logo {
        flex: none;
        display: flex;
        align-items: center;
        &__title {
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
        }
        &__subtitle {
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            margin-left: 8px;
            color: #fff;
            padding: 3px 4px;
            background: #6699FD;
            border-radius: 4px;
        }
    }
</style>