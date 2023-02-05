# nlw-eSports
Rocketseat NLW eSports

### Projeto no Figma
https://www.figma.com/file/l5cAMbmJIZzqZClvPfrhoM/NLW-eSports-(Community)?node-id=1%3A640&t=glcMcLyc5NjDLzT0-0


### Página Inicial
![opera_Cevj7mBk9h](https://user-images.githubusercontent.com/52801509/216736132-7bcbe902-605c-4df1-b751-c62287ffde46.png)

### Projeto Final WEB
![opera_5XgIUa3KWM](https://user-images.githubusercontent.com/52801509/216851780-36c67f6a-df2a-4445-990c-1e05539a060c.gif)


# Projeto - API RESTful + SPA
Back-end -> Programado em node

Front-end -> Programado em React

Mobile -> Programado em React-Native

# Back-end

## Entidades

### Games
id, title, bannerUrl

CDN (Content Delivery Network)

### Ad
id, gameId (pode ter varios anuncios), name, yearsPlaying, discord, weekDays, hoursStart, hourEnd, useVoiceChannel, createdAt

## Caso de uso
Como o usuario vai utilizar a aplicação? 

- Listagem de games com contagem de anúncios
- Criação de noov anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

# Melhorar aplicação WEB 
- Responsividade
- Carousel para os games
  - Keen Slider (biblioteca de carousel)
- Dentro do Modal usar o RadiUI no select 
- Validação (Ex: Borda verde/vermelha) (bibliote de validação)
  - React Hook Form (Schema Validation)
- Autenticação (Logar com Discord ou Twitch)
