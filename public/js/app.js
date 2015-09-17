import Backbone from 'backbone';
import Marionette from 'marionette';

let PostCollection = Backbone.Collection.extend({
	url: '/api/post/list',
	parse(attributes) {
		return attributes.posts;
	}
});

let collection = new PostCollection();

let PostView = Marionette.ItemView.extend({
	
	template(p) {
		return '<article><h2>' + p.title + '</h2>' +
				'<p>' + p.content.brief + '</p></article>';
	}
	
});

let PostsView = Marionette.CollectionView.extend({
	childView: PostView 
});

let view = new PostsView({collection: collection});
let region = new Marionette.Region({el: '#page-main'});
region.show(view);

collection.fetch();

