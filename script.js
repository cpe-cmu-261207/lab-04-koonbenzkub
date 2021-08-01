const hovertask = () => {
    divdo = document.createElement("div")
    divdo.classList.add("flex", "max-w-sm", "bg-white")
    divtask.append(divdo)
}

const clickla = () => {
    console.log("in")
    const input = document.querySelector("input")
    if (input.value == "") {
        alert("Task cannot be empty")
    }
    else {
        const span = document.createElement("span")
        span.append(input.value)
        span.classList.add("text-center")
        const divtask = document.createElement("div")
        divtask.classList.add("flex", "text-black", "font-mono", "justify-between", "max-w-screen-sm", "mx-auto", "bg-white", "px-12", "py-3", "ring-5", "ring-gray-300", "rounded-3xl", "shadow-xl")
        divtask.append(span)
        const divicon = document.createElement("div")
        divicon.classList.add("flex", "space-x-3")
        const divdo = document.createElement("button")
        divdo.classList.add("flex", "max-w-sm", "bg-green-500", "font-mono", "text-white", "ring-5", "ring-gray-300", "rounded-sm", "shadow-xl", "px-6")
        divdo.innerHTML = "done"
        divicon.append(divdo)
        divdo.addEventListener("click", () => {
            const done = document.querySelector("#done")
            console.log("click")
            done.insertBefore(divtask, done.childNodes[0])
            divtask.classList.add("line-through");
            divicon.remove()
        })

        const divde = document.createElement("button")
        divde.classList.add("flex", "max-w-sm", "bg-red-500", "font-mono", "text-white", "ring-5", "ring-gray-300", "rounded-sm", "shadow-xl", "px-4")
        const p2 = document.createElement("p").innerHTML = "delete"
        divde.append(p2)
        divicon.append(divde)
        divde.addEventListener("click", () => {
            divtask.remove()
        })
        divtask.append(divicon)
        divdo.style.display = "none"
        divde.style.display = "none"
        divtask.addEventListener('mouseover', async () => {
            divdo.style.display = "block"
            divde.style.display = "block"    
        })
        divtask.addEventListener('mouseout', async () => {
            divdo.style.display = "none"
            divde.style.display = "none"
        })
        const list = document.querySelector("#task")
        list.insertBefore(divtask, list.childNodes[0])
        idt++
    }
}

const enterpress = (ev) => {
    if (ev.keyCode == 13) {
        clickla()
    }
} 