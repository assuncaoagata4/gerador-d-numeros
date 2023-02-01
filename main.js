function gerador() {
    const number = Math.random() * 100
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = number.toFixed(0)
}
