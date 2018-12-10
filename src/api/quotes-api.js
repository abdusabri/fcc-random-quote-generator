export const getQuote = async function() {
    try {
        const res = await fetch("https://talaikis.com/api/quotes/random/");
        const data = await res.json();
        return {
            quoteText: data.quote,
            quoteAuthor: data.author
        }
    } catch (error) {
        return "error";
    }
}