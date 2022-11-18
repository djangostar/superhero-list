class SuperheroSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :alias, :bio, :universe, :img_url
  has_many :reviews
end
