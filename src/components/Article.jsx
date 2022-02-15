import React from 'react';

const Article = (props) => {
    const {title, description, imageUrl} = props;
    return (
        <div className="article-bg container my-2 text-dark">
            <article className="row">
                    <div className="col">
                        <div className="row">
                            <header className="title m-2 text-capitalize fs-5 fw-bolder">{title}</header>
                        </div>
                        <div className="row">
                            {
                                description ?
                                (
                                    <section className="m-2 text-sm-left ">{description}</section>
                                )
                                :
                                (
                                    <div  className="m-2 text-sm-left">Sin Descripcion</div>
                                )
                            }
                            
                        </div>
                    </div>

                    <div className="div-img text-center col">
                        {
                            imageUrl ?
                            (
                                <img className="imgNew" src={imageUrl} alt="imagen de noticia" />
                            )
                            :
                            (
                                <div className="py-5">Sin Imagen</div>
                            )
                        }
                        
                    </div>
            </article>
        </div>
    );
}

export default Article;
