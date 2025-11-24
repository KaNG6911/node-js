const input = document.getElementById('num')
const min5Btn = document.getElementById('min5')
const min10Btn = document.getElementById('min10')
const min15Btn = document.getElementById('min15')
const min25Btn = document.getElementById('min25')
const min35Btn = document.getElementById('min35')
const min50Btn = document.getElementById('min50')
const min65Btn = document.getElementById('min65')
const min80Btn = document.getElementById('min80')
const clearBtn = document.getElementById('butt')

min5Btn.onclick = calcFivePercent
function calcFivePercent() {
  const value = input.value
  const result = value * 0.05
  input.value = result
}
min10Btn.onclick = calcTen
function calcTen() {
  const value = input.value
  const result = value * 0.1
  input.value = result
}
min15Btn.onclick = calc15
function calc15() {
  const value = input.value
  const result = value * 0.15
  input.value = result
}
min25Btn.onclick = calc25
function calc25() {
  const value = input.value
  const result = value * 0.25
  input.value = result
}
min35Btn.onclick = calc35
function calc35() {
  const value = input.value
  const result = value * 0.35
  input.value = result
}
min50Btn.onclick = calc50
function calc50() {
  const value = input.value
  const result = value * 0.5
  input.value = result
}
min65Btn.onclick = calc65
function calc65() {
  const value = input.value
  const result = value * 0.65
  input.value = result
}
min80Btn.onclick = calc80
function calc80() {
  const value = input.value
  const result = value * 0.8
  input.value = result
}
clearBtn.onclick = () => {
  input.value = '$'
}
