function display_hours(){
    let x = new Date()
    let x1 = x.getHours() + ":" + x.getMinutes();
    document.getElementById('hours').innerHTML = x1;
}

function display_date(){
    let date = new Date()
    let week = ['Sekmadienis', 'Pirmadienis','Antradienis','Trečiadienis','Ketvirtadienis','Penktadienis','Šeštadienis']
    let year = ['Sausio', 'Vasario','Kovo','Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio']
    let output_date = week[date.getDay()] + ', ' + year[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    document.getElementById('date').innerHTML = output_date;
}

display_hours();
display_date();