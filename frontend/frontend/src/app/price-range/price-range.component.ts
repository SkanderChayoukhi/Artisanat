import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent implements OnInit {
  priceGap: number = 1000;

  constructor() { }

  ngOnInit(): void {
    const rangeInput = document.querySelectorAll(".range-input input") as NodeListOf<HTMLInputElement>,
      priceInput = document.querySelectorAll(".price-input input") as NodeListOf<HTMLInputElement>,
      range = document.querySelector(".slider .progress") as HTMLElement; // Cast to HTMLElement

    priceInput.forEach(input => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= this.priceGap) && maxPrice <= parseInt(rangeInput[1].max)) {
          const target = e.target as HTMLInputElement;
          if (target.className === "input-min") {
            rangeInput[0].value = minPrice.toString();
            range.style.left = ((minPrice / parseInt(rangeInput[0].max)) * 100) + "%";
          } else {
            rangeInput[1].value = maxPrice.toString();
            range.style.right = (100 - (maxPrice / parseInt(rangeInput[1].max)) * 100) + "%";
          }
        }
      });
    });

    rangeInput.forEach(input => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < this.priceGap) {
          const target = e.target as HTMLInputElement;
          if (target.className === "range-min") {
            rangeInput[0].value = (maxVal - this.priceGap).toString();
          } else {
            rangeInput[1].value = (minVal + this.priceGap).toString();
          }
        } else {
          priceInput[0].value = minVal.toString();
          priceInput[1].value = maxVal.toString();
          range.style.left = ((minVal / parseInt(rangeInput[0].max)) * 100) + "%";
          range.style.right = (100 - (maxVal / parseInt(rangeInput[1].max)) * 100) + "%";
        }
      });
    });
  }
}
