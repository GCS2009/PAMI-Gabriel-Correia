const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre', 'Curitiba'];

// Função que lista as cidades
function listCidades(cidades: string[]): void {
    cidades.forEach(cidade => console.log(cidade));
}

listCidades(cidades);
