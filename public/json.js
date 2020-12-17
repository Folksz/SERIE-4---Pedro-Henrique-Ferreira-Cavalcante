$(document).ready(function() {
$("#mostrarDadosJson").click(function() {
        $.getJSON("jogopadrao.json", function(busca) {
			console.log(busca)
            $("#JSON_FILE").html(
			"Jogo -->" + busca.jogo + 
			"<br>Plataforma -->" + busca.plataforma + 
			"<br>Preco -->" + busca.preco 
			);
			
        });
    });
});