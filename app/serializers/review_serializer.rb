class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :input, :score, :user_id, :superhero_id
  belongs_to :user
  belongs_to :superhero
end
