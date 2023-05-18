import TypeRoles from "./../enums/TypeRoles";

/** Модель пользователя */
export default class UserResponse  {
	Id: number = 0;
	Email?: string = '';
	FullName?: string = '';
	IsAuthorized: boolean = false;
	Foto?: string = '';
	Roles: Array<TypeRoles> = null;
	RolesNames: Array<string> = null;
	IsAdmin: boolean = false;
	constructor(obj?: Partial<UserResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
