function _generateContact(data) {

  let docIcons = document.getElementById('test-icon');
  let arrIcons = data.icons;
  if(arrIcons.length && docIcons){
    let iHtml = '';
    arrIcons.map(v=>{
      iHtml+="<p><i class='"+v+"'></i> "+v+"</p>"
    })
    docIcons.innerHTML = iHtml;
  }
  console.log('test', data)
}
// require('./vendors/themify-icons/css/themify-icons.css')
fetch("./assets/test.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // console.log(data)
    console.log('test load',data);
    _generateContact(data);
  }).catch(err=>{
  console.log('eer',err)
});

