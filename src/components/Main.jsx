import React, {useState, useEffect} from 'react';
import Article from './Article';

const Main = () => {
    const key = '97788ce6b17f405d9272660d4a501f0c';
    const [info, setInfo] = useState(null);

    const request = async() => {
        const url = 'https://api.jornalia.net/api/v1/articles';
        fetch(`${url}?apiKey=${key}&search=coronavirus+d%C3%B3lar&providers=Clarin%2CPagina12%2CLaNacion%2CTelam&categories=POLITICA%2CECONOMIA%2CSALUD&startDate=2020-10-01&endDate=2020-10-31`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            setInfo(res.json());
        })
        .catch(err => {
            console.error(err);
        }); 
    }

    
    

    useEffect(() => {
        request();
    }, []);
    return (
        <div className="main-bg py-2 text-white">
            <h1 className="text-center my-4 fw-bolder">NOTICIAS</h1>
            <main>
                <section>
                    {
                        info !== null ? 
                        (
                            info.articles.map(item => (
                                <Article 
                                    key={item._id}
                                    title={item.title}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                />
                                
                            ))
                        )
                        :
                        (
                            <div className="load-main p-2 py-4">Cargando...</div>
                        )
                    }
                </section>
            </main>
        </div>
    );
}

export default Main;
