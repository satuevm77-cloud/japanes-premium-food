"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "en" | "ja" | "ru";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      reviews: "Reviews",
      reservation: "Reservation",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Luxury Japanese Cuisine",
      title1: "Japanes",
      title2: "Premium Food",
      description: "Authentic Japanese cuisine crafted with tradition and perfection.",
      reserve: "Reserve Table",
      explore: "Explore Menu",
      omakase: "Omakase Counter",
      omakaseDesc: "12 private seats nightly",
      seasonal: "Seasonal Menu",
      seasonalDesc: "Ingredients selected daily",
      private: "Private Dining",
      privateDesc: "Business and celebration rooms"
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "A Tokyo dining ritual shaped by restraint, texture and exact timing.",
      description: "Japanes Premium Food blends modern luxury with traditional Japanese sensibility. Every service is built around seasonal ingredients, calm hospitality and the confidence of craft.",
      step1: "Seasonal sourcing",
      step2: "Chef-led omakase",
      step3: "Private hospitality",
      discover: "Discover Story"
    },
    menu: {
      eyebrow: "Menu",
      title: "Seasonal signatures for a refined evening.",
      description: "A concise selection from the tasting menu, composed around ocean, fire and delicate fermentation.",
      fullMenu: "Full Menu"
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A dining room made for quiet spectacle.",
      description: "Dark stone, polished wood, precise plating and golden evening light.",
      viewGallery: "View Gallery"
    },
    reviews: {
      eyebrow: "Guest Notes",
      title: "Trusted by guests who notice the details.",
      description: "Private clients, travelers and business hosts return for service that feels personal, composed and exact."
    },
    reservation: {
      eyebrow: "Reservation",
      title: "Request a private table or chef's counter seat.",
      description: "Share your preferred date, guest count and occasion. Our host team will confirm availability.",
      hostDesk: "Host Desk",
      subtitle: "Dinner is seated with intention, never rushed.",
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phonePlaceholder: "+1 000 000 0000",
      selectDate: "Select date",
      selectTime: "Select time",
      guests: "Number of guests",
      selectGuests: "Select guests",
      occasion: "Occasion",
      selectOccasion: "Select occasion",
      occasionDinner: "Dinner",
      occasionBirthday: "Birthday",
      occasionAnniversary: "Anniversary",
      occasionBusiness: "Business",
      occasionDate: "Date Night",
      occasionCelebration: "Celebration",
      specialRequests: "Special requests",
      specialRequestsPlaceholder: "Dietary notes, seating preference or any other requests",
      sendRequest: "Send Request",
      confirmation: "Your reservation request has been received.",
      confirmationDesc: "Our host team will contact you shortly to confirm availability and refine the details of your evening.",
      flexibleDates: "Flexible Dates",
      flexibleDatesDesc: "Choose any available evening",
      eveningService: "Evening Service",
      eveningServiceTime: "17:30 — 23:00",
      upToGuests: "Up to 8 Guests",
      upToGuestsDesc: "Private rooms available"
    },
    contact: {
      eyebrow: "Contact",
      title: "Find us in the quiet glow of the central dining district.",
      description: "Reservations, private dining and event enquiries are handled by the host desk.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      social: "Social",
      reserve: "Reserve Table",
      mapPlaceholder: "Map preview placeholder for a premium embedded location."
    },
    about: {
      eyebrow: "About",
      title: "Traditional Japanese craft, interpreted through modern luxury.",
      description: "A restaurant built around precision, privacy and the confidence of seasonal cuisine.",
      philosophyTitle: "Restaurant Philosophy",
      philosophySubtitle: "Luxury is felt in the timing between things.",
      philosophyDesc: "We design each dinner as a sequence of calm moments. Service is attentive without noise, the dining room is dramatic without excess, and the menu moves with the seasons.",
      history: "History",
      historyBody: "Founded as an intimate counter for guests who value stillness as much as flavor, Japanes Premium Food grew from a private chef's table into a full luxury restaurant.",
      chef: "Chef",
      chefBody: "The kitchen is led with omakase discipline: fewer gestures, better ingredients and a deep respect for temperature, timing and texture.",
      ingredients: "Ingredients",
      ingredientsBody: "Seafood, rice, tea and seasonal produce are selected daily, with fermentation and charcoal used to create depth without heaviness.",
      traditions: "Traditions",
      traditionsBody: "The room borrows from Japanese tea ceremony, kaiseki pacing and Tokyo nightlife, creating an evening that feels quiet, private and exact.",
      counterTitle: "The chef's counter is intentionally small, so every guest remains close to the craft.",
      counterBody: "Knife work, rice temperature, nori texture and sake service happen in view. The performance is never theatrical for its own sake; it is the natural result of serious cuisine."
    },
    notFound: {
      eyebrow: "Not Found",
      title: "This private room is not on tonight's floor plan.",
      description: "Return to the restaurant experience or request a table with the host desk.",
      returnHome: "Return Home",
      reserve: "Reserve Table"
    },
    footer: {
      description: "Luxury Japanese cuisine shaped by seasonal ingredients, quiet service and a cinematic Tokyo dining atmosphere.",
      explore: "Explore",
      visit: "Visit"
    },
    loading: {
      brand1: "Japanes",
      brand2: "Premium Food"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私たちについて",
      menu: "メニュー",
      gallery: "ギャラリー",
      reviews: "レビュー",
      reservation: "予約",
      contact: "お問い合わせ"
    },
    hero: {
      eyebrow: "高級日本料理",
      title1: "Japanes",
      title2: "Premium Food",
      description: "伝統と完璧さで作られた本格的な日本料理。",
      reserve: "予約する",
      explore: "メニューを見る",
      omakase: "おまかせカウンター",
      omakaseDesc: "毎晩12席のプライベート席",
      seasonal: "季節のメニュー",
      seasonalDesc: "毎日選ばれた食材",
      private: "プライベートダイニング",
      privateDesc: "ビジネスとお祝いの個室"
    },
    philosophy: {
      eyebrow: "哲学",
      title: "抑制、質感、正確なタイミングで形作られた東京のダイニングリチュアル。",
      description: "Japanes Premium Foodは、モダンなラグジュアリーと伝統的な日本の感性を融合させています。すべてのサービスは、季節の食材、静かなホスピタリティ、そして職人の自信の上に構築されています。",
      step1: "季節の仕入れ",
      step2: "シェフ主導のおまかせ",
      step3: "プライベートホスピタリティ",
      discover: "ストーリーを見る"
    },
    menu: {
      eyebrow: "メニュー",
      title: "洗練された夜のための季節のシグネチャー。",
      description: "テイスティングメニューから厳選された選択。海、火、繊細な発酵を中心に構成。",
      fullMenu: "全メニュー"
    },
    gallery: {
      eyebrow: "ギャラリー",
      title: "静かな spectacle のためのダイニングルーム。",
      description: "ダークストーン、研ぎ澄ました木材、正確な盛り付け、黄金の夕暮れの光。",
      viewGallery: "ギャラリーを見る"
    },
    reviews: {
      eyebrow: "お客様の声",
      title: "ディテールにこだわるゲストから信頼されています。",
      description: "プライベートクライアント、旅行者、ビジネスホストが、個人的で落ち着いた、正確なサービスに戻ってきます。"
    },
    reservation: {
      eyebrow: "予約",
      title: "プライベートテーブルまたはシェフカウンター席をリクエスト。",
      description: "ご希望の日付、ゲスト数、お祝いの種類をお知らせください。ホストチームが空席状況をご確認いたします。",
      hostDesk: "ホストデスク",
      subtitle: "ディナーは意図を持って座り、決して急がせません。",
      name: "お名前",
      namePlaceholder: "お名前を入力",
      phone: "電話番号",
      phonePlaceholder: "+81 3 0000 0000",
      selectDate: "日付を選択",
      selectTime: "時間を選択",
      guests: "ゲスト数",
      selectGuests: "ゲスト数を選択",
      occasion: "お祝いの種類",
      selectOccasion: "お祝いの種類を選択",
      occasionDinner: "ディナー",
      occasionBirthday: "誕生日",
      occasionAnniversary: "記念日",
      occasionBusiness: "ビジネス",
      occasionDate: "デートナイト",
      occasionCelebration: "お祝い",
      specialRequests: "特別なリクエスト",
      specialRequestsPlaceholder: "食事の制限、席の好み、その他のリクエスト",
      sendRequest: "リクエストを送信",
      confirmation: "予約リクエストが受信されました。",
      confirmationDesc: "ホストチームより、空席状況の確認とディナーの詳細について連絡いたします。",
      flexibleDates: "柔軟な日程",
      flexibleDatesDesc: "利用可能な任何の夜を選択",
      eveningService: "ディナーサービス",
      eveningServiceTime: "17:30 — 23:00",
      upToGuests: "最大8名様",
      upToGuestsDesc: "個室をご用意しています"
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "中央ダイニング地区の静かな辉きの中で。",
      description: "予約、プライベートダイニング、イベントのお問い合わせはホストデスクが承ります。",
      address: "住所",
      phone: "電話番号",
      email: "メール",
      social: "ソーシャル",
      reserve: "予約する",
      mapPlaceholder: "高級な埋め込みロケーションのマッププレビュープレースホルダー。"
    },
    about: {
      eyebrow: "私たちについて",
      title: "伝統的な日本の技を、モダンなラグジュアリーで解釈。",
      description: "精度、プライバシー、そして季節の料理への自信を中心に構築されたレストラン。",
      philosophyTitle: "レストランの哲学",
      philosophySubtitle: "ラグジュアリーは、ものともの之间的のタイミングで感じられます。",
      philosophyDesc: "私たちは、各ディナーを静かな瞬間のシーケンスとして設計しています。サービスは騒がず、ダイニングルームは過剰さなくドラマチックで、メニューは季節とともに動きます。",
      history: "歴史",
      historyBody: "味と同じくらい静けさを大切にするゲストのための親密なカウンターとして設立されたJapanes Premium Foodは、プライベートシェフのテーブルからフルラグジュアリーレストランに成長しました。",
      chef: "シェフ",
      chefBody: "キッチンはおまかせの規律で導かれます。より少ないジェスチャー、より良い食材、そして温度、タイミング、テクスチャへの深い敬意。",
      ingredients: "食材",
      ingredientsBody: "シーフード、米、茶、季節の食材は毎日選ばれ、発酵と炭火が重さなしに深みを生み出します。",
      traditions: "伝統",
      traditionsBody: "この空間は日本の茶道、懐石のペーシング、東京のナイトライフから借りており、静かでプライベートで正確な夜を創造しています。",
      counterTitle: "シェフカウンターは意図的に小さく、すべてのゲストが職人の近くにいられるように。",
      counterBody: "包丁さばり、ご飯の温度、海苔のテクスチャ、酒のサービスが目の前で行われます。パフォーマンスは決して自己目的ではなく、本格的な料理の自然な結果です。"
    },
    notFound: {
      eyebrow: "お探しのページ",
      title: "この個室は今夜のフロアプランにありません。",
      description: "レストランのエクスペリエンスに戻るか、ホストデスクにテーブルをリクエストしてください。",
      returnHome: "ホームに戻る",
      reserve: "予約する"
    },
    footer: {
      description: "季節の食材、静かなサービス、シネマティックな東京のダイニングアトモスフィアで形作られた高級日本料理。",
      explore: "探索",
      visit: "アクセス"
    },
    loading: {
      brand1: "Japanes",
      brand2: "Premium Food"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      menu: "Меню",
      gallery: "Галерея",
      reviews: "Отзывы",
      reservation: "Бронирование",
      contact: "Контакты"
    },
    hero: {
      eyebrow: "Премиальная Японская Кухня",
      title1: "Japanes",
      title2: "Premium Food",
      description: "Аутентичная японская кухня, созданная с традициями и совершенством.",
      reserve: "Забронировать",
      explore: "Смотреть меню",
      omakase: "Омакасе-стойка",
      omakaseDesc: "12 приватных мест каждую ночь",
      seasonal: "Сезонное меню",
      seasonalDesc: "Ингредиенты отбираются ежедневно",
      private: "Приватный ужин",
      privateDesc: "Деловые и праздничные залы"
    },
    philosophy: {
      eyebrow: "Философия",
      title: "Токийский ритуал ужина, сформированный сдержанностью, текстурой и точным таймингом.",
      description: "Japanes Premium Food сочетает современную роскошь с традиционным японским восприятием. Каждый сервис строится на сезонных ингредиентах, спокойном гостеприимстве и уверенности мастерства.",
      step1: "Сезонные закупки",
      step2: "Омакасе от шеф-повара",
      step3: "Приватное гостеприимство",
      discover: "Узнать историю"
    },
    menu: {
      eyebrow: "Меню",
      title: "Сезонные сигнатуры для изысканного вечера.",
      description: "Лаконичный выбор из дегустационного меню, построенный вокруг огня, океана и деликатной ферментации.",
      fullMenu: "Полное меню"
    },
    gallery: {
      eyebrow: "Галерея",
      title: "Зал для тихого зрелища.",
      description: "Тёмный камень, полированное дерево, точная подача и золотистый вечерний свет.",
      viewGallery: "Смотреть галерею"
    },
    reviews: {
      eyebrow: "Отзывы гостей",
      title: "Нам доверяют гости, которые замечают детали.",
      description: "Приватные клиенты, путешественники и деловые хозяева возвращаются за сервисом, который ощущается личным, спокойным и точным."
    },
    reservation: {
      eyebrow: "Бронирование",
      title: "Забронируйте приватный стол или место за стойкой шеф-повара.",
      description: "Укажите предпочитаемую дату, количество гостей и повод. Наша команда подтвердит наличие мест.",
      hostDesk: "Стойка рецепции",
      subtitle: "Ужин проходит осознанно, без суеты.",
      name: "Имя",
      namePlaceholder: "Ваше имя",
      phone: "Телефон",
      phonePlaceholder: "+7 000 000 0000",
      selectDate: "Выберите дату",
      selectTime: "Выберите время",
      guests: "Количество гостей",
      selectGuests: "Выберите количество",
      occasion: "Повод",
      selectOccasion: "Выберите повод",
      occasionDinner: "Ужин",
      occasionBirthday: "День рождения",
      occasionAnniversary: "Годовщина",
      occasionBusiness: "Деловая встреча",
      occasionDate: "Романтический ужин",
      occasionCelebration: "Празднование",
      specialRequests: "Особые пожелания",
      specialRequestsPlaceholder: "Диетические ограничения, предпочтения по месту или другие пожелания",
      sendRequest: "Отправить заявку",
      confirmation: "Ваша заявка на бронирование принята.",
      confirmationDesc: "Наша команда свяжется с вами в ближайшее время для подтверждения наличия мест и уточнения деталей вашего вечера.",
      flexibleDates: "Гибкие даты",
      flexibleDatesDesc: "Выберите любой доступный вечер",
      eveningService: "Вечернее обслуживание",
      eveningServiceTime: "17:30 — 23:00",
      upToGuests: "До 8 гостей",
      upToGuestsDesc: "Доступны приватные залы"
    },
    contact: {
      eyebrow: "Контакты",
      title: "Нас найдёте в тихом свете центрального района ресторанов.",
      description: "Бронирование, приватные ужины и мероприятия — все запросы обрабатываются на стойке рецепции.",
      address: "Адрес",
      phone: "Телефон",
      email: "Эл. почта",
      social: "Соцсети",
      reserve: "Забронировать",
      mapPlaceholder: "Заглушка карты для премиального местоположения."
    },
    about: {
      eyebrow: "О нас",
      title: "Традиционное японское мастерство, интерпретированное через современную роскошь.",
      description: "Ресторан, построенный вокруг точности, приватности и уверенности в сезонной кухне.",
      philosophyTitle: "Философия ресторана",
      philosophySubtitle: "Роскошь ощущается в тайминге между вещами.",
      philosophyDesc: "Мы проектируем каждый ужин как последовательность спокойных моментов. Сервис внимателен без шума, зал драматичен без избыточности, а меню движется вместе с сезонами.",
      history: "История",
      historyBody: "Основанный как интимная стойка для гостей, ценящих тишину не меньше вкуса, Japanes Premium Food вырос от приватного стола шеф-повара до полноценного ресторана премиум-класса.",
      chef: "Шеф-повар",
      chefBody: "Кухня управляется дисциплиной омакасе: меньше жестов, лучшие ингредиенты и глубокое уважение к температуре, таймингу и текстуре.",
      ingredients: "Ингредиенты",
      ingredientsBody: "Морепродукты, рис, чай и сезонные продукты отбираются ежедневно, а ферментация и уголь создают глубину без тяжести.",
      traditions: "Традиции",
      traditionsBody: "Зал заимствует у японской чайной церемонии, ритма кайсеки и токийской ночной жизни, создавая вечер, который ощущается тихим, приватным и точным.",
      counterTitle: "Стойка шеф-повара намеренно мала, чтобы каждый гость оставался близко к мастерству.",
      counterBody: "Работа ножом, температура риса, текстура нори и подача саке происходят на виду. Представление никогда не театрально ради театральности — это естественный результат серьёзной кухни."
    },
    notFound: {
      eyebrow: "Не найдено",
      title: "Эта комната не на плане этажа на сегодня.",
      description: "Вернитесь к атмосфере ресторана или запросите стол на стойке рецепции.",
      returnHome: "На главную",
      reserve: "Забронировать"
    },
    footer: {
      description: "Премиальная японская кухня, сформированная сезонными ингредиентами, тихим сервисом и кинематографичной атмосферой токийского ресторана.",
      explore: "Навигация",
      visit: "Как добраться"
    },
    loading: {
      brand1: "Japanes",
      brand2: "Premium Food"
    }
  }
} as const;

type TranslationKeys = typeof translations.en;

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] as TranslationKeys }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
  ru: "RU"
};
