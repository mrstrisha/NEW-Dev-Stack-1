

import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";


import Hero from "./Components/Hero/Hero";
import TechnologyList from "./components/Technologies/TechnologyList";
import YourStack from "./components/Technologies/YourStuck";
import Footer from "./components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";


function App() {

  const [technologies, setTechnologies] = useState([]);


  const [stack, setStack] = useState([]);


  const [loading, setLoading] = useState(true);


 
  useEffect(() => {

    fetch("/data.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTechnologies(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        toast.error("Failed to load technologies!");
      });

  }, []);



  const addToStack = (technology) => {

   
    const alreadyExists = stack.some(
      item => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    setStack([
      ...stack,
      technology
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };



  const removeFromStack = (id) => {

    setStack(
      stack.filter(item => item.id !== id)
    );

    toast.info("Technology removed from your stack!");
  };



  const removeAll = () => {

    setStack([]);

    toast.info("All technologies removed!");
  };


  return (
    <>
<Navbar></Navbar>
 <Hero></Hero>

      <main className="main-content">
       {loading ? (

         <div className="loading">
            <h2>Loading Technologies...</h2>
            <p>Please wait...</p>
          </div>

        ) : (

        
          < div className="flex gap-2">
           <TechnologyList technologies={technologies}
              stack={stack}
              addToStack={addToStack}>
            
           </TechnologyList>

            <YourStack
              stack={stack}
              removeFromStack={removeFromStack}
              removeAll={removeAll}
            />
          </div>
        )}

      </main>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
       <Footer></Footer>
    </>
  );
}


export default App;