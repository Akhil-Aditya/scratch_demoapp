# scratch_demoapp
This project is a React-based interactive sprite animation application that allows users to drag and drop commands to control a sprite (a cat) and execute various actions. Below are the functionalities and steps to run the project.

Functionalities:
Sidebar Component:

Event Blocks: Contains actions that trigger events, such as "When clicked" and "When this sprite clicked".
Motion Blocks: Includes commands to control the sprite’s movement, such as "Move 10 steps", "Turn 15 degrees left", and "Turn 15 degrees right".
Looks Blocks: Consists of commands to control the sprite’s appearance, such as "Say Hello for 2 seconds", "Say Hello", "Think Hmm for 2 seconds", "Think Hmm", "Change size by", and "Set size to".
MidArea Component:

Drag and Drop: Users can drag commands from the Sidebar to the MidArea.
Command Execution: Clicking on commands in the MidArea will execute the associated action on the sprite.
Reuse Button: Each command in the MidArea has a "Reuse" button that allows users to execute the command multiple times.
Delete Button: Each command has a "Delete" button to remove it from the MidArea.
PreviewArea Component:

Sprite Display: Displays the sprite and animates it based on the commands executed.
Command Execution: Shows real-time animation changes as commands are executed.
Reset Button: Resets the sprite to its initial state.
Replay History Button: Replays all the commands executed in sequence.
App Component:

Command Handling: Manages command state and history.
History Replay: Replays the sequence of commands executed.
State Reset: Resets the sprite and clears command history.


Using the Application:

Drag Commands: Drag commands from the Sidebar and drop them into the MidArea.
Execute Commands: Click on the commands in the MidArea to see the sprite perform actions.
Reuse Commands: Use the "Reuse" button to execute commands multiple times.
Delete Commands: Use the "Delete" button to remove commands from the MidArea.
Replay History: Click the "Replay History" button to replay all executed commands.
Reset Sprite: Click the "Reset" button to reset the sprite to its initial state.


run project-
Run npm i to install dependencies
Run npm start and open http://localhost:3000 to see the app
