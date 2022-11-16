class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  # def show
  #   review = find_review

  # end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def find_review
    Review.find_by(params[:id])
  end

  def review_params
    params.permit(:input, :score, :user_id, :superhero_id)
  end
end
