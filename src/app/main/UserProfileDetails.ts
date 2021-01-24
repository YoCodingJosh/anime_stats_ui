// implements this: https://myanimelist.net/apiconfig/references/api/v2#operation/users_user_id_get
export interface IUserProfileDetails {
  id: Number,
  name: String,
  picture: String,
  gender: String | null,
  birthday: String | null,
  location: String | null,
  joined_at: String,
  timezone: String | null,
}
