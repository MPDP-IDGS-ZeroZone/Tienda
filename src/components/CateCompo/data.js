

const data = [
  {
    id: "1",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg?t=1684172906",
    nombre: "Dead Space",
    descripcion: "",
    precio: "59.99",
    Desarolladora: "AAA",
    color: "white",
    categoria: "Terror",
  },
  {
    id: "2",
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1929610/header.jpg?t=1695653689",
    nombre: "Demonologist",
    descripcion: "",
    precio: "14.99",
    Desarolladora: "AAA",
    color: "red",
    categoria: "Terror",
  },

  { 
    id: "3",
    img: "https://i0.wp.com/manualdosgames.com/wp-content/uploads/2022/09/Cyberpunk-2077.jpg?resize=650,400",
    nombre: "Cyberpunk 2077",
    descripcion: "",
    precio: "59.99",
    Desarolladora: "AAA",
    color: "green",
    categoria: "Ciencia Ficcion",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg?t=1696622369",
    nombre: "Starfield",
    descripcion: "",
    precio: "69.99",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Ciencia Ficcion",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg?t=1680898825",
    nombre: "Sid Meier's Civilization VI",
    descripcion: "",
    precio: "59.99",
    Desarolladora: "AAA",
    color: "green",
    categoria: "Estrategia",
  },
  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg?t=1697727594",
    nombre: "Stellaris",
    descripcion: "",
    precio: "39.99",
    newPrice: "50",
    Desarolladora: "Indie",
    color: "black",
    categoria: "Estrategia",
  },

  {
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1698082175",
    nombre: "Call of Duty®: Modern Warfare® III",
    descripcion: "",
    precio: "69.99",
    newPrice: "50",
    Desarolladora: "AAA",
    color: "white",
    categoria: "Accion",
  },

  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1971870/header.jpg?t=1696436825",
    nombre: "Mortal Kombat 1",
    descripcion: "",
    precio: "69.99",
    Desarolladora: "AAA",
    color: "green",
    categoria: "Accion",
  },

  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2195250/header.jpg?t=1697451731",
    nombre: "EA SPORTS FC™ 24",
    descripcion: "",
    precio: "69.99",
    Desarolladora: "AAA",
    color: "blue",
    categoria: "Deportivos",
  },

  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2338770/header.jpg?t=1697814723",
    nombre: "NBA 2K24",
    descripcion: "",
    precio: "69.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "green",
    categoria: "Deportivos",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    nombre: "Pacer Future Sneaker",
    descripcion: "",
    precio: "$140,00",
    newPrice: "150",
    Desarolladora: "Puma",
    color: "red",
    categoria: "Hundo Abierto",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1694060626",
    nombre: "Hogwarts Legacy",
    descripcion: "",
    precio: "59.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Mundo Abierto",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1063730/header.jpg?t=1695753023",
    nombre: "New World",
    descripcion: "",
    precio: "39.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "white",
    categoria: "Mundo Abierto",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1683618443",
    nombre: "ELDEN RING",
    descripcion: "",
    precio: "59.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Mundo Abierto",
  },

  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg?t=1698326456",
    nombre: "Cities: Skylines II",
    descripcion: "",
    precio: "49.99",
    newPrice: "",
    Desarolladora: "Indie",
    color: "green",
    categoria: "Estrategia",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2144740/header.jpg?t=1698339883",
    nombre: "Ghostrunner 2",
    descripcion: "",
    precio: "39.99",
    newPrice: "100",
    Desarolladora: "AAA",
    color: "red",
    categoria: "Accion",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1989270/header.jpg?t=1698256741",
    nombre: "Slay the Princess",
    descripcion: "",
    precio: "17.99",
    newPrice: "",
    Desarolladora: "Indie",
    color: "white",
    categoria: "Terror",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1361210/header.jpg?t=1697723173",
    nombre: "Warhammer 40,000: Darktide",
    descripcion: "",
    precio: "39.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "blue",
    categoria: "Ciencia Ficcion",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2140330/header_alt_assets_0.jpg?t=1697663473",
    nombre: "Madden NFL 24",
    descripcion: "",
    precio: "69.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Deportivos",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2395210/header.jpg?t=1696374771",
    nombre: "Tony Hawk's™ Pro Skater™ 1 + 2",
    descripcion: "",
    precio: "39.99",
    newPrice: "",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Deportivos",
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    nombre: "Slip On Stiletto High Heel",
    descripcion: "",
    precio: "$140,00",
    newPrice: "100",
    Desarolladora: "puma",
    color: "black",
    categoria: "Mundo Abierto",
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    nombre: "DREAM PAIRS Court Shoes",
    descripcion: "",
    precio: "$140,00",
    newPrice: "150",
    Desarolladora: "Nike",
    color: "red",
    categoria: "Mundo Abierto",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1433140/header.jpg?t=1698169838",
    nombre: "The Texas Chain Saw Massacre",
    descripcion: "",
    precio: "39.99",
    Desarolladora: "Indie",
    color: "red",
    categoria: "Terror",
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    nombre: "Low Mid Block Heels",
    descripcion: "",
    precio: "$140,00",
    Desarolladora: "Nike",
    color: "black",
    categoria: "Mundo Abierto",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg?t=1695916105",
    nombre: "Marvel’s Spider-Man Remastered",
    descripcion: "",
    precio: "59.99",
    newPrice: "50",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Accion",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1774580/header.jpg?t=1689016715",
    nombre: "STAR WARS Jedi: Survivor™",
    descripcion: "",
    precio: "69.99",
    newPrice: "150",
    Desarolladora: "AAA",
    color: "white",
    categoria: "Ciencia Ficcion",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/1328670/header.jpg?t=1669773470",
    nombre: "Mass Effect™",
    descripcion: "",
    precio: "59.99",
    newPrice: "50",
    Desarolladora: "AAA",
    color: "black",
    categoria: "Ciencia Ficcion",
  },
  {
    img: "https://cdn.akamai.steamstatic.com/steam/apps/2358260/header.jpg?t=1696812737",
    nombre: "Cricket 24",
    descripcion: "",
    precio: "44.99",
    newPrice: "50",
    Desarolladora: "Indie",
    color: "black",
    categoria: "Deportivos",
  },
];

export default data;