// Complete Salah Prayer Guide with Step-by-Step Instructions
// Each step includes the Arabic text, transliteration, translation, and when applicable audio

export const salahOverview = {
  title: 'How to Pray Salah',
  arabicTitle: 'كيفية الصلاة',
  description: 'Salah is the second pillar of Islam. Muslims pray five times daily as a direct connection to Allah. This guide covers the complete method of prayer including all essential duas.',
  importance: [
    'The first thing one will be accountable for on the Day of Judgment',
    'The Prophet (ﷺ) said: "The key to Paradise is prayer"',
    'Distinguishes a believer from a disbeliever',
    'Brings peace and tranquility to the heart'
  ],
  prayerTimes: [
    { name: 'Fajr', arabic: 'الفجر', timing: 'Before sunrise', rakats: '2 Sunnah + 2 Fard' },
    { name: 'Dhuhr', arabic: 'الظهر', timing: 'After midday', rakats: '4 Sunnah + 4 Fard + 2 Sunnah' },
    { name: 'Asr', arabic: 'العصر', timing: 'Afternoon', rakats: '4 Fard' },
    { name: 'Maghrib', arabic: 'المغرب', timing: 'After sunset', rakats: '3 Fard + 2 Sunnah' },
    { name: 'Isha', arabic: 'العشاء', timing: 'Night', rakats: '4 Fard + 2 Sunnah + 3 Witr' }
  ]
};

export const prerequisites = {
  title: 'Prerequisites for Salah',
  arabicTitle: 'شروط الصلاة',
  items: [
    {
      name: 'Wudu (Ablution)',
      arabic: 'الوضوء',
      description: 'Ritual purification by washing specific body parts',
      steps: ['Intention', 'Wash hands 3x', 'Rinse mouth 3x', 'Clean nose 3x', 'Wash face 3x', 'Wash arms to elbows 3x', 'Wipe head once', 'Clean ears once', 'Wash feet to ankles 3x']
    },
    {
      name: 'Clean Body',
      arabic: 'طهارة البدن',
      description: 'Body must be free from impurities'
    },
    {
      name: 'Clean Clothes',
      arabic: 'طهارة الثياب',
      description: 'Clothing must be clean and modest'
    },
    {
      name: 'Clean Place',
      arabic: 'طهارة المكان',
      description: 'The prayer area must be clean'
    },
    {
      name: 'Covering Awrah',
      arabic: 'ستر العورة',
      description: 'Men: navel to knee. Women: entire body except face and hands'
    },
    {
      name: 'Facing Qiblah',
      arabic: 'استقبال القبلة',
      description: 'Face toward the Kaaba in Makkah'
    },
    {
      name: 'Proper Time',
      arabic: 'دخول الوقت',
      description: 'Each prayer must be performed in its designated time'
    }
  ]
};

export const salahSteps = [
  {
    id: 1,
    step: 'Standing (Qiyam)',
    arabicName: 'القيام',
    position: 'standing',
    description: 'Stand facing the Qiblah with feet slightly apart',
    elements: [
      {
        id: 'intention',
        name: 'Intention (Niyyah)',
        arabicName: 'النية',
        description: 'Make intention in your heart for the specific prayer. No verbal pronunciation is required.',
        instruction: 'Intend which prayer you are performing (Fajr, Dhuhr, etc.) and whether it is Fard or Sunnah.'
      },
      {
        id: 'takbir',
        name: 'Takbiratul Ihram (Opening Takbir)',
        arabicName: 'تكبيرة الإحرام',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Raise both hands to shoulder level (or ear level) with palms facing the Qiblah, fingers spread naturally. Say "Allahu Akbar" while raising hands, then place right hand over left on chest.'
      },
      {
        id: 'dua-istiftah',
        name: 'Opening Dua (Dua al-Istiftah)',
        arabicName: 'دعاء الاستفتاح',
        arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
        transliteration: 'Subhanaka Allahumma wa bihamdika, wa tabaraka ismuka, wa ta\'ala jadduka, wa la ilaha ghairuk',
        translation: 'Glory be to You, O Allah, and all praise is due to You. Blessed is Your name, exalted is Your majesty. There is no god worthy of worship except You.',
        instruction: 'Recite silently in the first rakah only. This is Sunnah, not obligatory.',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 27
      },
      {
        id: 'taawwuz',
        name: 'Seeking Refuge (Ta\'awwuz)',
        arabicName: 'التعوذ',
        arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
        transliteration: 'A\'udhu billahi minash-shaytanir-rajim',
        translation: 'I seek refuge in Allah from the accursed Satan',
        instruction: 'Recite silently before Al-Fatiha in the first rakah.'
      },
      {
        id: 'basmala',
        name: 'Basmala',
        arabicName: 'البسملة',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        transliteration: 'Bismillahir-Rahmanir-Raheem',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
        instruction: 'Recite silently before Al-Fatiha.',
        audioId: 1
      },
      {
        id: 'fatiha',
        name: 'Surah Al-Fatiha',
        arabicName: 'سورة الفاتحة',
        required: true,
        description: 'Recitation of Al-Fatiha is obligatory in every rakah',
        verses: [
          { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', transliteration: 'Alhamdu lillahi Rabbil-\'aalameen', translation: 'All praise is due to Allah, Lord of the worlds', audioId: 2 },
          { arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', transliteration: 'Ar-Rahmanir-Raheem', translation: 'The Most Gracious, the Most Merciful', audioId: 3 },
          { arabic: 'مَالِكِ يَوْمِ الدِّينِ', transliteration: 'Maliki Yawmid-Deen', translation: 'Master of the Day of Judgment', audioId: 4 },
          { arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een', translation: 'You alone we worship, and You alone we ask for help', audioId: 5 },
          { arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', transliteration: 'Ihdinas-Siratal-Mustaqeem', translation: 'Guide us to the straight path', audioId: 6 },
          { arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', transliteration: 'Siratal-lazeena an\'amta \'alaihim ghairil-maghdoobi \'alaihim wa lad-dalleen', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray', audioId: 7 }
        ],
        instruction: 'Must be recited in every rakah. Say "Ameen" after completing Al-Fatiha.'
      },
      {
        id: 'ameen',
        name: 'Ameen',
        arabicName: 'آمين',
        arabic: 'آمِينَ',
        transliteration: 'Ameen',
        translation: 'O Allah, accept our prayer',
        instruction: 'Say after Al-Fatiha. Can be said aloud in loud prayers or silently.'
      },
      {
        id: 'additional-surah',
        name: 'Additional Surah',
        arabicName: 'سورة إضافية',
        description: 'Recite any surah or verses from the Quran after Al-Fatiha',
        instruction: 'Required in the first two rakahs of Fard prayers. Commonly recited surahs include Al-Ikhlas, Al-Falaq, An-Nas, or any memorized portion of the Quran.',
        examples: ['Surah Al-Ikhlas', 'Surah Al-Kawthar', 'Surah An-Nasr', 'Any memorized verses']
      }
    ]
  },
  {
    id: 2,
    step: 'Bowing (Ruku)',
    arabicName: 'الركوع',
    position: 'bowing',
    description: 'Bow with hands on knees, back straight and parallel to the ground',
    elements: [
      {
        id: 'takbir-ruku',
        name: 'Takbir for Ruku',
        arabicName: 'تكبير الركوع',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say while going down into ruku position.'
      },
      {
        id: 'tasbeeh-ruku',
        name: 'Tasbeeh of Ruku',
        arabicName: 'تسبيح الركوع',
        arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
        transliteration: 'Subhana Rabbiyal-\'Azeem',
        translation: 'Glory be to my Lord, the Almighty',
        times: 3,
        instruction: 'Recite at least once, preferably three times or more.',
        reference: 'Muslim, Abu Dawud',
        duaAudioId: 34
      }
    ]
  },
  {
    id: 3,
    step: 'Rising from Ruku',
    arabicName: 'الرفع من الركوع',
    position: 'standing',
    description: 'Rise from bowing to standing position',
    elements: [
      {
        id: 'sami-allah',
        name: 'Rising Phrase',
        arabicName: 'سمع الله لمن حمده',
        arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
        transliteration: 'Sami\'Allahu liman hamidah',
        translation: 'Allah hears those who praise Him',
        instruction: 'Say while rising from ruku.',
        duaAudioId: 38
      },
      {
        id: 'rabbana-lakal-hamd',
        name: 'Response Phrase',
        arabicName: 'ربنا لك الحمد',
        arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ',
        transliteration: 'Rabbana wa lakal-hamd',
        translation: 'Our Lord, to You is all praise',
        instruction: 'Say after standing up straight.',
        duaAudioId: 39,
        alternative: {
          arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
          transliteration: 'Rabbana wa lakal-hamdu hamdan katheeran tayyiban mubarakan feeh',
          translation: 'Our Lord, to You is all praise, abundant, pure, and blessed praise'
        }
      }
    ]
  },
  {
    id: 4,
    step: 'First Prostration (Sujud)',
    arabicName: 'السجود الأول',
    position: 'prostration',
    description: 'Prostrate with seven body parts touching the ground: forehead with nose, both palms, both knees, and toes of both feet',
    elements: [
      {
        id: 'takbir-sujud1',
        name: 'Takbir for Sujud',
        arabicName: 'تكبير السجود',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say while going down into prostration.'
      },
      {
        id: 'tasbeeh-sujud',
        name: 'Tasbeeh of Sujud',
        arabicName: 'تسبيح السجود',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        transliteration: 'Subhana Rabbiyal-A\'la',
        translation: 'Glory be to my Lord, the Most High',
        times: 3,
        instruction: 'Recite at least once, preferably three times or more.',
        reference: 'Muslim, Abu Dawud',
        duaAudioId: 42
      },
      {
        id: 'dua-sujud',
        name: 'Dua in Sujud (Optional)',
        arabicName: 'الدعاء في السجود',
        arabic: 'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلَانِيَتَهُ وَسِرَّهُ',
        transliteration: 'Allahummaghfir li dhanbi kullahu, diqqahu wa jillahu, wa awwalahu wa aakhirahu, wa \'alaniyyatahu wa sirrahu',
        translation: 'O Allah, forgive all my sins, the small and the great, the first and the last, the open and the secret.',
        instruction: 'This is the closest position to Allah. Make personal duas here.',
        reference: 'Muslim',
        duaAudioId: 44
      }
    ]
  },
  {
    id: 5,
    step: 'Sitting Between Prostrations',
    arabicName: 'الجلوس بين السجدتين',
    position: 'sitting',
    description: 'Sit upright on your left foot with right foot upright',
    elements: [
      {
        id: 'takbir-rise',
        name: 'Takbir',
        arabicName: 'التكبير',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say while rising from first prostration.'
      },
      {
        id: 'dua-between-sujud',
        name: 'Dua Between Prostrations',
        arabicName: 'الدعاء بين السجدتين',
        arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
        transliteration: 'Rabbighfir li, Rabbighfir li',
        translation: 'My Lord, forgive me. My Lord, forgive me.',
        instruction: 'Recite while sitting between the two prostrations.',
        reference: 'Ibn Majah',
        duaAudioId: 48,
        alternative: {
          arabic: 'اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي',
          transliteration: 'Allahummaghfir li, warhamni, wahdini, wa\'aafini, warzuqni',
          translation: 'O Allah, forgive me, have mercy on me, guide me, grant me well-being, and provide for me.'
        }
      }
    ]
  },
  {
    id: 6,
    step: 'Second Prostration (Sujud)',
    arabicName: 'السجود الثاني',
    position: 'prostration',
    description: 'Perform the second prostration exactly like the first',
    elements: [
      {
        id: 'takbir-sujud2',
        name: 'Takbir for Second Sujud',
        arabicName: 'تكبير السجود',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say while going down into prostration.'
      },
      {
        id: 'tasbeeh-sujud2',
        name: 'Tasbeeh of Sujud',
        arabicName: 'تسبيح السجود',
        arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
        transliteration: 'Subhana Rabbiyal-A\'la',
        translation: 'Glory be to my Lord, the Most High',
        times: 3,
        instruction: 'Recite at least once, preferably three times or more.',
        duaAudioId: 42
      }
    ]
  },
  {
    id: 7,
    step: 'Rising for Second Rakah',
    arabicName: 'القيام للركعة الثانية',
    position: 'standing',
    description: 'Rise to standing position for the second rakah',
    elements: [
      {
        id: 'takbir-rise2',
        name: 'Takbir',
        arabicName: 'التكبير',
        arabic: 'اللَّهُ أَكْبَرُ',
        transliteration: 'Allahu Akbar',
        translation: 'Allah is the Greatest',
        instruction: 'Say while rising to stand. Continue with Al-Fatiha and another surah as in the first rakah.'
      }
    ],
    note: 'The second rakah is the same as the first, but without the opening dua (Dua al-Istiftah).'
  },
  {
    id: 8,
    step: 'First Tashahhud',
    arabicName: 'التشهد الأول',
    position: 'sitting',
    description: 'After the second rakah (in 3 or 4 rakah prayers), sit for the first Tashahhud',
    elements: [
      {
        id: 'tashahhud',
        name: 'At-Tahiyyat (Tashahhud)',
        arabicName: 'التحيات',
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahis-saliheen. Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh',
        translation: 'All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god except Allah, and I bear witness that Muhammad is His servant and messenger.',
        instruction: 'Sit on left foot with right foot upright. Point index finger when saying "la ilaha illallah".',
        reference: 'Bukhari, Muslim',
        duaAudioId: 52
      }
    ],
    note: 'In a 2-rakah prayer (like Fajr), proceed to the final Tashahhud and Salawat. In 3-4 rakah prayers, stand up for the next rakah after this.'
  },
  {
    id: 9,
    step: 'Final Tashahhud',
    arabicName: 'التشهد الأخير',
    position: 'sitting',
    description: 'After the final rakah, sit for the complete Tashahhud',
    elements: [
      {
        id: 'tashahhud-final',
        name: 'At-Tahiyyat',
        arabicName: 'التحيات',
        arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
        transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahis-saliheen. Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh',
        translation: 'All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god except Allah, and I bear witness that Muhammad is His servant and messenger.',
        duaAudioId: 52
      },
      {
        id: 'salawat',
        name: 'Salawat (Durood Ibrahim)',
        arabicName: 'الصلاة الإبراهيمية',
        arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
        transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammad, kama sallayta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majid. Allahumma barik \'ala Muhammadin wa \'ala aali Muhammad, kama barakta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majid',
        translation: 'O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.',
        instruction: 'Recite after At-Tahiyyat in the final sitting.',
        reference: 'Bukhari, Muslim',
        duaAudioId: 53
      },
      {
        id: 'dua-before-salam',
        name: 'Dua Before Salam',
        arabicName: 'الدعاء قبل السلام',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
        transliteration: 'Allahumma inni a\'udhu bika min \'adhabi Jahannam, wa min \'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-Masihid-Dajjal',
        translation: 'O Allah, I seek refuge in You from the punishment of Hellfire, and from the punishment of the grave, and from the trials of life and death, and from the evil trial of the False Messiah.',
        instruction: 'This dua is highly recommended before saying salam.',
        reference: 'Bukhari, Muslim',
        duaAudioId: 55
      },
      {
        id: 'rabbana-aatina',
        name: 'Rabbana Dua (Optional)',
        arabicName: 'ربنا آتنا',
        arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbana aatina fid-dunya hasanatan wa fil-aakhirati hasanatan wa qina \'adhaaban-nar',
        translation: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
        instruction: 'You may add personal duas here as well.',
        reference: 'Quran 2:201',
        audioId: 201
      }
    ]
  },
  {
    id: 10,
    step: 'Ending the Prayer (Taslim)',
    arabicName: 'التسليم',
    position: 'sitting',
    description: 'Turn your head to the right, then to the left',
    elements: [
      {
        id: 'salam-right',
        name: 'Salam to the Right',
        arabicName: 'السلام على اليمين',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
        transliteration: 'As-salamu \'alaykum wa rahmatullah',
        translation: 'Peace and mercy of Allah be upon you',
        instruction: 'Turn your head to the right and say this.'
      },
      {
        id: 'salam-left',
        name: 'Salam to the Left',
        arabicName: 'السلام على الشمال',
        arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
        transliteration: 'As-salamu \'alaykum wa rahmatullah',
        translation: 'Peace and mercy of Allah be upon you',
        instruction: 'Turn your head to the left and say this. This completes your prayer.'
      }
    ]
  }
];

export const afterSalahAdhkar = {
  title: 'Adhkar After Salah',
  arabicTitle: 'أذكار بعد الصلاة',
  description: 'These supplications are recommended after completing the prayer.',
  items: [
    {
      id: 1,
      name: 'Istighfar',
      arabic: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ',
      transliteration: 'Astaghfirullah, Astaghfirullah, Astaghfirullah',
      translation: 'I seek forgiveness from Allah (3 times)',
      times: 3,
      duaAudioId: 66
    },
    {
      id: 2,
      name: 'After Salam',
      arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
      transliteration: 'Allahumma Antas-Salam wa minkas-salam, tabarakta ya Dhal-Jalali wal-Ikram',
      translation: 'O Allah, You are Peace and from You is peace. Blessed are You, O Possessor of Majesty and Honor.',
      times: 1,
      reference: 'Muslim',
      duaAudioId: 67
    },
    {
      id: 3,
      name: 'Dhikr - SubhanAllah',
      arabic: 'سُبْحَانَ اللَّهِ',
      transliteration: 'SubhanAllah',
      translation: 'Glory be to Allah',
      times: 33,
      duaAudioId: 71
    },
    {
      id: 4,
      name: 'Dhikr - Alhamdulillah',
      arabic: 'الْحَمْدُ لِلَّهِ',
      transliteration: 'Alhamdulillah',
      translation: 'All praise is due to Allah',
      times: 33,
      duaAudioId: 71
    },
    {
      id: 5,
      name: 'Dhikr - Allahu Akbar',
      arabic: 'اللَّهُ أَكْبَرُ',
      transliteration: 'Allahu Akbar',
      translation: 'Allah is the Greatest',
      times: 33,
      duaAudioId: 71
    },
    {
      id: 6,
      name: 'Completing 100',
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteration: 'La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamdu wa Huwa \'ala kulli shay\'in Qadeer',
      translation: 'There is no god except Allah alone, without partner. His is the dominion and His is the praise, and He is over all things capable.',
      times: 1,
      reference: 'Muslim',
      duaAudioId: 72
    },
    {
      id: 7,
      name: 'Ayat al-Kursi',
      arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...',
      description: 'Recite Ayat al-Kursi (2:255)',
      times: 1,
      benefit: 'Whoever recites this after every prayer, nothing prevents them from entering Paradise except death.',
      reference: 'An-Nasa\'i',
      quranAudioId: 262
    }
  ]
};

// Audio URLs
export const QURAN_AUDIO_BASE_URL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/';
export const DUA_AUDIO_BASE_URL = 'https://www.al-hamdoulillah.com/invocations/mp3/';

// Helper function to get audio URL for Quran verses
export const getAudioUrl = (audioId) => audioId ? `${QURAN_AUDIO_BASE_URL}${audioId}.mp3` : null;

// Helper function to get audio URL for duas (from Hisn al-Muslim)
export const getDuaAudioUrl = (duaNumber) => duaNumber ? `${DUA_AUDIO_BASE_URL}${duaNumber}.mp3` : null;

export default {
  salahOverview,
  prerequisites,
  salahSteps,
  afterSalahAdhkar,
  getAudioUrl,
  getDuaAudioUrl
};
