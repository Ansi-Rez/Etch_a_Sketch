const container = document.querySelector(".container");
const button = document.querySelector("button");

//Initial Setting
for(let i = 0; i < 256; i++)
{
    const div = document.createElement("div");
    div.addEventListener("mouseover", function()
    {
        div.style.backgroundColor = "white";
    });
    container.appendChild(div);
}
//Takes the users input and calculates the number of squares needed and the size of the squares
button.addEventListener("click", ()=>
{
    let squares = parseInt(prompt("Please enter the number of squares per side between 2-100"));

    //Removes previous divs
    let previousSquares = container.querySelectorAll("div");

    previousSquares.forEach((prevsquare)=>
    {
        container.removeChild(prevsquare);
    });

    //Adds new divs based on user input
    for(let i = 0; i < (squares * squares); i++)
    {
        const div = document.createElement("div");
        div.style.height = String(480/squares) + "px";
        div.style.width = String(640/squares) + "px";
        div.addEventListener("mouseover", function()
        {
            div.style.backgroundColor = "white";
        });
        container.appendChild(div);
    }
});