import UserModel from "@/app/stores/api/mappers/models/UserModel";
import UserResponse from "shell/dts/models/UserModel";
/** Маппер для запроса получения текущих спринтов */
const mapInitCurrentSprintListFromApi = (apiValue: UserResponse): UserModel => ({
  Id: apiValue.Id,
  Roles: apiValue.Roles,
  Email: apiValue.Email,
  FullName: apiValue.FullName,
  IsAuthorized: apiValue.IsAuthorized,
  Foto: apiValue.Foto,
  RolesNames: apiValue.RolesNames,
  IsAdmin: apiValue.IsAdmin,
})

export default mapInitCurrentSprintListFromApi
