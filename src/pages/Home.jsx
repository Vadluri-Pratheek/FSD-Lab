import { useState, useEffect } from 'react';
import Skills from '../components/Skills';
import { languages, tools } from '../data/skills';

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        },1000);

        return ()=>clearTimeout(timer);
    },[]);

    if(isLoading){
        return (
            <main className="loading-screen">
                <h2>Loading Pratheek's Portfolio...</h2>
            </main>
        );
    }
    return(
        <main>
            <section id="Intro">
                <h2>Hi, I'm Pratheek!</h2>
                <p>I'm a Computer Science student at NITW, a full-stack web developer, a competitive programmer.</p>
            </section>
            <Skills languages={languages} tools={tools} />
        </main>
    );
}
export default Home;
