# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Table name: highscores
#
#  id         :integer          not null, primary key
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  highscore  :string
#  name       :string


#  id              :integer          not null, primary key
#  name            :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null


User.destroy_all
user1 = User.create :id => 1, :name =>'Placeholder'


Highscore.destroy_all
highscore1 = Highscore.create :score 0, :user_id => 1
highscore2 = Highscore.create :score 0, :user_id => 1
highscore3 = Highscore.create :score 0, :user_id => 1
highscore4 = Highscore.create :score 0, :user_id => 1
highscore5 = Highscore.create :score 0, :user_id => 1