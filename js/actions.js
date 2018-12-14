var search= document.getElementById("data-buton")
var data=document.getElementById("data-lab")
var salvar= document.getElementById("salvar-mud")

search.onclick= function(event){
	event.preventDefault()
	alert(data.value)
}

// salvar.onclick=function(event){
// 	event.preventDefault()
// 	alert("Horário marcado")
// }

// declaro objeto que vou enviar
var agendamento = {
	dia: null,
	horaInicio: null,
	horaFim: null,
	nome: null,
	curso: null,
	qualUso: null,
	laboratorio: null
}

// atribuir valores ao objeto
// ...
agendamento.dia= document.getElementById("data")
agendamento.horaInicio= document.getElementById("horarioInicio")
agendamento.horaFim= document.getElementById("horarioFim")
agendamento.nome= document.getElementById("nome")
agendamento.curso= document.getElementById("curso")
agendamento.qualUso= document.getElementById("usoLab")
agendamento.laboratorio= document.getElementById("labNum")
// construir a chamada

salvar.onclick = function (event) {
	event.preventDefault()
	axios.post('http://localhost:8080/read', agendamento)
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	})
}

 var url = 'http://localhost/read/' + data.value
 axios.get(url)

search.onclick = function (event){
	event.preventDefault()
	axios.get(url)
	.then( function (response) {
		console.log(response)
})
}


