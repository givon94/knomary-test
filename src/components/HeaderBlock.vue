<template>
    <header class="header">
        <div class="header__block">
            <div class="logo header__logo">
                <h1 class="logo__title header__logo-title">Knomary</h1>
                <span class="logo__subtitle header__logo-subtitle">TEST</span>
            </div>
            <nav class="header__nav">
                <div
                    class="header__nav-burger"
                    @click="showMobileMenu = !showMobileMenu"
                >
                    <span class="line-1"></span>
                    <span class="line-2"></span>
                    <span class="line-3"></span>
                </div>
                <div class="header__nav-lists-wrapper" :class="{'header__nav-lists-wrapper--visible' : showMobileMenu}">
                    <ul class="header__nav-lists">
                        <li class="header__nav-list"
                            v-for="(link, index) in links"
                            :key="index"
                            :class="{'header__nav-list--active': $route.path === link.url, 'header__nav-list--disabled': link.disabled}"
                        >
                            <router-link
                                :to="link.url"
                                @click.native="showMobileMenu = false"
                            >{{ link.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="header__user">
                <img class="header__user-img" src="img/person.jpg" alt="Виталий Лавов">
                <div class="header__user-descr">
                    <h5 class="header__user-descr-name">Виталий Лавов</h5>
                    <p class="header__user-descr-role">Сотрудник</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    { title: 'Курсы', url: '/courses' },
                    { title: 'Тестирования', url: '/testing' },
                    { title: 'События', url: '/events' },
                    { title: 'База знаний', url: '/knowledge-base', disabled: true },
                    { title: 'Пользователи', url: '/users', disabled: true },
                    { title: 'Отчеты', url: '/reports', disabled: true },
                ],
                showMobileMenu: false
            }
        },
    }
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0px 1px 0px #E9EBF0;
        padding: 12px 24px;
        z-index: 2;
        &__block {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__nav {
            margin: 0 auto 0 41px;
            &-burger {
                position: relative;
                display: none;
                width: 30px;
                height: 24px;
                cursor: pointer;
                transition-duration: 400ms;
                z-index: 2;

                &--active {
                    transform: rotate(90deg);
                }

                & span {
                    position: absolute;
                    width: 30px;
                    height: 2px;
                    background-color: #2B3452;
                    transition: 0.4s;
                }

                & .line-1 {
                    top: 0;
                }

                & .line-2 {
                    top: 50%;
                    transform: translateY(-50%);
                }

                & .line-3 {
                    bottom: 0;
                }
            }
            &-lists {
                display: flex;
                align-items: center;
                margin: 0 -16px;
            }
            &-list {
                position: relative;
                white-space: nowrap;
                font-size: 14px;
                line-height: 16px;
                margin: 0 16px;
                &:before {
                    content: none;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transform: translateY(24px);
                    width: inherit;
                    height: 1px;
                    background: #6699FD;
                }
                &:hover {
                    &:before {
                        content: '';
                    }
                }
                &--active {
                    color: #6699FD;
                    pointer-events: none;
                    &:before {
                        content: '';
                    }
                }
                &--disabled {
                    pointer-events: none;
                    color: #7D8395;
                }
            }
        }
        &__user {
            display: flex;
            align-items: center;
            margin-right: 9px;
            &-img {
                flex: none;
                border-radius: 10px;
            }
            &-descr {
                margin-left: 8px;
                &-name {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18px;
                    color: #000000;
                }
                &-role {
                    font-size: 12px;
                    line-height: 18px;
                    color: #6699FD;
                }
            }
        }
    }

    @media (max-width: 575.98px) {
        .header {
            &__nav {
                margin: 0 0 0 20px;
                &-burger {
                    display: block;
                }
                &-lists {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                    margin: 0;
                    &-wrapper {
                        display: none;
                        background: #fff;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        &--visible {
                            display: block;
                            animation: fadeIn .4s ease-in-out;
                        }
                    }
                }
                &-list {
                    margin: 0 0 20px;
                    &:hover:before {
                        content: none;
                    }
                    &:before {
                        content: none;
                    }
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }
            &__user {
                display: none;
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .header {
            &__nav {
                order: 2;
                margin: 0 0 0 20px;
                &-burger {
                    display: block;
                }
                &-lists {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                    margin: 0;
                    &-wrapper {
                        display: none;
                        background: #fff;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        &--visible {
                            display: block;
                            animation: fadeIn .4s ease-in-out;
                        }
                    }
                }
                &-list {
                    margin: 0 0 20px;
                    &:hover:before {
                        content: none;
                    }
                    &:before {
                        content: none;
                    }
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }
            &__user {
                order: 1;
                margin: 0 20px 0 auto;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .header {
            &__nav {
                order: 2;
                margin: 0 0 0 20px;
                &-burger {
                    display: block;
                }
                &-lists {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    height: 100%;
                    margin: 0;
                    &-wrapper {
                        display: none;
                        background: #fff;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        &--visible {
                            display: block;
                            animation: fadeIn .4s ease-in-out;
                        }
                    }
                }
                &-list {
                    margin: 0 0 20px;
                    &:hover:before {
                        content: none;
                    }
                    &:before {
                        content: none;
                    }
                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }
            &__user {
                order: 1;
                margin: 0 20px 0 auto;
            }
        }
    }
</style>
