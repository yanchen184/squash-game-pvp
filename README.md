# Squash Game PvP 🎾

A multiplayer squash game built with HTML5 Canvas and JavaScript. Challenge your friend in this fast-paced, competitive squash match!

## 🎮 Play Online

**[Play the Game Here!](https://yanchen184.github.io/squash-game-pvp/)**

## ✨ Features

- **Two-Player Local Multiplayer**: Face off against a friend on the same keyboard
- **Realistic Physics**: Ball physics with velocity, bouncing, and collision detection
- **Smooth Controls**: Responsive paddle movement with visual feedback
- **Score Tracking**: First to 11 points wins
- **Visual Effects**: Ball trails, paddle glow effects, and court design
- **Game State Management**: Pause, resume, and restart functionality

## 🎯 How to Play

### Controls
- **Player 1**: 
  - `W` - Move paddle up
  - `S` - Move paddle down
- **Player 2**: 
  - `↑` (Up Arrow) - Move paddle up
  - `↓` (Down Arrow) - Move paddle down

### Game Controls
- `SPACEBAR` - Start game / Pause / Resume
- `R` - Reset game

### Rules
- First player to reach 11 points wins
- Ball bounces off top and bottom walls
- Ball resets after each point
- Paddle angle affects ball direction

## 🏗️ Technical Details

### Architecture
The game is built with a modular architecture:

- **`game.js`** - Main game loop and state management
- **`ball.js`** - Ball physics and rendering
- **`player.js`** - Player paddle control and rendering
- **`physics.js`** - Physics engine for movement and collisions
- **`collision.js`** - Collision detection and response system
- **`ui.js`** - User interface and court rendering

### Key Features
- **60 FPS Game Loop**: Smooth animation using `requestAnimationFrame`
- **Delta Time Calculation**: Frame-rate independent movement
- **Collision System**: Precise ball-paddle and ball-wall collision detection
- **Visual Effects**: Trail effects, glow effects, and court design
- **Responsive Design**: Adapts to different screen sizes

## 🚀 Development

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yanchen184/squash-game-pvp.git
   cd squash-game-pvp
   ```

2. Open `index.html` in your web browser or serve it with a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Navigate to `http://localhost:8000` to play the game

### File Structure
```
squash-game-pvp/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Game styling
├── js/
│   ├── game.js         # Main game logic
│   ├── ball.js         # Ball class
│   ├── player.js       # Player class
│   ├── physics.js      # Physics engine
│   ├── collision.js    # Collision system
│   └── ui.js          # UI management
└── README.md          # This file
```

## 🎨 Customization

You can easily customize the game by modifying:

- **Ball speed**: Adjust `speed` in `ball.js`
- **Paddle size**: Modify `width` and `height` in `player.js`
- **Winning score**: Change `winningScore` in `game.js`
- **Colors**: Update color values in CSS and JavaScript files
- **Physics**: Adjust friction, bounce decay, and other physics constants

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Single player mode with AI opponent
- [ ] Sound effects and background music
- [ ] Power-ups and special abilities
- [ ] Tournament mode
- [ ] Online multiplayer support
- [ ] Mobile touch controls
- [ ] Particle effects for scoring

---

**Version**: 1.0.0  
**Author**: yanchen184  
**Built with**: HTML5 Canvas, JavaScript, CSS3