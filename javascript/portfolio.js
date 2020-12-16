const filterContainer = document.querySelector('.portfolio-filter');
const filterBtn = filterContainer.children;
const totalFilterBtn = filterBtn.length;
const portfolioItems = document.querySelectorAll(".portfolio-item")
const totalPortfolioItems = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtn[i].addEventListener("click",function () {
        filterContainer.querySelector(".active").classList.remove('active');
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k=0 ; k<totalPortfolioItems; k++){
            if(filterValue ===  portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add('show');
            }
            else{
                portfolioItems[k].classList.add('hide');
            }
        }
    })
}