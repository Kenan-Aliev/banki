import instance from '@/core/services/index';
import { sendApplicationData } from '@/models/Services';

const UsersApi = {
	sendApplication(data: sendApplicationData) {
		return instance.post(
			'/send-request', data
		);
	}
};

export default UsersApi;
