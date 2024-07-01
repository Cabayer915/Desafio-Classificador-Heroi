let nome = 'Capitão Pátria';
let qtdXP = 7500;
let nivel = ' ';

if (qtdXP < 1000) {
    nivel = 'Ferro'
    console.log("Você é ferro!")
} else if (qtdXP <= 2000) {
    nivel = 'Bronze'
    console.log("Você é bronze!")
} else if (qtdXP <= 5000) {
    nivel = 'Prata'
    console.log("Você é prata!")
} else if (qtdXP <= 7000) {
    nivel = 'Ouro'
    console.log("Você é ouro!")
} else if (qtdXP <= 8000) {
    nivel = 'Platina'
    console.log("Você é platina!")
} else if (qtdXP <= 9000) {
    nivel = 'Ascendente'
    console.log("Você é ascendente!")
} else if (qtdXP <= 10000) {
    nivel = 'Imortal'
    console.log("Você é imortal!")
} else if (qtdXP >= 10001) {
    nivel = 'Radiante'
    console.log("Você é radiante!")
} else {
    console.log("Número de XP é inválido... Seu herói não pode lutar!")
}

console.log(`O herói de nome ${nome} está no nível de ${nivel}`)