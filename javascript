const storyElement = document.getElementById('story');
const optionsElement = document.getElementById('options');

function displayStory(story) {
    storyElement.textContent = story;
}

function displayOptions(options) {
    optionsElement.innerHTML = '';
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1}. ${option}`;
        button.addEventListener('click', () => makeChoice(index + 1));
        optionsElement.appendChild(button);
    });
}

function makeChoice(choice) {
    // Implement the logic to handle the user's choice
    // Update the story and options accordingly
    // You can use AJAX/fetch to load story data dynamically from a server

    // For now, let's display a placeholder message
    displayStory("You made a choice!");
    displayOptions(["Continue the adventure", "Start over"]);
}

// Initial setup
displayStory("Welcome to the Adventure Game!");
displayOptions(["Begin"]);

