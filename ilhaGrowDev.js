/*
Contextualização do desafio:
As Ilhas Growdev formam um reino independente nos mares do Pacífico.
Como é um reino recente, a sociedade é muito influenciada pela informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00, GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na programação dos caixas automáticos de um grande banco das Ilhas Growdevs.
Tarefa:
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de notas disponíveis, mantendo um estoque de cédulas para cada valor. Os clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins desejado pelo cliente, determine o número de cada uma das notas necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00
Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1
GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2
*/

let valorInicial = Number(prompt("Digite o valor do saque"));
let valor = valorInicial
let nota50 = 0;
let nota10 = 0;
let nota5 = 0;
let nota1 = 0;

document.write(`Valor do saque GC$${valorInicial}<br>`)
document.write(`Notas:<br>`)

while(valor > 0) {
    if(valor >= 50) {
        valor -= 50;
        nota50++;
    } else if (valor >= 10) {
        valor -= 10;
        nota10++;
    } else if (valor >= 5) {
        valor -= 5;
        nota5++;        
    } else if (valor >= 1) {
        valor -= 1;
        nota1++;    
    }
}

nota50 != 0 ? document.write(`GC$ 50,00 -> ${nota50}<br>`) : ""
nota10 != 0 ? document.write(`GC$ 10,00 -> ${nota10}<br>`) : ""
nota5 != 0 ? document.write(`GC$ 5,00 -> ${nota5}<br>`) : ""
nota1 != 0 ? document.write(`GC$ 1,00 -> ${nota1}<br>`) : ""
