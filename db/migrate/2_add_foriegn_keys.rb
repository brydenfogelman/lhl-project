class AddForeignKeys < ActiveRecord::Migration
    def change
        change_table :posts do |t|
            t.references :user
        end
        change_table :replies do |t|
            t.references :post
        end
        change_table :replies do |t|
            t.references :user
        end
    end
end