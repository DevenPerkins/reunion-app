class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_bringing
      t.string :allergies
      t.integer :party_id
      t.integer :user_id

      t.timestamps
    end
  end
end
