 

// Cache gallery container
const galleryContainer = document.getElementsByClassName('.galleryContainer');

// Create new array with URLs for images
function importAll(r) {
    return r.keys().map(r);
  } 
  let imgUrls = [];
  
  //Load local images
  let images =importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
  console.log("as pulled ...images: ");
console.log(...images);
//if remote comes back ok 
   let remoteImages = [
 'https://source.unsplash.com/3Z70SDuYs5g/800x600',
 'https://source.unsplash.com/01vFmYAOqQ0/800x600',
 'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
 'https://source.unsplash.com/t20pc32VbrU/800x600',
 'https://source.unsplash.com/pHANr-CpbYM/800x600',
 'https://source.unsplash.com/3PmwYw2uErY/800x600',
 'https://source.unsplash.com/uOi3lg8fGl4/800x600',
 'https://source.unsplash.com/CwkiN6_qpDI/800x600',
 'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
 'https://source.unsplash.com/E4944K_4SvI/800x600',
 'https://source.unsplash.com/-hI5dX2ObAs/800x600',
 'https://source.unsplash.com/vZlTg_McCDo/800x600'
];
console.log("pre ...fetch :");
console.log(...remoteImages,remoteImages.length);
let length= remoteImages.length;

 fetch(...remoteImages,{'length':{length}})
 .then((response)=>{
     // console.log(response.blob());
      return response.blob()})
.then((imageBlob)=>{
      console.log(...imageBlob)})
.catch((err)=>{
        //error :(
     console.log(err);
 })
  

imgUrls.push(...images, ...remoteImages);




console.log(...imgUrls)  
export default { galleryContainer, imgUrls };