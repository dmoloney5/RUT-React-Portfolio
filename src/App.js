import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
    const [categories] = useState([
        { name: 'Projects', description: 'List of all my project I did to become a Fullstack Developer' },
        { name: 'Resume', description: 'Here is my resume' },
        { name: 'Contact', description: 'You can rfeach me at', },
        
        
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);

    useEffect(() => {
        document.title = "Denns Moloney's Portfolio"
    }, [])

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {!contactSelected ? (
                    <>
                        <About currentCategory={currentCategory}></About>
                        

                        <Projects></Projects>
                        <Resume></Resume>
                        <Contact></Contact>
                        <Footer></Footer>
                    </>
                ) : (
                    <Resume></Resume>
                ) }
            </main>
          </div>
        
       
    );
}

export default App;