function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

const content = {
    about: {
        en: "I'm Simeon Pavlov, a passionate freeride skier from Bansko, Bulgaria. At the tender age of 4, I strapped on" +
            "my first pair of skis, thanks to my ski-loving parents. Little did I know that those early glides down the" +
            "slopes would ignite a lifelong love affair with freeride skiing." +

            "My journey into freeride skiing officially began at 15 when I entered my first competition. I've been" +
            "carving my way through the snow ever since, taking part in an average of three to four competitions a" +
            "season. The thrill of competition became a familiar companion. It culminated in my triumphant victory in the" +
            "junior category at the age of 17. I've made a name for myself in the freeride community." +

            "Beyond the snow-covered peaks, my off-seasons are a mosaic of outdoor adventures. Surfing, climbing, hiking," +
            "tennis – you name it, I've probably tried it. An advocate for an active lifestyle, I find joy in perpetual" +
            "motion and maintain my fitness through a variety of sports. Notably, I proudly held the title of Bulgarian" +
            "national champion in both freeride skiing and Enduro Mountain Biking. I even ventured into the World Enduro" +
            "Series, where I faced one of the most challenging competitions of my career, finishing 24th." +

            "The silver screen also captured a slice of my skiing prowess. I co-starred in the ski movie \"Зима,\" filmed" +
            "right here in Bulgaria. Our efforts were rewarded with the distinction of the best Bulgarian outdoor movie," +
            "a testament to the raw beauty of our mountainous landscapes.",

        bg: `Аз съм Симеон Павлов, фрийрайд скиор от Банско, България. На ранната възраст от 4 години се качих на първите си ски, благодарение
            на моите родители, които обичат ските. Никога не съм знаел, че тези ранни спускания ще запалят любовта ми към свободните ски за цял 
            живот. Началото на свободното каране на ски официално започна на 15 години, когато участвах в първото си състезание. Оттогава си 
            проправям път през снега, като участвам всеки сезон средно на три до четири състезания. Тръпката от състезанията се превърна в 
            навик и от тогава не съм спирал да участвам по състезания. Кулминацията беше когато спечелих първото ми състезание в юношеска 
            категория на 17-годишна възраст и започнах да си изграждам име в общността на фрийрайдърите. Отвъд покритите със сняг върхове, 
            практикувам много на брой спортове и приключения на открито. Сърф, катерене, колоездене, туризъм - както и да го наречете, 
            вероятно съм го пробвал. Привърженик съм на активния начин на живот, намирам радост в постоянното движение и поддържам 
            физическата си форма чрез различни спортове. По-специално, с гордост притежавам титлата на български национален шампион 
            по фрийрайд ски и ендуро планинско колоездене. Участвах дори в световното състезание по ендуро с колела, където се изправих 
            пред едно от най-предизвикателните състезания в кариерата си и завърших на 24-то място. Сребърният екран също запечата 
            част от скиорските ми умения. Участвах в ски филма „Зима“, заснет тук, в България. Усилията ни бяха възнаградени с 
            отличието за най-добър български филм на открито, свидетелство за суровата красота на нашите планински пейзажи.`
    },
    aboutText2: {
        en: "Currently, my sights are set on an ambitious goal – to become the first Bulgarian ever to qualify for" +
            "the" +
            "prestigious Freeride World Tour. I've already made significant strides, clinching victory in the 3 out of 4 " +
            "stars competition in Bansko in 2023. The win not only added points to my tally but also brought me" +
            "one step" +
            "closer to realizing my dream." +

            "In essence, skiing isn't just a sport for me – it's a passion, a way of life. Whether racing down" +
            "the" +
            "slopes, conquering peaks, or pushing my limits, every moment spent in the mountains is a celebration" +
            "of the" +
            "very essence of who I am. Join me on this exhilarating journey through snow-covered landscapes and" +
            "beyond –" +
            "the adventure never stops!",

        bg: `В момента се стремя към една амбициозна цел - да стана първият българин, класирал се на престижната Freeride World Tour. Вече направих значителни крачки напред, като спечелих състезанието 3 от 4 звезди в Банско през 2023 г. 
                    Победата не само добави точки към общото класиране, но и ми доближи с една стъпка по-близо до осъществяването на моята мечта. По същество за мен ски спортът не е просто спорт - той е страст, начин на живот. Независимо дали се състезавам по склоновете, покорявам върхове или надскачам границите си, всеки миг, прекаран в планината, е празник. Присъединете се с мен на това вълнуващо пътешествие през покрити със сняг пейзажи и отвъд - приключението никога не спира!`
    },
    futurePlans: {
        en: `Throughout the upcoming season, I'll be traveling across the Alps to compete in the Freeride World Tour Challengers. 
            This competition is the crucial next step toward my goal of qualifying for the Freeride World Tour, the pinnacle of 
            freeride skiing. To earn a spot in the Challengers, I had to place in the top 25 of the Freeride World Qualifiers, 
            securing my position for the next year. With only 25 men competing in the Challengers, no Bulgarian has achieved this yet.
            In between competitions, I also plan to film and showcase the beauty of Bulgaria's untouched mountains, highlighting 
            our incredible terrain.
            I need your support to help me reach my dream of becoming the first Bulgarian to qualify for the
            Freeride World Tour!`,

        bg: `През предстоящия сезон ще пътувам из Алпите, за да се състезавам в Freeride World Tour Challengers. Това са серия от състезания и е решаваща следваща стъпка към целта ми да се класирам за Freeride World Tour - върхът на фрийрайд ски спорта. За да спечеля място в Challengers, трябваше да се класирам в топ 25 на квалификациите за Freeride World Tour, с което да си осигуря позиция за следващата година. С само 25 мъже, които се състезават в Challengers, никой българин все още не е постигнал това. Между състезанията също така планирам да снимам и да показвам невероятния терен и условия, която нашата планина предлага. 
        Имам нужда от вашата подкрепа, за да ми помогнете да постигна мечтата си да стана първият българин, който се класира за Freeride World Tour!`
    },
    latest: {
        en: `Explore the thrill and beauty of my recent skiing escapades through these captivating snapshots. Whether gracefully navigating pristine powder or conquering challenging slopes, each image tells a story of passion, perseverance, and the sheer joy of freeride skiing. Take a visual journey with me through the world of snow-covered peaks and adrenaline-pumping descents.`,

        bg: `Разгледайте снимките от последните ми ски приключения и състезание. 
             Всяка снимка разказва за страстта, упоритостта и чистата радост от свободното каране на ски.`
    },
    clickPicture: {
        en: `Click on the image to make them bigger`,

        bg: `Кликнете върху изображенията, за да ги увеличите`
    }
}

document.getElementById('futurePlans').innerText = content.futurePlans.en;
document.getElementById('aboutText').innerText = content.about.en;
document.getElementById('aboutText2').innerText = content.aboutText2.en;
document.getElementById('aboutText2').innerText = content.aboutText2.en;
document.getElementById('latest').innerText = content.latest.en;
document.getElementById('clickPicture').innerText = content.clickPicture.en;

let currentLanguage = 'en';

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'bg' : 'en';
    document.getElementById('aboutText').innerText = content.about[currentLanguage];
    document.getElementById('aboutText2').innerText = content.aboutText2[currentLanguage];
    document.getElementById('futurePlans').innerText = content.futurePlans[currentLanguage];
    document.getElementById('latest').innerText = content.latest[currentLanguage];
    document.getElementById('clickPicture').innerText = content.clickPicture[currentLanguage];
}