# Site de Formatura em Medicina

Um site comemorativo para acompanhar as datas importantes do processo de formatura em medicina, com contadores regressivos e elementos visuais relacionados à área médica.

## Características

- **Contadores regressivos** para 4 datas importantes:
  - Última aula (22/06/2025)
  - Registro CRM (07/07/2025)
  - Colação de grau (19/09/2025)
  - Festa de formatura (20/09/2025)

- **Design temático** com elementos relacionados à medicina
- **Animações** e efeitos visuais para uma experiência interativa
- **Layout responsivo** para funcionar em diferentes dispositivos
- **Esquema de cores** que utiliza o verde médico como destaque

## Como usar

1. Faça o download ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Observe os contadores regressivos funcionando para as datas importantes

## Personalização

Para alterar as datas dos contadores, edite o arquivo `script.js` e modifique o objeto `datas`:

```javascript
const datas = {
    'aula': new Date('2025-06-22T00:00:00'),
    'crm': new Date('2025-07-07T00:00:00'),
    'colacao': new Date('2025-09-19T00:00:00'),
    'festa': new Date('2025-09-20T00:00:00')
};
```

Para personalizar textos e elementos visuais, edite o arquivo `index.html`.

## Tecnologias utilizadas

- HTML5
- CSS3 (com animações e efeitos)
- JavaScript (para os contadores regressivos e interações)
- Font Awesome (para ícones relacionados à medicina)

## Licença

Este projeto está disponível para uso livre.

---

Desenvolvido com 💚 para comemorar a formatura em Medicina. 