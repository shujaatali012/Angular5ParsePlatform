export class Product {
  constructor(Warranty?: string,
    color?: string,
    createdAt?: string,
    description?: string,
    details?: string,
    image?: string,
    memory?: string,
    name?: string,
    price?: string,
    sims?: string,
    storage?: string) {

    this.Warranty = Warranty;
    this.color = color;
    this.createdAt = createdAt;
    this.description = description;
    this.details = details;
    this.image = image;
    this.memory = memory;
    this.name = name;
    this.price = price;
    this.sims = sims;
    this.storage = storage;
  }
  

  public Warranty: string;
  public color: string;
  public createdAt: string;
  public description: string;
  public details: string;
  public image: string;
  public memory: string;
  public name: string;
  public price: string;
  public sims: string;
  public storage: string;
}
