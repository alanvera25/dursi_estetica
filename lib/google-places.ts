import { reviews as fallback, type Review } from './reviews';

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) return fallback;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=es&reviews_sort=newest&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    if (!res.ok) return fallback;

    const data = await res.json();

    if (data.status !== 'OK' || !Array.isArray(data.result?.reviews)) {
      return fallback;
    }

    return (data.result.reviews as GoogleReview[])
      .filter((r) => r.text?.trim())
      .map((r) => ({
        author: r.author_name,
        initials: getInitials(r.author_name),
        photoUrl: r.profile_photo_url,
        rating: r.rating,
        date: r.relative_time_description,
        text: r.text
      }));
  } catch {
    return fallback;
  }
}
