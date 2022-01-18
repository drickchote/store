# História de usuário

Como usuário eu gostaria de visualizar os produtos e adicioná-los ao carrinho.

Protótipo Figma: https://www.figma.com/file/y1kDSKLkKhH9ExK6rPV75V/Design-Loja?node-id=0%3A1

![Imagem do protótipo](https://i.ibb.co/64cGHxh/Captura-de-Tela-2022-01-17-a-s-20-42-11.png)

## Cenários:

### Ao acessar a área “Lista de produtos”, o app deverá exibir :

- Ícone de carrinho

  - DADO Quantidade de produtos no carrinho
  - REQ Caso tenha mais que 9 exibir 9+
  - REQ Ao clicar no carrinho o usuário será levado a tela “Carrinho”

- Busca de produtos
  - REQ A lista de produtos será atualizada enquanto o usuário digita.
- Listagem de produtos
  - REQ É possível selecionar e desselecionar 1 produto
  - DADO Imagem do produto
  - DADO Nome do produto
  - DADO Valor do produto
  - DADO Quantidade disponível
  - REQ Caso a quantidade disponível seja superior a 999 o app deverá exibir 999+
- Botão de “Adicionar ao carrinho” - REQ Manter o botão habilitado apenas caso haja um produto selecionado.

### Ao acessar a área “Carrinho”, o app deverá exibir :

- Botão de voltar a listagem de produtos
- Listagem de produtos no carrinho
  - REQ É possível alterar a quantidade do produto usando os botões ou digitando no input.
  - REQ É possível remover o produto ou deixá-lo zerado
  - DADO Imagem do produto
  - DADO Nome do produto
  - DADO Subtotal resultante do valor do produto x quantidade
- Botão de “Finalizar”
  - REQ Manter o botão habilitado apenas caso a soma da quantidade de produtos no carrinho seja maior que 0
