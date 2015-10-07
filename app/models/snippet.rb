class Snippet < ActiveRecord::Base
	belongs_to :user

	acts_as_taggable

	include PgSearch
  	pg_search_scope :full_search,
  	:against =>{ :title => 'A'},
  	associated_against: {
        tags: [:name]
    }

	def snippet_owner(snippet)
		User.find(snippet.user_id).username
	end
end
