class SnippetsController < ApplicationController
  before_action :authenticate_user!
	before_filter :snippet_finder, only: [:edit, :update, :destroy]
  autocomplete :tag, :name
  def index
  	if params[:tag]
  		@snippets = Snippet.tagged_with(params[:tag]).order("updated_at DESC")
    elsif params[:search]
        @snippets = Snippet.full_search(params[:search]).order("created_at DESC")
  	else
  		@snippets = Snippet.where("user_id = #{current_user.id}").order("updated_at DESC")
  	end
  end

  def show
  		@snippet = Snippet.find(params[:id])
  end

  def new
  	@snippet = Snippet.new
  end

  def create
  	@snippet = Snippet.new(snippet_params)
  	@snippet.user_id = current_user.id

  	if @snippet.save
  		redirect_to snippet_path(@snippet)
  	else
  		render 'new'
  	end
  end

  def edit
  end

  def update
  	if @snippet.update(snippet_params)
  		redirect_to snippet_path(@snippet)
  	else
  		render 'edit'
  	end
  end

  def destroy
    if @snippet.destroy
      redirect_to snippets_path
    end
  end

  private

  def snippet_params
  	params.require(:snippet).permit(:title, :body, :tag_list, :mode)
  end

  def snippet_finder
  	@snippet = Snippet.find(params["id"])
  end
end
