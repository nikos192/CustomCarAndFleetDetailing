/**
 * Google Reviews – fetches live reviews via the /api/reviews proxy and renders them.
 */
(function () {
  /* Escape untrusted strings before inserting into innerHTML */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function stars(n) {
    return '★'.repeat(n) + '☆'.repeat(5 - n);
  }

  function timeAgo(epoch) {
    const diff = Math.floor((Date.now() / 1000) - epoch);
    if (diff < 60)       return 'just now';
    if (diff < 3600)     return Math.floor(diff / 60)    + ' minutes ago';
    if (diff < 86400)    return Math.floor(diff / 3600)  + ' hours ago';
    if (diff < 2592000)  return Math.floor(diff / 86400) + ' days ago';
    if (diff < 31536000) return Math.floor(diff / 2592000) + ' months ago';
    return Math.floor(diff / 31536000) + ' years ago';
  }

  function renderReviewCard(r) {
    const text = r.text.length > 220 ? r.text.slice(0, 220) + '\u2026' : r.text;
    return `
      <article class="review-card card">
        <div class="review-header">
          <img class="review-avatar" src="${esc(r.profile_photo_url)}" alt="${esc(r.author_name)}" width="44" height="44" loading="lazy" referrerpolicy="no-referrer">
          <div>
            <p class="review-author">${esc(r.author_name)}</p>
            <p class="review-meta">${stars(r.rating)} &middot; ${timeAgo(r.time)}</p>
          </div>
        </div>
        <p class="review-text">${esc(text)}</p>
      </article>`;
  }

  function renderSummary(data) {
    const el = document.getElementById('review-summary');
    if (!el) return;
    el.innerHTML = `
      <div class="review-summary-inner">
        <p class="kpi">${esc(data.rating.toFixed(1))}<span class="review-star">&#9733;</span></p>
        <p class="review-count">${esc(String(data.user_ratings_total))} Google reviews</p>
        <a class="btn btn-primary" href="${esc(data.url)}" target="_blank" rel="noopener noreferrer">Leave a Review</a>
      </div>`;
  }

  function renderGrid(reviews) {
    const el = document.getElementById('review-grid');
    if (!el) return;
    el.innerHTML = reviews.map(renderReviewCard).join('');
  }

  /* Home page – compact version: summary stat + first 3 reviews */
  function renderHomeSnapshot(data) {
    const el = document.getElementById('home-reviews');
    if (!el) return;
    const topReviews = (data.reviews || []).slice(0, 3);
    el.innerHTML = `
      <article class="card review-summary-card">
        <p class="kpi">${esc(data.rating.toFixed(1))}<span class="review-star">&#9733;</span></p>
        <p>${esc(String(data.user_ratings_total))} verified Google reviews</p>
      </article>
      ${topReviews.map(renderReviewCard).join('')}`;
  }

  function fetchReviews() {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(d => {
        renderSummary(d);
        renderGrid(d.reviews || []);
        renderHomeSnapshot(d);
      })
      .catch(err => console.warn('Review fetch failed:', err));
  }

  const CACHED_DATA = {
    name: "Custom Car and Fleet Detailing",
    rating: 5,
    user_ratings_total: 26,
    url: "https://maps.google.com/?cid=9956165611132523607",
    reviews: [
      {
        author_name: "maya louise",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjUI2zHb1o_ZlWGE1ix8P4nNbXTGsBpfy49y2qLA58rAVPMRCtO81w=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        time: 1770967037,
        text: "Jye did a fantastic job on my car's interior, it looks brand new. He was incredibly friendly and helpful, making the time to schedule me in on really short notice. I'll absolutely recommend Jye to anyone in need of detailing services!"
      },
      {
        author_name: "Charlotte Nelmes",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocLPi4JQOrOPcJVlaXtY7igASRQYaVph4pNjXgGE3WvhgikkDQ=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        time: 1770250605,
        text: "Had my car detailed by Jye and couldn't be happier with the result. The attention to detail was excellent and you can really tell they take pride in their work. Professional, reliable and highly recommend!"
      },
      {
        author_name: "Yael MacNeill",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocI-xoY1U00KqRswFU08BjhRzBRDfxOCqaY8YrCJmfl8kqmWOA=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        time: 1769069662,
        text: "We recently had Jye complete a 5 year correction & coating package on my car along with a full interior detail. My car looks better than it did when we picked it up brand new from the dealership 12 months ago. Jye's attention to detail is outstanding. He was professional, knowledgeable & friendly. We can't wait for our monthly car detail! Thanks again Jye!"
      },
      {
        author_name: "Amy Flannery",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIx5a8y41MgZGq9OWTnAvG1xPQ7Ubx3W73xrgmDGAeb2u1cHQ=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        time: 1756025877,
        text: "I have asked Jye to detail my Nissan Patrol twice now and both times it has been returned to me in better condition than when it come off the show room floor. Jye is thorough, pays attention to detail and takes pride in his work. He always takes the time to ensure that his services exceed any expectations I have. I have booked him in for paint correction and ceramic coating on my colleges 79 series. Can't wait to see the results of that one."
      },
      {
        author_name: "David Turton",
        profile_photo_url: "https://lh3.googleusercontent.com/a/ACg8ocIvGw5fxCSgm3SVfr1jf04PcjEqaNZFzXDh76hZbsSLo03CJA=s128-c0x00000000-cc-rp-mo",
        rating: 5,
        time: 1763778030,
        text: "Jye does an amazing job with our company fleet. He's easy to work with, always punctual, and our vehicles are spotless every time. Best part is he is mobile so we don't have any down time organising to get vehicles dropped off and picked up.\nGreat service from a great guy\u2014highly recommended!"
      }
    ]
  };

  /* Render from cache immediately so content is visible before any network call */
  renderSummary(CACHED_DATA);
  renderGrid(CACHED_DATA.reviews);
  renderHomeSnapshot(CACHED_DATA);

  /* Attempt a live update via the serverless proxy */
  fetchReviews();
})();
