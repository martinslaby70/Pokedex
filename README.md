# POKEDEX

---

- Appku jsem nastyloval podle předlohy z [Adobe XD](https://xd.adobe.com/view/932f44d0-1051-4995-bda3-49d62dd15b5d-c67c/specs/). Nicméně pokavad se dál nebude pokračovat v produkci tohoto pokedexu, tak mi hodně věcí nedávalo smyls. (button pro zrušení filtrů; NavLink "o nás", který nikam nevede, atd.)

- Informace o pokémonech jsem si vybral zobrazovat v modálním okně. Předpokládám že pro uživatele bude lehčí po zobrazení informací jednoduše kliknout mimo okno s informacemi, a vrátit se tam, kde skončil s prohlížením, než muset přepínat mezi několika stránkama

- Zatím jsem nechal source u loga prázdný, nebudu se ho snažit zreplikovat, když je z předlohy zřejmé, že ho u sebe máte v .png

- Bohužel se některé informace vypisují v angličtině, byla možnost použít google API, nebo samostatný modul pro překlad, ale v této fázi se mi moc nechce do projektu vkládat svůj google API key

 - Aplikace je také připravena na některé filtry. zatím jsou tyto filtry "Hard Coded" uvniř kódu.
   ```javascript
   const PokemonsPerPage = 12;
   // src/pokemonList/pokemonContainer.tsx
   ```
   aplikace bude plně funkční i po změně této proměné na jakoukoli hodnotu (PokemonsPerPage > 0)

---

Tvým úkolem bude vyrobit pokedex neboli interaktivní encyklopedii pokemonů. Použij data z [https://pokeapi.co/](https://pokeapi.co/) a zajímá nás pouze první generace, tedy prvních 151 pokemonů. Na úvodní stránce pokedexu by měl být seznam všech pokemonů a uživatel by měl být schopný v nich vyhledávat pomocí textového inputu (pokud do inputu napíšu "char", měl bych videt charmandera, charmeleona a charizarda). Každý pokemon by měl mít ve výpisu jméno a obrázek (sprites.front_default).

Po kliknutí na kartu pokemona se zobrazí detail (buď na nové stránce nebo v modálním okně - je to na tobě). Zde by měl být velký obrázek pokemona (pokeapi má jen malé obrázky, velký můžeš použít odtud: https://pokeres.bastionbot.org/images/pokemon/[index].png). Dále by zde měly být následující informace rozdělené do dvou tabů:

Design celé aplikace je dostupný zde: https://xd.adobe.com/view/932f44d0-1051-4995-bda3-49d62dd15b5d-c67c/. Aplikace nemusí být přesně podle designu, ale měla by se mu co nejvíce blížit.

#### první tab
  * výška
  * váha
  * typ
  * názvy všech dovedností (abilities)  
    
#### druhý tab
  * hodnoty a názvy všech statistik (hp, attack...)
  
Při zpracovávání ti necháváme volnou ruku, nicméně bychom chtěli vidět v akci sass a buď vue nebo react (případně čistý javascript s es6). Pokedex by měl fungovat i na mobilních zařízeních.
  
Po splnění úkolu vytvoř novou branch a Merge Request do masteru.

