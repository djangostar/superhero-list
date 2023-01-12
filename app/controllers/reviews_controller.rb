class ReviewsController < ApplicationController
  before_action :authorize_user

  def index
    user = current_user
    reviews = user.reviews
    render json: reviews
  end

  def show
    render json: review, status: :ok
  end

  def create
    user = current_user
    if user
      review = Review.create(review_params)
      render json: review, status: :accepted
    else
      render json: { error: "User Not Found" }, status: :not_found
    end
  end

  def update
    review.update!(review_params)
    render json: review, status: :accepted
  end

  def destroy
    user = current_user
    review = user.reviews.find_by(id: params[:id])
    if review
      review.destroy
    else
      render json: { error: "Review not found" }, status: :unauthorized
    end
  end

  private

  # def find_review
  #   @review = Review.find(params[:id])
  # end

  def review_params
    params.require(:review).permit(:superhero_id, :input)
  end

 
end
