# Hubusca

## Descrição
Este aplicativo permite buscar e exibir informações de usuários do GitHub, além de visualizar detalhes de perfil e redirecionar para os repositórios correspondentes.

## Funcionalidades
1. Permitir a busca de dados de usuários do GitHub.
2. Exibir informações detalhadas do perfil do usuário ao clicar na foto.
3. Redirecionar para os repositórios no site do GitHub ao clicar em um repositório.
4. Criar um menu com usuários pesquisados recentemente.

## Tecnologias Utilizadas
- React Native (Expo)
- Typescript
- Axios
- Styled-components

## Como Executar o Projeto
1. **Instalação das Dependências:**
```
npm install
```

2. **Executando o Projeto:**
```
npx expo start
```

3. **Abrindo o projeto:**<br />
`Abra o aplicativo Expo Go, escaneie o QR Code ou digite a URL que foi descrita no terminal manualmente, após isso irá abrir o aplicativo`

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:
- `/src`: Contém os arquivos de código-fonte.
- `/assets`: Armazena arquivos de imagens, ícones, estilos.
- `/src/components`: Componentes reutilizáveis.
- `/src/api`: Contém códigos das requisições com axios.
- `/src/contexts`: Criação do context para os usuários pesquisados recentemente.
- `/src/pages`: Páginas criadas com as funcionalidades.
- `/src/types`: Tipos criados com Typescript.
- `/src/utils`: Armazena funções que auxiliam no aplicativo.

## Funcionalidades
### Tela Principal
- Busca de usuários do GitHub pelo nome de usuário.
- Exibição dos dados (foto, nome, login, localização) na tela principal.

### Perfil do Usuário
- Ao clicar na foto, exibir informações detalhadas do perfil (ID, seguidores, repositórios públicos, lista de repositórios).

### Menu de Usuários Recentes
- Exibição dos usuários pesquisados recentemente com perfil semelhante à tela principal.

## Fluxo de Funcionamento
O aplicativo inicia na tela principal onde é possível buscar usuários do GitHub pelo nome. Ao selecionar um usuário, é exibido o perfil detalhado do usuário. Além disso, é possível acessar os repositórios do usuário a partir dessa tela.

## Componentes
Foram desenvolvidos os seguintes componentes principais:
- `FormSearchBar`: Formulário para buscar usuários.
- `repositories`: Componente para exibir os repositórios dos usuários.
- `CardUser`: Componente para exibir o perfil detalhado do usuário.

## Referências
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Styled-components Documentation](https://styled-components.com/docs)
- [GitHub API Documentation](https://docs.github.com/en/rest)

