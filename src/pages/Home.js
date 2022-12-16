
import AboutMe from "./AboutMe";

export default function Home() {

    // ALTERA O TÍTULO DA PÁG (ABA)
    document.title = 'Developer Giovane Souza';

    return (
<>
        <section id="hello">

            <div className="container">

                <div className="helloPresentation">

                    <div className="presentation">
                       
                        <h1>Olá, Sou o<br />
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/waving-hand_1f44b.png" class="wavingHand" />
                            <span className="name">Giovane Souza</span>

                        </h1>


                        <span className="occupation"><span class="ri-code-s-slash-line iconCode"></span> Jr. Developer Full Stack</span>


                        {/* REDES SOCIAIS */}
                        <div className="socialMedia">
                            <a href="https://www.linkedin.com/in/developergiovanesouza/" target="_blank" className="ri-linkedin-box-fill"></a>
                            <a href="https://github.com/giovanesouza" target="_blank" className="ri-github-fill"></a>
                        </div>

                    </div>


                    {/* Foto */}
                    <div className="photo">
                    </div>

                </div>

            </div>

        </section>



{/* SEÇÃO SOBRE */}

<AboutMe />

</>



    );
}