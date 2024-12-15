# Biblioteca de Jogos de Tabuleiro

## Objetivo
Aplicar conceitos de **Programação Orientada a Objetos (POO)**, como **herança**, **abstração**, **polimorfismo** e **associação entre classes**, em um sistema integrado a um front-end simples desenvolvido em **Angular**.

---

## Descrição
O sistema permite gerenciar uma biblioteca de jogos de tabuleiro. Ele é composto por uma estrutura de classes desenvolvidas em **TypeScript** e exibidas em uma interface criada com Angular.

---

## Requisitos

### 1. Classes e Programação Orientada a Objetos (POO)
- **Classe Abstrata `Jogo`:**
  - Atributos:
    - `titulo`
    - `anoPublicacao`
    - `fabricante`
  - Métodos:
    - `exibirRegras()`: Método abstrato para exibir informações específicas do jogo.
  
- **Subclasses de `Jogo`:**
  - **`JogoTabuleiro`:**
    - Atributo adicional: `numeroJogadores`.
    - Implementação de `exibirRegras()` com comportamento próprio.
  - **`JogoCarta`:**
    - Atributo adicional: `idadeMinima`.
    - Implementação de `exibirRegras()` com comportamento próprio.

- **Classe `Biblioteca`:**
  - Contém uma lista de jogos (`Jogo[]`).
  - Métodos para:
    - Adicionar um jogo.
    - Remover um jogo.
    - Listar todos os jogos.

---

### 2. Front-end em Angular
- **Página principal:**
  - Lista de jogos cadastrados.
  - Formulário para adicionar novos jogos.
  - Botões para:
    - Remover jogos.
    - Exibir detalhes de cada jogo.

---

## Critérios de Avaliação

### Organização do Código
- Implementação correta de **herança**, **abstração**, **polimorfismo** e **associação**.
- Código bem estruturado em arquivos separados.

### Funcionalidade
- Deve permitir adicionar, remover e listar jogos.
- O método `exibirRegras()` deve exibir informações específicas de cada tipo de jogo.

### Integração com Angular
- O front-end deve consumir as classes dinâmicas.
- Uso de componentes e serviços do Angular.

### Design e Usabilidade
- Interface simples e funcional.
- Diferenciais: uso de **Angular Material** ou **Bootstrap**.

---

## Entrega
- **Forma de entrega:**
  - Enviar o projeto compactado no formato `.zip` ou compartilhar via repositório no **GitHub**.
  - Todos os integrantes do grupo devem registrar a entrega no **Google Sala de Aula**, citando os demais membros, mesmo que apenas um integrante envie o projeto.

---

## Tecnologias
- **TypeScript**
- **Angular**
- **Angular Material** (opcional)
- **Bootstrap** (opcional)

---

