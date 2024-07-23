async function fetchQuoteOfTheDay() {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = await fetch('https://favqs.com/api/qotd');

    const response = await fetch(proxyUrl + apiUrl)

    if (!response.ok) {
      throw new Error('Failed to fetch Quote of the Day');
    }

    const data = await response.json();
    const quote = data.quote.body;
    const author = data.quote.author;

    // Update the quote text and author on the webpage
    document.getElementById('quote-text').textContent = `"${quote}"`;
    document.getElementById('quote-author').textContent = `- ${author}`;
  } catch (error) {
    console.error('Error fetching Quote of the Day:', error);
  }
}

// Call fetchQuoteOfTheDay when the page loads
document.addEventListener('DOMContentLoaded', fetchQuoteOfTheDay);

// Add an event listener to fetch a new quote when the button is clicked
document.getElementById('new-quote-btn').addEventListener('click', fetchQuoteOfTheDay);
