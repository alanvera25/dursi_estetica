import { fetchGoogleReviews } from '@/lib/google-places';
import { ReviewsCarousel } from '@/components/ui/ReviewsCarousel';

export async function Reviews() {
  const reviews = await fetchGoogleReviews();
  return <ReviewsCarousel reviews={reviews} />;
}
