function verificar(){

const signoLabel = document.getElementById('mostrarSigno')
const imagemSigno = document.getElementById('imagemSigno')
const contentInfo = document.getElementById('infosSigno')
const boxSigno = document.getElementById('boxSigno')
const error = document.getElementById('error')
var dia = document.getElementById('inputDia').value
var mes = document.getElementById('inputMes').value

    if((mes == "março" && dia >= 21) || (mes == "abril" && dia <= 20) ){ // Aries
        signoLabel.innerHTML = 'Áries'
        imagemSigno.src = "imgs/aries.png"
        contentInfo.innerHTML = "Áries é um signo regido pelo Fogo que queima e se alastra rapidamente para todos os lugares. Ele chega longe sozinho. Mas, seu oposto complementar, que é de um signo de Ar, diz que se houver planejamento e trabalho mental antes de se alastrar, é possível chegar ainda mais longe."
        error.style.opacity='0%'
        boxSigno.style.display='flex'

    }
    else if((mes == "abril" && dia >= 21) || (mes == "maio" && dia <= 20)){ // Touro
        signoLabel.innerHTML = 'Touro'
        imagemSigno.src = "imgs/touro.png"
        contentInfo.innerHTML = "São conhecidas por serem pragmáticas, produtivas, práticas, determinadas, perseverantes e sensuais. Além disso, fazem da realidade seu mundo, gostam de segurança, estabilidade e amam cuidar das suas coisas."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "maio" && dia >= 21) || (mes == "junho" && dia <= 20)){ // Gemeos
        signoLabel.innerHTML = 'Gêmeos'
        imagemSigno.src = "imgs/gemeos.png"
        contentInfo.innerHTML = "De personalidade ágil e versátil, quem é de Gêmeos tem a curiosidade como seu combustível. São pessoas que buscam por coisas que lhe satisfazem e não se sentem obrigados a terminar algo que não os preenche mais. Permanecer em compromissos a longo prazo pode ser muito desmotivador para eles."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "junho" && dia >= 21) || (mes == "julho" && dia <= 22)){ // Cancer
        signoLabel.innerHTML = 'Câncer'
        imagemSigno.src = "imgs/cancer.png"
        contentInfo.innerHTML = "Os cancerianos são extremamente sensíveis e empáticos, muitas vezes capazes de sentir as emoções dos outros como se fossem suas. Essa sensibilidade pode ser uma faca de dois gumes; por um lado, ela permite uma compreensão profunda dos outros, mas por outro, pode levar a uma vulnerabilidade emocional."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "julho" && dia >= 23) || (mes == "agosto" && dia <= 22)){ // Leao
        signoLabel.innerHTML = 'Leão'
        imagemSigno.src = "imgs/leao.png"
        contentInfo.innerHTML = "Os leoninos são conhecidos por seu carisma magnético e uma vontade indomável de se destacarem. Sob a regência do Sol, eles irradiam confiança e calor, sempre prontos para assumir o centro do palco e encantar a todos com sua presença vibrante."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "agosto" && dia >= 23) || (mes == "setembro" && dia <= 22)){ //Virgem
        signoLabel.innerHTML = 'Virgem'
        imagemSigno.src = "imgs/virgem.png"
        contentInfo.innerHTML = "O signo de Virgem é o sexto da roda astrológica, regente da Casa Seis e regido pelo planeta Mercúrio. De elemento Terra e modalidade Fixa, os virginianos são práticos, perfeccionistas e solícitos, sempre esforçados e determinados a conquistarem suas metas."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "setembro" && dia >= 23) || (mes == "outubro" && dia <= 22)){ //Libra
        signoLabel.innerHTML = 'Libra'
        imagemSigno.src = "imgs/libra.png"
        contentInfo.innerHTML = "são seres naturalmente sociáveis, adoram estar rodeados de pessoas e se sentem à vontade em ambientes sociais. Seu charme natural atrai os outros e torna-os agradáveis e desejáveis em qualquer grupo. Justiça e equilíbrio: um dos maiores atributos do libriano é sua necessidade por justiça."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "outubro" && dia >= 23) || (mes == "novembro" && dia <= 21)){ //Escorpião
        signoLabel.innerHTML = 'Escorpião'
        imagemSigno.src = "imgs/escorpiao.png"
        contentInfo.innerHTML = "são estrategistas naturais, capazes de manobrar situações complexas com astúcia e inteligência. O signo de Escorpião é sinônimo de intensidade e profundidade emocional. Conhecido por sua natureza determinada e enigmática, quem é de Escorpião vive com paixão e busca significado em tudo o que faz."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "novembro" && dia >= 22) || (mes == "dezembro" && dia <= 21)){ //Sagitário
        signoLabel.innerHTML = 'Sagitário'
        imagemSigno.src = "imgs/sagitario.png"
        contentInfo.innerHTML = "Dono de uma autoconfiança e uma leveza com a vida. O Sagitário signo é visto como o mais otimista entre os demais, e são parte do elemento de fogo e regidos por Júpiter, por isso, aventura está em seu DNA."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "dezembro" && dia >= 22) || (mes == "janeiro" && dia <= 20)){ //Capricornio
        signoLabel.innerHTML = 'Capricórnio'
        imagemSigno.src = "imgs/capricornio.png"
        contentInfo.innerHTML = "O capricorniano costuma ser sério, conservador e maduro. Gosta de transmitir segurança para quem está com ele e, em muitos momentos, pode parecer um tanto arrogante e prepotente com o seu ar de quem sabe exatamente o que faz"
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "janeiro" && dia >= 21) || (mes == "fevereiro" && dia <= 18)){ //Aquario
        signoLabel.innerHTML = 'Aquário'
        imagemSigno.src = "imgs/aquario.png"
        contentInfo.innerHTML = "Aquarianos possuem um coração voltado para a humanidade e uma profunda paixão por causas sociais. Seu compromisso com a justiça e a igualdade muitas vezes os leva a se envolverem em atividades e projetos que buscam melhorar a sociedade."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }
    else if((mes == "fevereiro" && dia >= 19) || (mes == "março" && dia <= 20)){ //Peixes
        signoLabel.innerHTML = 'Peixes'
        imagemSigno.src = "imgs/peixes.png"
        contentInfo.innerHTML = "As pessoas do signo de Peixes são reconhecidas por sua empatia, generosidade e conexão com o mundo espiritual. Com uma imaginação fértil e uma intuição aguçada, os piscianos têm facilidade para se adaptar a diferentes situações, mas também podem ser influenciados pelo ambiente e pelas emoções dos outros."
        error.style.opacity='0%'
        boxSigno.style.display='flex'
    }else{
        error.style.opacity='100%'
        boxSigno.style.display='none'
    }
    

}


   
