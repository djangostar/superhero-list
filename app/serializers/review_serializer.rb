class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :input, :user_id, :superhero_id
  belongs_to :user
  belongs_to :superhero
end
