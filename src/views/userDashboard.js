import { CollectionView } from 'backbone.marionette';
import userInfoView from  './userInfo';
import userDashboardTpl from '../templates/partials/ku/userDashboard.hbs';

export default CollectionView.extend({
	childView: userInfoView,
	template: userDashboardTpl
});