# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_many :highscores
  has_secure_password
end
