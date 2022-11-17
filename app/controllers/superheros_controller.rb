class SuperherosController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_superhero, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    superheros = Superhero.all
    render json: superheros
  end

  def show
    hero = find_superhero
    render json: hero, include: :reviews, status: :ok
  end

  def create
    hero = Superhero.create(superhero_params)
    render json: hero, status: :created
  end

  def destroy
    hero = find_superhero
    hero.destroy
    head :no_content
  end

  private 

  def superhero_params
    params.permit(:full_name, :alias, :bio, :universe, :img_url)
  end

  def find_superhero
    Superhero.find(params[:id])
  end
end
