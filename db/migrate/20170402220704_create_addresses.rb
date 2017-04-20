class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :province
      t.string :city
      t.string :street
      t.string :other
      t.string :reference
      t.integer :number

      t.timestamps
    end
  end
end
