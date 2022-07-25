import { Product } from '../product/product.component';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ProductServices {
  getVideo() {
    return this.Placi_video;
  }
  getProcesors() {
    return this.Procesor;
  }
  getMotherboards() {
    return this.MotherBoard;
  }
  getRAM(): Product[] {
    return this.RAM;
  }
  getMemory(): Product[] {
    return this.Memory;
  }
  getCases(): Product[] {
    return this.Cases;
  }
  getCart():Product[]{
    return this.Cases
  }

  Placi_video: Product[] = [
    {
      id: 0,
      title: 'Gigabyte Geforce RTX 3060 TI Eagle',
      description: `Interfata: PCI Express x16 4.0
      Seria: GeForce RTX 3000
      GPU Boost clock: 1695 MHz
      Tip memorie: GDDR6
      Dimensiune memorie: 8 GB`,
      price: 330,
      image:
        'https://2.grgs.ro/images/products/1/6924/2220150/normal/geforce-rtx-3060-ti-eagle-oc-8gb-gddr6-256-bit-84af47ecb3552e0facecdfc9d4b59c58.jpg',
    },
    {
      id: 1,
      title: 'ASUS GeForce GTX 1660 Ti TUF EVO GAMING',
      description: `Interfata: PCI Express x16 4.0
      Seria: Radeon RX 6000
      GPU Boost clock: 2491 MHz
      Tip memorie: GDDR6
      Dimensiune memorie: 8 GB`,
      price: 200,
      image:
        'https://4.grgs.ro/images/products/1/9551/2281078/normal/radeon-rx-6600-pulse-8gb-gddr6-128-bit-3c2241727880706ba578ef7294bfc94c.jpg',

    },
    {
      id: 2,
      title: 'Sapphire Radeon RX 6600 PULSE ',
      description: `Interfata: PCI Express x16 4.0
      Seria: Radeon RX 6000
      GPU Boost clock: 2491 MHz
      Tip memorie: GDDR6
      Dimensiune memorie: 8 GB`,
      price: 250,
      image:
        'https://5.grgs.ro/images/products/1/9551/2281078/thumbnails/radeon-rx-6600-pulse-8gb-gddr6-128-bit-3c2241727880706ba578ef7294bfc94c.jpg',
    },
    {
      id: 3,
      title: 'MSI GeForce RTX 3060 Ti VENTUS 2X LHR ',
      description: `Interfata: PCI Express x16 4.0
      Seria: GeForce RTX 3000
      GPU Boost clock: 1665 MHz
      Tip memorie: GDDR6
      Dimensiune memorie: 8 GB`,
      price: 300,
      image:
        'https://4.grgs.ro/images/products/1/2118138/2285118/thumbnails/geforce-rtx-3060-ti-ventus-2x-lhr-8gb-gddr6-256-bit-388aac9f46e355ceaa49fe56d9e809e4.jpg',

    },{
    id: 4,
    title: 'Placa video XFX Radeon RX 6700 XT Speedster',

    description: `Interfata: PCI Express x16 4.0
    Seria: Radeon RX 6000
    GPU Boost clock: 2622 MHz
    Frecventa GPU Boost mod OC: 2622 MHz
    Tip memorie: GDDR6
    Dimensiune memorie: 12 GB`,
    price: 300,
    image:
      'https://4.grgs.ro/images/products/1/6388/2208718/thumbnails/radeon-rx-6700-xt-qick-319-black-12gb-gddr6-192-bit-e88ac997527922ab173e6e196dd68be2.jpg',
  
  },
    
  ];
  Procesor: Product[] = [
    {
      id: 0,
      title: ' Intel Rocket Lake, Core i5 11400F ',
      description: `Socket: 1200
      Serie: Core i5 11th gen
      Nucleu: Rocket Lake
      Frecventa: 2,6 GHz
      Tehnologie de fabricatie: 14 nm `,
      price: 230,
      image:
        'https://4.grgs.ro/images/products/1/7201/2159322/thumbnails/rocket-lake-core-i5-11400f-26ghz-box-beffe54c8b96f1860a01e8b27eb6dd8f.jpg',
    },
    {
      id: 1,
      title: 'AMD Ryzen 5 5600X ',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Vermeer
      Frecventa: 3,7 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://1.grgs.ro/images/products/1/9507/2102394/thumbnails/ryzen-5-5600x-37ghz-box-26bda6b8149dc7ed1e485e0ced910275.jpg',
    },
    {
      id: 2,
      title: 'AMD Ryzen 5 5600G 3.9GHz box ',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Cezanne
      Frecventa: 3,9 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9507/2240078/thumbnails/ryzen-5-5600g-39ghz-box-1adb3982e7ef74e009a4724b35725a64.jpg',
    },
    {
      id: 3,
      title: 'Intel Comet Lake, Core i5 10400F ',
      description: `Socket: 1200
      Serie: Core i5 10th gen
      Nucleu: Comet Lake
      Frecventa: 2,9 GHz
      Tehnologie de fabricatie: 14 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/2034042/2039442/thumbnails/comet-lake-core-i5-10400f-29ghz-box-b133ae47022be03e62655cac2ea51059.jpg',
    },
    {
      id: 4,
      title: 'AMD Ryzen 5 5500 3.6GHz box',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Cezanne
      Frecventa: 3,6 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9507/2240078/thumbnails/ryzen-5-5600g-39ghz-box-1adb3982e7ef74e009a4724b35725a64.jpg',
    },
    {
      id: 5,
      title: 'Intel Alder Lake, Core i5 12600KF 3.7GHz box',
      description: `Socket: 1700
      Serie: Core i5 12th gen
      Nucleu: Alder Lake
      Frecventa: 3,7 GHz`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9551/2274654/thumbnails/alder-lake-core-i5-12600kf-37ghz-box-f37c8933f496e611e559e54901ffcee9.jpg',
    },
    {
      id: 0,
      title: ' Intel Rocket Lake, Core i5 11400F ',
      description: `Socket: 1200
      Serie: Core i5 11th gen
      Nucleu: Rocket Lake
      Frecventa: 2,6 GHz
      Tehnologie de fabricatie: 14 nm `,
      price: 230,
      image:
        'https://4.grgs.ro/images/products/1/7201/2159322/thumbnails/rocket-lake-core-i5-11400f-26ghz-box-beffe54c8b96f1860a01e8b27eb6dd8f.jpg',
    },
    {
      id: 1,
      title: 'AMD Ryzen 5 5600X ',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Vermeer
      Frecventa: 3,7 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://1.grgs.ro/images/products/1/9507/2102394/thumbnails/ryzen-5-5600x-37ghz-box-26bda6b8149dc7ed1e485e0ced910275.jpg',
    },
    {
      id: 2,
      title: 'AMD Ryzen 5 5600G 3.9GHz box ',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Cezanne
      Frecventa: 3,9 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9507/2240078/thumbnails/ryzen-5-5600g-39ghz-box-1adb3982e7ef74e009a4724b35725a64.jpg',
    },
    {
      id: 3,
      title: 'Intel Comet Lake, Core i5 10400F ',
      description: `Socket: 1200
      Serie: Core i5 10th gen
      Nucleu: Comet Lake
      Frecventa: 2,9 GHz
      Tehnologie de fabricatie: 14 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/2034042/2039442/thumbnails/comet-lake-core-i5-10400f-29ghz-box-b133ae47022be03e62655cac2ea51059.jpg',
    },
    {
      id: 4,
      title: 'AMD Ryzen 5 5500 3.6GHz box',
      description: `Socket: AM4
      Serie: Ryzen 5 5000 Series
      Nucleu: Cezanne
      Frecventa: 3,6 GHz
      Tehnologie de fabricatie: 7 nm`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9507/2240078/thumbnails/ryzen-5-5600g-39ghz-box-1adb3982e7ef74e009a4724b35725a64.jpg',
    },
    {
      id: 5,
      title: 'Intel Alder Lake, Core i5 12600KF 3.7GHz box',
      description: `Socket: 1700
      Serie: Core i5 12th gen
      Nucleu: Alder Lake
      Frecventa: 3,7 GHz`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/9551/2274654/thumbnails/alder-lake-core-i5-12600kf-37ghz-box-f37c8933f496e611e559e54901ffcee9.jpg',
    },
  ];
  MotherBoard: Product[] = [
    {
      id: 0,
      title: ' GIGABYTE B560M DS3H V2 ',
      description: `Format: mATX 
        Soclu procesor: 1200
        Producator chipset: Intel
        Model chipset: B560
        Interfata grafica: PCI Express x16 4.0
        Tip memorie: DDR4
        Tehnologie: Dual channel `,
      price: 230,
      image:
        'https://4.grgs.ro/images/products/1/1724/2215602/thumbnails/b560m-ds3h-v2-a81b3c1ffc4c06142be702071942f13b.jpg',
    },
    {
      id: 1,
      title: 'GIGABYTE H410M H V3 ',
      description: ` Format: mATX
        Soclu procesor: 1200
        Producator chipset: Intel
        Model chipset: H510
        Interfata grafica: PCI Express x16 3.0
        Tip memorie: DDR4,`,
      price: 300,
      image:
        'https://5.grgs.ro/images/products/1/1724/2215614/thumbnails/h410m-h-v3-1c84950a38b7b1cd4585dfc1bab5f417.jpg',
    },
    {
      id: 2,
      title: 'GIGABYTE B550 AORUS ELITE V2 ',
      description: ` Format: ATX
  Soclu procesor: AM4
  Producator chipset: AMD
  Model chipset: B550
  Interfata grafica: PCI Express x16 4.0
  Tip memorie: DDR4
  Tehnologie: Dual channel,`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/4917/2068982/thumbnails/b550-aorus-elite-v2-d5f73fdc77512e76f582123fcd0ab811.png',
    },
  ];
  RAM: Product[] = [
    {
      id: 0,
      title: 'Corsair Vengeance LPX Black',
      description: `Tip: DDR4
      Capacitate: 16 GB
      Frecventa: 3600 MHz
      Latenta CAS: 18 CL `,
      price: 230,
      image:
        'https://3.grgs.ro/images/products/1/959008/1868210/thumbnails/vengeance-lpx-black-16gb-ddr4-2400mhz-cl14-dual-channel-kit-e0c313a5c5965252307ed00da9e940d5.jpg',
    },
    {
      id: 1,
      title: 'Kingston FURY Beast ',
      description: `Tip: DDR4
      Capacitate: 16 GB
      Frecventa: 3200 MHz
      Latenta CAS: 16 CL`,
      price: 300,
      image:
        'https://2.grgs.ro/images/products/1/7169/2230718/thumbnails/fury-beast-16gb-ddr4-3200mhz-cl16-dual-channel-kit-64f2fc45a048b825567a137449930f08.jpg',
    },
    {
      id: 2,
      title: 'Corsair Vengeance RGB RS ',
      description: `Tip: DDR4
      Capacitate: 16 GB
      Frecventa: 3200 MHz
      Latenta CAS: 16 CL,`,
      price: 300,
      image:
        'https://3.grgs.ro/images/products/1/7620/2254298/thumbnails/vengance-rgb-rs-16gb-ddr4-3200mhz-cl16-dual-channel-kit-3a48744294a987fc435b1b56495a865c.jpg',
    },
  ];
  Memory: Product[] = [
    {
      id: 0,
      title: 'SSD HP S700 500GB SATA-III 2.5 inch',
      description: `Seria: S700
      Interfata: SATA-III
      Capacitate: 500 GB
      Citire max.: 560 MB/s `,
      price: 230,
      image:
        'https://3.grgs.ro/images/products/1/1520902/1607886/thumbnails/s700-500gb-sata-iii-25-inch-401c7e384b76d3b60732fdb0f2d02d31.jpg',
    },
    {
      id: 1,
      title: 'SSD Kingston A400 240GB SATA-III 2.5 inch',
      description: `Seria: A400
      Interfata: SATA-III
      Capacitate: 240 GB
      Controller: Phison S11
      Citire max.: 500 MB/s`,
      price: 300,
      image:
        'https://4.grgs.ro/images/products/1/1427502/1487706/thumbnails/a400-120gb-sata-iii-25-inch-ace5ac38fb969418fdf46f467226e385.jpg',
    },
    {
      id: 2,
      title: 'SSD Kingston A400 480GB SATA-III 2.5 inch',
      description: `Seria: A400
      Interfata: SATA-III
      Capacitate: 480 GB
      Controller: Phison S11
      Citire max.: 500 MB/s`,
      price: 300,
      image:
      'https://4.grgs.ro/images/products/1/1427502/1487706/thumbnails/a400-120gb-sata-iii-25-inch-ace5ac38fb969418fdf46f467226e385.jpg',

    },
  ];
  Cases: Product[] = [
    {
      id: 0,
      title: 'Carcasa Segotep X1 Black',
      description: `\nTip carcasa: MiddleTower`+ `\nDimensiuni (H x D x W): 455 x 405 x 200 mm Sloturi expansiune: x7`,
      price: 230,
      image:"https://4.grgs.ro/images/products/1/5286/1658364/thumbnails/x1-black-b21ebff8cb288988058d8deada222000.jpg"
        },
    {
      id: 1,
      title: 'Carcasa AQIRYS Arcturus ARGB ',
      description: `Tip carcasa: MiddleTower
      Dimensiuni (H x D x W): 450 x 440 x 205 mm
      Sloturi expansiune: x7`,
      price: 300,
      image:
       'https://3.grgs.ro/images/products/1/8078/2005382/thumbnails/arcturus-86a1c3e3d6134b84edbbddc90c0c048a.jpg'
    },
    {
      id: 2,
      title: 'Carcasa AQIRYS Antares ARGB',
      description: `Tip carcasa: MiddleTower
      Dimensiuni (H x D x W): 450 x 410 x 205 mm
      Sloturi expansiune: x7`,
      price: 300,
      image:
      "https://4.grgs.ro/images/products/1/2003606/2005378/thumbnails/antares-686cfa9dd12d1726b05661da313e7789.jpg"    },
  ];

  createProduct(
    productTitle: string,
    productDescription: string,
    quantity: number,
    price: number
  ) {
    const product = {
      id: 1234,
      description: productDescription,
      title: productTitle,
      // quantity: 2,
      image: '',
      price: 23,
    };
    return this.Placi_video.push(product);
  }
}
