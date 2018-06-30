
// $(document).ready(function(){
//     var audio = document.createElement('audio');
//     audio.setAttribute('src','res/mp3/eu-vou-cair.mp3');
//     tocarSom();

//     function tocarSom(){
//         $('#play').click(function() {
//             audio.play();
//         });
//     }
// });

var busca = ['Eu Vou Cair', 'Me Derrubaram Aqui', 'Abre Essa Merda', 'Biiiiirl', 'Para Com Essa Porra', 
            'Oh o Gas', 'Ta Uma Porra', 'Vem Monstro', 'Porra Jamelão', 'Eeeita Cuzaao', 'Taffarel Meme', 'Hoje nao, Hoje nao',
            'Olha o Pastel', 'Mais de 8000', 'No Ceu Tem Pao'];

$(document).ready(function(){

    $('#txtBuscaMemes').bind('input', function() { 
        filtraMemes($(this).val());
    });
    
})

function filtraMemes(filtro){

    if(filtro.trim() == ""){
        $(".cols").show();
    }else{
        for(var a in busca){
            var buscaAux = busca[a].toLowerCase().trim();
            var filtro = filtro.toLowerCase().trim();

            if(buscaAux.search(filtro) >= 0){
                $("#meme"+a).show();
            }else{
                $("#meme"+a).hide();
            }
        }
    }
    
}
