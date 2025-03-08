const stripe = Stripe("pk_test_51KG8egJNm8oISBQdvdw0NiE4XTwJSWykQqmGZMJBVIlSokL54tiKHnbnDlx0n40TcXnr4qKLzytS3ByXfuzyYl9c00toe80Tpt"); // Remplace par ta clé publique
const BACKEND_URL = "https://trit.onrender.com"; // URL de ton serveur backend

document.querySelectorAll(".checkout-button").forEach(button => {
    button.addEventListener("click", async () => {
        const price = button.getAttribute("data-price");

        const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price })
        });

        const session = await response.json();
        stripe.redirectToCheckout({ sessionId: session.id });
    });
});
