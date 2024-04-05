const container = document.querySelector(".container");

for(let i = 0; i < 256; i++)
{
    const div = document.createElement("div");
    div.addEventListener("mouseover", function()
    {
        div.style.backgroundColor = "white";
    });
    container.appendChild(div);
}