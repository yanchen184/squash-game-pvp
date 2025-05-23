// Main game class that orchestrates all game components
class SquashGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        
        // Game state
        this.gameState = 'ready'; // 'ready', 'playing', 'paused', 'ended'
        this.winningScore = 11;
        this.lastTime = 0;
        this.deltaTime = 0;
        
        // Initialize game components
        this.physics = new Physics();
        this.collisionSystem = new CollisionSystem(this.physics);
        this.ui = new UI();
        
        // Initialize game objects
        this.ball = new Ball(this.canvasWidth / 2, this.canvasHeight / 2);
        this.player1 = new Player(30, this.canvasHeight / 2 - 40, 15, 80, 'left');
        this.player2 = new Player(this.canvasWidth - 45, this.canvasHeight / 2 - 40, 15, 80, 'right');
        
        // Input handling
        this.keys = new Set();
        this.setupEventListeners();
        
        // Start game loop
        this.gameLoop();
    }

    // Setup keyboard event listeners
    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            this.keys.add(e.code);
            
            // Handle game control keys
            if (e.code === 'Space') {
                e.preventDefault();
                this.handleSpaceKey();
            }
            if (e.code === 'KeyR') {
                this.resetGame();
            }
            
            // Handle player movement
            this.player1.handleKeyDown(e.code);
            this.player2.handleKeyDown(e.code);
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys.delete(e.code);
            
            // Handle player movement
            this.player1.handleKeyUp(e.code);
            this.player2.handleKeyUp(e.code);
        });
    }

    // Handle space key for game state control
    handleSpaceKey() {
        switch (this.gameState) {
            case 'ready':
                this.startGame();
                break;
            case 'playing':
                this.pauseGame();
                break;
            case 'paused':
                this.resumeGame();
                break;
            case 'ended':
                // Do nothing, require reset
                break;
        }
    }

    // Start the game
    startGame() {
        this.gameState = 'playing';
        this.ball.reset(this.canvasWidth, this.canvasHeight);
        this.ui.showPlaying();
    }

    // Pause the game
    pauseGame() {
        this.gameState = 'paused';
        this.ui.showPaused();
    }

    // Resume the game
    resumeGame() {
        this.gameState = 'playing';
        this.ui.showPlaying();
    }

    // Reset the game
    resetGame() {
        this.gameState = 'ready';
        this.player1.resetScore();
        this.player2.resetScore();
        this.ball.reset(this.canvasWidth, this.canvasHeight);
        this.ui.updateScore(0, 0);
        this.ui.showReady();
    }

    // Check for game end condition
    checkGameEnd() {
        if (this.player1.score >= this.winningScore) {
            this.gameState = 'ended';
            this.ui.showWinner('Player 1');
            return true;
        }
        if (this.player2.score >= this.winningScore) {
            this.gameState = 'ended';
            this.ui.showWinner('Player 2');
            return true;
        }
        return false;
    }

    // Update game logic
    update(deltaTime) {
        if (this.gameState !== 'playing') return;
        
        // Update players
        this.player1.update(this.canvasHeight, deltaTime);
        this.player2.update(this.canvasHeight, deltaTime);
        
        // Update ball physics
        this.physics.updatePosition(this.ball, deltaTime);
        this.physics.normalizeVelocity(this.ball);
        this.physics.maintainMinimumSpeed(this.ball);
        
        // Update ball trail
        this.ball.updateTrail();
        
        // Check collisions
        const collisions = this.collisionSystem.checkAllCollisions(
            this.ball, this.player1, this.player2, 
            this.canvasWidth, this.canvasHeight
        );
        
        // Handle scoring
        if (collisions.score) {
            if (collisions.score === 'left') {
                this.player1.addScore();
            } else if (collisions.score === 'right') {
                this.player2.addScore();
            }
            
            // Update UI
            this.ui.updateScore(this.player1.score, this.player2.score);
            
            // Check for game end
            if (!this.checkGameEnd()) {
                // Reset ball for next round
                setTimeout(() => {
                    if (this.gameState === 'playing') {
                        this.ball.reset(this.canvasWidth, this.canvasHeight);
                    }
                }, 1000);
            }
        }
    }

    // Render all game objects
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
        // Draw court
        this.ui.drawCourt(this.ctx, this.canvasWidth, this.canvasHeight);
        
        // Draw game objects
        this.player1.draw(this.ctx);
        this.player2.draw(this.ctx);
        this.ball.draw(this.ctx);
        
        // Draw court bounds last to ensure clean borders
        this.ui.drawCourtBounds(this.ctx, this.canvasWidth, this.canvasHeight);
    }

    // Main game loop
    gameLoop(currentTime = 0) {
        // Calculate delta time for smooth animation
        this.deltaTime = Math.min((currentTime - this.lastTime) / 16.67, 2); // Cap at 2 to prevent large jumps
        this.lastTime = currentTime;
        
        // Update and render
        this.update(this.deltaTime);
        this.render();
        
        // Continue game loop
        requestAnimationFrame((time) => this.gameLoop(time));
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new SquashGame();
});