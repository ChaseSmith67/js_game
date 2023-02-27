
var Player = function(settings) {

    // Settings
    var playerElement = null;

    // Prevent player from leaving game window
    function wall() {

        var playerRect = playerElement.getBoundingClientRect();     // Get active style vals of player
        var w = parseInt(window.innerWidth);
        var h = parseInt(window.innerHeight);

        if (playerRect.bottom > h) {
            playerElement.style.top = (h - playerRect.height) + "px";
        }

        if (playerRect.top < 0) {
            playerElement.style.top = '0px';
        }

        if (playerRect.left < 0) {
            playerElement.style.left = '0px';
        }

        if (playerRect.right > w) {
            playerElement.style.left = (w - playerRect.width) + 'px';
        }
    }

    // Move player using arrow keys
    function move(interactions) {

        if (interactions.up) {
            playerElement.style.top = parseInt(playerElement.style.top) - 8 + "px";
            console.log("UP");
        }

        if (interactions.down) {
            playerElement.style.top = parseInt(playerElement.style.top) + 8 + "px";
        }

        if (interactions.left) {
            playerElement.style.left = parseInt(playerElement.style.left) - 8 + "px";
        }

        if (interactions.right) {
            playerElement.style.left = parseInt(playerElement.style.left) + 8 + "px";
        }

        if (settings.walls) {           // Bound player in window, if walls on
            wall();
        }
    }

    // Create object asset
    function create() {

        // In-line styling is used to override initial style and move player
        playerElement = document.getElementById('player');
        playerElement.style.top = '400px';
        playerElement.style.left = '400px';
        playerElement.style.height = '100px';

    }

    // Initialize game settings
    function init() {
        create();
        // ADD OTHER FUNCTIONS TO INITIALIZE
    
    }

    // Render function needs to be accessed outside of Player object - hence, this.render() - so that
    // when assets[i].render is called, it will render move() function which belongs to Player object
    this.render = function(interactions) {
        move(interactions);
    }

    init();     // Initialize
    
}