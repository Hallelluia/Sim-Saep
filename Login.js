function redirecionar() {
    if (document.getElementById('estudante').checked){
        window.location.href = "estudante.html";
    } else if (document.getElementById('biblioteca').checked){
        window.location.href = "bibliotecaria.html"
    }else {
        alert("Escolha uma opção")
        }
    }
    
