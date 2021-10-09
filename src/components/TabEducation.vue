<template>
    <li class="education__tab">
        <a class="education__tab-link"
           :class="{'education__tab-link--active' : tabCategory === tabUrl}"
           href="#"
           @click.prevent="$emit('show')"
        >
            <span class="education__tab-link-title">{{ tabTitle }}</span>
            <span class="education__tab-link-count">{{ tabLength }}</span>
        </a>
    </li>
</template>

<script>
    export default {
        props: ['tabCategory', 'tabUrl', 'tabTitle', 'tabLength']
    }
</script>

<style lang="scss">
    .education {
        &__tab {
            margin-right: 13px;
            &-link {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #F8F8F8;
                color: #7D8395;
                border-radius: 40px;
                padding: 8px 16px;
                &--active {
                    background: #6699FD;
                    color: #fff;
                    & .education__tab-link-count {
                        color: rgba(43, 52, 82, .8);
                    }
                }
                &-title {
                    font-family: 'Roboto', sans-serif;
                    font-size: 18px;
                    line-height: 21px;
                }
                &-count {
                    font-size: 12px;
                    font-weight: 300;
                    line-height: 15px;
                    padding: 0 3px;
                    color: #2B3452;
                    background: #FDF41F;
                    border-radius: 4px;
                    margin-left: 8px;
                }
            }
        }
    }
</style>