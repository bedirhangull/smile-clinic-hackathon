interface Character {
  lang: string;
  image: any;
}

const SAY_HI: Character[] = [
  {
    lang: "en",
    image: require("@/assets/characters_idle/uk_idle.png"),
  },
  {
    lang: "ar",
    image: require("@/assets/characters_idle/ar_idle.png"),
  },
  {
    lang: "de",
    image: require("@/assets/characters_idle/de_idle.png"),
  },
  {
    lang: "dk",
    image: require("@/assets/characters_idle/dk_idle.png"),
  },
  {
    lang: "es",
    image: require("@/assets/characters_idle/es_idle.png"),
  },
  {
    lang: "fr",
    image: require("@/assets/characters_idle/fr_idle.png"),
  },
  {
    lang: "it",
    image: require("@/assets/characters_idle/it_idle.png"),
  },
  {
    lang: "ja",
    image: require("@/assets/characters_idle/ja_idle.png"),
  },
  {
    lang: "kr",
    image: require("@/assets/characters_idle/kr_idle.png"),
  },
  {
    lang: "nl",
    image: require("@/assets/characters_idle/nl_idle.png"),
  },
  {
    lang: "pt",
    image: require("@/assets/characters_idle/pt_idle.png"),
  },
  {
    lang: "se",
    image: require("@/assets/characters_idle/se_idle.png"),
  },
  {
    lang: "tr",
    image: require("@/assets/characters_idle/tr_idle.png"),
  },
];

export default SAY_HI;
