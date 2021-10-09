<template>
    <div class="news__item">
        <div class="news__item-top">
            <img class="news__top-img" :src="itemImg" :alt="itemName">
            <ul class="news__top-tags">
                <li
                    class="news__top-tag"
                    v-for="(tag, index) in itemTags"
                    :key="index"
                >{{ tag }}</li>
            </ul>
        </div>
        <div class="news__item-descr">
            <h4 class="news__descr-title">{{ itemName }}</h4>
            <p class="news__descr-info">{{ itemDescr }}</p>
            <div class="news__descr-btns">
                <div class="news__descr-btn news__descr-btn-likes">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#7D8395"></path>
                    </svg>
                    <span class="news__descr-btn-count">{{ itemLikes }}</span>
                </div>
                <div class="news__descr-btn news__descr-btn-comments">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H4L2 16V2H18V14Z" fill="#7D8395"></path>
                    </svg>
                    <span class="news__descr-btn-count">{{ itemComments }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['itemImg', 'itemName', 'itemTags', 'itemDescr', 'itemLikes', 'itemComments']
    }
</script>

<style lang="scss">
    .news {
        &__item {
            width: calc(33.333% - 24px);
            max-width: 448px;
            margin: 12px;
            animation: fadeIn .5s ease-in-out;
            &-top {
                position: relative;
                margin-bottom: 16px;
            }
        }
        &__top {
            &-img {
                flex: none;
                width: 448px;
                height: 248px;
                object-fit: cover;
                border-radius: 10px;
            }
            &-tags {
                position: absolute;
                top: 16px;
                left: 16px;
                right: 16px;
                display: flex;
                align-items: center;
                margin: -4px;
            }
            &-tag {
                font-size: 14px;
                line-height: 18px;
                color: #FFFFFF;
                background: #EB5757;
                padding: 3px 4px;
                border-radius: 4px;
                margin: 4px;
                &:nth-child(even) {
                    background: #2D9CDB;
                }
            }
        }
        &__descr {
            &-title {
                font-weight: 600;
                font-size: 18px;
                line-height: 26px;
                margin-bottom: 8px;
            }
            &-info {
                font-size: 14px;
                line-height: 24px;
                color: #7D8395;
                margin-bottom: 16px;
            }
            &-btns {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            &-btn {
                display: flex;
                align-items: center;
                padding-left: 2px;
                &-likes {
                    margin-right: 25px;
                }
                &-count {
                    font-size: 14px;
                    line-height: 18px;
                    color: #7D8395;
                    margin-left: 10px;
                }
            }
        }
    }
</style>