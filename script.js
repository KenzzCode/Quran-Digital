const API_BASE = 'https://equran.id/api/v2';
const UI_TEXT = {
  id: {
    'language.label': 'Bahasa antarmuka', 'nav.label': 'Menu utama', 'quran.content': 'Isi surat',
    'theme.light': 'Terang', 'theme.dark': 'Gelap', 'theme.activateLight': 'Aktifkan tema terang', 'theme.activateDark': 'Aktifkan tema gelap',
    'home.kicker': 'RUANG BELAJAR QURAN DIGITAL', 'home.headlineStart': 'Dekat dengan', 'home.headlineQuran': 'Al-Qur’an', 'home.headlineEnd': ', setiap hari.',
    'home.note': 'Baca ayat, buka tafsir, dan luangkan waktu untuk refleksi.', 'home.start': 'Start Learning', 'home.mentor': 'Latihan murajaah',
    'home.surahCount': 'surat · belajar sesuai ritmemu', 'home.brand': 'QURAN DIGITAL', 'home.spaces': 'RUANG BELAJAR',
    'home.read': 'BACA', 'home.reflect': 'REFLEKSI', 'home.listen': 'DENGARKAN', 'home.readVerses': 'Baca ayat dan terjemahan',
    'home.practice': 'Latihan hafalan ayat', 'home.listenVerses': 'Dengarkan lantunan surat', 'home.readReflect': 'BACA & REFLEKSI',
    'home.verseActions': 'Tafsir, lesson, dan reflection di setiap ayat.', 'home.reflectionIntro': 'Pilih ayat untuk membuka tafsir API, melihat lesson, atau menulis reflection pribadi.',
    'home.openQuran': 'Buka Al-Qur’an', 'home.verseOfDay': 'AYAT HARI INI', 'home.openDaily': 'Baca ayat hari ini', 'home.radioHint': 'Putar murattal surat pilihanmu',
    'nav.quran': 'Al-Qur’an', 'nav.mentor': 'Mentor Murajaah', 'nav.radio': 'Quran Radio',
    'quran.kicker': 'BACA DAN PAHAMI', 'quran.note': 'Pilih surat untuk mulai membaca ayat dan terjemahannya.', 'quran.choose': 'PILIH SURAT',
    'quran.surahList': 'Daftar surat', 'quran.search': 'Cari nama surat', 'quran.loadingList': 'Memuat daftar surat…', 'quran.loadingAyat': 'Memuat ayat…', 'quran.ayahCount': 'ayat',
    'quran.listError': 'Daftar surat gagal dimuat.', 'quran.readError': 'Surat gagal dimuat.', 'quran.noSearchResult': 'Surat tidak ditemukan.',
    'mentor.kicker': 'LATIHAN HAFALAN', 'mentor.title': 'Mentor Murajaah', 'mentor.note': 'Latih ingatan ayat dari surat yang sedang kamu pelajari.',
    'mentor.score': 'SKOR', 'mentor.points': 'poin', 'mentor.selected': 'SURAT TERPILIH', 'mentor.chooseSurah': 'Pilih surat',
    'mentor.selectPrompt': 'Pilih surat di menu Al-Qur’an untuk mulai.', 'mentor.mode': 'MODE LATIHAN', 'mentor.guess': 'Tebak Ayat',
    'mentor.guessHint': 'Ingat nomor ayat', 'mentor.continue': 'Sambung Ayat', 'mentor.continueHint': 'Ingat urutan ayat',
    'mentor.round': 'RONDE', 'mentor.promptGuess': 'Ayat nomor berapakah ini?', 'mentor.promptContinue': 'Ayat manakah yang tepat menyambung ayat ini?',
    'mentor.optionsGuess': 'Pilih nomor ayat', 'mentor.optionsContinue': 'Pilih ayat berikutnya', 'mentor.next': 'Soal Berikutnya', 'mentor.restart': 'Mulai Lagi',
    'mentor.correct': 'Benar! +10 poin.', 'mentor.wrong': 'Belum tepat.', 'mentor.chooseOther': 'Pilih surat lain yang memiliki sedikitnya empat ayat.',
    'mentor.selectSurah': 'Pilih surat terlebih dahulu', 'mentor.answerAyah': 'Ayat nomor', 'mentor.correctAnswer': 'Jawaban yang benar: ayat', 'mentor.correctShown': 'Jawaban yang benar ditandai hijau.',
    'radio.kicker': 'DENGARKAN AL-QUR’AN', 'radio.note': 'Pilih surat dan qari untuk memulai murattal.', 'radio.player': 'PEMUTAR AUDIO',
    'radio.selected': 'SEDANG DIPILIH', 'radio.pickReciter': 'Pilih qari untuk mendengarkan', 'radio.ready': 'Murattal siap diputar.',
    'radio.settings': 'ATUR SIARAN', 'radio.options': 'Pilihan audio', 'radio.surah': 'Surat', 'radio.reciter': 'Qari',
    'radio.previous': 'Surat sebelumnya', 'radio.next': 'Surat berikutnya', 'radio.source': 'Audio surat dimuat dari sumber yang disediakan API.',
    'radio.unavailable': 'Audio untuk pilihan ini tidak tersedia dari API.', 'radio.pressPlay': 'Tekan tombol putar untuk memulai audio.', 'radio.playing': 'Memutar',
    'radio.error': 'Audio tidak dapat diputar. Coba pilih qari atau surat lain.', 'radio.loading': 'Memuat…',
    'verse.label': 'AYAT', 'verse.tafsir': 'Tafsir', 'verse.lesson': 'Lesson', 'verse.reflection': 'Reflection', 'verse.translationSource': 'Terjemahan dari API (Bahasa Indonesia)',
    'verse.tafsirLoading': 'Memuat tafsir dari API…', 'verse.tafsirError': 'Tafsir tidak dapat dimuat. Periksa koneksi lalu coba lagi.',
    'verse.tafsirMissing': 'Tafsir untuk ayat ini tidak tersedia dari API.', 'verse.tafsirSource': 'Tafsir dari API · Bahasa Indonesia', 'verse.lessonExcerpt': 'Cuplikan tafsir API · Bahasa Indonesia',
    'verse.reflectionPrompt': 'Apa yang kamu pahami dari ayat ini?', 'verse.reflectionPlaceholder': 'Tulis refleksimu di sini…',
    'verse.indonesianOnly': 'API menyediakan terjemahan dan tafsir dalam Bahasa Indonesia.', 'footer.tagline': 'Belajar sedikit demi sedikit, setiap hari.'
  },
  en: {
    'language.label': 'Interface language', 'nav.label': 'Main menu', 'quran.content': 'Surah content',
    'theme.light': 'Light', 'theme.dark': 'Dark', 'theme.activateLight': 'Switch to light theme', 'theme.activateDark': 'Switch to dark theme',
    'home.kicker': 'QURAN DIGITAL LEARNING SPACE', 'home.headlineStart': 'Get closer to the', 'home.headlineQuran': 'Qur’an', 'home.headlineEnd': ', every day.',
    'home.note': 'Read an ayah, open its tafsir, and take a moment to reflect.', 'home.start': 'Start Learning', 'home.mentor': 'Review memorization',
    'home.surahCount': 'surahs · learn at your own pace', 'home.brand': 'QURAN DIGITAL', 'home.spaces': 'LEARNING SPACES',
    'home.read': 'READ', 'home.reflect': 'REFLECT', 'home.listen': 'LISTEN', 'home.readVerses': 'Read ayahs and translation',
    'home.practice': 'Practice memorization', 'home.listenVerses': 'Listen to surah recitation', 'home.readReflect': 'READ & REFLECT',
    'home.verseActions': 'Tafsir, lesson, and reflection for every ayah.', 'home.reflectionIntro': 'Choose an ayah to open API tafsir, view a lesson excerpt, or write a personal reflection.',
    'home.openQuran': 'Open the Qur’an', 'home.verseOfDay': 'VERSE OF THE DAY', 'home.openDaily': 'Read today’s verse', 'home.radioHint': 'Play your chosen surah recitation',
    'nav.quran': 'Qur’an', 'nav.mentor': 'Memorization', 'nav.radio': 'Quran Radio',
    'quran.kicker': 'READ AND UNDERSTAND', 'quran.note': 'Choose a surah to read its ayahs and translation.', 'quran.choose': 'CHOOSE A SURAH',
    'quran.surahList': 'Surah list', 'quran.search': 'Search surah names', 'quran.loadingList': 'Loading surahs…', 'quran.loadingAyat': 'Loading ayahs…', 'quran.ayahCount': 'ayahs',
    'quran.listError': 'Could not load the surah list.', 'quran.readError': 'Could not load this surah.', 'quran.noSearchResult': 'No surahs found.',
    'mentor.kicker': 'MEMORIZATION PRACTICE', 'mentor.title': 'Review', 'mentor.note': 'Practice ayahs from the surah you are reading.',
    'mentor.score': 'SCORE', 'mentor.points': 'points', 'mentor.selected': 'SELECTED SURAH', 'mentor.chooseSurah': 'Choose a surah',
    'mentor.selectPrompt': 'Choose a surah in Qur’an to begin.', 'mentor.mode': 'PRACTICE MODE', 'mentor.guess': 'Guess the Ayah',
    'mentor.guessHint': 'Recall the ayah number', 'mentor.continue': 'Continue the Ayah', 'mentor.continueHint': 'Recall what comes next',
    'mentor.round': 'ROUND', 'mentor.promptGuess': 'Which ayah number is this?', 'mentor.promptContinue': 'Which ayah comes next?',
    'mentor.optionsGuess': 'Choose an ayah number', 'mentor.optionsContinue': 'Choose the next ayah', 'mentor.next': 'Next Question', 'mentor.restart': 'Start Over',
    'mentor.correct': 'Correct! +10 points.', 'mentor.wrong': 'Not quite.', 'mentor.chooseOther': 'Choose another surah with at least four ayahs.',
    'mentor.selectSurah': 'Choose a surah first', 'mentor.answerAyah': 'Ayah number', 'mentor.correctAnswer': 'The correct answer is ayah', 'mentor.correctShown': 'The correct answer is marked in green.',
    'radio.kicker': 'LISTEN TO THE QUR’AN', 'radio.note': 'Choose a surah and reciter to begin.', 'radio.player': 'AUDIO PLAYER',
    'radio.selected': 'NOW SELECTED', 'radio.pickReciter': 'Choose a reciter', 'radio.ready': 'Recitation is ready to play.',
    'radio.settings': 'AUDIO SETTINGS', 'radio.options': 'Audio selection', 'radio.surah': 'Surah', 'radio.reciter': 'Reciter',
    'radio.previous': 'Previous surah', 'radio.next': 'Next surah', 'radio.source': 'Surah audio is provided by the API.',
    'radio.unavailable': 'Audio is not available for this selection.', 'radio.pressPlay': 'Press play to start the audio.', 'radio.playing': 'Playing',
    'radio.error': 'Audio could not be played. Try another reciter or surah.', 'radio.loading': 'Loading…',
    'verse.label': 'AYAH', 'verse.tafsir': 'Tafsir', 'verse.lesson': 'Lesson', 'verse.reflection': 'Reflection', 'verse.translationSource': 'API translation (Indonesian)',
    'verse.tafsirLoading': 'Loading tafsir from the API…', 'verse.tafsirError': 'Could not load tafsir. Check your connection and try again.',
    'verse.tafsirMissing': 'Tafsir for this ayah is not available from the API.', 'verse.tafsirSource': 'API tafsir · Indonesian', 'verse.lessonExcerpt': 'Excerpt from API tafsir · Indonesian',
    'verse.reflectionPrompt': 'What do you understand from this ayah?', 'verse.reflectionPlaceholder': 'Write your reflection here…',
    'verse.indonesianOnly': 'The API provides translation and tafsir in Indonesian.', 'footer.tagline': 'Learn a little, every day.'
  },
  ar: {
    'language.label': 'لغة الواجهة', 'nav.label': 'القائمة الرئيسية', 'quran.content': 'محتوى السورة',
    'theme.light': 'فاتح', 'theme.dark': 'داكن', 'theme.activateLight': 'التبديل إلى المظهر الفاتح', 'theme.activateDark': 'التبديل إلى المظهر الداكن',
    'home.kicker': 'مساحة التعلّم من القرآن الرقمي', 'home.headlineStart': 'اقترب من', 'home.headlineQuran': 'القرآن', 'home.headlineEnd': '، كل يوم.',
    'home.note': 'اقرأ آية، وافتح تفسيرها، وخذ وقتًا للتأمل.', 'home.start': 'ابدأ التعلّم', 'home.mentor': 'مراجعة الحفظ',
    'home.surahCount': 'سورة · تعلّم على مهل', 'home.brand': 'القرآن الرقمي', 'home.spaces': 'مساحات التعلّم',
    'home.read': 'اقرأ', 'home.reflect': 'تأمّل', 'home.listen': 'استمع', 'home.readVerses': 'اقرأ الآيات وترجمتها',
    'home.practice': 'تدرّب على الحفظ', 'home.listenVerses': 'استمع إلى تلاوة السورة', 'home.readReflect': 'اقرأ وتأمّل',
    'home.verseActions': 'التفسير والدرس والتأمل لكل آية.', 'home.reflectionIntro': 'اختر آية لفتح تفسير API أو قراءة مقتطف الدرس أو كتابة تأمل شخصي.',
    'home.openQuran': 'افتح القرآن', 'home.verseOfDay': 'آية اليوم', 'home.openDaily': 'اقرأ آية اليوم', 'home.radioHint': 'استمع إلى تلاوة السورة التي تختارها',
    'nav.quran': 'القرآن', 'nav.mentor': 'مراجعة الحفظ', 'nav.radio': 'إذاعة القرآن',
    'quran.kicker': 'اقرأ وافهم', 'quran.note': 'اختر سورة لقراءة آياتها وترجمتها.', 'quran.choose': 'اختر سورة',
    'quran.surahList': 'قائمة السور', 'quran.search': 'ابحث عن سورة', 'quran.loadingList': 'جارٍ تحميل السور…', 'quran.loadingAyat': 'جارٍ تحميل الآيات…', 'quran.ayahCount': 'آية',
    'quran.listError': 'تعذّر تحميل قائمة السور.', 'quran.readError': 'تعذّر تحميل هذه السورة.', 'quran.noSearchResult': 'لم يتم العثور على سورة.',
    'mentor.kicker': 'تدريب الحفظ', 'mentor.title': 'مراجعة الحفظ', 'mentor.note': 'تدرّب على آيات من السورة التي تقرؤها.',
    'mentor.score': 'النقاط', 'mentor.points': 'نقطة', 'mentor.selected': 'السورة المختارة', 'mentor.chooseSurah': 'اختر سورة',
    'mentor.selectPrompt': 'اختر سورة من قائمة القرآن للبدء.', 'mentor.mode': 'طريقة التدريب', 'mentor.guess': 'خمن رقم الآية',
    'mentor.guessHint': 'تذكّر رقم الآية', 'mentor.continue': 'أكمل الآية', 'mentor.continueHint': 'تذكّر الآية التالية',
    'mentor.round': 'الجولة', 'mentor.promptGuess': 'ما رقم هذه الآية؟', 'mentor.promptContinue': 'أي آية تأتي بعدها؟',
    'mentor.optionsGuess': 'اختر رقم الآية', 'mentor.optionsContinue': 'اختر الآية التالية', 'mentor.next': 'السؤال التالي', 'mentor.restart': 'ابدأ من جديد',
    'mentor.correct': 'إجابة صحيحة! +10 نقاط.', 'mentor.wrong': 'إجابة غير صحيحة.', 'mentor.chooseOther': 'اختر سورة أخرى تحتوي على أربع آيات على الأقل.',
    'mentor.selectSurah': 'اختر سورة أولًا', 'mentor.answerAyah': 'رقم الآية', 'mentor.correctAnswer': 'الإجابة الصحيحة هي الآية', 'mentor.correctShown': 'الإجابة الصحيحة محددة باللون الأخضر.',
    'radio.kicker': 'استمع إلى القرآن', 'radio.note': 'اختر سورة وقارئًا للبدء.', 'radio.player': 'مشغّل الصوت',
    'radio.selected': 'المختار الآن', 'radio.pickReciter': 'اختر قارئًا', 'radio.ready': 'التلاوة جاهزة للتشغيل.',
    'radio.settings': 'إعدادات الصوت', 'radio.options': 'اختيار الصوت', 'radio.surah': 'السورة', 'radio.reciter': 'القارئ',
    'radio.previous': 'السورة السابقة', 'radio.next': 'السورة التالية', 'radio.source': 'صوت السورة مقدّم من API.',
    'radio.unavailable': 'الصوت غير متاح لهذا الاختيار.', 'radio.pressPlay': 'اضغط تشغيل لبدء الصوت.', 'radio.playing': 'يُشغّل الآن',
    'radio.error': 'تعذّر تشغيل الصوت. جرّب قارئًا أو سورة أخرى.', 'radio.loading': 'جارٍ التحميل…',
    'verse.label': 'الآية', 'verse.tafsir': 'التفسير', 'verse.lesson': 'الدرس', 'verse.reflection': 'التأمل', 'verse.translationSource': 'ترجمة API (الإندونيسية)',
    'verse.tafsirLoading': 'جارٍ تحميل التفسير من API…', 'verse.tafsirError': 'تعذّر تحميل التفسير. تحقق من الاتصال وحاول مرة أخرى.',
    'verse.tafsirMissing': 'لا يتوفر تفسير لهذه الآية في API.', 'verse.tafsirSource': 'تفسير API · الإندونيسية', 'verse.lessonExcerpt': 'مقتطف من تفسير API · الإندونيسية',
    'verse.reflectionPrompt': 'ما الذي فهمته من هذه الآية؟', 'verse.reflectionPlaceholder': 'اكتب تأملك هنا…',
    'verse.indonesianOnly': 'يوفّر API الترجمة والتفسير باللغة الإندونيسية.', 'footer.tagline': 'تعلّم قليلًا كل يوم.'
  }
};

const state = {
  surahs: [],
  selectedSurah: null,
  selectedAyat: [],
  mode: 'guess',
  score: 0,
  round: 1,
  currentQuestion: null,
  answered: false,
  loadingSurahNumber: null,
  dailyVerse: null,
  radioSurahNumber: null,
  language: 'id',
  tafsirCache: {},
  reflectionNotes: {}
};

const elements = {
  welcomeScreen: document.querySelector('#welcome-screen'),
  appContent: document.querySelector('#app-content'),
  themeToggles: document.querySelectorAll('[data-theme-toggle]'),
  themeNames: document.querySelectorAll('[data-theme-name]'),
  languageSelects: document.querySelectorAll('[data-language-select]'),
  entryButtons: document.querySelectorAll('[data-enter-view]'),
  navTabs: document.querySelectorAll('.nav-tab'),
  views: {
    quran: document.querySelector('#quran-view'),
    mentor: document.querySelector('#mentor-view'),
    radio: document.querySelector('#radio-view')
  },
  homeSurahCount: document.querySelector('#home-surah-count'),
  dailyDate: document.querySelector('#daily-date'),
  dailyReference: document.querySelector('#daily-reference'),
  dailyArabic: document.querySelector('#daily-arabic'),
  dailyTranslation: document.querySelector('#daily-translation'),
  dailyStatus: document.querySelector('#daily-status'),
  dailyOpen: document.querySelector('#daily-open'),
  surahSearch: document.querySelector('#surah-search'),
  surahList: document.querySelector('#surah-list'),
  surahCount: document.querySelector('#surah-count'),
  listStatus: document.querySelector('#list-status'),
  readingPanel: document.querySelector('.reading-panel'),
  readingStatus: document.querySelector('#reading-status'),
  surahContent: document.querySelector('#surah-content'),
  detailNumber: document.querySelector('#detail-number'),
  surahMeta: document.querySelector('#surah-meta'),
  surahTitle: document.querySelector('#surah-title'),
  surahSubtitle: document.querySelector('#surah-subtitle'),
  surahArabicName: document.querySelector('#surah-arabic-name'),
  verseList: document.querySelector('#verse-list'),
  mentorSurahName: document.querySelector('#mentor-surah-name'),
  mentorSurahInfo: document.querySelector('#mentor-surah-info'),
  modeButtons: document.querySelectorAll('.mode-button'),
  score: document.querySelector('#score'),
  roundNumber: document.querySelector('#round-number'),
  quizModeLabel: document.querySelector('#quiz-mode-label'),
  quizContent: document.querySelector('#quiz-content'),
  quizEmpty: document.querySelector('#quiz-empty'),
  questionPrompt: document.querySelector('#question-prompt'),
  questionVerse: document.querySelector('#question-verse'),
  optionsLabel: document.querySelector('#options-label'),
  answerOptions: document.querySelector('#answer-options'),
  answerFeedback: document.querySelector('#answer-feedback'),
  nextButton: document.querySelector('#next-button'),
  restartButton: document.querySelector('#restart-button'),
  radioSurah: document.querySelector('#radio-surah'),
  radioReciter: document.querySelector('#radio-reciter'),
  radioAudio: document.querySelector('#radio-audio'),
  radioTrackTitle: document.querySelector('#radio-track-title'),
  radioTrackReciter: document.querySelector('#radio-track-reciter'),
  radioStatus: document.querySelector('#radio-status'),
  radioPanel: document.querySelector('.radio-player-panel'),
  radioPrevious: document.querySelector('#radio-previous'),
  radioNext: document.querySelector('#radio-next')
};

function setView(viewName) {
  const currentViewName = Object.entries(elements.views).find(([, view]) => !view.hidden)?.[0];
  if (currentViewName === viewName) return;

  Object.entries(elements.views).forEach(([name, view]) => {
    const isVisible = name === viewName;
    view.hidden = !isVisible;
    view.classList.toggle('is-visible', isVisible);
    if (isVisible) {
      view.classList.remove('page-enter');
      void view.offsetWidth;
      view.classList.add('page-enter');
      view.addEventListener('animationend', () => view.classList.remove('page-enter'), { once: true });
    }
  });

  elements.navTabs.forEach((tab) => {
    const isActive = tab.dataset.view === viewName;
    tab.classList.toggle('is-active', isActive);
    if (isActive) tab.setAttribute('aria-current', 'page');
    else tab.removeAttribute('aria-current');
  });
}

function t(key) {
  return UI_TEXT[state.language]?.[key] || UI_TEXT.id[key] || key;
}

function applyLanguage(language) {
  state.language = UI_TEXT[language] ? language : 'id';
  const locale = UI_TEXT[state.language];
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = locale[element.dataset.i18n];
    if (value === undefined) return;
    const icon = element.querySelector(':scope > [aria-hidden="true"]');
    if (icon) element.replaceChildren(document.createTextNode(`${value} `), icon);
    else element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = locale[element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = locale[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute('aria-label', value);
  });
  elements.languageSelects.forEach((select) => {
    select.value = state.language;
    select.setAttribute('aria-label', t('language.label'));
  });

  if (state.dailyVerse) {
    elements.dailyDate.textContent = new Date().toLocaleDateString(
      { id: 'id-ID', en: 'en', ar: 'ar' }[state.language],
      { day: 'numeric', month: 'long' }
    );
  }
  if (state.selectedSurah) updateMentorSurah();
  if (state.currentQuestion && !elements.quizContent.hidden) {
    elements.questionPrompt.textContent = t(state.mode === 'guess' ? 'mentor.promptGuess' : 'mentor.promptContinue');
    elements.optionsLabel.textContent = t(state.mode === 'guess' ? 'mentor.optionsGuess' : 'mentor.optionsContinue');
    elements.quizModeLabel.textContent = t(state.mode === 'guess' ? 'mentor.guess' : 'mentor.continue');
  }
  const radioSurah = state.surahs.find((surah) => surah.nomor === state.radioSurahNumber);
  if (radioSurah) {
    const reciter = elements.radioReciter.selectedOptions[0]?.textContent || '';
    elements.radioStatus.textContent = elements.radioAudio.paused
      ? `${radioSurah.namaLatin} · ${t('radio.ready')}`
      : `${t('radio.playing')} ${radioSurah.namaLatin} · ${reciter}`;
  }
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  document.querySelectorAll('.verse-insight').forEach((panel) => {
    panel.hidden = true;
    panel.replaceChildren();
  });
  document.querySelectorAll('[data-verse-action]').forEach((button) => {
    button.textContent = t(`verse.${button.dataset.verseAction}`);
    button.setAttribute('aria-pressed', 'false');
  });
}

function loadLanguagePreference() {
  try {
    applyLanguage(localStorage.getItem('quran-digital-language') || 'id');
  } catch {
    applyLanguage('id');
  }
}

function enterApp(viewName) {
  elements.welcomeScreen.hidden = true;
  elements.appContent.hidden = false;
  elements.appContent.classList.remove('app-enter');
  void elements.appContent.offsetWidth;
  elements.appContent.classList.add('app-enter');
  elements.appContent.addEventListener('animationend', () => elements.appContent.classList.remove('app-enter'), { once: true });
  setView(viewName);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showWelcome() {
  elements.appContent.hidden = true;
  elements.welcomeScreen.hidden = false;
  elements.welcomeScreen.classList.remove('home-enter');
  void elements.welcomeScreen.offsetWidth;
  elements.welcomeScreen.classList.add('home-enter');
  elements.welcomeScreen.addEventListener('animationend', () => elements.welcomeScreen.classList.remove('home-enter'), { once: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  elements.themeToggles.forEach((button) => {
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', t(isDark ? 'theme.activateLight' : 'theme.activateDark'));
  });
  elements.themeNames.forEach((label) => {
    label.textContent = t(isDark ? 'theme.dark' : 'theme.light');
  });
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#14211d' : '#f5f7f2';
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('quran-pesat-theme', nextTheme);
  } catch {
    // Tema tetap berfungsi untuk sesi ini jika penyimpanan browser tidak tersedia.
  }
}

function loadThemePreference() {
  try {
    applyTheme(localStorage.getItem('quran-pesat-theme') === 'dark' ? 'dark' : 'light');
  } catch {
    applyTheme('light');
  }
}

async function fetchApi(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) throw new Error(`Server mengirim status ${response.status}.`);

  const result = await response.json();
  if (result.code !== 200 || !result.data) {
    throw new Error(result.message || 'Respons API tidak dapat digunakan.');
  }

  return result.data;
}

async function loadSurahList() {
  elements.listStatus.textContent = t('quran.loadingList');
  try {
    const surahs = await fetchApi('/surat');
    if (!Array.isArray(surahs)) throw new Error('Format daftar surat tidak sesuai.');

    state.surahs = surahs;
    elements.surahCount.textContent = String(surahs.length);
    elements.homeSurahCount.textContent = String(surahs.length);
    elements.listStatus.textContent = '';
    renderSurahList();
    populateRadioSurahs(surahs);

    if (surahs.length > 0) {
      await Promise.allSettled([
        selectSurah(surahs[0].nomor),
        loadVerseOfTheDay(surahs)
      ]);
    }
  } catch (error) {
    elements.listStatus.textContent = `${t('quran.listError')} ${error.message}`;
    elements.listStatus.classList.add('error-text');
  }
}

function dayNumber() {
  const today = new Date();
  return Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
}

async function loadVerseOfTheDay(surahs) {
  const date = new Date();
  elements.dailyDate.textContent = date.toLocaleDateString({ id: 'id-ID', en: 'en', ar: 'ar' }[state.language], { day: 'numeric', month: 'long' });
  elements.dailyStatus.textContent = t('radio.loading');

  try {
    const dateIndex = dayNumber();
    const surah = surahs[dateIndex % surahs.length];
    const ayatNumber = (dateIndex % surah.jumlahAyat) + 1;
    const detail = await fetchApi(`/surat/${surah.nomor}`);
    const ayat = detail.ayat.find((item) => item.nomorAyat === ayatNumber);
    if (!ayat) throw new Error('Ayat pilihan hari ini tidak tersedia.');

    state.dailyVerse = { surahNumber: detail.nomor, ayatNumber: ayat.nomorAyat };
    elements.dailyReference.textContent = `${detail.namaLatin} · Ayat ${ayat.nomorAyat}`;
    elements.dailyArabic.textContent = ayat.teksArab;
    elements.dailyTranslation.textContent = ayat.teksIndonesia || '';
    elements.dailyStatus.textContent = '';
  } catch (error) {
    elements.dailyReference.textContent = t('quran.readError');
    elements.dailyArabic.textContent = '';
    elements.dailyTranslation.textContent = '';
    elements.dailyStatus.textContent = `${t('quran.readError')} ${error.message}`;
  }
}

function populateRadioSurahs(surahs) {
  elements.radioSurah.replaceChildren();
  surahs.forEach((surah) => {
    const option = document.createElement('option');
    option.value = String(surah.nomor);
    option.textContent = `${String(surah.nomor).padStart(3, '0')} · ${surah.namaLatin}`;
    elements.radioSurah.append(option);
  });

  state.radioSurahNumber = surahs[0]?.nomor || null;
  if (state.radioSurahNumber !== null) {
    elements.radioSurah.value = String(state.radioSurahNumber);
    updateRadioTrack();
  }
}

function updateRadioTrack(autoplay = false) {
  const surahNumber = Number(elements.radioSurah.value);
  const surah = state.surahs.find((item) => item.nomor === surahNumber);
  const reciterName = elements.radioReciter.selectedOptions[0]?.textContent || 'Qari';
  const audioUrl = surah?.audioFull?.[elements.radioReciter.value];
  state.radioSurahNumber = surah?.nomor || null;
  elements.radioTrackTitle.textContent = surah?.namaLatin || 'Pilih surat';
  elements.radioTrackReciter.textContent = reciterName;
  animateRadioTrack();

  if (!audioUrl) {
    elements.radioAudio.pause();
    elements.radioAudio.removeAttribute('src');
    elements.radioAudio.load();
    elements.radioStatus.textContent = t('radio.unavailable');
    return;
  }

  elements.radioAudio.pause();
  elements.radioAudio.src = audioUrl;
  elements.radioAudio.load();
  elements.radioStatus.textContent = `${surah.namaLatin} · ${t('radio.ready')}`;
  if (autoplay) {
    elements.radioAudio.play().then(() => {
      elements.radioStatus.textContent = `${t('radio.playing')} ${surah.namaLatin} · ${reciterName}`;
    }).catch(() => {
      elements.radioStatus.textContent = t('radio.pressPlay');
    });
  }
}

function animateRadioTrack() {
  const panel = document.querySelector('.radio-player-panel');
  panel.classList.remove('radio-track-changing');
  void panel.offsetWidth;
  panel.classList.add('radio-track-changing');
  panel.addEventListener('animationend', () => panel.classList.remove('radio-track-changing'), { once: true });
}

function changeRadioSurah(direction) {
  if (state.surahs.length === 0) return;
  const currentIndex = state.surahs.findIndex((surah) => surah.nomor === state.radioSurahNumber);
  const nextIndex = (currentIndex + direction + state.surahs.length) % state.surahs.length;
  elements.radioSurah.value = String(state.surahs[nextIndex].nomor);
  updateRadioTrack(true);
}

function renderSurahList() {
  const query = elements.surahSearch.value.trim().toLocaleLowerCase('id');
  const filteredSurahs = state.surahs.filter((surah) => (
    `${surah.namaLatin} ${surah.arti} ${surah.nomor}`.toLocaleLowerCase('id').includes(query)
  ));

  elements.surahList.replaceChildren();
  if (filteredSurahs.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'empty-list';
    emptyMessage.textContent = t('quran.noSearchResult');
    elements.surahList.append(emptyMessage);
    return;
  }

  filteredSurahs.forEach((surah) => {
    const button = document.createElement('button');
    button.type = 'button';
    const isCurrent = state.selectedSurah?.nomor === surah.nomor;
    const isLoading = state.loadingSurahNumber === surah.nomor;
    button.className = `surah-item${isCurrent ? ' is-current' : ''}${isLoading ? ' is-loading' : ''}`;
    button.setAttribute('aria-label', `${surah.nomor}. ${surah.namaLatin}, ${surah.jumlahAyat} ${t('quran.ayahCount')}`);
    if (isCurrent) button.setAttribute('aria-current', 'true');
    if (isLoading) button.setAttribute('aria-busy', 'true');

    const index = document.createElement('span');
    index.className = 'surah-index';
    const indexText = document.createElement('span');
    indexText.textContent = String(surah.nomor).padStart(2, '0');
    index.append(indexText);

    const copy = document.createElement('span');
    copy.className = 'surah-item-copy';
    const latinName = document.createElement('strong');
    latinName.textContent = surah.namaLatin;
    const details = document.createElement('small');
    details.textContent = `${surah.arti} · ${surah.jumlahAyat} ayat`;
    copy.append(latinName, details);

    const arabicName = document.createElement('span');
    arabicName.className = 'surah-item-arabic';
    arabicName.lang = 'ar';
    arabicName.dir = 'rtl';
    arabicName.textContent = surah.nama;

    button.append(index, copy, arabicName);
    button.addEventListener('click', () => selectSurah(surah.nomor));
    elements.surahList.append(button);
  });
}

async function selectSurah(surahNumber) {
  if (state.loadingSurahNumber === surahNumber) return;
  state.loadingSurahNumber = surahNumber;
  const surahSummary = state.surahs.find((surah) => surah.nomor === surahNumber);

  elements.readingStatus.hidden = false;
  elements.readingStatus.classList.remove('is-error');
  elements.readingStatus.textContent = `${t('quran.loadingAyat')} ${surahSummary?.namaLatin || ''}`;
  elements.readingPanel.classList.add('is-loading');
  elements.readingPanel.setAttribute('aria-busy', 'true');
  elements.surahContent.hidden = true;
  if (surahSummary) {
    state.selectedSurah = surahSummary;
    renderSurahList();
    updateMentorSurah();
  }

  try {
    const surah = await fetchApi(`/surat/${surahNumber}`);
    if (state.loadingSurahNumber !== surahNumber) return;
    if (!Array.isArray(surah.ayat)) throw new Error('Data ayat tidak tersedia pada respons surat.');

    state.selectedSurah = surah;
    state.selectedAyat = surah.ayat;
    elements.readingPanel.classList.remove('is-loading');
    elements.readingPanel.removeAttribute('aria-busy');
    elements.readingStatus.hidden = true;
    elements.surahContent.hidden = false;
    renderSurah(surah);
    renderSurahList();
    updateMentorSurah();
    resetGame();
  } catch (error) {
    if (state.loadingSurahNumber !== surahNumber) return;
    elements.readingStatus.classList.add('is-error');
    elements.readingStatus.textContent = `${t('quran.readError')} ${error.message}`;
    state.selectedAyat = [];
    updateMentorSurah();
    showQuizMessage(t('mentor.selectSurah'), `${t('quran.readError')} ${error.message}`);
  } finally {
    if (state.loadingSurahNumber === surahNumber) {
      state.loadingSurahNumber = null;
      elements.readingPanel.classList.remove('is-loading');
      elements.readingPanel.removeAttribute('aria-busy');
      renderSurahList();
    }
  }
}

async function getTafsirForVerse(surahNumber, ayatNumber) {
  if (!Object.prototype.hasOwnProperty.call(state.tafsirCache, surahNumber)) {
    const detail = await fetchApi(`/tafsir/${surahNumber}`);
    if (!Array.isArray(detail.tafsir)) throw new Error(t('verse.tafsirMissing'));
    state.tafsirCache[surahNumber] = detail.tafsir;
  }
  return state.tafsirCache[surahNumber].find((item) => Number(item.ayat) === Number(ayatNumber));
}

async function showVerseInsight(mode, surah, ayat, panel) {
  panel.hidden = false;
  panel.dataset.mode = mode;
  panel.replaceChildren();

  if (mode === 'reflection') {
    const prompt = document.createElement('p');
    prompt.className = 'insight-label';
    prompt.textContent = t('verse.reflectionPrompt');
    const note = document.createElement('textarea');
    const noteKey = `${surah.nomor}:${ayat.nomorAyat}`;
    note.className = 'reflection-note';
    note.rows = 3;
    note.placeholder = t('verse.reflectionPlaceholder');
    note.setAttribute('aria-label', t('verse.reflection'));
    note.value = state.reflectionNotes[noteKey] || '';
    note.addEventListener('input', () => {
      state.reflectionNotes[noteKey] = note.value;
    });
    panel.append(prompt, note);
    return;
  }

  const loading = document.createElement('p');
  loading.className = 'insight-status';
  loading.textContent = t('verse.tafsirLoading');
  panel.append(loading);

  try {
    const tafsir = await getTafsirForVerse(surah.nomor, ayat.nomorAyat);
    if (panel.hidden || panel.dataset.mode !== mode) return;
    if (!tafsir?.teks) {
      loading.textContent = t('verse.tafsirMissing');
      return;
    }

    const source = document.createElement('p');
    source.className = 'insight-label';
    source.textContent = mode === 'lesson' ? t('verse.lessonExcerpt') : t('verse.tafsirSource');
    const text = document.createElement('p');
    text.className = 'insight-text';
    text.lang = 'id';
    text.dir = 'ltr';
    text.textContent = mode === 'lesson'
      ? tafsir.teks.split(/\n\s*\n/).find((paragraph) => paragraph.trim()) || tafsir.teks
      : tafsir.teks;
    panel.replaceChildren(source, text);
  } catch {
    if (panel.hidden || panel.dataset.mode !== mode) return;
    loading.textContent = t('verse.tafsirError');
  }
}

function createVerseActions(surah, ayat) {
  const actions = document.createElement('div');
  actions.className = 'verse-actions';
  const panel = document.createElement('div');
  panel.className = 'verse-insight';
  panel.id = `insight-${surah.nomor}-${ayat.nomorAyat}`;
  panel.hidden = true;
  panel.setAttribute('aria-live', 'polite');

  ['tafsir', 'lesson', 'reflection'].forEach((mode) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'verse-action';
    button.dataset.verseAction = mode;
    button.textContent = t(`verse.${mode}`);
    button.setAttribute('aria-controls', panel.id);
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-pressed') === 'true';
      actions.querySelectorAll('.verse-action').forEach((action) => action.setAttribute('aria-pressed', 'false'));
      if (isOpen) {
        panel.hidden = true;
        panel.removeAttribute('data-mode');
        return;
      }
      button.setAttribute('aria-pressed', 'true');
      showVerseInsight(mode, surah, ayat, panel);
    });
    actions.append(button);
  });

  return { actions, panel };
}

function renderSurah(surah) {
  elements.detailNumber.textContent = String(surah.nomor).padStart(2, '0');
  elements.surahMeta.textContent = `SURAT ${String(surah.nomor).padStart(3, '0')}`;
  elements.surahTitle.textContent = surah.namaLatin;
  elements.surahSubtitle.textContent = `${surah.arti} · ${surah.jumlahAyat} ayat · ${surah.tempatTurun}`;
  elements.surahArabicName.textContent = surah.nama;
  elements.verseList.replaceChildren();
  const intro = elements.surahContent.querySelector('.surah-intro');
  intro.classList.remove('surah-intro-enter');
  void intro.offsetWidth;
  intro.classList.add('surah-intro-enter');
  intro.addEventListener('animationend', () => intro.classList.remove('surah-intro-enter'), { once: true });

  surah.ayat.forEach((ayat, index) => {
    const card = document.createElement('article');
    card.className = index < 8 ? 'verse-card verse-enter' : 'verse-card';
    card.id = `verse-${ayat.nomorAyat}`;
    if (index < 8) {
      card.style.setProperty('--verse-order', String(index));
      card.addEventListener('animationend', () => card.classList.remove('verse-enter'), { once: true });
    }

    const verseNumber = document.createElement('div');
    verseNumber.className = 'verse-topline';
    verseNumber.textContent = `${t('verse.label')} ${ayat.nomorAyat}`;

    const arabicText = document.createElement('p');
    arabicText.className = 'verse-arabic';
    arabicText.lang = 'ar';
    arabicText.dir = 'rtl';
    arabicText.textContent = ayat.teksArab;
    card.append(verseNumber, arabicText);

    if (ayat.teksIndonesia) {
      const source = document.createElement('small');
      source.className = 'translation-source';
      source.textContent = t('verse.translationSource');
      const translation = document.createElement('p');
      translation.className = 'verse-translation';
      translation.lang = 'id';
      translation.dir = 'ltr';
      translation.textContent = ayat.teksIndonesia;
      card.append(source, translation);
    }

    const { actions, panel } = createVerseActions(surah, ayat);
    card.append(actions, panel);

    elements.verseList.append(card);
  });
}

function updateMentorSurah() {
  if (!state.selectedSurah) {
    elements.mentorSurahName.textContent = t('mentor.chooseSurah');
    elements.mentorSurahInfo.textContent = t('mentor.selectPrompt');
    return;
  }

  elements.mentorSurahName.textContent = state.selectedSurah.namaLatin;
  elements.mentorSurahInfo.textContent = `${state.selectedSurah.jumlahAyat} ${t('quran.ayahCount')} · ${state.selectedSurah.arti}`;
}

function shuffle(items) {
  const shuffledItems = [...items];
  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
  }
  return shuffledItems;
}

function buildGuessQuestion() {
  const ayat = state.selectedAyat;
  if (ayat.length < 4) return null;

  const questionVerse = ayat[Math.floor(Math.random() * ayat.length)];
  const distractors = shuffle(ayat.filter((item) => item.nomorAyat !== questionVerse.nomorAyat))
    .slice(0, 2)
    .map((item) => ({ label: String(item.nomorAyat), value: item.nomorAyat }));
  const options = shuffle([
    { label: String(questionVerse.nomorAyat), value: questionVerse.nomorAyat },
    ...distractors
  ]);

  return { verse: questionVerse, options, correctValue: questionVerse.nomorAyat };
}

function buildContinueQuestion() {
  const ayat = state.selectedAyat;
  if (ayat.length < 4) return null;

  const possiblePrompts = shuffle(ayat.slice(0, -1));
  for (const promptVerse of possiblePrompts) {
    const correctVerse = ayat.find((item) => item.nomorAyat === promptVerse.nomorAyat + 1);
    if (!correctVerse?.teksArab) continue;

    const uniqueDistractors = new Map();
    ayat.forEach((item) => {
      if (item.nomorAyat === promptVerse.nomorAyat || item.nomorAyat === correctVerse.nomorAyat) return;
      if (!item.teksArab || item.teksArab === correctVerse.teksArab) return;
      if (!uniqueDistractors.has(item.teksArab)) uniqueDistractors.set(item.teksArab, item);
    });

    const distractors = shuffle([...uniqueDistractors.values()]).slice(0, 2);
    if (distractors.length < 2) continue;

    const options = shuffle([
      { label: correctVerse.teksArab, value: correctVerse.nomorAyat },
      ...distractors.map((item) => ({ label: item.teksArab, value: item.nomorAyat }))
    ]);
    return { verse: promptVerse, options, correctValue: correctVerse.nomorAyat };
  }

  return null;
}

function startQuestion() {
  if (state.selectedAyat.length === 0) {
    showQuizMessage(t('mentor.selectSurah'), t('mentor.selectPrompt'));
    return;
  }
  if (state.selectedAyat.length < 4) {
    showQuizMessage(t('mentor.chooseOther'), t('mentor.chooseOther'));
    return;
  }

  const question = state.mode === 'guess' ? buildGuessQuestion() : buildContinueQuestion();
  if (!question) {
    showQuizMessage(t('mentor.chooseOther'), t('mentor.chooseOther'));
    return;
  }

  state.currentQuestion = question;
  state.answered = false;
  elements.quizContent.hidden = false;
  elements.quizEmpty.hidden = true;
  elements.answerFeedback.textContent = '';
  elements.answerFeedback.className = 'answer-feedback';
  elements.questionPrompt.textContent = t(state.mode === 'guess' ? 'mentor.promptGuess' : 'mentor.promptContinue');
  elements.questionVerse.textContent = question.verse.teksArab;
  elements.optionsLabel.textContent = t(state.mode === 'guess' ? 'mentor.optionsGuess' : 'mentor.optionsContinue');
  elements.quizModeLabel.textContent = t(state.mode === 'guess' ? 'mentor.guess' : 'mentor.continue');
  elements.roundNumber.textContent = String(state.round);
  renderAnswerOptions(question);
}

function renderAnswerOptions(question) {
  elements.answerOptions.replaceChildren();
  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer-option';
    button.dataset.value = String(option.value);
    button.setAttribute('aria-label', state.mode === 'guess' ? `${t('mentor.answerAyah')} ${option.label}` : option.label);

    if (state.mode === 'guess') {
      const number = document.createElement('span');
      number.className = 'option-number';
      number.textContent = option.label;
      button.append(number);
    } else {
      const arabicText = document.createElement('span');
      arabicText.className = 'option-arabic';
      arabicText.lang = 'ar';
      arabicText.dir = 'rtl';
      arabicText.textContent = option.label;
      button.append(arabicText);
    }

    button.addEventListener('click', () => answerQuestion(option.value, button));
    elements.answerOptions.append(button);
  });
}

function answerQuestion(selectedValue, selectedButton) {
  if (state.answered || !state.currentQuestion) return;
  state.answered = true;
  const isCorrect = selectedValue === state.currentQuestion.correctValue;

  elements.answerOptions.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.value) === state.currentQuestion.correctValue) button.classList.add('is-correct');
  });

  if (isCorrect) {
    state.score += 10;
    elements.score.textContent = String(state.score);
    elements.answerFeedback.textContent = t('mentor.correct');
    elements.answerFeedback.classList.add('is-correct');
  } else {
    selectedButton.classList.add('is-wrong');
    const correctOption = state.currentQuestion.options.find((option) => option.value === state.currentQuestion.correctValue);
    const answerText = state.mode === 'guess' ? `${t('mentor.correctAnswer')} ${correctOption.label}` : t('mentor.correctShown');
    elements.answerFeedback.textContent = `${t('mentor.wrong')} ${answerText}`;
    elements.answerFeedback.classList.add('is-wrong');
  }
}

function showQuizMessage(title, message) {
  elements.quizContent.hidden = true;
  elements.quizEmpty.hidden = false;
  elements.quizEmpty.replaceChildren();
  const heading = document.createElement('strong');
  heading.textContent = title;
  const detail = document.createElement('span');
  detail.textContent = message;
  elements.quizEmpty.append(heading, detail);
}

function resetGame() {
  state.score = 0;
  state.round = 1;
  elements.score.textContent = '0';
  startQuestion();
}

function restartGame() {
  resetGame();
}

elements.navTabs.forEach((tab) => tab.addEventListener('click', () => setView(tab.dataset.view)));
document.querySelectorAll('[data-go-quran]').forEach((button) => button.addEventListener('click', () => setView('quran')));
document.querySelectorAll('[data-go-home]').forEach((link) => link.addEventListener('click', (event) => {
  event.preventDefault();
  showWelcome();
}));
elements.entryButtons.forEach((button) => button.addEventListener('click', () => enterApp(button.dataset.enterView)));
elements.dailyOpen.addEventListener('click', () => {
  if (state.dailyVerse) selectSurah(state.dailyVerse.surahNumber);
});
elements.themeToggles.forEach((button) => button.addEventListener('click', toggleTheme));
elements.languageSelects.forEach((select) => select.addEventListener('change', () => {
  applyLanguage(select.value);
  try {
    localStorage.setItem('quran-digital-language', state.language);
  } catch {
    // The language remains available for this session if browser storage is disabled.
  }
}));
elements.surahSearch.addEventListener('input', renderSurahList);
elements.modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    elements.modeButtons.forEach((modeButton) => {
      const isSelected = modeButton === button;
      modeButton.classList.toggle('is-selected', isSelected);
      modeButton.setAttribute('aria-pressed', String(isSelected));
    });
    resetGame();
  });
});
elements.nextButton.addEventListener('click', () => {
  state.round += 1;
  startQuestion();
});
elements.restartButton.addEventListener('click', restartGame);
elements.radioSurah.addEventListener('change', () => updateRadioTrack());
elements.radioReciter.addEventListener('change', () => updateRadioTrack());
elements.radioPrevious.addEventListener('click', () => changeRadioSurah(-1));
elements.radioNext.addEventListener('click', () => changeRadioSurah(1));
elements.radioAudio.addEventListener('ended', () => changeRadioSurah(1));
elements.radioAudio.addEventListener('error', () => {
  if (elements.radioAudio.currentSrc) elements.radioStatus.textContent = t('radio.error');
});

loadThemePreference();
loadLanguagePreference();
loadSurahList();