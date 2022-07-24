import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Produsul 1', 'Placa video GIGABYTE GeForce RTX 3060 Ti EAGLE OC LHR 8GB GDDR6 256-bit', 3000,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F33781%2F33780577%2Fimages%2Fres_894aaa96ac943e70265c6a0ddaa6708b.jpg&f=1&nofb=1"),
    new Product(2, 'Produsul 2', 'Placa video Sapphire Radeon RX 6600 PULSE 8GB GDDR6 128-bit', 1700,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F24870%2F24869832%2Fimages%2Fres_91e2574e21cffa06be253968f639e19d.jpg%3Fwidth%3D450%26height%3D450%26hash%3DED3951E5C4E536A063C51E91D8BD5336&f=1&nofb=1"),
    new Product(3, 'Produsul 3', 'Placa video MSI GeForce RTX 3060 Ti VENTUS 2X LHR 8GB GDDR6 256-bit', 2000,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F34151%2F34150825%2Fimages%2Fres_6ff01199d56425a38279335fcd6c257e.jpg&f=1&nofb=1"),
    new Product(4, 'Produsul 4', 'Placa video ASUS GeForce RTX 3050 DUAL OC LHR 8GB GDDR6 128-bit', 2500,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F28453%2F28452593%2Fimages%2Fres_5e45cec83bcc0d764555f107d1b9ec5c.jpg&f=1&nofb=1"),
    new Product(5, 'Produsul 5', 'Placa video GIGABYTE GeForce RTX 3050 GAMING OC LHR 8GB GDDR6 128-bit', 2200,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs13emagst.akamaized.net%2Fproducts%2F39754%2F39753097%2Fimages%2Fres_9e2b3b46b3bea337e0e5bf32144117c8.jpg&f=1&nofb=1"),
    new Product(6, 'Produsul 6', 'Placa video ASUS Radeon RX 550 Phoenix EVO 4GB GDDR5 128-bit', 800,"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.forit.ro%2Fimages%2Fproducts%2Fimg_202004031012%2F281776%2Ffull%2Fplaca-video-asus-radeon-rx-550-phoenix-evo-4gb-gddr5-128-bit-423715.jpg&f=1&nofb=1"),
    
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
