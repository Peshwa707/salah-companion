// Daily Duas Data - Including Witr Prayer and Daily Activities
// Each dua includes Arabic, transliteration, translation, and audio when available

export const witrPrayer = {
  title: 'Witr Prayer',
  arabicTitle: 'صلاة الوتر',
  description: 'Witr is an odd-numbered prayer performed after Isha. It can be 1, 3, 5, 7, or 9 rakahs. The most common is 3 rakahs.',
  importance: [
    'The Prophet (ﷺ) never left Witr whether traveling or at home',
    'It is the best of the night prayers',
    'Allah is Witr (One) and He loves the Witr'
  ],
  timing: 'After Isha prayer until Fajr',
  duas: [
    {
      id: 'qunut',
      name: 'Dua al-Qunut',
      arabicName: 'دعاء القنوت',
      description: 'Recited in the last rakah of Witr after rising from ruku, or before ruku after the recitation',
      arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
      transliteration: 'Allahumma-hdini feeman hadayt, wa \'aafini feeman \'aafayt, wa tawallani feeman tawallayt, wa baarik li feema a\'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda \'alayk, wa innahu la yadhillu man waalayt, wa la ya\'izzu man \'aadayt, tabarakta Rabbana wa ta\'aalayt',
      translation: 'O Allah, guide me among those You have guided, pardon me among those You have pardoned, turn to me in friendship among those on whom You have turned in friendship, and bless me in what You have bestowed, and save me from the evil of what You have decreed. For verily You decree and none can decree against You. He whom You befriend is not humbled and he whom You oppose is not honored. Blessed are You, O Lord, and Exalted.',
      reference: 'Abu Dawud, Tirmidhi, Nasa\'i',
      duaAudioId: 115
    },
    {
      id: 'qunut-addition',
      name: 'Addition to Qunut',
      arabicName: 'إضافة القنوت',
      description: 'This can be added to Dua al-Qunut',
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
      transliteration: 'Allahumma inni a\'udhu bi-ridaka min sakhatik, wa bi-mu\'aafaatika min \'uqoobatik, wa a\'udhu bika mink, la uhsi thana\'an \'alayk, Anta kama athnayta \'ala nafsik',
      translation: 'O Allah, I seek refuge in Your pleasure from Your anger, and in Your forgiveness from Your punishment, and I seek refuge in You from You. I cannot praise You enough; You are as You have praised Yourself.',
      reference: 'Abu Dawud, Tirmidhi',
      duaAudioId: 116
    },
    {
      id: 'salawat-qunut',
      name: 'Salawat in Qunut',
      arabicName: 'الصلاة على النبي في القنوت',
      description: 'Send blessings upon the Prophet at the end of Qunut',
      arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
      transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammad',
      translation: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad',
      reference: 'Scholars recommend this based on general evidence'
    },
    {
      id: 'after-witr',
      name: 'After Witr',
      arabicName: 'بعد الوتر',
      description: 'Said three times after completing Witr prayer',
      arabic: 'سُبْحَانَ الْمَلِكِ الْقُدُّوسِ',
      transliteration: 'Subhanal-Malikil-Quddus',
      translation: 'Glory be to the King, the Holy',
      times: 3,
      note: 'On the third time, raise your voice and elongate it',
      reference: 'Abu Dawud, Nasa\'i',
      duaAudioId: 117
    }
  ]
};

export const dailyDuasCategories = [
  {
    id: 'morning-evening',
    name: 'Morning & Evening',
    arabicName: 'أذكار الصباح والمساء',
    icon: 'sun',
    duas: [
      {
        id: 'morning-master',
        name: 'Master of Morning Adhkar',
        arabicName: 'سيد الاستغفار',
        arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
        transliteration: 'Allahumma Anta Rabbi la ilaha illa Ant, khalaqtani wa ana \'abduk, wa ana \'ala \'ahdika wa wa\'dika mastata\'t, a\'udhu bika min sharri ma sana\'t, abu\'u laka bi-ni\'matika \'alayya, wa abu\'u bi-dhanbi faghfir li, fa innahu la yaghfirudh-dhunuba illa Ant',
        translation: 'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I am upon Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for none forgives sins but You.',
        benefit: 'Whoever says this during the day with firm belief and dies that day will be among the people of Paradise',
        reference: 'Bukhari',
        duaAudioId: 73
      }
    ]
  },
  {
    id: 'waking-sleeping',
    name: 'Waking & Sleeping',
    arabicName: 'النوم والاستيقاظ',
    icon: 'moon',
    duas: [
      {
        id: 'before-sleep',
        name: 'Before Sleeping',
        arabicName: 'عند النوم',
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismika Allahumma amutu wa ahya',
        translation: 'In Your name, O Allah, I die and I live',
        reference: 'Bukhari',
        duaAudioId: 104
      },
      {
        id: 'before-sleep-2',
        name: 'Dua Before Sleep',
        arabicName: 'دعاء النوم',
        arabic: 'اللَّهُمَّ بِاسْمِكَ أَحْيَا وَأَمُوتُ',
        transliteration: 'Allahumma bismika ahya wa amut',
        translation: 'O Allah, in Your name I live and die',
        reference: 'Bukhari, Muslim'
      },
      {
        id: 'sleep-protection',
        name: 'Seeking Protection Before Sleep',
        arabicName: 'التعوذ قبل النوم',
        arabic: 'اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ',
        transliteration: 'Allahumma qini \'adhabaka yawma tab\'athu \'ibadak',
        translation: 'O Allah, protect me from Your punishment on the Day You resurrect Your servants',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 107
      },
      {
        id: 'waking-up',
        name: 'Upon Waking Up',
        arabicName: 'عند الاستيقاظ',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
        transliteration: 'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa ilayhin-nushur',
        translation: 'All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection',
        reference: 'Bukhari',
        duaAudioId: 1
      },
      {
        id: 'waking-night',
        name: 'Waking at Night',
        arabicName: 'الاستيقاظ في الليل',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        transliteration: 'La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, wa Huwa \'ala kulli shay\'in Qadeer. SubhanAllah, wal-hamdu lillah, wa la ilaha illallah, wallahu Akbar, wa la hawla wa la quwwata illa billah',
        translation: 'There is no god but Allah alone, without partner. His is the dominion and His is the praise, and He is over all things capable. Glory be to Allah, praise be to Allah, there is no god but Allah, Allah is the Greatest, and there is no might nor power except with Allah.',
        benefit: 'Then if one makes dua it will be answered, and if one prays the prayer will be accepted',
        reference: 'Bukhari',
        duaAudioId: 3
      }
    ]
  },
  {
    id: 'eating-drinking',
    name: 'Eating & Drinking',
    arabicName: 'الطعام والشراب',
    icon: 'utensils',
    duas: [
      {
        id: 'before-eating',
        name: 'Before Eating',
        arabicName: 'قبل الطعام',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah',
        translation: 'In the name of Allah',
        instruction: 'If you forget at the beginning, say: بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ (Bismillahi fi awwalihi wa aakhirih - In the name of Allah at its beginning and end)',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 176
      },
      {
        id: 'after-eating',
        name: 'After Eating',
        arabicName: 'بعد الطعام',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: 'Alhamdu lillahil-ladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah',
        translation: 'All praise is for Allah who fed me this and provided it for me without any might or power from myself',
        benefit: 'Whoever says this after eating, his previous sins will be forgiven',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 178
      },
      {
        id: 'guest-for-host',
        name: 'Guest\'s Dua for Host',
        arabicName: 'دعاء الضيف للمضيف',
        arabic: 'اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ',
        transliteration: 'Allahumma barik lahum feema razaqtahum, waghfir lahum warhamhum',
        translation: 'O Allah, bless them in what You have provided them, and forgive them and have mercy on them',
        reference: 'Muslim',
        duaAudioId: 181
      },
      {
        id: 'breaking-fast',
        name: 'When Breaking Fast',
        arabicName: 'عند الإفطار',
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
        transliteration: 'Dhahabadh-dhama\'u wabtallatil-\'uruqu wa thabatal-ajru in sha Allah',
        translation: 'The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills',
        reference: 'Abu Dawud',
        duaAudioId: 182
      }
    ]
  },
  {
    id: 'bathroom',
    name: 'Entering & Leaving Bathroom',
    arabicName: 'دخول وخروج الخلاء',
    icon: 'door',
    duas: [
      {
        id: 'entering-bathroom',
        name: 'Entering Bathroom',
        arabicName: 'عند دخول الخلاء',
        arabic: 'بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        transliteration: 'Bismillah, Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith',
        translation: 'In the name of Allah. O Allah, I seek refuge in You from the male and female evil beings (devils)',
        reference: 'Bukhari, Muslim',
        duaAudioId: 9
      },
      {
        id: 'leaving-bathroom',
        name: 'Leaving Bathroom',
        arabicName: 'عند الخروج من الخلاء',
        arabic: 'غُفْرَانَكَ',
        transliteration: 'Ghufraanak',
        translation: 'I seek Your forgiveness',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 10
      }
    ]
  },
  {
    id: 'home',
    name: 'Entering & Leaving Home',
    arabicName: 'دخول وخروج المنزل',
    icon: 'home',
    duas: [
      {
        id: 'leaving-home',
        name: 'Leaving Home',
        arabicName: 'عند الخروج من المنزل',
        arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
        transliteration: 'Bismillah, tawakkaltu \'alallah, wa la hawla wa la quwwata illa billah',
        translation: 'In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah',
        benefit: 'It will be said to him: You are guided, defended, and protected. The devil will move away from him.',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 17
      },
      {
        id: 'entering-home',
        name: 'Entering Home',
        arabicName: 'عند دخول المنزل',
        arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
        transliteration: 'Bismillahi walajna, wa bismillahi kharajna, wa \'ala Rabbina tawakkalna',
        translation: 'In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust',
        reference: 'Abu Dawud',
        duaAudioId: 18
      }
    ]
  },
  {
    id: 'mosque',
    name: 'Entering & Leaving Mosque',
    arabicName: 'دخول وخروج المسجد',
    icon: 'building',
    duas: [
      {
        id: 'entering-mosque',
        name: 'Entering Mosque',
        arabicName: 'عند دخول المسجد',
        arabic: 'أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
        transliteration: 'A\'udhu billahil-\'Azeem, wa bi-wajhihil-kareem, wa sultanihil-qadeem, minash-shaytanir-rajeem. Bismillah, was-salatu was-salamu \'ala Rasulillah. Allahumma-ftah li abwaba rahmatik',
        translation: 'I seek refuge in Allah the Almighty, in His Noble Face, and in His Eternal Authority from the accursed Satan. In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, open for me the doors of Your mercy.',
        reference: 'Abu Dawud, Muslim',
        duaAudioId: 19
      },
      {
        id: 'leaving-mosque',
        name: 'Leaving Mosque',
        arabicName: 'عند الخروج من المسجد',
        arabic: 'بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
        transliteration: 'Bismillah, was-salatu was-salamu \'ala Rasulillah. Allahumma inni as\'aluka min fadlik',
        translation: 'In the name of Allah, and peace and blessings be upon the Messenger of Allah. O Allah, I ask You from Your bounty.',
        reference: 'Muslim',
        duaAudioId: 20
      }
    ]
  },
  {
    id: 'travel',
    name: 'Travel',
    arabicName: 'السفر',
    icon: 'car',
    duas: [
      {
        id: 'boarding-vehicle',
        name: 'When Boarding a Vehicle',
        arabicName: 'عند ركوب الدابة',
        arabic: 'بِسْمِ اللَّهِ، الْحَمْدُ لِلَّهِ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
        transliteration: 'Bismillah, Alhamdulillah. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqalibun',
        translation: 'In the name of Allah. All praise is for Allah. Glory be to Him who has subjected this to us, and we could never have it otherwise. And to our Lord we shall return.',
        reference: 'Quran 43:13-14, Muslim',
        duaAudioId: 212
      },
      {
        id: 'travel-dua',
        name: 'Travel Dua',
        arabicName: 'دعاء السفر',
        arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى. اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ. اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ فِي الْأَهْلِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ السَّفَرِ، وَكَآبَةِ الْمَنْظَرِ، وَسُوءِ الْمُنْقَلَبِ فِي الْمَالِ وَالْأَهْلِ',
        transliteration: 'Allahumma inna nas\'aluka fi safarina hadhal-birra wat-taqwa, wa minal-\'amali ma tarda. Allahumma hawwin \'alayna safarana hadha watwi \'anna bu\'dah. Allahumma Antas-sahibu fis-safar, wal-khaleefatu fil-ahl. Allahumma inni a\'udhu bika min wa\'tha\'is-safar, wa ka\'abatil-mandhar, wa su\'il-munqalabi fil-mali wal-ahl',
        translation: 'O Allah, we ask You in this journey for righteousness and piety, and for deeds that please You. O Allah, make this journey easy for us and shorten its distance for us. O Allah, You are the Companion in travel and the Guardian of the family. O Allah, I seek refuge in You from the hardships of travel, the gloominess of sights, and finding evil changes in property and family upon return.',
        reference: 'Muslim',
        duaAudioId: 213
      },
      {
        id: 'returning-travel',
        name: 'Returning from Travel',
        arabicName: 'الرجوع من السفر',
        arabic: 'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ',
        transliteration: 'Ayibun, ta\'ibun, \'abidun, li Rabbina hamidun',
        translation: 'We are returning, repenting, worshipping, and praising our Lord',
        reference: 'Muslim',
        duaAudioId: 215
      }
    ]
  },
  {
    id: 'clothing',
    name: 'Wearing Clothes',
    arabicName: 'لبس الثياب',
    icon: 'shirt',
    duas: [
      {
        id: 'wearing-clothes',
        name: 'When Wearing Clothes',
        arabicName: 'عند لبس الثوب',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
        transliteration: 'Alhamdu lillahil-ladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah',
        translation: 'All praise is for Allah who has clothed me with this and provided it for me without any might or power from myself',
        benefit: 'Whoever says this when wearing new clothes will have his past sins forgiven',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 15
      },
      {
        id: 'new-clothes',
        name: 'When Wearing New Clothes',
        arabicName: 'عند لبس الثوب الجديد',
        arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ',
        transliteration: 'Allahumma lakal-hamd Anta kasawtanihi, as\'aluka min khayrihi wa khayri ma suni\'a lah, wa a\'udhu bika min sharrihi wa sharri ma suni\'a lah',
        translation: 'O Allah, for You is all praise, You have clothed me with it. I ask You for its goodness and the goodness for which it was made, and I seek refuge in You from its evil and the evil for which it was made.',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 16
      }
    ]
  },
  {
    id: 'distress',
    name: 'Distress & Anxiety',
    arabicName: 'الكرب والهم',
    icon: 'heart',
    duas: [
      {
        id: 'distress-dua',
        name: 'Dua for Distress',
        arabicName: 'دعاء الكرب',
        arabic: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
        transliteration: 'La ilaha illallahul-\'Azeemul-Haleem. La ilaha illallahu Rabbul-\'Arshil-\'Azeem. La ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-\'Arshil-Kareem',
        translation: 'There is no god but Allah, the Almighty, the Forbearing. There is no god but Allah, Lord of the Magnificent Throne. There is no god but Allah, Lord of the heavens and Lord of the earth and Lord of the Noble Throne.',
        reference: 'Bukhari, Muslim',
        duaAudioId: 120
      },
      {
        id: 'anxiety-dua',
        name: 'Dua for Anxiety',
        arabicName: 'دعاء الهم والحزن',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
        transliteration: 'Allahumma inni a\'udhu bika minal-hammi wal-hazan, wal-\'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala\'id-dayni wa ghalabatir-rijal',
        translation: 'O Allah, I seek refuge in You from worry and grief, from weakness and laziness, from miserliness and cowardice, from being overcome by debt and from being overpowered by men.',
        reference: 'Bukhari',
        duaAudioId: 121
      },
      {
        id: 'difficulty-dua',
        name: 'Dua in Difficulty',
        arabicName: 'دعاء عند المصيبة',
        arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
        transliteration: 'Inna lillahi wa inna ilayhi raji\'un. Allahumma\'jurni fi museebati wa akhlif li khayran minha',
        translation: 'Indeed we belong to Allah, and indeed to Him we will return. O Allah, reward me in my affliction and replace it for me with something better.',
        benefit: 'Allah will reward the person and replace what was lost with something better',
        reference: 'Muslim',
        duaAudioId: 157
      }
    ]
  },
  {
    id: 'protection',
    name: 'Protection',
    arabicName: 'الحفظ والحماية',
    icon: 'shield',
    duas: [
      {
        id: 'morning-protection',
        name: 'Morning Protection',
        arabicName: 'حفظ الصباح',
        arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
        transliteration: 'Bismillahil-ladhi la yadurru ma\'asmihi shay\'un fil-ardi wa la fis-sama\'i wa Huwas-Samee\'ul-\'Aleem',
        translation: 'In the name of Allah, with whose name nothing in the earth or the heavens can cause harm, and He is the All-Hearing, the All-Knowing',
        times: 3,
        benefit: 'Nothing will harm the person who says this three times in the morning and evening',
        reference: 'Abu Dawud, Tirmidhi',
        duaAudioId: 85
      },
      {
        id: 'evil-eye-protection',
        name: 'Protection from Evil Eye',
        arabicName: 'الوقاية من العين',
        arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
        transliteration: 'A\'udhu bi-kalimatillahit-tammati min sharri ma khalaq',
        translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created',
        times: 3,
        reference: 'Muslim',
        duaAudioId: 95
      }
    ]
  },
  {
    id: 'gratitude',
    name: 'Gratitude',
    arabicName: 'الشكر',
    icon: 'star',
    duas: [
      {
        id: 'seeing-afflicted',
        name: 'Upon Seeing Someone Afflicted',
        arabicName: 'عند رؤية مبتلى',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي مِمَّا ابْتَلَاكَ بِهِ، وَفَضَّلَنِي عَلَى كَثِيرٍ مِمَّنْ خَلَقَ تَفْضِيلًا',
        transliteration: 'Alhamdu lillahil-ladhi \'aafani mimmabtalaaka bih, wa faddalani \'ala katheerin mimman khalaqa tafdeela',
        translation: 'All praise is for Allah who has saved me from what He has afflicted you with and has favored me over many of His creation',
        instruction: 'Say this silently to yourself, not to the person',
        benefit: 'The one who says this will be protected from that affliction',
        reference: 'Tirmidhi',
        duaAudioId: 226
      },
      {
        id: 'general-thanks',
        name: 'General Gratitude',
        arabicName: 'الحمد العام',
        arabic: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ',
        transliteration: 'Allahumma ma asbaha bi min ni\'matin aw bi-ahadin min khalqik, fa minka wahdaka la shareeka lak, falakal-hamdu wa lakash-shukr',
        translation: 'O Allah, whatever blessing I or any of Your creation have risen upon is from You alone, without partner. So for You is all praise and for You is all thanks.',
        benefit: 'Whoever says this in the morning has fulfilled his gratitude for the day',
        reference: 'Abu Dawud',
        duaAudioId: 74
      }
    ]
  }
];

// Duas specifically mentioned in prayer for memorization
export const prayerDuasForMemorization = [
  {
    id: 'takbiratul-ihram',
    name: 'Takbiratul Ihram',
    arabicName: 'تكبيرة الإحرام',
    category: 'Opening',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    translation: 'Allah is the Greatest',
    whenToSay: 'At the start of prayer, raising hands to ears/shoulders'
  },
  {
    id: 'dua-istiftah',
    name: 'Opening Dua (Istiftah)',
    arabicName: 'دعاء الاستفتاح',
    category: 'Opening',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
    transliteration: 'Subhanaka Allahumma wa bihamdika, wa tabaraka ismuka, wa ta\'ala jadduka, wa la ilaha ghairuk',
    translation: 'Glory be to You, O Allah, and all praise is due to You. Blessed is Your name, exalted is Your majesty. There is no god worthy of worship except You.',
    whenToSay: 'First rakah only, after Takbir, before Al-Fatiha',
    duaAudioId: 27
  },
  {
    id: 'taawwuz',
    name: 'Seeking Refuge',
    arabicName: 'التعوذ',
    category: 'Recitation',
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    transliteration: 'A\'udhu billahi minash-shaytanir-rajim',
    translation: 'I seek refuge in Allah from the accursed Satan',
    whenToSay: 'Before Al-Fatiha'
  },
  {
    id: 'basmala',
    name: 'Basmala',
    arabicName: 'البسملة',
    category: 'Recitation',
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    transliteration: 'Bismillahir-Rahmanir-Raheem',
    translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
    whenToSay: 'Before Al-Fatiha in every rakah'
  },
  {
    id: 'tasbeeh-ruku',
    name: 'Tasbeeh of Ruku',
    arabicName: 'تسبيح الركوع',
    category: 'Ruku',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: 'Subhana Rabbiyal-\'Azeem',
    translation: 'Glory be to my Lord, the Almighty',
    whenToSay: 'During bowing, at least once (preferably 3 times)',
    times: 3,
    duaAudioId: 34
  },
  {
    id: 'sami-allah',
    name: 'Rising from Ruku',
    arabicName: 'سمع الله',
    category: 'Rising',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
    transliteration: 'Sami\'Allahu liman hamidah',
    translation: 'Allah hears those who praise Him',
    whenToSay: 'While rising from bowing',
    duaAudioId: 38
  },
  {
    id: 'rabbana-hamd',
    name: 'Response after Rising',
    arabicName: 'ربنا ولك الحمد',
    category: 'Rising',
    arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ',
    transliteration: 'Rabbana wa lakal-hamd',
    translation: 'Our Lord, to You is all praise',
    whenToSay: 'After standing upright from ruku',
    duaAudioId: 39
  },
  {
    id: 'tasbeeh-sujud',
    name: 'Tasbeeh of Sujud',
    arabicName: 'تسبيح السجود',
    category: 'Sujud',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: 'Subhana Rabbiyal-A\'la',
    translation: 'Glory be to my Lord, the Most High',
    whenToSay: 'During prostration, at least once (preferably 3 times)',
    times: 3,
    duaAudioId: 42
  },
  {
    id: 'between-sujud',
    name: 'Between Prostrations',
    arabicName: 'بين السجدتين',
    category: 'Sitting',
    arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    transliteration: 'Rabbighfir li, Rabbighfir li',
    translation: 'My Lord, forgive me. My Lord, forgive me.',
    whenToSay: 'While sitting between the two prostrations',
    duaAudioId: 48
  },
  {
    id: 'tashahhud',
    name: 'At-Tahiyyat (Tashahhud)',
    arabicName: 'التحيات',
    category: 'Sitting',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahis-saliheen. Ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh',
    translation: 'All compliments, prayers and pure words are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god except Allah, and I bear witness that Muhammad is His servant and messenger.',
    whenToSay: 'In sitting position after 2nd rakah and final rakah',
    duaAudioId: 52
  },
  {
    id: 'salawat',
    name: 'Salawat (Durood Ibrahim)',
    arabicName: 'الصلاة الإبراهيمية',
    category: 'Final Sitting',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: 'Allahumma salli \'ala Muhammadin wa \'ala aali Muhammad, kama sallayta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majid. Allahumma barik \'ala Muhammadin wa \'ala aali Muhammad, kama barakta \'ala Ibrahima wa \'ala aali Ibrahim, innaka Hamidun Majid',
    translation: 'O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.',
    whenToSay: 'After Tashahhud in final sitting',
    duaAudioId: 53
  },
  {
    id: 'dua-before-salam',
    name: 'Dua Before Salam',
    arabicName: 'دعاء قبل السلام',
    category: 'Final Sitting',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    transliteration: 'Allahumma inni a\'udhu bika min \'adhabi Jahannam, wa min \'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-Masihid-Dajjal',
    translation: 'O Allah, I seek refuge in You from the punishment of Hellfire, and from the punishment of the grave, and from the trials of life and death, and from the evil trial of the False Messiah.',
    whenToSay: 'Before Taslim',
    duaAudioId: 55
  },
  {
    id: 'taslim',
    name: 'Taslim (Ending Prayer)',
    arabicName: 'التسليم',
    category: 'Ending',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: 'As-salamu \'alaykum wa rahmatullah',
    translation: 'Peace and mercy of Allah be upon you',
    whenToSay: 'Turn right, then left to end the prayer'
  }
];

export default {
  witrPrayer,
  dailyDuasCategories,
  prayerDuasForMemorization
};
