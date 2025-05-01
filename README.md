# 🌟 PassGen

PassGen é o seu gerador de senhas aleatórias, desenvolvido com TypeScript para praticar e melhorar habilidades de codificação! Com uma interface responsiva e uma transição suave entre modo claro e escuro, este projeto tem como objetivo tornar a criação de senhas seguras algo simples e divertido.

🔗 **Acesse o projeto**: [genpasst.netlify.app](https://genpasst.netlify.app)

---

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto é praticar TypeScript enquanto desenvolvo uma ferramenta útil e interativa. O PassGen permite aos usuários gerar senhas aleatórias e seguras, com uma interface que se adapta ao tema claro ou escuro. É uma excelente forma de explorar conceitos de tipagem forte, manipulação de arrays, alternância de temas e design responsivo.

---

## 🚀 Tecnologias

| Categoria            | Tecnologia           |
| -------------------- | -------------------- |
| Linguagens           | TypeScript, JavaScript |
| Estilização          | HTML, CSS            |
| Ferramenta de UI     | Responsiva, Transições |

---

## 🔧 Algoritmo Fisher-Yates

O PassGen utiliza o algoritmo Fisher-Yates para embaralhar letras, números e caracteres especiais, criando senhas aleatórias e seguras. Veja como ele funciona:

```ts
function randomizePass(letters: string[], special: string[], numbers: string[]): string {
    const randomSequence = [...letters, ...special, ...numbers];
    for (let i = randomSequence.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [randomSequence[i], randomSequence[randomIndex]] = [randomSequence[randomIndex], randomSequence[i]];
    }
    return randomSequence.join('');
}
