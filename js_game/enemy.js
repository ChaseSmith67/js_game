const Enemy = function(settings) {

    // Settings
    let enemyElement = null;

    // Keep enemy in window
    function wall() {

        const enemyRect = enemyElement.getBoundingClientRect()  // Get style values for enemy
        const w = parseInt(window.innerWidth);
        const h = parseInt(window.innerHeight);

        if (enemyRect.bottom > h) {
            enemyElement.style.top = `${h -  enemyRect.height}px`;
        }

        if (enemyRect.top < 0) {
            enemyElement.style.top = '0px';
        }

        if (enemyRect.left < 0) {
            enemyElement.style.left = '0px';
        }

        if (enemyElement.left > w) {
            enemyElement.style.left = `${w - enemyRect.width}px`;
        }
    }

    // Move the enemy around manually
    function move(interactions) {
        // Make enemy move around window
        // SOME FUNCTION GOES HERE

        // Keep enemy in window
        if (settings.walls) {
            wall();
        }
    }

    // Create object asset
    function create(){
        enemyElement = document.createElement('div');
        enemyElement.setAttribute('class', 'enemy');
        enemyElement.style.top = '100px';
        enemyElement.style.left = '100px';
        enemyElement.style.height = '25px';
        enemyElement.style.width = '25px';
        enemyElement.style.borderRadius = '50%';
        enemyElement.style.background = 'blue';
        document.body.append(enemyElement);

    }

    function init() {
        create() // create object
        // SOME OTHER FUNCTIONS GO HERE
    }

    // Render function needs to be accessed outside of Player object - hence, this.render() - so that
    // when assets[i].render is called, it will render move() function which belongs to Player object
    this.render = function(interactions) {
        move(interactions);
    }

    init();     // Initialize
}