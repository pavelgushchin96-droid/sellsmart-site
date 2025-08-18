import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.6, ease: "easeOut" } })
};

const SectionTitle = ({ kicker, title, subtitle, align = "center" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp}
    className={`${align === "left" ? "text-left" : "text-center"}`}
  >
    {kicker && (
      <div className="inline-flex items-center gap-2 mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
        <span className="h-1 w-4 rounded-full bg-orange-500 shadow-[0_0_24px_rgba(249,115,22,0.7)]" />
        {kicker}
      </div>
    )}
    <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${align === "left" ? "" : "mx-auto"} text-white`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-3 text-base md:text-lg text-neutral-300 ${align === "left" ? "max-w-2xl" : "max-w-2xl mx-auto"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition">
    {children}
  </div>
);

const Testimonial = ({ quote, author, role, i }) => (
  <motion.figure
    custom={i}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={fadeUp}
    className="group relative rounded-2xl border border-orange-700/30 bg-neutral-950 p-6 shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-transform duration-300 hover:-translate-y-1"
  >
    <blockquote className="text-neutral-100">“{quote}”</blockquote>
    <figcaption className="mt-4 text-sm text-neutral-400">
      <span className="font-medium text-neutral-100">{author}</span>{role && ` · ${role}`}
    </figcaption>
    <div className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl ring-1 ring-inset ring-orange-500/40 blur-[1px]" />
    <div className="pointer-events-none absolute inset-0 -z-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_64px_rgba(249,115,22,0.35)]" />
  </motion.figure>
);

export default function App() {
  const logoUrl = "https://drive.google.com/uc?export=download&id=1jLdzD3YUwRv_q4eSG783gUuFp8FO1xIg";
  const heroPhotoUrl = "https://drive.google.com/uc?export=download&id=1Sxd3kQx6O5DQnMCD4UtOcf4TqvHLoSmq";

  const testimonials = [
    {
      quote: "Сегодня была на консультации у @storypavel по построению отдела продаж! Четко разложил всю информацию, закрыл все мои вопросы и подсветил, в каком направлении двигаться. Определили ветку дальнейшего взаимодействия 🚀 Паша, благодарю тебя!",
      author: "Татьяна Моргулец",
      role: "Клиент"
    },
    {
      quote: "Я в восторге, Павел профи. Консультация свелась к менеджменту. В котором в принципе я профи, но такой чистый трезвый взгляд со стороны молодого поколения очень даже нужен был. Ничего лишнего, ничего не надумано, все четко. Пришли к выводам, которые сами понимали, а это значит Павел чётко чувствует процессы. Ему ‘позвонили’ во время разговора, это хороший знак, что он в потоке.",
      author: "Юлия Мельник",
      role: "Клиент"
    },
    {
      quote: "Спасибо за консультацию нашей команды по поиску лидов и аудит нашей продающей воронки. Куча инсайдов, фишек и идей. Ушли реализовывать всё. Долго не решался связаться, но супер доволен встречей.",
      author: "Юрий Глазков",
      role: "Клиент"
    }
  ];

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <img src={logoUrl} alt="SellSmart logo" className="h-8 w-auto" />
            <span className="text-white">SellSmart</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#services" className="hover:text-orange-400">Услуги</a>
            <a href="#cases" className="hover:text-orange-400">Кейсы</a>
            <a href="#testimonials" className="hover:text-orange-400">Отзывы</a>
            <a href="#contact" className="hover:text-orange-400">Контакты</a>
          </div>
          <a href="https://t.me/SellSmart_Bot" target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-4 py-2 text-white shadow-[0_0_22px_rgba(249,115,22,0.9)]">Оставить заявку</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-neutral-900/60 px-3 py-1 text-xs text-orange-300 shadow-[0_0_24px_rgba(249,115,22,0.25)]">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,1)]" />
                Екатеринбург · sellsmart.su · Амбассадор «Аномалия»
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[1.05] text-white">
                Системные продажи под ключ: <span className="text-orange-400">прозрачность</span> и рост без токсичности
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-neutral-300">
                Создаю и модернизирую отделы продаж: от аудита и регламентов до обучения команды и еженедельного трекинга. Цель — управляемый рост выручки и чистой прибыли.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="https://t.me/SellSmart_Bot" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl bg-orange-500 px-5 py-3 text-white shadow-[0_0_24px_rgba(249,115,22,0.9)] transition-transform hover:-translate-y-0.5">Оставить заявку в Telegram‑боте</a>
                <a href="#services" className="inline-flex items-center rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-neutral-200 hover:border-neutral-700">Подробнее об услугах</a>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <img src={heroPhotoUrl} alt="Павел Гущин" className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] max-h-[420px] object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle kicker="Обо мне" title="Павел Гущин" subtitle="Основатель SellSmart, амбассадор бизнес‑клуба «Аномалия». 8+ лет в продажах и управлении." align="left" />
            <p className="mt-4 text-neutral-300">
              Помогаю предпринимателям наводить порядок в отделах продаж и выстраивать системность: прозрачные процессы, понятные правила и управляемый рост. Работаю локально в Екатеринбурге и онлайн по всей России.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={heroPhotoUrl} alt="Павел Гущин портрет" className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] max-h-[380px] object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Услуги" title="Как мы помогаем" subtitle="От точечного аудита до полного строительства отдела продаж. Ниже — формат, сроки и стоимость." />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-white">Рентген продаж</h3>
              <p className="mt-2 text-neutral-300">Быстрая диагностика за 3 дня: CRM, воронка, звонки → 3–5 точек роста.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Анализ CRM и этапов воронки</li>
                <li>• Прослушка звонков и переписок</li>
                <li>• Выводы и план действий</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Срок: 3 дня · Цена: 35 000 ₽</div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">Разбор по косточкам</h3>
              <p className="mt-2 text-neutral-300">Глубокий аудит по 8 блокам: воронка, CRM, скрипты, найм, отчёты и др.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Подключение к CRM, интервью</li>
                <li>• 2 недели анализа, финальный Zoom</li>
                <li>• Документ с проблемами и решениями</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Срок: 2 недели · Цена: 100 000 ₽</div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">РОП на подряде</h3>
              <p className="mt-2 text-neutral-300">30 часов управления в месяц без найма в штат: контроль, отчёты, рост.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Планёрки и разборы</li>
                <li>• Проверка звонков и переписок</li>
                <li>• Ответственность за результат</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Срок: 1–3 месяца · Цена: 90 000 ₽/мес</div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">SiOP — Системный отдел продаж</h3>
              <p className="mt-2 text-neutral-300">Целостная система из 43 элементов: стратегия, CRM, команда, контроль.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Аудит → Проектирование → Внедрение</li>
                <li>• Найм, обучение и мотивация</li>
                <li>• Прозрачные метрики и отчётность</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Лайт: 600 000 ₽ · 6–8 недель<br/>Полный цикл: 1 000 000 ₽ · 10–14 недель<br/>Под ключ (VIP): 1 500 000 ₽ · 12–16 недель</div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">Рука на пульсе</h3>
              <p className="mt-2 text-neutral-300">Трекинг с личным участием: еженедельные созвоны, корректировки, фокус.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• 8 часов в месяц</li>
                <li>• Разбор проблем и корректировка плана</li>
                <li>• Постоянный контакт в мессенджере</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Цена: 60 000 ₽/мес</div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">Продажный Zoom</h3>
              <p className="mt-2 text-neutral-300">Индивидуальная консультация за 60 минут — 1–3 шага, которые дадут результат.</p>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Разбор текущей ситуации</li>
                <li>• Точные вопросы и рекомендации</li>
                <li>• Список решений «на завтра»</li>
              </ul>
              <div className="mt-4 text-neutral-400 text-sm">Онлайн · Запись встречи · 10 000 ₽</div>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="https://t.me/SellSmart_Bot" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 text-white shadow-[0_0_24px_rgba(249,115,22,0.9)] hover:-translate-y-0.5 transition-transform">Оставить заявку в Telegram‑боте</a>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Кейсы" title="Коротко о результатах" subtitle="Ещё больше подробностей расскажу на созвоне." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Card>
              <div className="text-xl font-semibold text-white">Производство наградной продукции</div>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Внедрили CRM, регламенты, роли (хантер/фермер)</li>
                <li>• KPI, мотивация, отчётность, рост команды до 4</li>
              </ul>
              <div className="mt-4 text-sm text-neutral-400">Результат: выручка с 2,2 → 5,6 млн ₽/мес (+154%), конверсия 3% → 7,6%.</div>
            </Card>

            <Card>
              <div className="text-xl font-semibold text-white">Продажа модульных домов</div>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• Программа «Рука на пульсе», 2 месяца</li>
                <li>• Контроль сделок, обучение РОПа, дисциплина</li>
              </ul>
              <div className="mt-4 text-sm text-neutral-400">Результат: план 27 млн ₽ → факт 47 млн ₽ за декабрь (+74%).</div>
            </Card>

            <Card>
              <div className="text-xl font-semibold text-white">BFL — банкротство физлиц</div>
              <ul className="mt-3 space-y-2 text-neutral-300">
                <li>• С нуля: воронка 6 этапов, CRM, шаблоны, отчёты</li>
                <li>• 3 менеджера + РОП, обучение и контроль</li>
              </ul>
              <div className="mt-4 text-sm text-neutral-400">Результат: +40% к выручке, конверсия 4% → 6,7%, заполнение CRM 100%.</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle kicker="Бесплатно" title="Полезные файлы для отдела продаж" subtitle="Скачайте готовые материалы и чек‑листы в нашем Telegram‑боте" />
          <a href="https://t.me/SellSmart_Bot" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 text-white shadow-[0_0_24px_rgba(249,115,22,0.9)] hover:-translate-y-0.5 transition-transform">
            Скачать в Telegram‑боте
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative bg-neutral-950 py-20">
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 max-w-4xl rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.25),transparent_60%)] blur-2xl" />
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker={<span className="text-orange-400">Отзывы</span>} title={<span className="text-white">Что говорят клиенты</span>} subtitle={<span className="text-neutral-400">Живая обратная связь от предпринимателей</span>} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Testimonial key={i} quote={t.quote} author={t.author} role={t.role} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionTitle kicker={<span className="text-orange-400">Консультация</span>} title={<span className="text-white">Оставьте заявку в Telegram‑боте</span>} subtitle={<span className="text-neutral-400">Самый быстрый способ связаться: бот соберёт вводные и передаст мне</span>} />
          <a href="https://t.me/SellSmart_Bot" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 text-white shadow-[0_0_24px_rgba(249,115,22,0.9)] hover:-translate-y-0.5 transition-transform">
            Оставить заявку в Telegram‑боте
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-neutral-800 bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-white">S</span>
              <span>© {new Date().getFullYear()} SellSmart. Все права защищены.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#services" className="hover:text-orange-300">Услуги</a>
              <a href="#cases" className="hover:text-orange-300">Кейсы</a>
              <a href="#testimonials" className="hover:text-orange-300">Отзывы</a>
              <a href="#contact" className="hover:text-orange-300">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
