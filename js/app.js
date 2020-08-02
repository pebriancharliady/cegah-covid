const IDpositifCovid = document.getElementById('id-positif')
const IDdirawat = document.getElementById('id-dirawat')
const IDsembuh = document.getElementById('id-sembuh')
const IDmeninggal = document.getElementById('id-meninggal')

const GLpositifCovid = document.getElementById('gl-positif')
const GLsembuh = document.getElementById('gl-sembuh')
const GLmeninggal = document.getElementById('gl-meninggal')

fetch('https://indonesia-covid-19.mathdro.id/api')
    .then(res => {
        return res.json()
    })
    .then(data => {
        IDpositifCovid.innerHTML = numeral(data.jumlahKasus).format('0,0')
        IDdirawat.innerHTML = numeral(data.perawatan).format('0,0')
        IDsembuh.innerHTML = numeral(data.sembuh).format('0,0')
        IDmeninggal.innerHTML = numeral(data.meninggal).format('0,0')
    })
    .catch(err => console.log(err));

fetch('https://coronavirus-19-api.herokuapp.com/all')
    .then(res => {
        return res.json()
    })
    .then(data => {
        GLpositifCovid.innerHTML = numeral(data.cases).format('0,0')
        GLsembuh.innerHTML = numeral(data.recovered).format('0,0')
        GLmeninggal.innerHTML = numeral(data.deaths).format('0,0')
    })
    .catch(err => console.log(err));