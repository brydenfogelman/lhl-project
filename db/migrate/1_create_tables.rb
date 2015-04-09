class CreateTables < ActiveRecord::Migration
    def change
        #users
        create_table :users do |t|
            t.string :username
            t.string :email
            t.string :password
            t.timestamps
        end
        #post
        create_table :posts do |t|
            t.string :title
            t.string :category
            t.string :content
            t.integer :likes
            t.timestamps
        end
        #comments
        create_table :comments do |t|
            t.string :poster
            t.string :content
            t.integer :likes
        end
    end

end