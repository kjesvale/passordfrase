[![Netlify Status](https://api.netlify.com/api/v1/badges/5f2fef09-cbc3-4ace-8053-f580303b66ef/deploy-status)](https://app.netlify.com/sites/passordfrase/deploys)

# Passordfrase

Opprett en passordfrase som er lett å huske.

Tilgjengelig på [passordfrase.netlify.app](https://passordfrase.netlify.app/)

## Hvorfor?

Passordfraser er lettere å huske enn andre, sterke passord. Det finnes liknende generatorer for engelsk, men jeg fant ikke noe tilsvarende på norsk. Norske ord og norske tegn gjør passordet sikrere, fordi mange potensielle "password cracking"-algoritmer benytter seg av engelske ordbøker.

I tillegg til et sterkt passord bør du bruke en passord-app slik som [1password](https://1password.com/) eller [Lastpass](https://www.lastpass.com/), samt aktivere to-faktorautentisering der du kan.

## Algoritme

Algoritmen kan generere passordfraser på ulike former:

```
Standard:   <subjekt> <verb> <adverb> <preposisjon> <sted>
Alternativ: <adjektiv> <subjekt> <verb> <preposisjon> <sted>
Lengre:     <adjektiv> <subjekt> <verb> <adverb> <preposisjon> <sted>
Tilfeldig:  Fem tilfeldige ord fra orddatabasen
```

Du kan også velge tegnet mellom hvert ord.

### Orddatabase

Algoritmen baserer seg på en mengde ord fra ulike ordklasser, se `src/algoritme/ord`.