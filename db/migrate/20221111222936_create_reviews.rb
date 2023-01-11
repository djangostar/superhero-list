class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :input
      t.integer :user_id
      t.integer :superhero_id

      t.timestamps
    end
  end
end
