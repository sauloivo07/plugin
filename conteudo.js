const intervalo = setInterval(() => {
    const fotos = document.querySelectorAll("._aagv")

    for (foto of fotos) {
        const btn = document.createElement('button')
        btn.classList.add("btnExpandir")
        btn.innerHTML = "<span> </span>"
        
        const img = foto.querySelector('img').src

        var atte = document.createAttribute('onClick')
	    atte.value = `window.open('${img}', '_blank')`
		btn.setAttributeNode(atte)        

        foto.appendChild(btn)
    }
}, 3000)

