class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :input, :score, :user_id, :superhero_id
end
