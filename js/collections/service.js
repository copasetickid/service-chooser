(function(){
	var ServiceList = Backbone.Collection.extend({
		model: Service,
		getChecked: function(){
			return this.where({checked: true});
		}
	});
})();