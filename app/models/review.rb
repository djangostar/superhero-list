class Review < ApplicationRecord
  validates :input, :user_id, presence: true
  belongs_to :user
  belongs_to :superhero
end
