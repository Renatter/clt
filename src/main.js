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
            delete: "Удалить",
            hello: 'hello world',
            size: 'Размер',
            buy: "Купить",
            err: 'Зарегистрируйтесь на сайте',
            nav: {
                home: "Главная",
                catalog: "Каталог",
                about: "О нас",
                news: "Новости",
                contacts: "Контакты",
                login: 'Войти',
                reg: 'Регистрция',
                exit: 'Выйти',
            },
            home: {
                h1: 'Весеннее настроение',
                dis: '-20% к новой коллекции',
                new: 'Новые товары',
                last: 'Последний шанс купить',
                take: 'Выбор наших клиентов',
                plate: 'Платья и сарафаны',
                style: 'Стильді костюмдер',
                news: 'Новости'


            },
            catalog: {
                clothes: 'Одежда',
                boots: 'Обувь',
                accs: 'Аксессуары'
            },
            about: {
                title: 'Общая информация',
                p1: 'Казахстанский интернет-магазин – это уникальная торговая площадка, где собрана продукция ведущих производителей казахстанского трикотажа. Более 10 лет мы внимательно следим за ситуацией на рынке и не упускаем из виду ни одну достойную компанию, производящую модную женскую одежду. Если есть новый казахстанский бренд, достойный внимания, его продукцию вы найдете в нашем каталоге!',
                p2: 'Как все началось? Как известно, Урал – один из центров моды Казахстана и место, куда приезжают тысячи оптовых покупателей, чтобы купить женскую одежду оптом. Платья и костюмы, юбки и брюки, джемперы и блузки, а также верхняя одежда и аксессуары шьются здесь настоящими мастерами своего дела. Женская одежда на Урале не является настоящим эталоном качества и элегантности в первое десятилетие, ее выбирают деловые женщины и научная интеллигенция, учителя и менеджеры, офисные работники и творческие люди, модельеры-студенты Казахстана, России, Белоруссии и других стран. страны.',
                p3: 'Миллионы женщин в Казахстане и за рубежом мечтают купить казахский трикотаж, так почему бы не помочь им? В 2010 году было принято решение создать интернет-магазин женской одежды, чтобы любой покупатель, независимо от места его проживания, мог найти безграничный и прекрасный мир женской одежды из Казахстана. Находясь в самом сердце казахстанской моды, онлайн. Магазин «РОСИ» работает уже более 10 лет. Каждая женщина делает все возможное, чтобы выглядеть более эффектно, четко и ярко. Женская одежда онлайн – это самый удобный и приятный способ пополнить свой гардероб! Следя за нашими акциями и распродажами, вы всегда сможете найти что-то особенное по привлекательной цене.',
                title2: 'Услуги',
                p4: 'Интернет-магазин «РОСИ» делает все, чтобы покупки были легкими и удобными! Мы продумали наши услуги до мелочей, чтобы каждый клиент чувствовал наше внимание и неподдельную заботу. Система навигации на сайте устроена таким образом, чтобы вы могли легко фильтровать товары и покупать казахский трикотаж необходимых категорий и размеров. Вам остается только выбрать! Остальное решат сотрудники магазина! Мы стремимся обеспечить максимальное удобство и комфорт при покупке одежды в Интернете. Наши фильтры позволяют быстро найти то, что вам нужно по категории, размеру, цвету и другим параметрам. Каждая страница продукта содержит подробные характеристики, высококачественные фотографии и информацию о наличии на складе. Мы также предлагаем различные варианты оплаты и быструю доставку, чтобы вы могли наслаждаться покупками без проблем.',
                title3: 'МЕНЕДЖЕРЫ ПО ПРОДАЖАМ',
                prof: 'Менеджер по продажам',
                kz: 'Бесплатно для Казахстана',
                sng: 'СНГ и другие населенные пункты',
                p5: 'Вам знаком голос хотя бы одного нашего менеджера по продажам. Ведь они предоставляют подробную информацию о ваших заказах и заботятся о своевременной отправке. Что касается белорусского женского трикотажа, то наши менеджеры знают все! И это не преувеличение! Они всегда расскажут вам о последних коллекциях, подберут нужную сумму, предоставят информацию о наличии товара и возможных способах доставки, помогут оформить заказ и позаботятся о том, чтобы ваши покупки были доставлены максимально быстро.'
            },
            contacts: {
                company: 'OOO "ROSI"',
                title: 'Наш адрес:',
                adres1: 'Западно-Казахстанская область, г. Урал, бутик Сити Центр 36',
                title1: 'Обслуживание клиентов:',
                title2: 'Отдел закупок:',
                reclama: 'Рекламный отдел:',
                maps: 'Наш адрес на карте'

            },
            login: {
                title: 'Добро пожаловать, ROSI',
                email: 'Электронная почта',
                pas: 'Пароль',
                title1: 'ROSI Регистрация',
                reg: 'Регистрация',
                login: 'Войти',
                exit: 'Отмена'
            },
            addT: {
                title: 'Добавить товар',
                name: 'Имя',
                img: 'Картина',
                addImg: 'Добавить изображение',
                clothes: 'Одежда',
                boots: 'Обувь',
                accs: 'Аксессуары',
                Price: 'Цена',
                add: 'Добавить'
            },
            addN: {
                title: 'Новости',
                name: 'Тема',
                img: 'Картина',
                text: 'Текст',
                add: 'Опубликовать'
            },
            chat: {
                title: 'Список сообщений',
                sub: 'Отправить'
            },
            basket: {
                title: "Корзина",
                allSum: 'Итоговая цена:',
                delete: 'Удалить',
                buy: "Купить",
                check: 'Подтвердить',
                price: 'Цена',
                name: 'Имя',
                last: 'Фамилия',
                city: 'Город',
                exit: 'Отмена',
            },
            order: {
                title: 'Заказы',
                name: 'Имя',
                city: 'Город',
                size: 'Размер',
                price: 'Цена',
                exit: 'Закрыть',
                add: 'Отправить',
            }

        }
    },
    kz: {
        message: {
            delete: "Жою",
            hello: 'hello sad',
            nav: {
                home: "Басты бет",
                catalog: "Каталог",
                about: "Біз туралы",
                news: "Жаналықтар",
                contacts: "Контактілер",
                login: 'Кiру',
                reg: 'Тiркелу',
                exit: 'Шығу',

            },
            home: {
                h1: 'Көктемгі көңіл-күй',
                dis: '-20% жаңа коллекцияға',
                new: 'Жаңадан келген тауарлар',
                last: 'Сатып алуға соңғы шанс',
                take: 'Біздің тұтыншулардың таңдауы',
                plate: 'Көйлектер және сарафанды киімдер',
                style: 'Стильді костюмдер',
                news: 'Жаналықтар'


            },
            catalog: {
                clothes: 'Киiмдер',
                boots: 'Аяқ-киім',
                accs: 'Аксессуарлар'
            },
            about: {
                title: 'Біздің интернет магазин туралы жалпы ақпарат',
                p1: 'Қазақстандық интернет-дүкен-қазақстандық трикотаждың жетекші өндірушілерінің өнімдері жиналған бірегей сауда алаңы. 10 жылдан астам уақыт бойы біз нарықтағы жағдайды мұқият қадағалап келеміз және сәнді әйелдер киімін шығаратын бірде-бір лайықты фирманы назардан тыс қалдырмаймыз. Егер назар аударуға лайық жаңа қазақстандық бренд пайда болса, оның өнімдерін біздің каталогтан табасыз!',
                p2: 'Барлығы қалай басталды? Өздеріңіз білетіндей, Орал-Қазақстандағы сән орталықтарының бірі және мыңдаған көтерме сатып алушылар әйелдер киімін көтерме сатып алуға келетін орын. Көйлектер мен костюмдерді, юбкалар мен шалбарларды, секіргіштер мен блузкаларды, сондай-ақ сыртқы киімдер мен аксессуарларды осы жерде өз саласының нағыз мамандары жасайды. Оралдағы Әйелдер киімі бірінші онжылдықта сапа мен талғампаздықтың нақты стандарты болып табылмайды, оны іскер әйелдер мен ғылыми зиялы қауым, оқытушылар мен басшылар, кеңсе қызметкерлері мен шығармашылық тұлғалар, Қазақстандағы, Ресейдегі, Беларуссиядағы және басқа елдердегі сәнгер-студенттер таңдайды.',
                p3: 'Қазақстанда және одан тыс жерлерде миллиондаған әйелдер қазақстандық трикотаж сатып алуды армандайды, сондықтан оларға неге көмектеспеске? 2010 жылы әйелдер киімінің интернет-дүкенін құру туралы шешім қабылданды, сондықтан кез-келген Сатып алушы, оның тұрғылықты жеріне қарамастан, Қазақстаннан әйелдер киімінің шексіз және әдемі әлемін таба алады.Қазақстандық сәннің жүрегінде бола отырып, "ROSI" интернет-дүкені 10 жылдан астам уақыт бойы әрбір әйел одан да әсерлі, айқын, жарқын көрінуі үшін қолдан келгеннің бәрін жасап келеді. Интернеттегі Әйелдер киімі-бұл сіздің гардеробыңызды толықтырудың ең ыңғайлы және жағымды тәсілі! Біздің акцияларымыз бен сатылымдарымызды бақылай отырып, сіз әрқашан тартымды бағамен ерекше нәрсе таба аласыз.',
                title2: 'Сервистер',
                p4: '"ROSI" интернет-дүкені сатып алуды оңай әрі ыңғайлы ету үшін бәрін жасайды! Әрбір клиент біздің назарымызды және шынайы қамқорлығымызды сезінуі үшін біз өз қызметімізді ұсақ-түйекке дейін ойластырдық. Сайттағы навигация жүйесі сіз тауарларды оңай сүзіп, қажетті санаттар мен мөлшердегі қазақстандық трикотажды сатып ала алатындай етіп жасалған. Сізге тек таңдау керек! Қалғанын дүкен қызметкерлері шешеді! Біз онлайн киім сатып алу кезінде барынша ыңғайлылық пен жайлылықты қамтамасыз етуге тырысамыз. Біздің сүзгілер санат, өлшем, түс және басқа параметрлер бойынша қажетті заттарды жылдам табуға мүмкіндік береді. Өнімнің әр бетінде егжей-тегжейлі сипаттамалар, жоғары сапалы фотосуреттер және қоймадағы қол жетімділік туралы ақпарат бар. Біз сондай-ақ әртүрлі төлем опцияларын және жылдам жеткізуді ұсынамыз, осылайша сіз сатып алуларыңызды еш қиындықсыз тамашалай аласыз.',
                title3: 'САТУ МЕНЕДЖЕРЛЕРІ',
                prof: 'Сату менеджері',
                kz: 'Қазақстан үшін тегін',
                sng: 'СНГ жәнеде басқа елді мекендер',
                p5: 'Сіз біздің сату менеджерлеріміздің кем дегенде біреуінің дауысымен таныссыз. Өйткені, олар сіздің тапсырыстарыңыз бойынша толық ақпарат береді және уақтылы жөнелтуге қамқорлық жасайды. Беларуссиялық әйелдер трикотажына келетін болсақ, біздің менеджерлер бәрін біледі! Және бұл асыра сілтеу емес! Олар сізге әрдайым соңғы коллекциялар туралы айтып береді, қажетті мөлшерді таңдайды, тауардың болуы және жеткізудің мүмкін әдістері туралы ақпарат береді, тапсырыс беруге көмектеседі және сатып алуларыңыздың мүмкіндігінше тез жеткізілетініне көз жеткізеді.'
            },
            contacts: {
                company: 'ЖШС "ROSI"',
                title: 'Мекен-жайымыз:',
                adres1: 'Батыс Қазақстан облысы, Орал қаласы, City Center 36 бутик',
                title1: 'Клиенттерге қызмет көрсету:',
                title2: 'Сатып алу бөлімі:',
                reclama: 'Жарнама бөлімі:',
                maps: 'Картадағы адресіміз'

            },
            login: {
                title: 'ROSI қош келдіңіз',
                email: 'Электронды почта',
                pas: 'Құпия сөз',
                title1: 'ROSI тiркелу',
                reg: 'Тiркелу',
                login: 'Кiру',
                exit: 'Бас тарту'
            },
            addT: {
                title: 'Товар қосу',
                name: 'Аты',
                img: 'Сурет',
                addImg: 'Сурет косу',
                clothes: 'Киiмдер',
                boots: 'Аяқ-киім',
                accs: 'Аксессуарлар',
                Price: 'Бағасы',
                add: 'Косу'
            },
            addN: {
                title: 'Жаналыктар',
                name: 'Такырып',
                img: 'Сурет',
                text: 'Мәтін',
                add: 'Жариялау'
            },
            chat: {
                title: 'Хабарламалар тізімі',
                sub: 'Жіберу'
            },
            size: 'Өлшемі',
            buy: "Сатып алу",
            err: ' Сайтқа тіркеліңіз',
            basket: {
                title: "Себет",
                allSum: 'Жалпы баға:',
                delete: 'Жою',
                buy: 'Сатып алу',
                check: 'Растау',
                price: 'Бағасы',
                name: 'Аты',
                last: 'Фамилия',
                city: 'Кала',
                exit: 'Болдырмау',
            },
            order: {
                title: 'Тапсырыстар',
                name: 'Аты',
                city: 'Қала',
                size: 'Өлшем',
                price: 'Бағасы',
                exit: 'Жабу',
                add: 'Жiберу',
            }
        }
    }
}

const i18n = createI18n({
    locale: 'kz',
    fallbackLocale: 'ru',
    messages
})

createApp(App).use(router).use(i18n).mount('#app')