class CreateSuperheros < ActiveRecord::Migration[6.1]
  def change
    create_table :superheros do |t|
      t.string :full_name
      t.string :alias
      t.string :bio
      t.string :universe
      t.string :img_url

      t.timestamps
    end
  end
end
