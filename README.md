# Squash Game PvP 🏓

A multiplayer squash game built with HTML5 Canvas and JavaScript. Two players can compete head-to-head in this fast-paced squash simulation.

## 🎮 Live Demo

**[Play Now on GitHub Pages](https://yanchen184.github.io/squash-game-pvp/)**

Current Version: **v1.0.0**

## 🎯 Features

- **Dual Player Control**: Two players can play simultaneously
- **Realistic Physics**: Ball bouncing, acceleration, and collision detection
- **Dynamic Gameplay**: Ball speed increases with paddle hits
- **Visual Effects**: Ball trails, paddle glow effects, and court graphics
- **Score Tracking**: First to 11 points wins
- **Responsive Design**: Works on different screen sizes

## 🕹️ Controls

### Player 1 (Left Side - Red Paddle)
- **W**: Move paddle up
- **S**: Move paddle down

### Player 2 (Right Side - Teal Paddle)
- **↑ (Up Arrow)**: Move paddle up
- **↓ (Down Arrow)**: Move paddle down

### Game Controls
- **SPACE**: Start game / Pause / Resume
- **R**: Reset game

## 🚀 How to Play

1. Press **SPACE** to start the game
2. Use your respective controls to move your paddle
3. Hit the ball to keep it in play
4. Score points when the ball hits the opposite wall
5. First player to reach 11 points wins!

## 🛠️ Technical Implementation

### Game Architecture
- **Physics Engine**: Custom physics system for ball movement and collisions
- **Collision Detection**: Precise paddle and wall collision handling
- **Game Loop**: Smooth 60 FPS game loop with delta time
- **Modular Design**: Separated into logical components

### File Structure
```
squash-game-pvp/
├── index.html          # Main game page
├── css/
│   └── style.css       # Game styling
├── js/
│   ├── game.js         # Main game logic
│   ├── ball.js         # Ball physics and rendering
│   ├── player.js       # Player paddle control
│   ├── physics.js      # Physics engine
│   ├── collision.js    # Collision detection system
│   └── ui.js          # User interface management
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

### Key Classes
- **SquashGame**: Main game controller
- **Ball**: Ball physics and trail effects
- **Player**: Paddle control and rendering
- **Physics**: Movement and collision calculations
- **CollisionSystem**: Collision detection and response
- **UI**: Score display and status management

## 🎨 Visual Features

- **Ball Trail Effects**: Visual trail following the ball
- **Paddle Glow**: Paddles glow when moving
- **Court Graphics**: Professional squash court design
- **Smooth Animations**: 60 FPS gameplay
- **Responsive UI**: Clean score display and status updates

## 🏆 Game Rules

- Standard squash scoring system
- First to 11 points wins
- Ball speeds up with each paddle hit
- Ball resets after each point
- Game can be paused and resumed anytime

## 🚀 Development

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. Start playing immediately!

### Deployment
The game is automatically deployed to GitHub Pages through GitHub Actions when code is pushed to the main branch.

## 🔧 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 Version History

### v1.0.0 (Current)
- Initial release
- Complete multiplayer squash game
- All core features implemented
- GitHub Pages deployment

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License

MIT License - feel free to use this code for your own projects!

---

**Enjoy the game! 🏓**