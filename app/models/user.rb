class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         has_many :snippets

   

	def contains(snippet_id)
		snippets.include?(Snippet.find(snippet_id))
	end

	
end
