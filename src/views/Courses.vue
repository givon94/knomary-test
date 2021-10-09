<template>
    <div>
        <section class="education">
            <div class="container">
                <h2 class="section-title education__title">Назначенное обучение</h2>
                <ul class="education__tabs">
                    <tab-education
                            v-for="(tab, index) in educationTabs"
                            :key="index"
                            :tabCategory="category"
                            :tabUrl="tab.url"
                            :tabTitle="educationType(tab.title, true)"
                            :tabLength="tab.length"
                            @show="category = tab.url"
                    ></tab-education>
                </ul>

                <div class="education__items">
                    <item-education
                            v-for="item in educationItemsFilter"
                            :key="item.name"
                            :itemImg="item.image"
                            :itemName="item.name"
                            :itemType="educationType(item.type)"
                            :itemProgress="item.progress"
                            :itemProgressVal="progressVal(item.progress)"
                            :itemDate="item.date"
                    ></item-education>
                </div>
            </div>
        </section>

        <section class="news">
            <div class="container">
                <h2 class="section-title news__title">Новости</h2>
                <div class="news__items">
                    <item-news
                        v-for="item in news"
                        :key="item.name"
                        :itemImg="item.image"
                        :itemName="item.name"
                        :itemTags="item.tags"
                        :itemDescr="item.description"
                        :itemLikes="item.likes"
                        :itemComments="item.comments"
                    >
                    </item-news>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ItemEducation from "../components/ItemEducation";
    import TabEducation from "../components/TabEducation";
    import ItemNews from "../components/ItemNews";

    export default {
        components: { ItemEducation, TabEducation, ItemNews },
        data() {
            return {
                category: 'all',
            }
        },
        mounted () {
            this.$store.dispatch('loadEducation')
            this.$store.dispatch('loadNews')
        },
        computed: {
            education() {
                return this.$store.getters.education
            },
            news() {
                return this.$store.getters.news
            },
            educationItemsFilter() {
                if (this.category === 'all') return this.education
                else return this.education.filter(v => v.type === this.category)
            },
            educationTabs() {
                const arr = []
                const counts = {}

                arr.push({ title: 'Все', url: 'all', length: this.education.length })

                this.education.forEach(item => counts[item.type] = (counts[item.type] || 0) + 1)

                for (let key in counts) {
                    arr.push({ title: key, url: key, length: counts[key] })
                }

                return arr
            }
        },
        methods: {
            educationType (val, isTabs) {
                let resultItem = val
                let resultTab = val

                switch (val) {
                    case 'course':
                        resultItem = 'Курс'
                        resultTab = 'Курсы'
                        break;
                    case 'test':
                        resultItem = 'Тест'
                        resultTab = 'Тесты'
                        break;
                    case 'event':
                        resultItem = 'Событие'
                        resultTab = 'События'
                        break;
                }

                return isTabs ? resultTab : resultItem
            },
            progressVal (val) {
                let progressVal = ''

                if (val === 0) progressVal = 'не пройдено'
                else if (val === 100) progressVal = 'пройден'
                else if (val > 0) progressVal = `${val}% пройдено`

                return progressVal
            },
        }
    }
</script>

<style lang="scss">
    .education {
        &__title {
            margin-bottom: 16px;
        }
        &__tabs {
            display: flex;
            margin-bottom: 24px;
        }
        &__items {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: wrap;
            margin: -12px;
        }
    }

    .news {
        padding-top: 80px;
        &__title {
            margin-bottom: 32px;
        }
        &__items {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            flex-wrap: wrap;
            margin: -12px;
        }
    }
</style>
