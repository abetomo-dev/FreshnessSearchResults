const  checkDate = () => {
  const fDom = document.querySelectorAll('.f');
//  console.log(fDom);
  
  for (let i=0; i<fDom.length; i++) {
//    console.log(`${i} : ` + fDom[i].innerText);
    const dateValue = (fDom[i].innerText).substr(0, 10);
    if (!dateValue.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
      continue;
    }
//    console.log(`${i} : ` + dateValue);    
    const targetDate = Date.parse(dateValue);
    
    const tmpNowDate = new Date();
    const nowDate = new Date(tmpNowDate.getFullYear(), tmpNowDate.getMonth(), tmpNowDate.getDate());
    const resultDay = (nowDate - targetDate) / (24 * 60 * 60 * 1000);
//    console.log(`${i} : ` + resultDay);
    
    let bgColor = '#fff';
    if (resultDay < 365) {
      bgColor = '#3399ff';
    } else if (resultDay < (365 * 3)) {
      bgColor = '#ffff99';
    } else {
      bgColor = '#ff6633';
    }
    fDom[i].style.backgroundColor = bgColor;
  }
}
checkDate();

