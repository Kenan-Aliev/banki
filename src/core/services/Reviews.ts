import instance from '@/core/services/index';
import { ReviewsListResponse } from '@/models/Reviews/Reviews';
import { getReviewsListData } from '@/models/Services';

const ReviewsApi = {
	getReviews(params: getReviewsListData) {
		return instance.get<ReviewsListResponse>(
			'/reviews/list/', {
			params
		}
		);
	},
};

export default ReviewsApi;
