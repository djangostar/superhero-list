class SuperherosController < ApplicationController

  def index
    superheros = Superhero.all
    render json: superheros
  end

  def show
    hero = find_superhero
    render json: hero
  end

  def create
    hero = Superhero.create!(superhero_params)
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
