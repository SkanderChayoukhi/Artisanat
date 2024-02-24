import { Component, OnInit } from '@angular/core';
import { produitService } from '../produits/produit.Service';
import { Product } from '../shared/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URLS } from '../config/api.url.config';
import { ProductsService } from '../services/products/products.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  sliderValue: number = 0;
  minValue: number = 100;
  maxValue: number = 5000;
  products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality sound with long-lasting battery life.",
      price: 99,
      quantity: 50,
      rating: 4.5,
      numberRatings: 234,
      image: ".../../assets/images/about/hat.png",
      category: { id: 1, name: "Electronics", image: "electronics-category.jpg" },
      brand: { id: 1, name: "SoundMagic", image: "soundmagic-brand.jpg" },
      seller: { id: 1, username: "BestAudio", email: "contact@bestaudio.com", password: "secure123", address: "123 Audio Lane, Sound City", phoneNumber: "123-456-7890", image: "bestaudio-seller.jpg" },
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Keep track of your fitness and notifications.",
      price: 199,
      quantity: 75,
      rating: 4.3,
      numberRatings: 150,
      image: "smart-watch.jpg",
      category: { id: 2, name: "Wearables", image: "wearables-category.jpg" },
      brand: { id: 2, name: "TechGear", image: "techgear-brand.jpg" },
      seller: { id: 2, username: "GadgetWorld", email: "info@gadgetworld.com", password: "gadget123", address: "456 Tech Road, Gadget City", phoneNumber: "987-654-3210", image: "gadgetworld-seller.jpg" },
    },
    {
      id: 3,
      name: "E-Reader",
      description: "Enjoy your favorite books in a digital format.",
      price: 129,
      quantity: 40,
      rating: 4.7,
      numberRatings: 89,
      image: "e-reader.jpg",
      category: { id: 3, name: "Books", image: "books-category.jpg" },
      brand: { id: 3, name: "ReadWell", image: "readwell-brand.jpg" },
      seller: { id: 3, username: "BookLovers", email: "support@booklovers.com", password: "readbooks", address: "789 Reader's Street, Booktown", phoneNumber: "456-789-0123", image: "booklovers-seller.jpg" },
    },
    // Add more products as per the structure above
  ];
  filteredProducts: Product[] = [];
  searchMarque: string = '';
  filteredCategory:string='';
  filteredBrand:string='';
  selectedProduit: Product = { name: "", description: "", price: 0, category: { id: 0, name: "" }, quantity: 0, brand: { id: 0, name: "" } };
  Url:string =API_URLS.IMAGE_URL;
  priceRange: { min: number; max: number } = { min: 30, max: 5000 };

  constructor(
    private produitService: produitService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(
      (products: Product[]) => {
        this.products = products;
        this.filteredProducts = products; 
        this.route.params.subscribe((params) => {

          if (params['id']) {
            this.filteredProducts = this.products.filter((product: Product) => product.id === params['id']);
          }
        });
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  
  
  getProduit(productId: number | undefined, product: Product) { 
    if (productId !== undefined && product !== undefined) {
      this.produitService.getProductById(productId).subscribe(
        res => {
          console.log(res);
          
        },
        error => {
          console.log('Error: Failed to retrieve the product details.', error);
        }
      );
    } else {
      console.log('Error: The selected product does not have a valid ID or is undefined.');
    }
  }
  applyRangeFilter(): void {
    this.filteredProducts=this.products.filter((product: Product) => {
      return product.price! <= this.priceRange.max && product.price! >= this.priceRange.min ;
    }
    );

    if (this.filteredBrand) {
      this.filteredProducts = this.filteredProducts.filter((product: Product) => {
        return product.brand?.name?.toLowerCase().includes(this.filteredBrand.toLowerCase());
      });
    }

    if (this.filteredCategory) {
      this.filteredProducts = this.filteredProducts.filter((product: Product) => {
        return product.category?.name?.toLowerCase().includes(this.filteredCategory.toLowerCase());
      });
    }

   
  }

  searchByMarque(searchmarque: string): void {
    this.searchMarque = searchmarque.trim();
    if (!this.searchMarque) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((product: Product) => {
        return product.name?.toLowerCase().includes(this.searchMarque.toLowerCase());
      });
    }
  }
  onSearch(event: any): void {
    const searchTerm = event.target.value;
    this.searchByMarque(searchTerm);
  }
  /*filterByCategory(category: string): void {
    this.filteredCategory = category && category.trim();
  
    if (!this.filteredCategory) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((product: Product) => {
        return product.category?.name?.toLowerCase().includes(this.filteredCategory.toLowerCase());
      });
    }
  
  
    if (this.filteredProducts.length === 0) {
      this.filteredProducts = [...this.products];
    }
  }
  
  
  onClickedCategory(category: string): void {
    this.filterByCategory(category);
  }
  filterByBrand(brand: string): void {
    this.filteredBrand = brand && brand.trim();
  
    if (!this.filteredBrand) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter((product: Product) => {
        return product.brand?.name?.toLowerCase().includes(this.filteredBrand.toLowerCase());
      });
    }
  
  
    if (this.filteredProducts.length === 0) {
      this.filteredProducts = [...this.products];
    }
  }
  
  onCheckboxChange(brand: string): void {
    this.filterByBrand(brand);
  }*/
  filterByBrand(brand: string): void {
    this.filteredBrand = brand && brand.trim();
 
    this.applyFilters();
  }
  
  applyFilters(): void {
 
    this.filteredProducts = [...this.products];
    if (this.filteredBrand) {
      this.filteredProducts = this.filteredProducts.filter((product: Product) => {
        return product.brand?.name?.toLowerCase().includes(this.filteredBrand.toLowerCase());
      });
    }
  
 
    if (this.filteredCategory) {
      this.filteredProducts = this.filteredProducts.filter((product: Product) => {
        return product.category?.name?.toLowerCase().includes(this.filteredCategory.toLowerCase());
      });
    }
  
  
    if (
      (!this.filteredBrand || this.filteredProducts.length === 0) &&
      (!this.filteredCategory || this.filteredProducts.length === 0)
    ) {
      this.filteredProducts = [...this.products];
    }
  }
  filterPrice():void{
    this.filteredProducts = this.products.filter((product: Product) => {
      return
      product.price! >=this.priceRange.min && product.price! <=this.priceRange.max
    });
  }

  

  
  
  onCheckboxChange(brand: string): void {
    this.filterByBrand(brand);
  }
  filterByCategory(category: string): void {
    this.filteredCategory = category && category.trim();
  
    this.applyFilters();
  }
  
  onClickedCategory(category: string): void {
    this.filterByCategory(category);
  }
  
}




