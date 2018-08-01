function Charts(div){

    var grafico = $(div);
    
    var objeto = [
        {
            Descricao: "Futebol",
            Ocorrencias:10,
        },
        {
            Descricao: "Tenis",
            Ocorrencias:20,
        }
    ];

    var html = "";    
    
    var totalocorrencias = 0;
    
    for (i = 0; i < objeto.length; i++) {
        totalocorrencias += objeto[i].Ocorrencias;
    }
    
    var inicio = 0;

    if(objeto.length == objeto.filter(function(x){ return x.Ocorrencias == objeto[0].Ocorrencias }).length ){
        for (i = 0; i < objeto.length; i++) {
            var tamanho = totalocorrencias / (objeto[0].Ocorrencias * 360)
            html += '<div class="pie" data-start="'+ inicio +'" data-value="'+ tamanho +'"></div>';
        }        
        $(grafico).html(html);

        
    }
    

      
    
}