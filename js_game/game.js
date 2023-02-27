var Game = function(){

    /* SETTINGS */
    // Game Settings
    var settings = {};                  // Stores game settings
    settings.playerSpeed = 8;           // Speed of player
    settings.walls = true;              // Bounds player within game screen
    settings.automatic = false;         // Move player automatically
    settings.godmode = false;           // Debug mode

    // World Settings
    var assets = [];                    // Stores game entities - players & enemies
    var player = new Player(settings);  // Create Player
    assets.push(player);                // Add player to game
    var frame = 0;                      // Total number of frames since start

    /* INTERACTIONS */
    // Interactions
    var interactions = {};              
    interactions.up = false;            // Up arrow key pressed
    interactions.down = false;          // Down arrow key pressed
    interactions.right = false;         // Right arrow key pressed
    interactions.left = false;          // Left arrow key pressed
    interactions.space = false;         // Space key pressed

    // Setup Event Listeners
    function setupEvents(){
        document.addEventListener('keyup', function(event){
            var keyName = event.key;

            switch(keyName) {
                case "ArrowRight":
                    interactions.right = false;
                    break;
                case "ArrowLeft":
                    interactions.left = false;
                    break;
                case "ArrowUp":
                    interactions.up = false;
                    break;
                case "ArrowDown":
                    interactions.down = false;
                    break;
                case "Space":
                    interactions.space = false;
                    break;
                default:
                    break;
            }
        });

        document.addEventListener('keydown', function(event){
            var keyName = event.key;

            switch(keyName) {
                case "ArrowRight":
                    interactions.right = true;
                    break;
                case "ArrowLeft":
                    interactions.left = true;
                    break;
                case "ArrowUp":
                    interactions.up = true;
                    break;
                case "ArrowDown":
                    interactions.down = true;
                    break;
                case "Space":
                    interactions.space = true;
                    break;
                default:
                    break;
            }
        });
    };

    
    // Startup the game
    function init(){
        setupEvents();
    }


    /* ANIMATION */

    // Render function - called for 60 frames per second
    this.render = function(){
        for (var i=0; i < assets.length; i++){
            assets[i].render(interactions);     // Render all game assets for each frame
        }
        frame++;
    }
    // Animate game by calling render function in browser window 60 times per second
    var self = this;
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame        ||
                window.webkitRequestAnimationFrame  ||
                window.mozRequestAnimationFrame     ||
                function(callback){
                    window.setTimeout(callback, 1000 / 60);     // 60 frames per sec
                };
    })();

    var request;
    var loop = function(){
        self.render();
        request = requestAnimFrame(loop);
        frame++;
    };

    loop();

    window.cancelAnimFrame = (function(){
        return  window.cancelAnimationFrame             ||
                window.mozCancelRequestAnimationFrame   ||
                window.oCancelRequestAnimationFrame     ||
                window.msCancelRequestAnimationFrame    ||
                clearTimeout
    })();

        init();         // Initialize game settings before game begins

} 

var g = new Game();     // Start game