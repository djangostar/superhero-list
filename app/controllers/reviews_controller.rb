class ReviewsController < ApplicationController
  # before_action :authorize_user

  def index
    @user = current_user
    @reviews = @user.reviews
    render json: @reviews
  end

  def show
    render json: @review, status: :ok
  end

  def create
    @user = User.find(session[:user_id])
    if @user
      @review = Review.create!(input: params[:input], score: params[:score], user_id: @user.id, superhero_id: params[:superhero_id])
      render json: @review 
    else
      render json: { error: "User Not Found" }, status: :not_found
    end
  end

  def update
    @review.update!(review_params)
    render json: @review, status: :accepted
  end

  def destroy
    @review.destroy
    head :no_content
  end

  private

  def find_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.permit(:input, :score, :superhero_id)
  end

 
end
