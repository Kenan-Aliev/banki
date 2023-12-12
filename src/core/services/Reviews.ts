import instance from '@/core/services/index';
import { ReviewsListResponse, ReviewsCategoriesResponse } from '@/models/Reviews/Reviews';
import { getReviewsListData, getReviewsCategoriesData } from '@/models/Services';

const ReviewsApi = {
	getReviews(params: getReviewsListData) {
		return instance.get<ReviewsListResponse>(
			'/reviews/list/', {
			params
		}
		);
	},

	getReviewsCategories(params: getReviewsCategoriesData) {
		return instance.get<ReviewsCategoriesResponse>(
			'/reviews/product-list/', {
			params
		}
		);
	},
};

export default ReviewsApi;
