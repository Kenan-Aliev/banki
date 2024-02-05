import instance from '@/core/services/index';
import { sendApplicationData } from '@/models/Services';

const UsersApi = {
	sendApplication(data: sendApplicationData) {
		return instance.post(
			'/applicant/', data
		);
	}
};

export default UsersApi;
