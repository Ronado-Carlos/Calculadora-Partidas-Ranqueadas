function partidas(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function ranking(){
    let ResultadoRanking = partidas(101, 30)
    let nivel = ""
    if (ResultadoRanking <= 10){
        nivel = "FERRO"
    }else if (ResultadoRanking <= 20){
        nivel = "BRONZE"
    }else if (ResultadoRanking <= 50){
        nivel = "PRATA"
    }else if (ResultadoRanking <= 80){
        nivel = "OURO"
    }else if (ResultadoRanking <= 90){
        nivel = "DIAMANTE"
    }else if (ResultadoRanking <= 100){
        nivel = "LENDÁRIO"
    }else if (ResultadoRanking >= 101){
        nivel = "IMORTAL"
    }
    return `O Herói tem o saldo de ${ResultadoRanking} e está no nível de ${nivel}`
 }
    console.log(ranking())



















 