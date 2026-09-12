import ContactForm from "../components/ContactForm";

function Contacts() {
    return (
        <main>
            <section id="Contact">
                <h2>CONTACT</h2>
                <div className="contact-grid">
                    <div className="contact-box">
                        <ul>
                            <li><b>LinkedIn: <a href="https://www.linkedin.com/in/pratheek-vadluri/">pratheek-vadluri</a></b></li>
                            <li><b>GitHub: <a href="https://github.com/Vadluri-Pratheek">Vadluri-Pratheek</a></b></li>
                            <li><b>Mail: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCDlVbwGkVrHZSjgvXwZjQRQqJDlCQvPzncDdmQBzsFSRsCGfRjzHXXtfRWxgtgTlCNWpg">vadluripratheek</a></b></li>
                        </ul>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </main>
    );
}
export default Contacts;
