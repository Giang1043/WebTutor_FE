import { profileSchema } from "./profileSchema";

export const completeProfileSchema = profileSchema.pick({
  phone: true,
  dateOfBirth: true,
});
