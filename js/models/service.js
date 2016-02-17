(function(){
	var Service = Backbone.Model.extend({
		defaults: {
			title: 'Car service',
			price: 100,
			checked: false
		},
		toggle: function() {
			this.set('checked', !this.get('checked'));
		}
	});
})();