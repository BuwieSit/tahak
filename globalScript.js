window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const depth = path.split('/').filter(Boolean).length;

    let prefix = './';
    if (depth === 2) prefix = '../';
    if (depth >= 3) prefix = '../../';


const expRandomizerMap = {
    "1": { image: `${prefix}images/pictures/tea.jpg`, title: "Herbal Tea or Coconut Charcoal Detox Welcome Drink", desc: "A calming welcome drink to energize and detoxify." },
    "2": { image: `${prefix}images/pictures/trek.jpg`, title: "Guided Trek with Folklore Storytelling and Pamumuwesto at Mt. Banahaw", desc: "A scenic mountain hike enriched with local tales and rituals." },
    "3": { image: `${prefix}images/pictures/mountbanahaw.jpg`, title: "Forest Bathing", desc: "A mindful walk through nature for deep relaxation and healing." },
    "4": { image: `${prefix}images/pictures/falls.jpg`, title: "Water Meditation and Cleansing at Sta. Lucia Falls with Complimentary Coconut Treat", desc: "A meditative water ritual at a sacred site with a refreshing treat." },
    "5": { image: `${prefix}images/pictures/sound.jpg`, title: "Nature Sound Bathing and Meditation", desc: "Immerse in natural ambient sounds for deep inner calm." },
    "6": { image: `${prefix}images/pictures/bonfire.jpg`, title: "Bonfire Gathering and Pakikipagkapwa Circle", desc: "Evening bonding through storytelling, reflection, and warmth." },
    "7": { image: `${prefix}images/pictures/audiovisual.jpg`, title: "Audio-Visual Cultural Immersion with Herbal Tea or Coconut Charcoal Detox", desc: "A multimedia glimpse into local culture paired with detox drinks." },
    "9": { image: `${prefix}images/pictures/farm.jpg`, title: "Immersive Organic Farm to Table Day Tour Activity with Lunch", desc: "Harvest, prepare, and enjoy a fresh organic meal on-site." },
    "12": { image: `${prefix}images/pictures/kawa.jpeg`, title: "Kawa Bath", desc: "A hot herbal bath experience in a giant cauldron with a view." },
    "14": { image: `${prefix}images/pictures/mountbanahaw.jpg`, title: "Orientation & Intention Setting Circle Under Trees at Mt. Banahaw", desc: "Begin the journey with shared intentions and grounding under trees." },
    "16": { image: `${prefix}images/pictures/treeplant.jpg`, title: "Tree Planting Activity", desc: "Give back to nature by planting native trees with guided care." },

};


    // Randomize and pick 3 unique keys
    function getRandomUniqueKeys(obj, count) {
        const keys = Object.keys(obj);
        const selected = new Set();

        while (selected.size < count && selected.size < keys.length) {
            const randKey = keys[Math.floor(Math.random() * keys.length)];
            selected.add(randKey);
        }

        return [...selected];
    }

    const selectedKeys = getRandomUniqueKeys(expRandomizerMap, 3); //ADD HERE

    function randomizeImages() {
            
            selectedKeys.forEach(key => {
            const entry = expRandomizerMap[key];

            // Normalize entry if it's a string (image only)
            const data = typeof entry === "string"
                ? { image: entry, title: "Untitled", desc: "No description available." }
                : entry;

            const container = document.getElementById('activitySlider');
            const item = document.createElement('div');
            item.id = "activityItem";
            item.innerHTML = `
                    <img class="activity-img" id="activityImg" src="${data.image}" alt="${data.title}">
                    <div class="activity-item-wrapper" id="activityItemWrapper">
                        <h4 class="activity-title" id="activityTitle">${data.title}</h4>
                        <p class="activity-desc" id="activityDesc">${data.desc}</p>
                    </div>

            `;
            
            container.appendChild(item);
        });
    }
    randomizeImages();



    const randomizeTrigger = document.getElementById('activitySlider');

    randomizeTrigger.addEventListener('click', () => {
        const container = document.getElementById('activitySlider');
        container.innerHTML = ''; // Clear previous content
        const newKeys = getRandomUniqueKeys(expRandomizerMap, 3);
        
        // Render new set
        newKeys.forEach(key => {
            const entry = expRandomizerMap[key];
            const data = typeof entry === "string"
                ? { image: entry, title: "Untitled", desc: "No description available." }
                : entry;

            const item = document.createElement('div');
            item.id = "activityItem";
            item.innerHTML = `
                <img class="activity-img" id="activityImg" src="${data.image}" alt="${data.title}">
                <div class="activity-item-wrapper" id="activityItemWrapper">
                    <h4 class="activity-title" id="activityTitle">${data.title}</h4>
                    <p class="activity-desc" id="activityDesc">${data.desc}</p>
                </div>
            `;
            container.appendChild(item);
        });
    });
});
