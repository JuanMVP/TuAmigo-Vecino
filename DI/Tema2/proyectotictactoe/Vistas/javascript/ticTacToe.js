$(document).ready(function () {

	$("#board, #scores").hide();


	/* VARIABLES */
	var humano;
	var maquina;
	var token = localStorage.getItem('token');

	var p1 = [1, '<i class="fas fa-cross"></i>', 0]; // [jugada,simbolo,pGanadas]
	var p2 = [2, '<i class="fas fa-skull"></i>', 0];
	var current;
	var primerTurno;

	var pGanadas = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 1, 2],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	var boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

	var ganador = false;

	var contadorTurno = 0;

	/*PARA EMPEZAR ELIGE X o O*/
	$('#chooseP > .btn').click(function () {
		if ($(this).attr('id') === "chooseP1") {
			humano = p1;
			maquina = p2;
			current = humano;
			primerTurno = 'humano';
		} else {
			humano = p2;
			maquina = p1;
			current = maquina;
			primerTurno = 'maquina';
			//PARA QUE LA MÁQUINA EMPIECE PRIMERO
			var x = setTimeout(turnoMaquina, 100);
		}
		$('#chooseP').hide();
		$("#board, #scores").show();
		iniciarCrono();
		clearInterval(cronometro);

	});

	/*CODE TO MAKE FREE TILES CHANGE MOUSE ON HOVER SO PLAYER CAN SEE IF AVAILABLE*/
	$("td").hover(function () {
		var pos = $(this).attr("id");
		//checks if square is empty using board array, if it is empty, changes mouse to crosshair when hovering
		if (boardArr[pos] == "#") {
			$(this).css("cursor", "crosshair");
		}
	});

	//CUANDO EL HUMANO TOCA UNA CASILLA VACIA

	$("td").click(function () {
		var tile = $(this).attr('id');
		if (boardArr[tile] === '#') {

			turnoHumano(tile);
		}
	})


	/*FUNCIONES POR TURNOS*/

	//LA MAQUINA COLOCA EN UNA CASILLA RANDOM.
	function pickEmpty() {
		var emptyArr = [];
		for (i = 0; i < boardArr.length; i++) {
			if (boardArr[i] === '#') {
				emptyArr.push(i);
			}
		}
		var x = Math.round(Math.random() * emptyArr.length);
		var choice = emptyArr[x];
		if (choice === undefined) {
			choice = emptyArr[x - 1];
		}
		return choice;
	};
	/********************************************************/

	/**************TURNO DE LA MÁQUINA****************************/
	function turnoMaquina() {
		let current = maquina;
		var tile = pickEmpty();
		$('#' + tile).html(maquina[1]);
		boardArr[tile] = maquina[1];
		checkWin(current);
		if (ganador === 1 || ganador === 2) {
			alert("HA GANADO LA MÁQUINA, ERES UN POCO MALO");
			winReset(maquina);
			clearInterval(cronometro);
			n=0;
		}
		else {
			contadorTurno++;
			checkDraw();
			if (contadorTurno === 0 && humano[0] === 2) {
				turnoMaquina();
			}

		}



	};

	/*********************TURNO HUMANO**************************/
	function turnoHumano(tile) {
		let current = humano;
		$('#' + tile).html(humano[1]);
		boardArr[tile] = humano[1];
		checkWin(current);

		if (ganador === 1 || ganador === 2) {
			alert("ENHORABUENA HAS GANADO");
			var reset = setTimeout(winReset(humano), 1000);
			clearInterval(cronometro);
			$.ajax({
				method: "POST",
				url: "http://www.miguelcamposrivera.com:3008/tictactoeapi/battle/create",
				dataType: "json",
				data: {
					win: ganador,
					time: n
				},
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', `Bearer ${token}`);
			   }
			});
			n=0;
		}
		else {
			contadorTurno++;
			checkDraw();
			if (contadorTurno !== 0) {
				var compGo = setTimeout(turnoMaquina, 800);
			} else if (contadorTurno === 0 && humano[0] === 2) {
				turnoMaquina();
			}

		}

	}


	/**********************COMPROBAR UNA VICTORIA*********************/
	function checkWin(curr) {
		var currentTiles = [];
		//compile array of all tiles taken by the current player
		for (i = 0; i < boardArr.length; i++) {
			if (boardArr[i] === curr[1]) {
				currentTiles.push(i);
			}
		}

		//Check the current tiles array agains each winning combo to find a match.
		for (x = 0; x < pGanadas.length; x++) {
			var count = 0;
			for (j = 0; j < pGanadas[x].length; j++) {
				if (currentTiles.indexOf(pGanadas[x][j]) != -1) {
					count++;
				}

				if (count == 3) {

					ganador = current[0];

				}
			}
		}
		
	}

	/**************ACTUALIZAR MARCADOR Y REINICIAR EL TABLERO********/
	function winReset(winner) {
		winner[2]++;
		$('#scores').html('<i class="fas fa-cross"></i>: ' + p1[2] + ' <i class="fas fa-skull"></i>: ' + p2[2]);
		contadorTurno = 0;
		$('td').html('');
		boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
		if (humano === p1) {
			current = humano;

		} else {

			let current = maquina;
			var tile = pickEmpty();
			$('#' + tile).html(maquina[1]);
			boardArr[tile] = maquina[1];
			contadorTurno++;

		}
		ganador = false;

		
	}

	/*******************COMPROBAR EMPATE*********************/
	function checkDraw() {
		if (contadorTurno > 8) {
			alert("Es un Empate");
			$('td').html('');
			boardArr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
			if (humano === p1) {
				current = humano;
			} else {
				current = maquina;
			}
			contadorTurno = 0;
			clearInterval(cronometro);
			n=0;
		}
	}


$("#btn-logout").click(function(e){

	localStorage.removeItem('token');
	localStorage.removeItem('email');
	location.replace("loginAndRegister.html");

})





});