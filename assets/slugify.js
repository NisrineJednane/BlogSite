//event listner not working why

const titleInput = document.querySelector('input[name=title]');
const slugIngput = document.querySelector('input[name=slug]');

const slugify =(val)=>{
  return val.toString().toLowerCase().trim()
    .replace(/&/g,'-and-')        //replace & with ''-and-''
    .replace(/[\s\W-]+/g, '-')    //replace spaces, non word chars with dashes and a single dash
};

titleInput.addEventListener('keyup',(e)=> {
  slugInput.setAttribute('value', slugify(titleInput.value));
});
