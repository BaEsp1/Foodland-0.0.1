import GIF from "../../Imgs/loading.gif"
import { useEffect } from "react";

//IMPORT STYLES
function Loader() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.getElementById("loader")?.classList.toggle("loader2");
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="contenedorLoader" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="loader" id="loader">
        <img src={GIF} alt="Loading..." style={{ width: "15em" }} />
      </div>
    </div>
  );
};

export default Loader;

