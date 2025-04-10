
    ExiubirMsg("Oi Fiel! Bom dia!")
    ExiubirMsg("Vai Corinthians")

    //Função basica
    function Soma (n1, n2) {
        return n1+ n2  
    }

    console.log(Soma(2, 6))

    //Arrow Function ou Função anônima 

    const Potencia = (n,p) => {
        return Math.pow(n, p)
    }

    //media >= 6,00 = Aprovado
    //media <6,00 || >= 4,00 = Recuperação
    // //media < 4,00 = Reprovado

    const Media = (nota1, nota2) => {
        let NotaFinal = (nota1 + nota2)/2
    
        if (NOtaFinal < 4.00) {
            return "Reprovado"
        }

        if (NOtaFinal >= 6.00) {
            return "Aprovado"
        }
    
         return "Recuperação"
    }



