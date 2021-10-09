<template>
    <header class="header">
        <div class="header__block">
            <div class="header__logo">
                <title-logo></title-logo>
            </div>
            <nav class="header__nav">
                <div class="header__nav-lists-wrapper">
                    <ul class="header__nav-lists">
                        <li class="header__nav-list"
                            v-for="(link, index) in links"
                            :key="index"
                            :class="{'header__nav-list--active': $route.path === link.url, 'header__nav-list--disabled': link.disabled}"
                        >
                            <router-link :to="link.url">{{ link.title }}</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="header__person"><img class="header__person-img" src="img/person.jpg" alt="Виталий Лавов">
                <div class="header__person-descr">
                    <h5 class="header__person-descr-name">Виталий Лавов</h5>
                    <p class="header__person-descr-role">Сотрудник</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import TitleLogo from './TitileLogo.vue'

    export default {
        components: { TitleLogo },
        data() {
            return {
                links: [
                    { title: 'Курсы', url: '/courses' },
                    { title: 'Тестирования', url: '/testing' },
                    { title: 'События', url: '/events' },
                    { title: 'База знаний', url: '/knowledge-base', disabled: true },
                    { title: 'Пользователи', url: '/users', disabled: true },
                    { title: 'Отчеты', url: '/reports', disabled: true },
                ]
            }
        }
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
        &__person {
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
</style>
