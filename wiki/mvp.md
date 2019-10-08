# Functionality and MVP
## 1. A 4x4 Grid (1 day(s))
- A styled 4x4 grid is appearent on the screen
- Above the grid, there is:
    - A title
    - A current score display
    - And a high score display
        - These will contain dummy values at this point
    - A 'new game' button
- Below the grid, there are:
    - instructions on how to play
    - General information about the game and the original reason to why it was created
        - There should be a link to the original game, and credit to its founder
    - Link to github and LinkedIn

## 2. A square moving in the grid (0.5 day(s))
- The square should be able to move in the grid and stop at the walls
- Limit the movements to left, right, up, and down

## 3. Display more than once square (0.5 day(s))
- Clicking on one arrow moves all the squares at once in the arrow key direction

## 4. Auto-populating (0.5 days(s))
- An arrow key event causes an addition of a square at a random position (that doesn't have another square)

## 5. Collusion of squares (1 day(s))
- Collusion of squares of same value should combbine them into one
- Collusion of squares of different values should NOT combine them

## 6. Game over (0.5 day(s))
- Once the 2048 square is reached, indicate that the player had won the game
---
### Days total count: 4
---
# Workflow projection
### Day 1 (10/01/2019)
- Grid
### Day 2 (10/02/2019)
- Square moving in grid
- More than one square moving in same direction
### Day 3 (10/03/2019)
- Auto population of squares
- Start on square collusion logic
## Day 4 (10/04/2019)
- Finish square collusion logic
- Winning indication