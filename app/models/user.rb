class User < ApplicationRecord

  has_many :addresses

  def self.find_or_create_with_omniauth(auth)
    user = self.find_or_create_by(email: auth.info.email)
    user.assign_attributes({ name: auth.info.name, provider: auth.provider, uid: auth.uid, email: auth.info.email, photo_url: auth.info.image, acess_token: auth.credentials.token })
    user.save!
    user
  end

end
