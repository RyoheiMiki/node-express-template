import schema from "../models/schema";

declare interface HogeDB {
  users: typeof schema.users.Users;
  user_details: typeof schema.user_details.UserDetails;
}
