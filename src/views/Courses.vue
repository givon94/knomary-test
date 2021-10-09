<template>
    <section class="education">
        <div class="container">
            <h2 class="section-title education__title">Назначенное обучение</h2>
            <ul class="education__tabs">
                <tab-education
                    v-for="(tab, index) in educationTabs" :key="index"
                    :tabCategory="category"
                    :tabUrl="tab.url"
                    :tabTitle="educationType(tab.title)"
                    :tabLength="tab.length"
                    @show="category = tab.url"
                ></tab-education>
            </ul>

            <div class="education__items">
                <item-education
                        v-for="(item, index) in educationItemsFilter"
                        :key="index"
                        :itemImg="item.image"
                        :itemName="item.name"
                        :itemProgress="item.progress"
                        :itemProgressVal="progressVal(item.progress)"
                ></item-education>
            </div>
        </div>
    </section>
</template>

<script>
    import ItemEducation from "../components/ItemEducation";
    import TabEducation from "../components/TabEducation";

    export default {
        components: {ItemEducation, TabEducation},
        data() {
            return {
                category: 'all',
            }
        },
        mounted () {
            this.$store.dispatch('loadEducation')
        },
        computed: {
            education() {
                return this.$store.getters.education
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
            educationType (val) {
                let result = val

                switch (val) {
                    case 'course':
                        result = 'Курс'
                        break;
                    case 'test':
                        result = 'Тест'
                        break;
                    case 'event':
                        result = 'Событие'
                        break;
                }

                return result
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
</style>
