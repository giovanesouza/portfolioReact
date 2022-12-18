export default function Contact() {
    return (
        <section className="container column" id="contact">
            
            <h2>Contato</h2>

            <form action="" method="">

                <label>
                    Nome: <br/>
                    <span class="ri-user-fill icon"></span>
                    <input type="text" name="nome" placeholder="Por favor, informe o seu nome" required />
                </label>

                <label>
                    E-mail: <br/>
                    <span class="ri-mail-fill icon"></span>
                    <input type="email" name="email" placeholder="Por favor, informe o seu e-mail para contato" required />
                </label>

                <label>
                    Assunto: <br/>
                    <textarea name="assunto" placeholder="Por favor, escreva a sua mensagem aqui" required></textarea>
                </label>

                <input type="submit" value="Enviar" />

            </form>
        </section>
    );
}