//IMPORT STYLES
function Loader(){

    window.addEventListener("load", function(){
        document.getElementById("loader")?.classList.toggle("loader2")
    })

  return (
    <div className="contenedorLoader">
    <div className="loader" id="loader" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loader
