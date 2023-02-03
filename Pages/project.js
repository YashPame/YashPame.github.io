document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("viewbtn")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
}) 
function togglePortfolioPopup(){
    document.querySelector(".mainPopup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("ProjectPopUp")) {
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem){
    console.log(portfolioItem);
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".projimg").src;

    document.querySelector(".pp-header h4").innerHTML = portfolioItem.querySelector(".projtitle").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".ProjectDetails").innerHTML;
}