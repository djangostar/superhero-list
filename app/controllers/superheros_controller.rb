class SuperherosController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_superhero, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    @superheros = Superhero.all
    render json: @superheros
  end

  def show
    render json: @hero, include: :reviews, status: :ok
  end

  def create
    @hero = Superhero.new(superhero_params)
    @hero.user_id = session[:user_id]
    if @hero.save
      render json: @hero, status: :created
    else
      render json: @hero.errors.full_messages[0], status: 422
    end
  end

  def destroy
    @hero.destroy
  end

  private 

  def superhero_params
    params.permit(:full_name, :alias, :bio, :universe, :img_url, review_attributes: [:input, :score, :user_id])
  end

  def find_superhero
    @hero = Superhero.find(params[:id])
  end
  
  def authorize_user
    permitted = current_user.id == @hero.user_id
    render json: { errors: { User: "Did not review this superhero"}}, status: :forbidden unless permitted
  end
end
