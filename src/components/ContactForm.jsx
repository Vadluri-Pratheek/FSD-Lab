import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const [serverMessage, setServerMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isDisabled = !name.trim() || !email.includes("@") || !message.trim();

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setServerMessage(null); 

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit form");
            }

            setServerMessage({ type: "success", text: data.message });
            
            setName(""); 
            setEmail(""); 
            setMessage("");

        } catch (err) {
            setServerMessage({ type: "error", text: err.message });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="contact-box" onSubmit={handleSubmit}>
            <label htmlFor="cf-name">Name</label>
            <input
                id="cf-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="cf-email">Email</label>
            <input
                id="cf-email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="cf-message">Message</label>
            <textarea
                id="cf-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" disabled={isDisabled || isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {serverMessage && (
                <div style={{
                    marginTop: "15px",
                    color: serverMessage.type === "success" ? "green" : "red",
                    fontWeight: "bold"
                }}>
                    {serverMessage.text}
                </div>
            )}
        </form>
    );
}

export default ContactForm;
