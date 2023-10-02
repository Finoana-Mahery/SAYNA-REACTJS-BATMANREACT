import { createContext, useState, useEffect, useContext } from "react";
import db from "./firebase.config";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

export const AppContext = createContext();

export function AppProvider({ children }) {
  //////////////////////////////////Windows-Width/////////////////////////////////////////////
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fonction pour mettre à jour la largeur de l'écran
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Écoute les changements de largeur de l'écran
    window.addEventListener("resize", updateWindowWidth);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  ////////////////////////////////firebase//////////////////////////////////////////
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Articles"), (snapshot) => {
      const updatedData = [];
      snapshot.forEach((doc) => {
        updatedData.push(doc.data());
      });

      setData(updatedData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  /*useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Articles"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        datasArticles.push(doc.data());
      });
      setData(datasArticles);
    };

    fetchData();
  }, []);*/
  /////////////////////////////////////nbr resulte////////////////////////////////////////
  const [nbRes, setNbRes] = useState(0);
  useEffect(() => {
    setNbRes(data.length);
  }, [data]);

  ////////////////////////////////Rendue///////////////////////////////////////////

  //Valeur à rendre
  const values = {
    windowWidth,
    data,
    nbRes,
  };
  //Rendue des valeurs
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
/////////////////////////////Export-Value////////////////////////////////////////////////
export function useWindowsWidth() {
  const { windowWidth } = useContext(AppContext);
  return windowWidth;
}
export function useArticleData() {
  const { data } = useContext(AppContext);
  return [data];
}
