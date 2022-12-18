import aboutMePhoto from './images/photo-about-me.jpg';

export default function AboutMe() {

    return (

        <section id="aboutMe">

            <div className="container">

                <div className="aboutMeContent">

                    <h2>Sobre mim</h2>

                    <img src={aboutMePhoto} alt="Foto Developer Giovane Souza" />

                    <div className="content">

                        <p className="text-center">Olá, me chamo <strong>Giovane Souza</strong> e sou <mark>Desenvolvedor FullStack</mark>.</p>

                        <p className="text-center my-function">Minha função como desenvolvedor é <strong>resolver problemas de forma eficaz, a fim de garantir a satisfação do cliente</strong>.</p> <br/>

                        <p className="start"> Iniciei os estudos na programação em maio de  2022 por meio da <a href="https://recodepro.org.br/" target="_blank">Recode Pro</a> - onde recebi a certificação FullStack - e, desde então, venho buscando conhecimentos complementares a fim de aprofundar-me nas tecnologias aprendidas ao longo da formação, objetivando, também, aprender novas linguagens.</p> <br/>

                        <span  className="skills"> <strong>Principais competências</strong>:  Organização, Pontualidade e Determinação.</span>


                    </div>
                </div>

            </div>

        </section>
    );
}