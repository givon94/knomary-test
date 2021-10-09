<template>
    <div class="education__item">
        <img class="education__item-img" :src="itemImg" :alt="itemName">
        <div class="education__item-descr">
            <div class="education__descr-type">
                <span class="education__descr-type-name">{{ itemType }}</span>
                <span class="education__descr-type-status">{{ itemProgressVal }}</span>
            </div>
            <div class="education__descr-progress" v-if="itemProgress != null">
                <div class="education__descr-progress-line" :style="{'width': itemProgress + '%'}"></div>
            </div>
            <h4 class="education__descr-title">{{ itemName }}</h4>
            <div class="education__descr-date">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.02 7.37333L8.31333 6.66666L5.06 9.92L3.64667 8.50666L2.94 9.21333L5.06 11.3333L9.02 7.37333ZM10.6667 2H10V0.666664H8.66667V2H3.33333V0.666664H2V2H1.33333C0.593333 2 0.00666666 2.6 0.00666666 3.33333L0 12.6667C0 13.4 0.593333 14 1.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V3.33333C12 2.6 11.4 2 10.6667 2ZM10.6667 12.6667H1.33333V5.33333H10.6667V12.6667Z" fill="#7D8395"></path>
                </svg>
                <span class="education__descr-date-text">Доступен до: {{ itemDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['itemImg', 'itemName', 'itemType', 'itemProgress', 'itemProgressVal', 'itemDate']
    }
</script>

<style lang="scss">
    .education {
        &__item {
            display: flex;
            flex-direction: column;
            width: calc(25% - 24px);
            max-width: 330px;
            overflow: hidden;
            background: #fff;
            border-radius: 9px;
            cursor: pointer;
            margin: 12px;
            animation: fadeIn .5s ease-in-out;
            &:hover {
                & .education__descr-title {
                    color: #6699FD;
                }
            }
            &-img {
                flex: none;
                width: 330px;
                height: 200px;
                object-fit: cover;
            }
            &-descr {
                display: flex;
                flex-direction: column;
                height: 100%;
                border: 1px solid #E9EBF0;
                padding: 16px;
            }
        }
        &__descr {
            &-type {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                font-size: 14px;
                line-height: 18px;
                color: #7D8395;
                margin-bottom: 8px;
                &-status {
                    margin-left: 10px;
                }
            }
            &-progress {
                position: relative;
                overflow: hidden;
                height: 4px;
                background: #DBDEE5;
                border-radius: 10px;
                margin-bottom: 17px;
                &-line {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 0;
                    background: #6FCF97;
                    border-radius: 10px;
                    &-10 {
                        width: 10%;
                    }
                    &-0 {
                        width: 0%;
                    }
                    &-100 {
                        width: 100%;
                    }
                }
            }
            &-title {
                font-weight: 600;
                font-size: 18px;
                line-height: 26px;
                margin-bottom: 14px;
            }
            &-date {
                display: flex;
                align-items: center;
                margin-top: auto;
                padding-left: 2px;
                &-text {
                    font-size: 14px;
                    line-height: 18px;
                    color: #7D8395;
                    margin-left: 9px;
                }
            }
        }
    }

    @media (max-width: 575.98px) {
        .education {
            &__item {
                width: 100%;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .education {
            &__item {
                width: calc(50% - 24px);
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .education {
            &__item {
                width: calc(33.333% - 24px);
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .education {
            &__item {
                width: calc(33.333% - 24px);
            }
        }
    }
</style>
