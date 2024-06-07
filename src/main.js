import {
    createApp
} from 'vue'
import {
    createI18n
} from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router'

const messages = {
    ru: {
        message: {
            hello: 'hello world',
            nav: {
                home: "Главная",
                catalog: "Каталог",
                about: "О нас",
                news: "Новости",
                contacts: "Контакты"
            }
        }
    },
    kz: {
        message: {
            hello: 'hello sad',
            nav: {
                home: "Басты бет",
                catalog: "Каталог",
                about: "Біз туралы",
                news: "Жаналыктар",
                contacts: "Контактілер"
            }
        }
    }
}

const i18n = createI18n({
    locale: 'ru', // set default locale
    fallbackLocale: 'kz', // set fallback locale
    messages // set locale messages
})

createApp(App).use(router).use(i18n).mount('#app')