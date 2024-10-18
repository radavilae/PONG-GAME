// const titleText = document.getElementById("name-game");
// const startScreen = document.getElementById("start-screen");
// const musicPlay = document.getElementById("background-music");
// const SecondScreen = document.querySelector("#gameContainer");
// const gameBoard = document.querySelector("#gameBoard"); //tablero de juego
// const ctx = gameBoard.getContext("2d"); //lo que se dibuje an el pizarra
// const scoreText = document.querySelector("#scoreText"); // que es el texto
// const resetBtn = document.querySelector("#resetBtn"); //boton de reset
// const timerElement = document.getElementById("timer");
// const resultElement = document.getElementById("result");

// const gameWidth = gameBoard.width; //ancho del juego
// const gameHeight = gameBoard.height; //alto del juego

// //background del fondo
// const diagramBackground = new Image();
// diagramBackground.src = "m-board.jpg";
// // diagramBackground.onload = () => {
// //   gameStart();
// // }; //iniciar el juego despues de cargar la imagen
// let paddle1Score = 0;
// let paddle2Score = 0;

// // Puntajes de los jugadores

// const paddle1Color = "black"; //paddle 1
// const paddle2Color = "black"; //paddle 2
// const paddleBorder = "black";
// const ballColor = "black";
// const ballBorderColor = "white";
// const ballRadius = 12.5;
// const paddleSpeed = 20;

// let intervalID;
// let gameRunning = true; //controla si el juego está corriendo
// let clockInterval; //variable reloj

// let ballSpeed = 20; //velocidad de la pelota
// let ballX = gameWidth / 2; //pone la pelota en el centro del tablero
// let ballY = gameHeight / 2; //direccion en la que se dirige la bola
// let ballXDirection = 0;
// let ballYDirection = 0;

// let player1Score = 0;
// let player2Score = 0;

// let minutes = 1; // Temporizador de 1 min.
// let seconds = 0;

// let paddle1 = {
//   width: 25,
//   height: 100,
//   x: 0,
//   y: 0,
// };

// let paddle2 = {
//   width: 25,
//   height: 100,
//   x: gameWidth - 25,
//   y: gameHeight - 100,
// };

// //evento de teclas Y BOTONES
// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);
// document.addEventListener("DOMContentLoaded", music);
// document.addEventListener("click", startBtn);

// window.addEventListener("keydown", handleEnterKey);

// function handleEnterKey(event) {
//   if (event.key === "Enter") {
//     startBallMovement();
//   }
// }

// // función que inicia el movimiento de la pelota
// function startBallMovement() {
//   if (ballSpeed === 0) {
//     ballSpeed = 0;

//     ballXDirection = Math.random() > 0.5 ? 1 : -1;
//     ballYDirection = Math.random() > 0.5 ? 1 : -1;
//   }
// }

// let diagramImageX = gameWidth;
// let diagramImageY = gameHeight;

// gameStart();

// //Ffunción inicio del juego

// function gameStart() {
//   createBall();
//   nextTick();
//   startTimer(); // iniciar el temporizador al incio del juego
// }

// // Función principal del temporizador
// function startTimer() {
//   clockInterval = setInterval(() => {
//     if (seconds === 0) {
//       if (minutes === 0) {
//         clearInterval(clockInterval);
//         gameRunning = false; // Detenemos el juego
//         showResult();
//         stopGame(); // Detenemos el ciclo del juego
//         return;
//       } else {
//         minutes--;
//         seconds = 59;
//       }
//     } else {
//       seconds--;
//     }
//     updateTimer();
//   }, 1000);
// }

// // Actualiza el temporizador en la página
// function updateTimer() {
//   let minutesStr = minutes < 10 ? "0" + minutes : minutes;
//   let secondsStr = seconds < 10 ? "0" + seconds : seconds;
//   timerElement.textContent = ${minutesStr}:${secondsStr};
// }

// function startBtn() {
//   startScreen.style.display = "none";
//   SecondScreen.style.display = "block";
// }

// //funcion board diagram
// function clearAndDrawBackground() {
//   // ctx.drawImage(diagramBackground, 0, 0, diagramImageX, diagramImageY);
//   // Dibujar la línea punteada en el centro
//   ctx.beginPath();
//   ctx.setLineDash([10, 15]); // Crear una línea punteada (10 píxeles línea, 15 píxeles espacio)
//   ctx.moveTo(gameWidth / 2, 0); // Comenzar en la parte superior del centro
//   ctx.lineTo(gameWidth / 2, gameHeight); // Terminar en la parte inferior del centro
//   ctx.strokeStyle = "black"; // Color de la línea
//   ctx.lineWidth = 20; // Grosor de la línea
//   ctx.stroke(); // Dibujar la línea
//   ctx.setLineDash([]); // Restablecer para que las futuras líneas sean sólidas
// }

// //FUNCION DE MUSICA

// function music() {
//   musicPlay.play();
// }

// function pausedMusic() {
//   musicPlay.pause();
// }

// //console.log(music);
// //.........//

// function nextTick() {
//   if (!gameRunning) {
//     return; // Detenemos el ciclo si el juego ha terminado
//   }
//   intervalID = setTimeout(() => {
//     clearAndDrawBackground();
//     drawPaddles();
//     moveBall();
//     drawBall(ballX, ballY);
//     checkCollision();
//     nextTick();
//   }, 1000 / 60);
// }

// // Muestra el ganador cuando termina el tiempo
// function showResult() {
//   let win;
//   if (player1Score > player2Score) {
//     win = "Player 1 ✨ ☄️";
//   } else if (player2Score > player1Score) {
//     win = "Player 2 ✨☄️";
//   } else {
//     win = "Match 💥";
//   }
//   resultElement.textContent = GAME OVER - Win: ${win} | Final Score: Player1: ${player1Score}- Player2:${player2Score};
// }

// // Otras funciones relacionadas al movimiento de la pelota, colisiones, etc.

// //Dibujar Paddles

// function drawPaddles() {
//   ctx.strokeStyle = paddleBorder;
//   ctx.fillStyle = paddle1Color;
//   ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
//   ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

//   ctx.fillStyle = paddle2Color;
//   ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
//   ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
// }

// // Create Balls

// function createBall() {
//   ballSpeed = 0;

//   if (Math.round(Math.random()) == 1) {
//     ballXDirection = 1;
//   } else {
//     ballXDirection = -1;
//   }

//   if (Math.round(Math.random()) == 1) {
//     ballYDirection = 1;
//   } else {
//     ballYDirection = -1;
//   }
//   ballX = gameWidth / 2;
//   ballY = gameHeight / 2;
//   drawBall(ballX, ballY);
// }
// function moveBall() {
//   if (ballSpeed > 0) {
//     ballX += ballSpeed * ballXDirection;
//     ballY += ballSpeed * ballYDirection;
//   }
// }
// function drawBall(x, y) {
//   ctx.fillStyle = ballColor;
//   ctx.strokeStyle = ballBorderColor;
//   ctx.lineWidth = 2;
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
//   ctx.stroke();
//   ctx.fill();
// }

// //Colisiones

// function checkCollision() {
//   if (ballY <= 0 + ballRadius) {
//     ballYDirection *= -1;
//   }
//   if (ballY >= gameHeight - ballRadius) {
//     ballYDirection *= -1;
//   }
//   if (ballX <= 0) {
//     player2Score += 1;
//     updateScore();
//     createBall();
//     return;
//   }
//   if (ballX >= gameWidth) {
//     player1Score += 1;
//     updateScore();
//     createBall();
//     return;
//   }
//   if (ballX <= paddle1.x + paddle1.width + ballRadius) {
//     if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
//       ballX = paddle1.x + paddle1.width + ballRadius; // if ball gets stuck
//       ballXDirection *= -1;
//       ballSpeed += 1;
//     }
//   }

//   if (ballX >= paddle2.x - ballRadius) {
//     if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
//       ballX = paddle2.x - ballRadius; // if ball gets stuck
//       ballXDirection *= -1;
//       ballSpeed += 1;
//     }
//   }
// }

// //Direcciones de los paddles

// //funcion que inicia rl movimiento de la pelota

// function changeDirection(event) {
//   const keyPressed = event.key; // Modifique en KeyCode
//   //console.log(keyPressed);
//   const paddle1Up = 69; //e
//   const paddle1Down = 83; //s
//   const paddle2Up = 80; //p
//   const paddle2Down = 76; //l;

//   switch (keyPressed) {
//     /// key E (89)

//     case paddle1Up:
//       if (paddle1.y > 0) {
//         paddle1.y -= paddleSpeed;
//       }

//       break;

//     //Key S (63)

//     case paddle1Down:
//       if (paddle1.y < gameHeight - paddle1.height) {
//         paddle1.y += paddleSpeed;
//       }

//       break;

//     //Key P (80)

//     case paddle2Up:
//       if (paddle2.y > 0) {
//         paddle2.y -= paddleSpeed;
//       }

//       break;

//     //Key L (75)

//     case paddle2Down:
//       if (paddle2.y < gameHeight - paddle2.height) {
//         paddle2.y += paddleSpeed;
//       }

//       break;
//   }

//   console.log(keyPressed);
// }

// function updateScore() {
//   scoreText.textContent = ${player1Score}:${player2Score};
// }

// //Reiniciar el Juego

// function resetGame() {
//   player1Score = 0;
//   player2Score = 0;

//   paddle1 = {
//     width: 25,
//     height: 100,
//     x: 0,
//     y: 0,
//   };

//   paddle2 = {
//     width: 25,
//     height: 100,
//     x: gameWidth - 25,
//     y: gameHeight - 100,
//   };

//   //reiniciar posición de la pelota
//   ballSpeed = 1;
//   ballX = gameWidth / 2;
//   ballY = gameHeight / 2;
//   ballXDirection = 0;
//   ballYDirection = 0;

//   //actualizar el puntaje de la pantalla

//   updateScore();

//   //limpiar el texto del resultado (ganador)
//   resultElement.textContent = ""; // aqui limpia el texto del ganador

//   //detener el ciclo del juego
//   clearTimeout(intervalID);
//   clearInterval(clockInterval);

//   // reiniciar el temporizador en 1 min

//   minutes = 1;
//   seconds = 0;
//   updateTimer();

//   //Reiniciar el temporizador
//   startTimer();

//   //reiniciar el ciclo del juego
//   gameRunning = true;
//   gameStart();
// }

// //reiniciar texto

// // Detener el ciclo del juego
// function stopGame() {
//   clearTimeout(intervalID);
//   gameRunning = false; // Detenemos el ciclo de movimiento de la pelota
// }

// ///MUSICA DE INICIO

// //IMAGEN DE FONDO

// // const backBoard = document.querySelector(".diagram"); // Selecciona el elemento
// // gameBoard.style.backgroundImage = backBoard; // Asigna la imagen como fondo
// // gameBoard.style.backgroundSize = "cover"; // Asegura que la imagen cubra todo
// // gameBoard.style.backgroundPosition = "center"; // Centra la imagen
// // gameBoard.style.backgroundRepeat = "repeat"; // Evita la repetición

// //

// // Inicia el temporizador cuando carga la página
// window.onload = startTimer;
