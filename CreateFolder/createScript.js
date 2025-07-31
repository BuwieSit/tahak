const activityListItems = document.querySelectorAll('.activity-list li');
const createTour = document.querySelector('.create-tour');
const MAX_ACTIVITIES = 10;

// Popup function (bottom center)
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 3000);
}

// Add activity to create-tour
function addActivity(activityText) {
    const currentActivities = createTour.querySelectorAll('.dropped-activity').length;
    if (currentActivities >= MAX_ACTIVITIES) {
        showPopup("You can only add up to " + MAX_ACTIVITIES + " activities.");
        return;
    }

    const existing = Array.from(createTour.querySelectorAll('.dropped-activity')).some(item => item.textContent === activityText);
    if (existing) {
        showPopup("This activity has already been added.");
        return;
    }

    const newItem = document.createElement('div');
    newItem.textContent = activityText;
    newItem.className = 'dropped-activity';
    newItem.style.padding = '5px';
    newItem.style.borderBottom = '1px solid #ccc';
    newItem.style.cursor = 'default';

    createTour.appendChild(newItem);

    activityListItems.forEach(item => {
        if (item.textContent === activityText) {
            item.classList.add('already-added');
        }
    });

    showPopup(`Added: ${activityText}`);
}

// Remove activity from create-tour
function removeActivity(activityText) {
    const items = Array.from(createTour.querySelectorAll('.dropped-activity'));
    const toRemove = items.find(item => item.textContent === activityText);
    if (toRemove) {
        toRemove.remove();
    }

    activityListItems.forEach(item => {
        if (item.textContent === activityText) {
            item.classList.remove('already-added');
        }
    });

    showPopup(`Removed: ${activityText}`);
}

// Drag logic
activityListItems.forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.textContent);
        e.dataTransfer.effectAllowed = 'move';
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });

    // Click to add or remove
    item.addEventListener('click', () => {
        const activityText = item.textContent;
        if (item.classList.contains('already-added')) {
            removeActivity(activityText);
        } else {
            addActivity(activityText);
        }
    });
});

// Drop handler
createTour.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
});

createTour.addEventListener('drop', (e) => {
    e.preventDefault();
    const activityText = e.dataTransfer.getData('text/plain');
    addActivity(activityText);
});
